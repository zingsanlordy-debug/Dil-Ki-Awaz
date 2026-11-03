import { FirebaseStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { NSFWJS, PredictionType } from 'nsfwjs';

export const ZQ_NSFW_PHOTO_BLOCK_MESSAGE =
  'NSFW / Ashleel photo allowed nahi hai ❌ Auto-Rejected!';
export const ZQ_BLURRY_PHOTO_BLOCK_MESSAGE =
  'Blurry ya dhundhli photo allowed nahi hai ❌ Kripya saaf aur clear original photo upload karein.';
export const ZQ_WATERMARK_OR_TEXT_BLOCK_MESSAGE =
  'Logo, Watermark, Screenshot ya dusri website ka text wali image allowed nahi hai ❌ Kripya 100% apni original saaf photo upload karein.';
export const ZQ_PHOTO_FORMAT_BLOCK_MESSAGE =
  'Only JPG, PNG, and WEBP photos are allowed.';
export const ZQ_PHOTO_SIZE_BLOCK_MESSAGE =
  'Each photo must be 5MB or smaller.';

export const MAX_MOMENT_PHOTO_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
export const ALLOWED_MOMENT_PHOTO_ACCEPT =
  'image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp';

const ALLOWED_PHOTO_MIME_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp'
]);
const ALLOWED_PHOTO_EXT_REGEX = /\.(jpe?g|png|webp)$/i;

// Filename signatures of social media downloads, stock watermarks, screenshots, or edited quote cards
const SCRAPED_OR_WATERMARKED_FILENAME_REGEX =
  /(screenshot|screen[-_\s]?shot|whatsapp|wa0\d+|img[-_]\d{8}[-_]wa|instagram|insta[-_]|snapchat|pinterest|shutterstock|istock|getty|alamy|depositphotos|dreamstime|123rf|freepik|canva|picsart|inshot|capcut|watermark|telegram|fb[-_]img|shayari[-_]?card|quote[-_]?card)/i;

const NSFW_SCAN_DIMENSION = 224;
const NSFW_PORN_LIMIT = 0.6;
const NSFW_HENTAI_LIMIT = 0.6;
const NSFW_SEXY_LIMIT = 0.8;

const TOTAL_IMAGES_CHAR_BUDGET = 680000;
const SINGLE_IMAGE_MAX_CHARS = 112000;
const STORAGE_UPLOAD_TIMEOUT_MS = 3500;

let storageUnavailableForSession = false;
let nsfwModelPromise: Promise<NSFWJS> | null = null;

export class PhotoUploadValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PhotoUploadValidationError';
  }
}

interface CompressedPhotoResult {
  blob: Blob;
  dataUrl: string;
  mimeType: string;
}

/**
 * Checks magic bytes for JPEG, PNG, or RIFF WEBP headers so spoofed extensions
 * (e.g. GIF/SVG/BMP renamed to .jpg) cannot bypass format validation.
 */
function hasAllowedImageSignature(bytes: Uint8Array): boolean {
  if (bytes.length < 12) return false;

  // JPEG: FF D8 FF
  const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (isJpeg) return true;

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  const isPng =
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47 &&
    bytes[4] === 0x0d &&
    bytes[5] === 0x0a &&
    bytes[6] === 0x1a &&
    bytes[7] === 0x0a;
  if (isPng) return true;

  // WEBP: "RIFF" .... "WEBP"
  const isWebp =
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    bytes[8] === 0x57 &&
    bytes[9] === 0x45 &&
    bytes[10] === 0x42 &&
    bytes[11] === 0x50;
  return isWebp;
}

/**
 * Enforces strict Google-safe file rules:
 * 1) Only JPG, PNG, WEBP allowed
 * 2) Maximum 5MB per photo
 */
export async function validateMomentPhotoFile(file: File): Promise<void> {
  if (!file || file.size <= 0) {
    throw new PhotoUploadValidationError(ZQ_PHOTO_FORMAT_BLOCK_MESSAGE);
  }

  if (file.size > MAX_MOMENT_PHOTO_SIZE_BYTES) {
    throw new PhotoUploadValidationError(ZQ_PHOTO_SIZE_BLOCK_MESSAGE);
  }

  const normalizedMime = (file.type || '').trim().toLowerCase();
  if (normalizedMime) {
    if (!ALLOWED_PHOTO_MIME_TYPES.has(normalizedMime)) {
      throw new PhotoUploadValidationError(ZQ_PHOTO_FORMAT_BLOCK_MESSAGE);
    }
  } else if (!ALLOWED_PHOTO_EXT_REGEX.test(file.name || '')) {
    throw new PhotoUploadValidationError(ZQ_PHOTO_FORMAT_BLOCK_MESSAGE);
  }

  try {
    const headerBuffer = await file.slice(0, 12).arrayBuffer();
    const headerBytes = new Uint8Array(headerBuffer);
    if (!hasAllowedImageSignature(headerBytes)) {
      throw new PhotoUploadValidationError(ZQ_PHOTO_FORMAT_BLOCK_MESSAGE);
    }
  } catch (err) {
    if (err instanceof PhotoUploadValidationError) {
      throw err;
    }
    throw new PhotoUploadValidationError(ZQ_PHOTO_FORMAT_BLOCK_MESSAGE);
  }
}

/**
 * Lazily loads and caches the bundled MobileNetV2 NSFWJS model in the browser
 * with automatic TensorFlow.js CPU fallback if WebGL is constrained.
 */
async function getNsfwModel(): Promise<NSFWJS> {
  if (!nsfwModelPromise) {
    nsfwModelPromise = (async () => {
      const tf = await import('@tensorflow/tfjs');
      try {
        await tf.ready();
      } catch {
        await tf.setBackend('cpu');
        await tf.ready();
      }

      const { load } = await import('nsfwjs');

      try {
        return await load('MobileNetV2');
      } catch {
        await tf.setBackend('cpu');
        await tf.ready();
        return await load('MobileNetV2');
      }
    })().catch((err) => {
      nsfwModelPromise = null;
      throw err;
    });
  }

  return nsfwModelPromise;
}

/**
 * Warms up the browser NSFWJS model in the background so photo checks feel instant.
 */
export function warmupNsfwModel(): void {
  void getNsfwModel().catch(() => {
    // Silent background warmup; errors are handled during active photo checks
  });
}

/**
 * Evaluates NSFWJS class probabilities against strict website guidelines:
 * Block if Porn > 0.6 OR Hentai > 0.6 OR Sexy > 0.8.
 */
export function isNsfwPredictionsUnsafe(predictions: PredictionType[]): boolean {
  let porn = 0;
  let hentai = 0;
  let sexy = 0;

  for (const item of predictions) {
    if (item.className === 'Porn') {
      porn = item.probability;
    } else if (item.className === 'Hentai') {
      hentai = item.probability;
    } else if (item.className === 'Sexy') {
      sexy = item.probability;
    }
  }

  return (
    porn > NSFW_PORN_LIMIT ||
    hentai > NSFW_HENTAI_LIMIT ||
    sexy > NSFW_SEXY_LIMIT
  );
}

function renderScanCanvas(img: HTMLImageElement): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = NSFW_SCAN_DIMENSION;
  canvas.height = NSFW_SCAN_DIMENSION;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new PhotoUploadValidationError(
      'Unable to verify photo safety in this browser.'
    );
  }
  // Composite onto solid white so transparent PNG/WEBP layers cannot hide content
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, NSFW_SCAN_DIMENSION, NSFW_SCAN_DIMENSION);
  ctx.drawImage(img, 0, 0, NSFW_SCAN_DIMENSION, NSFW_SCAN_DIMENSION);
  return canvas;
}

async function assertImageSafeWithNsfwJs(img: HTMLImageElement): Promise<void> {
  const scanCanvas = renderScanCanvas(img);
  let predictions: PredictionType[];

  try {
    const model = await getNsfwModel();
    predictions = await model.classify(scanCanvas, 5);
  } catch {
    try {
      nsfwModelPromise = null;
      const tf = await import('@tensorflow/tfjs');
      await tf.setBackend('cpu');
      await tf.ready();
      const model = await getNsfwModel();
      predictions = await model.classify(scanCanvas, 5);
    } catch {
      throw new PhotoUploadValidationError(
        'Could not verify photo safety right now. Please try again.'
      );
    }
  }

  if (isNsfwPredictionsUnsafe(predictions)) {
    throw new PhotoUploadValidationError(ZQ_NSFW_PHOTO_BLOCK_MESSAGE);
  }
}

function loadImageElement(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new PhotoUploadValidationError(ZQ_PHOTO_FORMAT_BLOCK_MESSAGE));
    };
    img.src = objectUrl;
  });
}

/**
 * Deterministic Client-Side Computer Vision Scanner (Zero API Keys Needed):
 * Auto-rejects:
 * 1) Screenshots / Stock / Social-downloaded filenames
 * 2) Tiny low-res (< 240x240) or extreme banner/phone-screenshot aspect ratios
 * 3) Blurry / out-of-focus / washed-out photos (2D Grayscale Laplacian Variance)
 * 4) Top/Bottom website watermark or meme bars (e.g. www.site.com strip)
 * 5) Dusri website ke text / quote-card / poster images & dense corner logo/watermark stamps
 */
function assertImageOriginalNoBlurWatermarkOrText(file: File, img: HTMLImageElement): void {
  const fileName = (file.name || '').trim();
  if (fileName && SCRAPED_OR_WATERMARKED_FILENAME_REGEX.test(fileName)) {
    throw new PhotoUploadValidationError(ZQ_WATERMARK_OR_TEXT_BLOCK_MESSAGE);
  }

  const naturalW = img.naturalWidth || img.width || 0;
  const naturalH = img.naturalHeight || img.height || 0;

  if (naturalW < 240 || naturalH < 240) {
    throw new PhotoUploadValidationError(ZQ_BLURRY_PHOTO_BLOCK_MESSAGE);
  }

  const aspect = naturalW / naturalH;
  if (aspect > 2.45 || aspect < 0.42) {
    throw new PhotoUploadValidationError(ZQ_WATERMARK_OR_TEXT_BLOCK_MESSAGE);
  }

  const W = 256;
  const H = 256;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  ctx.drawImage(img, 0, 0, W, H);
  const rgba = ctx.getImageData(0, 0, W, H).data;

  const lum = new Float32Array(W * H);
  const sat = new Float32Array(W * H);
  let lumSum = 0;

  for (let i = 0; i < W * H; i++) {
    const r = rgba[i * 4];
    const g = rgba[i * 4 + 1];
    const b = rgba[i * 4 + 2];
    const y = 0.299 * r + 0.587 * g + 0.114 * b;
    lum[i] = y;
    lumSum += y;
    const maxC = Math.max(r, g, b);
    const minC = Math.min(r, g, b);
    sat[i] = maxC === 0 ? 0 : (maxC - minC) / maxC;
  }

  const totalPixels = W * H;
  const meanLum = lumSum / totalPixels;
  let lumVarAcc = 0;
  for (let i = 0; i < totalPixels; i++) {
    const d = lum[i] - meanLum;
    lumVarAcc += d * d;
  }
  const lumStdDev = Math.sqrt(lumVarAcc / totalPixels);

  // 1. Blank / flat / washed-out check
  if (lumStdDev < 10) {
    throw new PhotoUploadValidationError(ZQ_BLURRY_PHOTO_BLOCK_MESSAGE);
  }

  // 2. 2D Laplacian Variance Blur Detection across interior [4..251]
  let lapSum = 0;
  let lapSqSum = 0;
  let lapCount = 0;
  for (let y = 4; y < H - 4; y++) {
    const rowOff = y * W;
    for (let x = 4; x < W - 4; x++) {
      const idx = rowOff + x;
      const lap =
        lum[idx - 1] +
        lum[idx + 1] +
        lum[idx - W] +
        lum[idx + W] -
        4 * lum[idx];
      lapSum += lap;
      lapSqSum += lap * lap;
      lapCount++;
    }
  }
  const lapMean = lapSum / lapCount;
  const lapVariance = lapSqSum / lapCount - lapMean * lapMean;

  if (lapVariance < 22) {
    throw new PhotoUploadValidationError(ZQ_BLURRY_PHOTO_BLOCK_MESSAGE);
  }

  // 3. Top / Bottom Meme or Website URL Watermark Strip Check
  const checkHorizontalStrip = (startY: number, endY: number, seamYA: number, seamYB: number) => {
    let stripLumSum = 0;
    let stripSatSum = 0;
    let stripPixels = 0;
    let sharpHorizFlips = 0;

    for (let y = startY; y < endY; y++) {
      const rowOff = y * W;
      for (let x = 8; x < W - 8; x++) {
        const idx = rowOff + x;
        stripLumSum += lum[idx];
        stripSatSum += sat[idx];
        stripPixels++;
        if (Math.abs(lum[idx + 1] - lum[idx]) > 55) {
          sharpHorizFlips++;
        }
      }
    }

    const avgStripLum = stripLumSum / stripPixels;
    const avgStripSat = stripSatSum / stripPixels;
    const flipRatio = sharpHorizFlips / stripPixels;

    let seamJumpSum = 0;
    for (let x = 8; x < W - 8; x++) {
      seamJumpSum += Math.abs(lum[seamYA * W + x] - lum[seamYB * W + x]);
    }
    const avgSeamJump = seamJumpSum / (W - 16);

    const isSolidDarkOrWhiteBar =
      avgStripSat < 0.12 && (avgStripLum < 26 || avgStripLum > 232);
    const hasPrintedTextInsideBar = flipRatio > 0.045 && flipRatio < 0.42;

    return isSolidDarkOrWhiteBar && avgSeamJump > 34 && hasPrintedTextInsideBar;
  };

  if (
    checkHorizontalStrip(0, 22, 21, 24) ||
    checkHorizontalStrip(H - 24, H, H - 25, H - 22)
  ) {
    throw new PhotoUploadValidationError(ZQ_WATERMARK_OR_TEXT_BLOCK_MESSAGE);
  }

  // 4. Dusri Website ka Text / Quote-Card / Shayari-Poster Detection
  // Printed typography over a flat/gradient background produces many scanlines with
  // rapid alternating dark<->light horizontal stroke reversals while most pixels remain flat.
  let flatPixels = 0;
  let textLikeScanlines = 0;

  for (let y = 20; y < H - 20; y++) {
    const rowOff = y * W;
    let rowSignReversals = 0;
    let lastEdgeSign = 0;
    let lastEdgeX = -20;

    for (let x = 16; x < W - 16; x++) {
      const idx = rowOff + x;
      const dx = lum[idx + 1] - lum[idx];
      const dy = lum[idx + W] - lum[idx];
      if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
        flatPixels++;
      }

      if (Math.abs(dx) > 54) {
        const sign = dx > 0 ? 1 : -1;
        if (lastEdgeSign !== 0 && sign !== lastEdgeSign && x - lastEdgeX <= 7) {
          rowSignReversals++;
        }
        lastEdgeSign = sign;
        lastEdgeX = x;
      }
    }

    if (rowSignReversals >= 11) {
      textLikeScanlines++;
    }
  }

  const interiorTotal = (H - 40) * (W - 32);
  const flatRatio = flatPixels / interiorTotal;

  // Quote-cards / screenshots have > 56% flat background + >= 28 scanlines of crisp character strokes
  if (flatRatio > 0.56 && textLikeScanlines >= 28) {
    throw new PhotoUploadValidationError(ZQ_WATERMARK_OR_TEXT_BLOCK_MESSAGE);
  }

  // 5. Corner Logo / Watermark Stamp Check (concentrated sharp glyph strokes in a corner)
  const countRegionStrokeFlips = (x0: number, y0: number, rw: number, rh: number) => {
    let flips = 0;
    let localFlat = 0;
    for (let y = y0; y < y0 + rh; y++) {
      const rowOff = y * W;
      let lastSign = 0;
      let lastX = -20;
      for (let x = x0; x < x0 + rw - 1; x++) {
        const dx = lum[rowOff + x + 1] - lum[rowOff + x];
        if (Math.abs(dx) < 5) localFlat++;
        if (Math.abs(dx) > 62) {
          const s = dx > 0 ? 1 : -1;
          if (lastSign !== 0 && s !== lastSign && x - lastX <= 6) {
            flips++;
          }
          lastSign = s;
          lastX = x;
        }
      }
    }
    return { flips, flatFrac: localFlat / (rw * rh) };
  };

  const corners = [
    { corner: [W - 68, H - 34, 64, 30], neighbor: [W - 68, H - 68, 64, 30] }, // bottom-right
    { corner: [4, H - 34, 64, 30], neighbor: [4, H - 68, 64, 30] }, // bottom-left
    { corner: [W - 68, 4, 64, 30], neighbor: [W - 68, 38, 64, 30] }, // top-right
    { corner: [4, 4, 64, 30], neighbor: [4, 38, 64, 30] } // top-left
  ] as const;

  for (const item of corners) {
    const cStat = countRegionStrokeFlips(
      item.corner[0],
      item.corner[1],
      item.corner[2],
      item.corner[3]
    );
    const nStat = countRegionStrokeFlips(
      item.neighbor[0],
      item.neighbor[1],
      item.neighbor[2],
      item.neighbor[3]
    );
    if (
      cStat.flips >= 46 &&
      cStat.flatFrac >= 0.45 &&
      cStat.flips > (nStat.flips + 4) * 3.2
    ) {
      throw new PhotoUploadValidationError(ZQ_WATERMARK_OR_TEXT_BLOCK_MESSAGE);
    }
  }
}

/**
 * Validates file type (JPG/PNG/WEBP), size (<= 5MB), Original/Blur/Watermark/Text check,
 * and client-side NSFWJS moderation immediately when a photo is selected.
 */
export async function validateAndScanMomentPhoto(file: File): Promise<void> {
  await validateMomentPhotoFile(file);
  const img = await loadImageElement(file);
  assertImageOriginalNoBlurWatermarkOrText(file, img);
  await assertImageSafeWithNsfwJs(img);
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Canvas encoding failed'));
        }
      },
      mimeType,
      quality
    );
  });
}

/**
 * Compresses an already-decoded & NSFW-verified photo via HTML5 Canvas so that:
 * 1) A crisp WebP/JPEG Blob is ready for Firebase Storage upload
 * 2) A strictly bounded dataUrl (<= maxDataUrlChars) is ready as an instant resilient fallback
 *    guaranteeing 1 to 9 photos always fit safely under Firestore's 1 MiB document limit.
 */
async function compressLoadedPhotoAdaptive(
  img: HTMLImageElement,
  maxDataUrlChars: number
): Promise<CompressedPhotoResult> {
  const naturalW = img.naturalWidth || img.width || 800;
  const naturalH = img.naturalHeight || img.height || 800;

  let maxDim = maxDataUrlChars >= 95000 ? 900 : 720;
  let quality = 0.76;
  let mimeType = 'image/webp';
  let dataUrl = '';
  let finalCanvas: HTMLCanvasElement | null = null;

  for (let attempt = 0; attempt < 6; attempt++) {
    const scale = Math.min(1, maxDim / Math.max(naturalW, naturalH));
    const targetW = Math.max(1, Math.round(naturalW * scale));
    const targetH = Math.max(1, Math.round(naturalH * scale));

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Browser canvas context unavailable');
    }
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetW, targetH);
    ctx.drawImage(img, 0, 0, targetW, targetH);

    let candidate = canvas.toDataURL('image/webp', quality);
    if (!candidate.startsWith('data:image/webp;base64,')) {
      mimeType = 'image/jpeg';
      candidate = canvas.toDataURL('image/jpeg', quality);
    } else {
      mimeType = 'image/webp';
    }

    dataUrl = candidate;
    finalCanvas = canvas;

    if (dataUrl.length <= maxDataUrlChars) {
      break;
    }

    maxDim = Math.max(360, Math.round(maxDim * 0.8));
    quality = Math.max(0.45, quality - 0.1);
  }

  if (!finalCanvas || !dataUrl || dataUrl.length > SINGLE_IMAGE_MAX_CHARS) {
    throw new PhotoUploadValidationError(
      'Selected photo is too large to process. Please try another photo.'
    );
  }

  const blob = await canvasToBlob(finalCanvas, mimeType, quality);
  return { blob, dataUrl, mimeType };
}

async function tryUploadToFirebaseStorage(
  storage: FirebaseStorage,
  momentId: string,
  index: number,
  compressed: CompressedPhotoResult
): Promise<string | null> {
  if (storageUnavailableForSession) {
    return null;
  }

  const ext = compressed.mimeType === 'image/webp' ? 'webp' : 'jpg';
  const storageRef = ref(storage, `zq_moments/${momentId}/photo_${index + 1}.${ext}`);

  let timerId: number | undefined;
  try {
    const uploadTaskPromise = (async () => {
      const snap = await uploadBytes(storageRef, compressed.blob, {
        contentType: compressed.mimeType,
        cacheControl: 'public, max-age=31536000, immutable'
      });
      return getDownloadURL(snap.ref);
    })();

    const timeoutPromise = new Promise<null>((resolve) => {
      timerId = window.setTimeout(() => resolve(null), STORAGE_UPLOAD_TIMEOUT_MS);
    });

    const downloadUrl = await Promise.race([uploadTaskPromise, timeoutPromise]);
    if (downloadUrl && downloadUrl.startsWith('https://')) {
      return downloadUrl;
    }
    storageUnavailableForSession = true;
    return null;
  } catch {
    storageUnavailableForSession = true;
    return null;
  } finally {
    if (timerId !== undefined) {
      window.clearTimeout(timerId);
    }
  }
}

/**
 * Validates, moderates with NSFWJS in-browser, compresses, and uploads 1 to 9 photos
 * for a ZQ-MOMENTS post. Every selected photo is verified BEFORE any upload to Firebase Storage.
 */
export async function processAndUploadMomentPhotos(
  storage: FirebaseStorage,
  momentId: string,
  files: File[],
  onProgress?: (completed: number, total: number) => void
): Promise<string[]> {
  if (files.length < 1 || files.length > 9) {
    throw new PhotoUploadValidationError('Please select between 1 and 9 photos.');
  }

  // Step 1: Strictly verify format (JPG/PNG/WEBP), size (<= 5MB), Blur/Watermark/Text filter,
  // and NSFWJS safety on EVERY photo before uploading anything to Firebase Storage.
  const verifiedImages: HTMLImageElement[] = [];
  for (let i = 0; i < files.length; i++) {
    await validateMomentPhotoFile(files[i]);
    const img = await loadImageElement(files[i]);
    assertImageOriginalNoBlurWatermarkOrText(files[i], img);
    await assertImageSafeWithNsfwJs(img);
    verifiedImages.push(img);
  }

  const perPhotoBudget = Math.min(
    SINGLE_IMAGE_MAX_CHARS,
    Math.floor(TOTAL_IMAGES_CHAR_BUDGET / verifiedImages.length)
  );

  // Step 2: Compress and upload verified safe photos to Firebase Storage
  const results: string[] = [];
  for (let i = 0; i < verifiedImages.length; i++) {
    const compressed = await compressLoadedPhotoAdaptive(
      verifiedImages[i],
      perPhotoBudget
    );
    const storageUrl = await tryUploadToFirebaseStorage(
      storage,
      momentId,
      i,
      compressed
    );
    results.push(storageUrl || compressed.dataUrl);
    if (onProgress) {
      onProgress(i + 1, verifiedImages.length);
    }
  }

  return results;
}
