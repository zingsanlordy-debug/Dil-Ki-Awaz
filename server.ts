import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPRESSIBLE_CONTENT_TYPE =
  /^(text\/|application\/(javascript|ecmascript|json|xml|manifest\+json|xhtml\+xml)|image\/svg\+xml)/i;

function createGzipMiddleware() {
  return (req: Request, res: Response, next: NextFunction): void => {
    const acceptEncoding = req.headers['accept-encoding'] || '';
    if (
      req.method === 'HEAD' ||
      !/\bgzip\b/i.test(String(acceptEncoding)) ||
      req.path === '/healthz'
    ) {
      next();
      return;
    }

    const rawWrite = res.write.bind(res);
    const rawEnd = res.end.bind(res);
    let gzipStream: zlib.Gzip | null = null;
    let decided = false;

    const initCompressionIfEligible = (): void => {
      if (decided) return;
      decided = true;

      if (res.getHeader('Content-Encoding')) {
        return;
      }

      const contentType = String(res.getHeader('Content-Type') || '');
      if (!COMPRESSIBLE_CONTENT_TYPE.test(contentType)) {
        return;
      }

      res.removeHeader('Content-Length');
      res.setHeader('Content-Encoding', 'gzip');
      res.vary('Accept-Encoding');

      gzipStream = zlib.createGzip({ level: zlib.constants.Z_BEST_SPEED });
      gzipStream.on('data', (chunk: Buffer) => {
        rawWrite(chunk);
      });
      gzipStream.on('end', () => {
        rawEnd();
      });
      gzipStream.on('error', () => {
        rawEnd();
      });
    };

    res.write = ((chunk: unknown, encodingOrCb?: unknown, cb?: unknown): boolean => {
      initCompressionIfEligible();
      if (gzipStream) {
        if (typeof encodingOrCb === 'function') {
          return gzipStream.write(chunk as Buffer, encodingOrCb as (err?: Error | null) => void);
        }
        return gzipStream.write(
          chunk as Buffer,
          encodingOrCb as BufferEncoding,
          cb as ((err?: Error | null) => void) | undefined
        );
      }
      return rawWrite(chunk as Buffer, encodingOrCb as BufferEncoding, cb as () => void);
    }) as typeof res.write;

    res.end = ((chunk?: unknown, encodingOrCb?: unknown, cb?: unknown): Response => {
      initCompressionIfEligible();
      if (gzipStream) {
        if (chunk !== undefined && chunk !== null && typeof chunk !== 'function') {
          if (typeof encodingOrCb === 'string') {
            gzipStream.end(chunk as string, encodingOrCb as BufferEncoding);
          } else {
            gzipStream.end(chunk as Buffer);
          }
        } else {
          gzipStream.end();
        }
        return res;
      }
      return rawEnd(chunk as Buffer, encodingOrCb as BufferEncoding, cb as () => void);
    }) as typeof res.end;

    next();
  };
}

async function startServer(): Promise<void> {
  const app = express();

  const isStartLifecycle = process.env.npm_lifecycle_event === 'start';
  const isProduction = process.env.NODE_ENV === 'production' || isStartLifecycle;

  // In AI Studio dev container, nginx proxies to 3000.
  // In Cloud Run production, listen on process.env.PORT (8080) or fallback to 3000.
  const port: number = isProduction ? Number(process.env.PORT) || 3000 : 3000;

  app.disable('x-powered-by');
  if (isProduction) {
    app.use(createGzipMiddleware());
  }
  app.use(express.json({ limit: '512kb' }));

  // Exact 35 Languages (15 Indian + 20 Global) + 'en' shorthand allowed for /api/translate
  const ALLOWED_TRANSLATE_LANGS = new Set([
    // 15 Indian Languages
    'hi',
    'hi-Latn',
    'ta',
    'te',
    'kn',
    'ml',
    'mr',
    'gu',
    'bn',
    'pa',
    'or',
    'as',
    'ur',
    'bho',
    'bgc',
    // 20 Global Languages (+ 'en')
    'en',
    'en-US',
    'en-GB',
    'es',
    'pt',
    'fr',
    'de',
    'it',
    'ja',
    'ko',
    'ar',
    'th',
    'tl',
    'ru',
    'zh-CN',
    'id',
    'tr',
    'vi',
    'nl',
    'pl',
    'fa'
  ]);

  function normalizeUpstreamGtxLang(code: string): string {
    if (code === 'en-US' || code === 'en-GB') return 'en';
    if (code === 'bgc' || code === 'hi-Latn') return 'hi';
    return code;
  }

  const translationCache = new Map<string, string>();
  const MAX_CACHE_ENTRIES = 20000;

  async function translateSingleViaGtx(
    text: string,
    targetLang: string,
    sourceLang: string
  ): Promise<string> {
    const trimmed = text.trim();
    if (!trimmed) return text;

    const upstreamTarget = normalizeUpstreamGtxLang(targetLang);
    const cacheKey = `${sourceLang}:${upstreamTarget}:${trimmed}`;
    const cached = translationCache.get(cacheKey);
    if (cached !== undefined) return cached;

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${encodeURIComponent(
      sourceLang
    )}&tl=${encodeURIComponent(upstreamTarget)}&dt=t&q=${encodeURIComponent(trimmed)}`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      },
      signal: AbortSignal.timeout(6000)
    });

    if (!response.ok) {
      throw new Error(`Upstream translation HTTP ${response.status}`);
    }

    const data = (await response.json()) as unknown;
    let translated = trimmed;
    if (Array.isArray(data) && Array.isArray(data[0])) {
      translated = (data[0] as unknown[])
        .map((segment) => (Array.isArray(segment) && typeof segment[0] === 'string' ? segment[0] : ''))
        .join('');
    }

    if (translationCache.size >= MAX_CACHE_ENTRIES) {
      const oldestKey = translationCache.keys().next().value;
      if (oldestKey !== undefined) {
        translationCache.delete(oldestKey);
      }
    }
    translationCache.set(cacheKey, translated);
    return translated;
  }

  // Fast health check endpoint for Cloud Run & dev readiness probes
  app.get('/healthz', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok' });
  });

  // Server-side batch translation proxy for the 35-language selector (15 Indian + 20 Global)
  app.post('/api/translate', async (req: Request, res: Response) => {
    try {
      const body = req.body as {
        texts?: unknown;
        targetLang?: unknown;
        sourceLang?: unknown;
      };

      const targetLang = typeof body?.targetLang === 'string' ? body.targetLang.trim() : '';
      const sourceLang =
        typeof body?.sourceLang === 'string' && body.sourceLang.trim()
          ? body.sourceLang.trim()
          : 'auto';

      if (!ALLOWED_TRANSLATE_LANGS.has(targetLang)) {
        res.status(400).json({ error: 'Unsupported target language' });
        return;
      }

      if (!Array.isArray(body?.texts)) {
        res.status(400).json({ error: 'texts must be an array of strings' });
        return;
      }

      const rawTexts = body.texts
        .slice(0, 80)
        .map((item) => (typeof item === 'string' ? item.slice(0, 1500) : ''));

      const results = new Array<string>(rawTexts.length);
      const CONCURRENCY = 8;

      for (let i = 0; i < rawTexts.length; i += CONCURRENCY) {
        const slice = rawTexts.slice(i, i + CONCURRENCY);
        const batchTranslated = await Promise.all(
          slice.map(async (txt) => {
            try {
              return await translateSingleViaGtx(txt, targetLang, sourceLang);
            } catch {
              return txt;
            }
          })
        );
        for (let j = 0; j < batchTranslated.length; j++) {
          results[i + j] = batchTranslated[j];
        }
      }

      res.status(200).json({ translations: results });
    } catch {
      res.status(500).json({ error: 'Translation failed' });
    }
  });

  // ============================================================================
  // UNIVERSAL SERVER-SIDE SEO METADATA RESOLVER (ALL 652 BASE + 350 PAGINATED = 1,002 URLs)
  // Self-contained so `node server.ts` runs natively in Node 22 without tsx.
  // ============================================================================
  const SITE_BRAND = 'ZQ FEELINGS';
  const DEFAULT_PRODUCTION_ORIGIN = 'https://zqfeelings.com';
  const PREVIEW_HOST_SUFFIXES = [
    '.pages.dev',
    '.vercel.app',
    '.netlify.app',
    '.web.app',
    '.firebaseapp.com',
    '.github.io',
    '.onrender.com'
  ];

  function normalizeCustomOrigin(raw?: string): string | null {
    if (!raw) return null;
    const trimmed = raw.trim().replace(/\/+$/, '');
    if (!trimmed) return null;
    try {
      const parsed = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
      const cleanHost = parsed.hostname.toLowerCase().replace(/^www\./, '');
      if (
        !cleanHost ||
        cleanHost === 'localhost' ||
        cleanHost === '127.0.0.1' ||
        cleanHost.endsWith('.run.app') ||
        PREVIEW_HOST_SUFFIXES.some((s) => cleanHost.endsWith(s))
      ) {
        return null;
      }
      return `https://${cleanHost}`;
    } catch {
      return null;
    }
  }

  function isPreviewSubdomain(req: Request): boolean {
    const rawHost = String(req.headers['x-forwarded-host'] || req.headers.host || '')
      .split(',')[0]
      .trim()
      .split(':')[0]
      .toLowerCase();
    return PREVIEW_HOST_SUFFIXES.some((s) => rawHost.endsWith(s));
  }

  function resolveRequestSiteOrigin(req: Request): string {
    const rawHost = String(req.headers['x-forwarded-host'] || req.headers.host || '')
      .split(',')[0]
      .trim()
      .split(':')[0];
    const fromHost = normalizeCustomOrigin(rawHost ? `https://${rawHost}` : undefined);
    if (fromHost) return fromHost;

    const fromEnv =
      normalizeCustomOrigin(process.env.SITE_URL) ||
      normalizeCustomOrigin(process.env.VITE_SITE_URL);
    return fromEnv || DEFAULT_PRODUCTION_ORIGIN;
  }

  function clampSeoTitle(primary: string, fallbackShort: string, ultraShort?: string): string {
    if (primary.length <= 60) return primary;
    if (fallbackShort.length <= 60) return fallbackShort;
    return (ultraShort || fallbackShort).slice(0, 60);
  }

  function buildPaginatedCleanPath(baseCanonicalPath: string, page?: number): string {
    if (!page || page <= 1) return baseCanonicalPath;
    if (baseCanonicalPath === '/') return `/page/${page}`;
    return `${baseCanonicalPath.replace(/\/+$/, '')}/page/${page}`;
  }

  function escapeHtml(raw: string): string {
    return raw
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  const SSR_VALENTINE_LANGS: ReadonlyArray<{
    code: string;
    hreflang: string;
    slug: string;
    isoPrefix: string;
    englishName: string;
    nativeLabel: string;
  }> = [
    { code: 'hi', hreflang: 'hi', slug: 'hindi', isoPrefix: 'hi', englishName: 'Hindi', nativeLabel: 'हिंदी' },
    { code: 'hi-Latn', hreflang: 'hi-Latn', slug: 'hinglish', isoPrefix: 'hi-latn', englishName: 'Hinglish', nativeLabel: 'Hinglish' },
    { code: 'ta', hreflang: 'ta', slug: 'tamil', isoPrefix: 'ta', englishName: 'Tamil', nativeLabel: 'தமிழ்' },
    { code: 'te', hreflang: 'te', slug: 'telugu', isoPrefix: 'te', englishName: 'Telugu', nativeLabel: 'తెలుగు' },
    { code: 'kn', hreflang: 'kn', slug: 'kannada', isoPrefix: 'kn', englishName: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
    { code: 'ml', hreflang: 'ml', slug: 'malayalam', isoPrefix: 'ml', englishName: 'Malayalam', nativeLabel: 'മലയാളം' },
    { code: 'mr', hreflang: 'mr', slug: 'marathi', isoPrefix: 'mr', englishName: 'Marathi', nativeLabel: 'मराठी' },
    { code: 'gu', hreflang: 'gu', slug: 'gujarati', isoPrefix: 'gu', englishName: 'Gujarati', nativeLabel: 'ગુજરાતી' },
    { code: 'bn', hreflang: 'bn', slug: 'bengali', isoPrefix: 'bn', englishName: 'Bengali', nativeLabel: 'বাংলা' },
    { code: 'pa', hreflang: 'pa', slug: 'punjabi', isoPrefix: 'pa', englishName: 'Punjabi', nativeLabel: 'ਪੰਜਾਬੀ' },
    { code: 'or', hreflang: 'or', slug: 'odia', isoPrefix: 'or', englishName: 'Odia', nativeLabel: 'ଓଡ଼ିଆ' },
    { code: 'as', hreflang: 'as', slug: 'assamese', isoPrefix: 'as', englishName: 'Assamese', nativeLabel: 'অসমীয়া' },
    { code: 'ur', hreflang: 'ur', slug: 'urdu', isoPrefix: 'ur', englishName: 'Urdu', nativeLabel: 'اردو' },
    { code: 'bho', hreflang: 'bho', slug: 'bhojpuri', isoPrefix: 'bho', englishName: 'Bhojpuri', nativeLabel: 'भोजपुरी' },
    { code: 'bgc', hreflang: 'bgc', slug: 'haryanvi', isoPrefix: 'bgc', englishName: 'Haryanvi', nativeLabel: 'हरियाणवी' },
    { code: 'en-US', hreflang: 'en-US', slug: 'english', isoPrefix: 'en', englishName: 'English (USA)', nativeLabel: 'English' },
    { code: 'en-GB', hreflang: 'en-GB', slug: 'english-uk', isoPrefix: 'en-gb', englishName: 'English (UK)', nativeLabel: 'English (UK)' },
    { code: 'es', hreflang: 'es', slug: 'spanish', isoPrefix: 'es', englishName: 'Spanish', nativeLabel: 'Español' },
    { code: 'pt', hreflang: 'pt', slug: 'portuguese', isoPrefix: 'pt', englishName: 'Portuguese', nativeLabel: 'Português' },
    { code: 'fr', hreflang: 'fr', slug: 'french', isoPrefix: 'fr', englishName: 'French', nativeLabel: 'Français' },
    { code: 'de', hreflang: 'de', slug: 'german', isoPrefix: 'de', englishName: 'German', nativeLabel: 'Deutsch' },
    { code: 'it', hreflang: 'it', slug: 'italian', isoPrefix: 'it', englishName: 'Italian', nativeLabel: 'Italiano' },
    { code: 'ja', hreflang: 'ja', slug: 'japanese', isoPrefix: 'ja', englishName: 'Japanese', nativeLabel: '日本語' },
    { code: 'ko', hreflang: 'ko', slug: 'korean', isoPrefix: 'ko', englishName: 'Korean', nativeLabel: '한국어' },
    { code: 'ar', hreflang: 'ar', slug: 'arabic', isoPrefix: 'ar', englishName: 'Arabic', nativeLabel: 'العربية' },
    { code: 'th', hreflang: 'th', slug: 'thai', isoPrefix: 'th', englishName: 'Thai', nativeLabel: 'ไทย' },
    { code: 'tl', hreflang: 'tl', slug: 'tagalog', isoPrefix: 'tl', englishName: 'Tagalog', nativeLabel: 'Tagalog' },
    { code: 'ru', hreflang: 'ru', slug: 'russian', isoPrefix: 'ru', englishName: 'Russian', nativeLabel: 'Русский' },
    { code: 'zh-CN', hreflang: 'zh-CN', slug: 'chinese', isoPrefix: 'zh-cn', englishName: 'Chinese (Simplified)', nativeLabel: '简体中文' },
    { code: 'id', hreflang: 'id', slug: 'indonesian', isoPrefix: 'id', englishName: 'Indonesian', nativeLabel: 'Bahasa Indonesia' },
    { code: 'tr', hreflang: 'tr', slug: 'turkish', isoPrefix: 'tr', englishName: 'Turkish', nativeLabel: 'Türkçe' },
    { code: 'vi', hreflang: 'vi', slug: 'vietnamese', isoPrefix: 'vi', englishName: 'Vietnamese', nativeLabel: 'Tiếng Việt' },
    { code: 'nl', hreflang: 'nl', slug: 'dutch', isoPrefix: 'nl', englishName: 'Dutch', nativeLabel: 'Nederlands' },
    { code: 'pl', hreflang: 'pl', slug: 'polish', isoPrefix: 'pl', englishName: 'Polish', nativeLabel: 'Polski' },
    { code: 'fa', hreflang: 'fa', slug: 'persian', isoPrefix: 'fa', englishName: 'Persian', nativeLabel: 'فارسی' }
  ];

  const SSR_VALENTINE_LANG_ALIASES: Record<string, string> = {};
  for (const l of SSR_VALENTINE_LANGS) {
    SSR_VALENTINE_LANG_ALIASES[l.slug] = l.code;
    SSR_VALENTINE_LANG_ALIASES[l.isoPrefix] = l.code;
    SSR_VALENTINE_LANG_ALIASES[l.code.toLowerCase()] = l.code;
  }
  SSR_VALENTINE_LANG_ALIASES['en'] = 'en-US';
  SSR_VALENTINE_LANG_ALIASES['english-usa'] = 'en-US';
  SSR_VALENTINE_LANG_ALIASES['en-uk'] = 'en-GB';
  SSR_VALENTINE_LANG_ALIASES['fil'] = 'tl';
  SSR_VALENTINE_LANG_ALIASES['zh'] = 'zh-CN';
  SSR_VALENTINE_LANG_ALIASES['in'] = 'id';

  const SSR_HOLIDAY_35: Record<
    'new-year' | 'christmas',
    {
      id: 'new-year' | 'christmas';
      name: string;
      shortName: string;
      hindiName: string;
      dateLabel: string;
    }
  > = {
    'new-year': {
      id: 'new-year',
      name: 'New Year',
      shortName: 'New Year',
      hindiName: 'नया साल',
      dateLabel: '1 January'
    },
    christmas: {
      id: 'christmas',
      name: 'Christmas Day',
      shortName: 'Christmas',
      hindiName: 'क्रिसमस डे',
      dateLabel: '25 December'
    }
  };

  const SSR_VALENTINE_DAYS: ReadonlyArray<{
    id: string;
    shortName: string;
    hindiName: string;
    dateLabel: string;
  }> = [
    { id: 'rose-day', shortName: 'Rose Day', hindiName: 'रोज़ डे शायरी', dateLabel: '7 Feb' },
    { id: 'propose-day', shortName: 'Propose Day', hindiName: 'प्रपोज़ डे शायरी', dateLabel: '8 Feb' },
    { id: 'chocolate-day', shortName: 'Chocolate Day', hindiName: 'चॉकलेट डे शायरी', dateLabel: '9 Feb' },
    { id: 'teddy-day', shortName: 'Teddy Day', hindiName: 'टेडी डे शायरी', dateLabel: '10 Feb' },
    { id: 'promise-day', shortName: 'Promise Day', hindiName: 'प्रॉमिस डे शायरी', dateLabel: '11 Feb' },
    { id: 'hug-day', shortName: 'Hug Day', hindiName: 'हग डे शायरी', dateLabel: '12 Feb' },
    { id: 'kiss-day', shortName: 'Kiss Day', hindiName: 'किस डे शायरी', dateLabel: '13 Feb' },
    { id: 'valentine-day', shortName: 'Valentine Day', hindiName: 'वैलेंटाइन डे शायरी', dateLabel: '14 Feb' },
    { id: 'slap-day', shortName: 'Slap Day', hindiName: 'स्लैप डे शायरी', dateLabel: '15 Feb' },
    { id: 'kick-day', shortName: 'Kick Day', hindiName: 'किक डे शायरी', dateLabel: '16 Feb' },
    { id: 'perfume-day', shortName: 'Perfume Day', hindiName: 'परफ्यूम डे शायरी', dateLabel: '17 Feb' },
    { id: 'flirting-day', shortName: 'Flirting Day', hindiName: 'फ्लर्टिंग डे शायरी', dateLabel: '18 Feb' },
    { id: 'confession-day', shortName: 'Confession Day', hindiName: 'कन्फेशन डे शायरी', dateLabel: '19 Feb' },
    { id: 'missing-day', shortName: 'Missing Day', hindiName: 'मिसिंग डे शायरी', dateLabel: '20 Feb' },
    { id: 'breakup-day', shortName: 'Breakup Day', hindiName: 'ब्रेकअप डे शायरी', dateLabel: '21 Feb' }
  ];

  const SSR_FESTIVALS: ReadonlyArray<{ id: string; name: string; hindiName: string }> = [
    { id: 'diwali', name: 'Diwali', hindiName: 'दीपावली' },
    { id: 'bhai-dooj', name: 'Bhai Dooj', hindiName: 'भाई दूज' },
    { id: 'chhath-puja', name: 'Chhath Puja', hindiName: 'छठ पूजा' },
    { id: 'birthday', name: 'Birthday', hindiName: 'जन्मदिन' },
    { id: 'holi', name: 'Holi', hindiName: 'होली' },
    { id: 'eid', name: 'Eid', hindiName: 'ईद मुबारक' },
    { id: 'bakrid', name: 'Bakrid (Eid al-Adha)', hindiName: 'बकरीद' },
    { id: 'new-year', name: 'New Year', hindiName: 'नया साल' },
    { id: 'ganesh-chaturthi', name: 'Ganesh Chaturthi', hindiName: 'गणेश चतुर्थी' },
    { id: 'gandhi-jayanti', name: 'Gandhi Jayanti', hindiName: 'गांधी जयंती' },
    { id: 'independence-day', name: '15 August Independence Day', hindiName: 'स्वतंत्रता दिवस' },
    { id: 'republic-day', name: '26 January Republic Day', hindiName: 'गणतंत्र दिवस' },
    { id: 'rakshabandhan', name: 'Rakshabandhan', hindiName: 'रक्षाबंधन' },
    { id: 'janmashtami', name: 'Janmashtami', hindiName: 'जन्माष्टमी' },
    { id: 'navratri', name: 'Navratri / Durga Puja', hindiName: 'नवरात्रि' },
    { id: 'dussehra', name: 'Dussehra', hindiName: 'दशहरा' },
    { id: 'christmas', name: 'Christmas', hindiName: 'क्रिसमस' },
    { id: 'lohri', name: 'Lohri', hindiName: 'लोहड़ी' },
    { id: 'makar-sankranti', name: 'Makar Sankranti', hindiName: 'मकर संक्रांति' },
    { id: 'karva-chauth', name: 'Karva Chauth', hindiName: 'करवा चौथ' },
    { id: 'eid-milad', name: 'Eid Milad un Nabi', hindiName: 'ईद मिलाद' },
    { id: 'mahashivratri', name: 'Mahashivratri', hindiName: 'महाशिवरात्रि' },
    { id: 'ram-navami', name: 'Ram Navami', hindiName: 'राम नवमी' },
    { id: 'onam', name: 'Onam', hindiName: 'ओणम' },
    { id: 'pongal', name: 'Pongal', hindiName: 'पोंगल' },
    { id: 'baisakhi', name: 'Baisakhi', hindiName: 'बैसाखी' },
    { id: 'guru-nanak-jayanti', name: 'Guru Nanak Jayanti', hindiName: 'गुरु नानक जयंती' }
  ];

  const SSR_FEELINGS: ReadonlyArray<{
    id: string;
    name: string;
    hindiName: string;
    slug: string;
    seoDescription: string;
  }> = [
    { id: 'love', name: 'Love Shayari', hindiName: 'प्यार शायरी', slug: '/feelings/love-shayari/', seoDescription: 'Best Love, Romantic, Ishq & Mohabbat Shayari in Hindi (प्यार और मोहब्बत शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.' },
    { id: 'sad', name: 'Sad Shayari', hindiName: 'दर्द शायरी', slug: '/feelings/sad-shayari/', seoDescription: 'Heart-touching Sad, Dard & Gham Bhari Shayari in Hindi (सैड और दर्द भरी शायरी). Express deep emotions with 20 stylish fonts & WhatsApp share.' },
    { id: 'yaad', name: 'Yaad Shayari', hindiName: 'याद शायरी', slug: '/feelings/yaad-shayari/', seoDescription: 'Soulful Yaad, Yaadein & Intezaar Shayari in Hindi (याद और इंतज़ार शायरी) — heartfelt status lines with 20 stylish fonts & WhatsApp share.' },
    { id: 'kismat', name: 'Kismat Shayari', hindiName: 'किस्मत शायरी', slug: '/feelings/kismat-shayari/', seoDescription: 'Deep Kismat, Naseeb, Taqdeer & Bhagya Shayari in Hindi (किस्मत और नसीब शायरी). Copy unique destiny status lines in 20 stylish fonts.' },
    { id: 'khushi', name: 'Khushi Shayari', hindiName: 'खुशी शायरी', slug: '/feelings/khushi-shayari/', seoDescription: 'Joyful Khushi, Happy, Muskaan & Smile Shayari in Hindi (खुशी और मुस्कान शायरी). Spread positivity in 35 languages & 20 stylish fonts.' },
    { id: 'alone', name: 'Alone Shayari', hindiName: 'तन्हाई शायरी', slug: '/feelings/alone-shayari/', seoDescription: 'Emotional Alone, Tanhai & Judai Shayari in Hindi (तन्हाई और अकेलापन शायरी) — deep night poetry with 20 stylish fonts & WhatsApp share.' },
    { id: 'motivational', name: 'Motivational Shayari', hindiName: 'मोटिवेशनल शायरी', slug: '/feelings/motivational-shayari/', seoDescription: 'Powerful Motivational, Zindagi & Hausla Shayari in Hindi (मोटिवेशनल और हौसला शायरी) — inspiring success lines to copy & share.' },
    { id: 'sorry', name: 'Sorry Shayari', hindiName: 'माफी शायरी', slug: '/feelings/sorry-shayari/', seoDescription: 'Sweet Sorry, Maafi & Roothna-Manana Shayari in Hindi (माफी और रूठना-मनाना शायरी) to win back loved ones with stylish fonts & share.' },
    { id: 'attitude', name: 'Attitude Shayari', hindiName: 'एटीट्यूड शायरी', slug: '/feelings/attitude-shayari/', seoDescription: 'Bold Attitude, Style, Royal Tevar & Akad Shayari in Hindi (एटीट्यूड और तेवर शायरी) for WhatsApp & Instagram status — ZQ Feelings.' },
    { id: 'boys', name: 'Boys Shayari', hindiName: 'लड़कों की शायरी', slug: '/feelings/boys-shayari/', seoDescription: 'Best Boys Shayari & Ladko Ke Liye Shayari in Hindi (लड़कों के लिए स्वैग, जज़्बात और रॉयल शायरी) with 20 stylish fonts & share.' },
    { id: 'girls', name: 'Girls Shayari', hindiName: 'लड़कियों की शायरी', slug: '/feelings/girls-shayari/', seoDescription: 'Stylish Girls Shayari & Ladkiyon Ke Liye Shayari in Hindi (लड़कियों के लिए क्यूट और रॉयल शायरी) with 20 stylish fonts & share.' },
    { id: 'dosti', name: 'Dosti Shayari', hindiName: 'दोस्ती शायरी', slug: '/feelings/dosti-shayari/', seoDescription: 'Heartwarming Dosti, Yaari & True Friendship Shayari in Hindi (सच्ची दोस्ती और यारी शायरी) for best friends — copy & WhatsApp share.' },
    { id: 'bewafa', name: 'Bewafa Shayari', hindiName: 'बेवफ़ा शायरी', slug: '/feelings/bewafa-shayari/', seoDescription: 'Deep Bewafa, Dhokha & Broken Trust Shayari in Hindi (बेवफ़ा और धोखा शायरी) with 20 stylish fonts, copy & instant WhatsApp share.' },
    { id: 'breakup', name: 'Breakup Shayari', hindiName: 'ब्रेकअप शायरी', slug: '/feelings/breakup-shayari/', seoDescription: 'Emotional Breakup & Heartbreak Shayari in Hindi (ब्रेकअप और टूटे दिल की शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.' },
    { id: 'good-morning', name: 'Good Morning Shayari', hindiName: 'गुड मॉर्निंग शायरी', slug: '/feelings/good-morning-shayari/', seoDescription: 'Fresh Good Morning & Suprabhat Wishes Shayari in Hindi (सुप्रभात और गुड मॉर्निंग शायरी) with 20 stylish fonts & WhatsApp share.' },
    { id: 'good-night', name: 'Good Night Shayari', hindiName: 'गुड नाइट शायरी', slug: '/feelings/good-night-shayari/', seoDescription: 'Peaceful Good Night & Shubh Ratri Wishes Shayari in Hindi (शुभ रात्रि और गुड नाइट शायरी) with 20 stylish fonts & WhatsApp share.' },
    { id: '2-line', name: '2 Line Shayari', hindiName: 'दो लाइन शायरी', slug: '/feelings/2-line-shayari/', seoDescription: 'Short & deep 2 Line Shayari & Do Line Status in Hindi (दो लाइन की बेहतरीन शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
    { id: 'family', name: 'Family Shayari', hindiName: 'परिवार शायरी', slug: '/feelings/family-shayari/', seoDescription: 'Warm Family, Maa Papa & Ghar Parivar Shayari in Hindi (परिवार और माँ-पापा शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
    { id: 'bhai-behen', name: 'Bhai Behen Shayari', hindiName: 'भाई बहन शायरी', slug: '/feelings/bhai-behen-shayari/', seoDescription: 'Loving Bhai Behen, Brother & Sister Shayari in Hindi (भाई-बहन के प्यार की शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
    { id: 'birthday-feelings', name: 'Birthday Shayari', hindiName: 'जन्मदिन शायरी', slug: '/feelings/birthday-shayari/', seoDescription: 'Heartfelt Birthday Wishes & Janmdin Mubarak Shayari in Hindi (जन्मदिन मुबारक फीलिंग्स शायरी) with 20 stylish fonts & WhatsApp share.' },
    { id: 'miss-you', name: 'Miss You Shayari', hindiName: 'मिस यू शायरी', slug: '/feelings/miss-you-shayari/', seoDescription: 'Touching Miss You & Teri Kami Shayari in Hindi (मिस यू और तेरी कमी शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.' },
    { id: 'heart-touching', name: 'Heart Touching Shayari', hindiName: 'हार्ट टचिंग शायरी', slug: '/feelings/heart-touching-shayari/', seoDescription: 'Deep Heart Touching & Dil Chhoo Lene Wali Shayari in Hindi (दिल छू लेने वाली शायरी) with 20 stylish fonts & WhatsApp share.' },
    { id: 'emotional', name: 'Emotional Shayari', hindiName: 'इमोशनल शायरी', slug: '/feelings/emotional-shayari/', seoDescription: 'Soulful Emotional & Jazbaati Shayari in Hindi (जज़्बाती और इमोशनल शायरी) in 35 languages & 20 stylish fonts — ZQ Feelings.' },
    { id: 'sad-love', name: 'Sad Love Shayari', hindiName: 'सैड लव शायरी', slug: '/feelings/sad-love-shayari/', seoDescription: 'Poignant Sad Love & Adhura Pyar Shayari in Hindi (अधूरा प्यार और सैड लव शायरी) with 20 stylish fonts, copy & WhatsApp share.' },
    { id: 'khwab', name: 'Khwab Shayari', hindiName: 'ख़्वाब शायरी', slug: '/feelings/khwab-shayari/', seoDescription: 'Dreamy Khwab & Sapne Shayari in Hindi (ख़्वाब और सपनों की शायरी) with 20 stylish fonts, one-click copy & WhatsApp share.' },
    { id: 'matlabi-duniya', name: 'Matlabi Duniya Shayari', hindiName: 'मतलबी दुनिया शायरी', slug: '/feelings/matlabi-duniya-shayari/', seoDescription: 'Real-life Matlabi Duniya & Matlabi Log Shayari in Hindi (मतलबी दुनिया और मतलबी लोग शायरी) with 20 stylish fonts & WhatsApp share.' },
    { id: 'funny', name: 'Funny Shayari', hindiName: 'फनी शायरी', slug: '/feelings/funny-shayari/', seoDescription: 'Hilarious Funny, Jokes, Comedy & Chutkule Shayari in Hindi (मज़ेदार फनी जोक्स और चुटकुले शायरी) with 20 stylish fonts & share.' },
    { id: 'sharabi', name: 'Sharabi Shayari', hindiName: 'शराबी शायरी', slug: '/feelings/sharabi-shayari/', seoDescription: 'Soulful Sharabi, Maikhana, Jaam & Mehfil Shayari in Hindi (शराबी और मयख़ाना शायरी) with 20 stylish fonts, copy & WhatsApp share.' }
  ];

  const SSR_FEELINGS_MERGE_MAP: Record<string, string> = {
    love: 'love',
    'romantic-love': 'love',
    'pyar-bhari': 'love',
    mohabbat: 'love',
    sad: 'sad',
    'dard-bhari': 'sad',
    yaad: 'yaad',
    'yaad-intezaar': 'yaad',
    intezaar: 'yaad',
    yaadein: 'yaad',
    kismat: 'kismat',
    naseeb: 'kismat',
    'kismat-bhagya': 'kismat',
    khushi: 'khushi',
    smile: 'khushi',
    alone: 'alone',
    judai: 'alone',
    motivational: 'motivational',
    zindagi: 'motivational',
    sorry: 'sorry',
    maafi: 'sorry',
    gussa: 'sorry',
    attitude: 'attitude',
    boy: 'boys',
    boys: 'boys',
    girl: 'girls',
    girls: 'girls',
    dosti: 'dosti',
    bewafa: 'bewafa',
    breakup: 'breakup',
    'good-morning': 'good-morning',
    'good-night': 'good-night',
    'two-line': '2-line',
    '2-line': '2-line',
    family: 'family',
    'bhai-behen': 'bhai-behen',
    'birthday-feelings': 'birthday-feelings',
    'miss-you': 'miss-you',
    'heart-touching': 'heart-touching',
    emotional: 'emotional',
    'sad-love': 'sad-love',
    khwab: 'khwab',
    'matlabi-duniya': 'matlabi-duniya',
    funny: 'funny',
    sharabi: 'sharabi',
    maikhana: 'sharabi'
  };

  const SSR_MAAFI_SUBS: ReadonlyArray<{
    id: string;
    name: string;
    englishTitle: string;
    count: number;
    slug: string;
    subtitle: string;
  }> = [
    { id: 'maa-se-maafi', name: 'Maa Se Maafi (माँ से माफ़ी)', englishTitle: 'Maa Se Maafi', count: 25, slug: '/feelings/maa-se-maafi-shayari', subtitle: 'नाराज़ माँ को मनाने और ममता के चरणों में क्षमा माँगने की भावुक शायरी' },
    { id: 'papa-se-maafi', name: 'Papa Se Maafi (पापा से माफ़ी)', englishTitle: 'Papa Se Maafi', count: 25, slug: '/feelings/papa-se-maafi-shayari', subtitle: 'पापा से हुई गलती पर सम्मान और पश्चाताप से भरी दिल छू लेने वाली माफ़ी शायरी' },
    { id: 'biwi-se-maafi', name: 'Biwi Se Maafi (बीवी से माफ़ी)', englishTitle: 'Biwi Se Maafi', count: 25, slug: '/feelings/biwi-se-maafi-shayari', subtitle: 'रूठी बीवी का गुस्सा पिघलाने और प्यार से मनाने वाली रोमांटिक सॉरी शायरी' },
    { id: 'husband-se-maafi', name: 'Husband Se Maafi (पति से माफ़ी)', englishTitle: 'Husband Se Maafi', count: 25, slug: '/feelings/husband-se-maafi-shayari', subtitle: 'नाराज़ पतिदेव को प्यार से मनाने और मुस्कान लौटाने वाली मीठी सॉरी शायरी' }
  ];

  const SSR_RELIGIOUS: ReadonlyArray<{
    id: string;
    name: string;
    englishTitle: string;
    count: number;
    path: string;
    subtitle: string;
  }> = [
    { id: 'sanatan-hindu', name: 'Sanatan Hindu (सनातन हिंदू)', englishTitle: 'Sanatan Hindu', count: 100, path: '/religious/sanatan-hindu', subtitle: 'वेद, पुराण, श्रीमद्भगवद्गीता, रामायण, उपनिषद, कर्म, मोक्ष और भक्ति' },
    { id: 'islamic-allah', name: 'Islamic Allah (इस्लामिक अल्लाह)', englishTitle: 'Islamic Allah', count: 100, path: '/religious/islamic-allah', subtitle: 'अल्लाह, दुआ, नमाज़, क़ुरआन, जुम्मा मुबारक, ईमान, सब्र, शुक्राना और नूर' },
    { id: 'christian-faith', name: 'Masih Faith (मसीह विश्वास)', englishTitle: 'Masih Faith', count: 60, path: '/religious/christian-faith', subtitle: 'प्रभु यीशु, पवित्र बाइबल, प्रार्थना, क्रूस, अनुग्रह, विश्वास और आशा' },
    { id: 'sikh-dharm', name: 'Sikh Dharm (सिख धर्म)', englishTitle: 'Sikh Dharm', count: 50, path: '/religious/sikh-dharm', subtitle: 'वाहेगुरु, गुरु नानक देव जी, गुरु ग्रंथ साहिब, गुरबाणी, खालसा, सेवा और लंगर' }
  ];

  const SSR_RITUALS: ReadonlyArray<{
    id: string;
    name: string;
    englishTitle: string;
    count: number;
    path: string;
    subtitle: string;
  }> = [
    { id: 'newborn-babies', name: 'Newborn Baby (नन्ही खुशी)', englishTitle: 'Newborn Baby', count: 100, path: '/newborn-babies-shayari/', subtitle: 'Baby Boy (छोटा प्रिंस - 50) व Baby Girl (लक्ष्मी परी - 50) के आगमन की बधाई शायरी' },
    { id: 'godh-bharai', name: 'Godh Bharai (गोद भराई)', englishTitle: 'Godh Bharai', count: 50, path: '/godh-bharai-shayari/', subtitle: 'Mom-to-Be, बेबी शावर और माँ बनने की पावन खुशी के लिए आशीर्वाद भरी शायरी' },
    { id: 'naamkaran-mundan', name: 'Naamkaran & Mundan', englishTitle: 'Naamkaran & Mundan', count: 50, path: '/naamkaran-mundan-shayari/', subtitle: 'नन्हे शिशु के शुभ नामकरण और चूड़ाकरण मुंडन संस्कार की मंगल बधाई शायरी' },
    { id: 'grah-pravesh', name: 'Grah Pravesh (गृह प्रवेश)', englishTitle: 'Grah Pravesh', count: 50, path: '/grah-pravesh-shayari/', subtitle: 'सपनों के नए आशियाने, कलश पूजन और शुभ गृह प्रवेश की हार्दिक बधाई शायरी' }
  ];

  const SSR_MONTHS: ReadonlyArray<{ id: string; nameEnglish: string; nameHindi: string }> = [
    { id: 'january', nameEnglish: 'January', nameHindi: 'जनवरी' },
    { id: 'february', nameEnglish: 'February', nameHindi: 'फरवरी' },
    { id: 'march', nameEnglish: 'March', nameHindi: 'मार्च' },
    { id: 'april', nameEnglish: 'April', nameHindi: 'अप्रैल' },
    { id: 'may', nameEnglish: 'May', nameHindi: 'मई' },
    { id: 'june', nameEnglish: 'June', nameHindi: 'जून' },
    { id: 'july', nameEnglish: 'July', nameHindi: 'जुलाई' },
    { id: 'august', nameEnglish: 'August', nameHindi: 'अगस्त' },
    { id: 'september', nameEnglish: 'September', nameHindi: 'सितंबर' },
    { id: 'october', nameEnglish: 'October', nameHindi: 'अक्टूबर' },
    { id: 'november', nameEnglish: 'November', nameHindi: 'नवंबर' },
    { id: 'december', nameEnglish: 'December', nameHindi: 'दिसंबर' }
  ];

  const SSR_HINDI_ROUTE_ALIASES: Record<string, string> = {
    'त्यौहार-शायरी': '/festival-shayari',
    'फीलिंग्स-शायरी': '/feelings-shayari',
    'प्यार-शायरी': '/feelings/love-shayari/',
    'दर्द-शायरी': '/feelings/sad-shayari/',
    'याद-शायरी': '/feelings/yaad-shayari/',
    'किस्मत-शायरी': '/feelings/kismat-shayari/',
    'खुशी-शायरी': '/feelings/khushi-shayari/',
    'एटीट्यूड-शायरी': '/feelings/attitude-shayari/',
    'तन्हाई-शायरी': '/feelings/alone-shayari/',
    'मोटिवेशनल-शायरी': '/feelings/motivational-shayari/',
    'माफी-शायरी': '/feelings/sorry-shayari/',
    'दोस्ती-शायरी': '/feelings/dosti-shayari/',
    'बेवफा-शायरी': '/feelings/bewafa-shayari/',
    'ब्रेकअप-शायरी': '/feelings/breakup-shayari/',
    'ज़िंदगी-शायरी': '/feelings/motivational-shayari/',
    'मोहब्बत-शायरी': '/feelings/love-shayari/',
    'फनी-शायरी': '/feelings/funny-shayari/',
    'चुटकुले-शायरी': '/feelings/funny-shayari/',
    'शराबी-शायरी': '/feelings/sharabi-shayari/',
    'दीपावली-शायरी': '/diwali-shayari',
    'होली-शायरी': '/holi-shayari',
    'अपनी-शायरी-लिखें': '/apni-shayari-likhe',
    'पसंदीदा-शायरी': '/pasandida-shayari',
    'ज़ेडक्यू-मोमेंट्स': '/zq-moments'
  };

  interface SsrBreadcrumbItem {
    name: string;
    path: string;
  }

  interface ServerSeoResult {
    title: string;
    description: string;
    canonicalPath: string;
    langCode: string;
    robots: string;
    valentineBasePath?: string;
    valentinePageSuffix?: string;
    hreflangPrefixSlug?: string;
    breadcrumbs: SsrBreadcrumbItem[];
  }

  function resolveValentineLang(raw?: string): (typeof SSR_VALENTINE_LANGS)[number] | undefined {
    if (!raw) return undefined;
    const cleaned = raw.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
    if (!cleaned) return undefined;
    const code = SSR_VALENTINE_LANG_ALIASES[cleaned];
    if (!code) return undefined;
    return SSR_VALENTINE_LANGS.find((l) => l.code === code);
  }

  function resolveServerSeoMeta(rawPathname: string): ServerSeoResult {
    let decodedPath = '/';
    try {
      decodedPath = decodeURIComponent(rawPathname).toLowerCase().replace(/\/+$/, '') || '/';
    } catch {
      decodedPath = rawPathname.toLowerCase().replace(/\/+$/, '') || '/';
    }

    let activePage = 1;
    const pageMatch = decodedPath.match(/^(.*?)\/page\/(\d+)$/);
    if (pageMatch) {
      decodedPath = pageMatch[1] || '/';
      const parsedNum = Number.parseInt(pageMatch[2], 10);
      if (Number.isFinite(parsedNum) && parsedNum >= 2) {
        activePage = parsedNum;
      }
    }

    const rangeStart = (activePage - 1) * 20 + 1;
    const rangeEnd = activePage * 20;

    const buildHomeSeo = (pg: number): ServerSeoResult => {
      const homeCanonical = buildPaginatedCleanPath('/', pg);
      const rStart = (pg - 1) * 20 + 1;
      const rEnd = pg * 20;
      return {
        title:
          pg >= 2
            ? clampSeoTitle(
                `Best Shayari - Page ${pg} (Love, Sad, Diwali) | ZQ Feelings`,
                `Best Shayari - Page ${pg} | ZQ Feelings`
              )
            : 'Best Shayari - Love, Sad, Diwali, Valentine | ZQ Feelings',
        description:
          pg >= 2
            ? `Best Shayari Page ${pg} (Shayari ${rStart}–${rEnd}) — Read trending Love, Sad, Diwali & Valentine Shayari in Hindi, English & Urdu on ZQ Feelings.`
            : 'Best Love, Sad, Diwali, Valentine and more festival & celebration Shayari in Hindi, English & Urdu for Boy & Girl - ZQ Feelings.',
        canonicalPath: homeCanonical,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          ...(pg >= 2 ? [{ name: `Page ${pg}`, path: homeCanonical }] : [])
        ]
      };
    };

    const cleanSlug = decodedPath.replace(/^\/+/, '');

    if (SSR_HINDI_ROUTE_ALIASES[cleanSlug]) {
      const aliasTarget =
        activePage >= 2
          ? buildPaginatedCleanPath(SSR_HINDI_ROUTE_ALIASES[cleanSlug], activePage)
          : SSR_HINDI_ROUTE_ALIASES[cleanSlug];
      return resolveServerSeoMeta(aliasTarget);
    }

    if (cleanSlug === '' || cleanSlug === 'index.html') {
      return buildHomeSeo(activePage);
    }

    // Legal & Info pages (static — never paginated)
    if (cleanSlug === 'about-us' || cleanSlug === 'about') {
      return {
        title: `About Us – Dil Ki Awaaz | ${SITE_BRAND}`,
        description:
          'About ZQ FEELINGS - Dil Ki Awaaz: 100% original Hindi, Hinglish, Urdu & 35-language Shayari for Feelings, Festivals, Valentine & Sanskar.',
        canonicalPath: '/about-us',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about-us' }
        ]
      };
    }
    if (cleanSlug === 'privacy-policy' || cleanSlug === 'privacy') {
      return {
        title: `Privacy Policy (गोपनीयता नीति) | ${SITE_BRAND}`,
        description:
          'Read the Privacy Policy of ZQ FEELINGS - Dil Ki Awaaz. Browse, copy, translate in 35 languages & save favorite Shayari with full privacy.',
        canonicalPath: '/privacy-policy',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' }
        ]
      };
    }
    if (
      cleanSlug === 'terms-and-conditions' ||
      cleanSlug === 'terms-of-service' ||
      cleanSlug === 'terms'
    ) {
      return {
        title: `Terms & Conditions (नियम व शर्तें) | ${SITE_BRAND}`,
        description:
          'Terms & Conditions for reading, personal WhatsApp/Facebook sharing, and posting user poetry on ZQ FEELINGS - Dil Ki Awaaz.',
        canonicalPath: '/terms-and-conditions',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Terms & Conditions', path: '/terms-and-conditions' }
        ]
      };
    }
    if (cleanSlug === 'disclaimer' || cleanSlug === 'copyright' || cleanSlug === 'dmca') {
      return {
        title: `Disclaimer & Copyright Policy | ${SITE_BRAND}`,
        description:
          '100% Original Content & Copyright Disclaimer of ZQ FEELINGS - Dil Ki Awaaz. Respectful poetry across faiths, festivals & traditions.',
        canonicalPath: '/disclaimer',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Disclaimer', path: '/disclaimer' }
        ]
      };
    }
    if (cleanSlug === 'contact-us' || cleanSlug === 'contact') {
      return {
        title: `Contact Us (संपर्क करें) | ${SITE_BRAND}`,
        description:
          'Contact ZQ FEELINGS - Dil Ki Awaaz support team for feedback, suggestions, collaborations, or poetry inquiries.',
        canonicalPath: '/contact-us',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact-us' }
        ]
      };
    }

    // Core feature pages
    if (cleanSlug === 'zq-moments' || cleanSlug === 'moments') {
      return {
        title: `ZQ-MOMENTS 💗 – Shayari Photo Status | ${SITE_BRAND}`,
        description:
          'Explore ZQ-MOMENTS 💗 — live photo status feed with 1–9 photos, 30 stylish fonts, copyable Hindi Shayari captions, likes & comments.',
        canonicalPath: '/zq-moments',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'ZQ Moments', path: '/zq-moments' }
        ]
      };
    }
    if (cleanSlug === 'admin-zq') {
      return {
        title: `ZQ Admin Moderation | ${SITE_BRAND}`,
        description:
          'Admin moderation console for Global Auto-Approved Shayaris on ZQ FEELINGS - Dil Ki Awaaz.',
        canonicalPath: '/admin-zq',
        langCode: 'hi',
        robots: 'noindex, nofollow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Admin', path: '/admin-zq' }
        ]
      };
    }
    if (
      cleanSlug === 'apni-shayari-likhe' ||
      cleanSlug === 'apni-shayari' ||
      cleanSlug === 'write-shayari'
    ) {
      return {
        title: `Apni Shayari Likhe (अपनी शायरी लिखें) | ${SITE_BRAND}`,
        description:
          'Write your own Hindi Shayari across Love, Sad, Attitude, Festival & Dosti categories, save cards, and share on WhatsApp — ZQ Feelings.',
        canonicalPath: '/apni-shayari-likhe',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Apni Shayari Likhe', path: '/apni-shayari-likhe' }
        ]
      };
    }
    if (
      cleanSlug === 'pasandida-shayari' ||
      cleanSlug === 'pasandida' ||
      cleanSlug === 'favorites'
    ) {
      return {
        title: `Pasandida Shayari – Saved Hindi Shayari | ${SITE_BRAND}`,
        description:
          'View, copy, and share your saved favorite (Pasandida) Hindi Shayari, Festival Wishes & custom poetry anytime on ZQ FEELINGS.',
        canonicalPath: '/pasandida-shayari',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Pasandida Shayari', path: '/pasandida-shayari' }
        ]
      };
    }
    if (cleanSlug === 'zq-feelings-shayari' || cleanSlug === 'zq-official') {
      return {
        title: `ZQ Official Verified Hindi Shayari | ${SITE_BRAND}`,
        description:
          'Read verified official Hindi, Hinglish & English Shayari curated by ZQ FEELINGS - Dil Ki Awaaz across Love, Sad, Attitude & Festivals.',
        canonicalPath: '/zq-feelings-shayari',
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'ZQ Official Shayari', path: '/zq-feelings-shayari' }
        ]
      };
    }

    // Valentine Week Hub + 15 Days + 35 Languages + Page 2
    const buildValentineMeta = (
      dayMeta?: (typeof SSR_VALENTINE_DAYS)[number],
      langMeta?: (typeof SSR_VALENTINE_LANGS)[number],
      pg = activePage
    ): ServerSeoResult => {
      const hasCustomLang = !!(langMeta && langMeta.code !== 'hi');
      const rStart = (pg - 1) * 20 + 1;
      const rEnd = pg * 20;

      if (dayMeta) {
        const basePath = `/valentine-week/${dayMeta.id}-shayari`;
        const langBasePath = hasCustomLang ? `${basePath}/${langMeta!.slug}` : basePath;
        const canonicalPath = buildPaginatedCleanPath(langBasePath, pg);
        const valentinePageSuffix = pg >= 2 ? `/page/${pg}` : undefined;

        const title =
          pg >= 2
            ? hasCustomLang
              ? clampSeoTitle(
                  `${dayMeta.shortName} Shayari in ${langMeta!.englishName} – Page ${pg} | ZQ`,
                  `${dayMeta.shortName} (${langMeta!.englishName}) – Page ${pg} | ZQ`,
                  `${dayMeta.shortName} (${langMeta!.slug}) – Page ${pg} | ZQ`
                )
              : clampSeoTitle(
                  `${dayMeta.shortName} Shayari 2026 – Page ${pg} | ZQ Feelings`,
                  `${dayMeta.shortName} Shayari – Page ${pg} | ZQ Feelings`
                )
            : hasCustomLang
              ? clampSeoTitle(
                  `${dayMeta.shortName} Shayari in ${langMeta!.englishName} | ZQ Feelings`,
                  `${dayMeta.shortName} Shayari (${langMeta!.englishName}) | ZQ`,
                  `${dayMeta.shortName} (${langMeta!.slug}) | ZQ Feelings`
                )
              : clampSeoTitle(
                  `40+ Best ${dayMeta.shortName} Shayari 2026 | ZQ Feelings`,
                  `${dayMeta.shortName} Shayari 2026 | ZQ Feelings`
                );

        const description =
          pg >= 2
            ? hasCustomLang
              ? `${dayMeta.shortName} Shayari in ${langMeta!.englishName} (${langMeta!.nativeLabel}) – Page ${pg} (Shayari ${rStart}–${rEnd}): ${dayMeta.dateLabel} wishes on ZQ Feelings.`
              : `${dayMeta.shortName} Shayari 2026 (${dayMeta.dateLabel}) – Page ${pg} (Shayari ${rStart}–${rEnd}): ${dayMeta.hindiName} with 20 stylish fonts & share.`
            : hasCustomLang
              ? `Read 40+ Best ${dayMeta.shortName} Shayari 2026 (${dayMeta.dateLabel}) in ${langMeta!.englishName} (${langMeta!.nativeLabel}) with 20 stylish fonts & WhatsApp share.`
              : `Read 40+ Best ${dayMeta.shortName} Shayari 2026 (${dayMeta.dateLabel} • ${dayMeta.hindiName}) in Hindi with 20 stylish fonts, copy & WhatsApp share.`;

        return {
          title,
          description,
          canonicalPath,
          valentineBasePath: basePath,
          valentinePageSuffix,
          langCode: langMeta?.hreflang || 'hi',
          robots: 'index, follow',
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Valentine Week Special', path: '/valentine-week' },
            { name: `${dayMeta.shortName} Shayari`, path: basePath },
            ...(hasCustomLang ? [{ name: langMeta!.englishName, path: langBasePath }] : []),
            ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
          ]
        };
      }

      const baseHubPath = '/valentine-week';
      const canonicalHubPath = hasCustomLang ? `${baseHubPath}/${langMeta!.slug}` : baseHubPath;
      return {
        title: hasCustomLang
          ? clampSeoTitle(
              `Valentine Week Shayari in ${langMeta!.englishName} | ZQ Feelings`,
              `Valentine Shayari (${langMeta!.englishName}) | ZQ`,
              `Valentine (${langMeta!.slug}) | ZQ Feelings`
            )
          : 'Valentine Week Shayari (7–21 Feb) – 600+ | ZQ Feelings',
        description: hasCustomLang
          ? `Valentine Week Shayari in ${langMeta!.englishName} (${langMeta!.nativeLabel}) — 600 unique poems across 15 days (7–21 Feb) with 20 stylish fonts.`
          : 'Valentine Week Special (7–21 Feb) — Read 600 original Shayari across all 15 days from Rose Day to Breakup Day in Hindi & 35 languages on ZQ Feelings.',
        canonicalPath: canonicalHubPath,
        valentineBasePath: baseHubPath,
        langCode: langMeta?.hreflang || 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Valentine Week Special', path: baseHubPath },
          ...(hasCustomLang ? [{ name: langMeta!.englishName, path: canonicalHubPath }] : [])
        ]
      };
    };

    if (
      cleanSlug === 'valentine-week' ||
      cleanSlug === 'valentine-week-special' ||
      cleanSlug === 'valentine-week-shayari' ||
      cleanSlug === 'valentine' ||
      cleanSlug === 'valentine-shayari' ||
      cleanSlug === 'feelings/valentine-week' ||
      cleanSlug === 'festival/valentine-week' ||
      cleanSlug === 'वैलेंटाइन-वीक-शायरी'
    ) {
      return buildValentineMeta(undefined, undefined, 1);
    }

    if (cleanSlug.startsWith('valentine-week/')) {
      const segments = cleanSlug.split('/').filter(Boolean);
      if (segments.length >= 2) {
        const seg1Stripped = segments[1].replace(/-shayari$/, '');
        const matchedDay = SSR_VALENTINE_DAYS.find((d) => d.id === seg1Stripped);
        if (matchedDay) {
          const parsedLang = segments[2] ? resolveValentineLang(segments[2]) : undefined;
          return buildValentineMeta(matchedDay, parsedLang, activePage);
        }
        const hubLang = resolveValentineLang(segments[1]);
        if (hubLang) {
          return buildValentineMeta(undefined, hubLang, 1);
        }
      }
      return buildValentineMeta(undefined, undefined, 1);
    }

    for (const vDay of SSR_VALENTINE_DAYS) {
      if (cleanSlug === vDay.id || cleanSlug === `${vDay.id}-shayari`) {
        return buildValentineMeta(vDay, undefined, activePage);
      }
      if (cleanSlug === `${vDay.id}-shayari-2` || cleanSlug === `${vDay.id}-shayari-3`) {
        return buildValentineMeta(vDay, undefined, 2);
      }
    }

    // Hub pages
    if (cleanSlug === 'festival-shayari' || cleanSlug === 'festival.html' || cleanSlug === 'festival') {
      const baseHubPath = '/festival-shayari';
      const canonicalHubPath = buildPaginatedCleanPath(baseHubPath, activePage);
      return {
        title:
          activePage >= 2
            ? clampSeoTitle(
                `Festival Shayari in Hindi – Page ${activePage} | ZQ Feelings`,
                `Festival Shayari – Page ${activePage} | ZQ Feelings`
              )
            : `Festival Shayari in Hindi – Diwali, Holi | ${SITE_BRAND}`,
        description:
          activePage >= 2
            ? `Festival Shayari in Hindi – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): Diwali, Holi, Eid & Navratri wishes on ZQ Feelings.`
            : 'Explore 27 Indian Festival Shayari in Hindi — Diwali, Holi, Eid, Rakshabandhan, Navratri & Chhath Puja 2-4 line wishes to copy & share.',
        canonicalPath: canonicalHubPath,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Festival Shayari', path: baseHubPath },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
        ]
      };
    }

    // Helper builders for 35-language Static SEO (Feelings Hub, Feelings Categories, Maafi Subcategories, New Year & Christmas)
    const buildSsrFeelingsPath = (
      hindiBase: string,
      langMeta?: (typeof SSR_VALENTINE_LANGS)[number],
      pg = activePage
    ): string => {
      const trimmed = hindiBase.replace(/\/+$/, '');
      const hasCustom = !!(langMeta && langMeta.code !== 'hi');
      const langBase = hasCustom ? `${trimmed}/${langMeta!.slug}` : hindiBase;
      if (pg >= 2) {
        return `${langBase.replace(/\/+$/, '')}/page/${pg}`;
      }
      return langBase;
    };

    const buildFeelingsHubMeta = (
      langMeta: (typeof SSR_VALENTINE_LANGS)[number] = SSR_VALENTINE_LANGS[0],
      pg = activePage
    ): ServerSeoResult => {
      const hasCustomLang = langMeta.code !== 'hi';
      const baseHubPath = '/feelings-shayari';
      const langHubBasePath = buildSsrFeelingsPath(baseHubPath, langMeta, 1);
      const canonicalHubPath = buildSsrFeelingsPath(baseHubPath, langMeta, pg);
      const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
      const rStart = (pg - 1) * 20 + 1;
      const rEnd = pg * 20;

      return {
        title:
          pg >= 2
            ? hasCustomLang
              ? clampSeoTitle(
                  `Feelings Shayari in ${langMeta.englishName} – Page ${pg} | ZQ`,
                  `Feelings Shayari (${langMeta.englishName}) P${pg} | ZQ`
                )
              : clampSeoTitle(
                  `Feelings Shayari – Page ${pg} (Love & Sad) | ZQ Feelings`,
                  `Feelings Shayari – Page ${pg} | ZQ Feelings`
                )
            : hasCustomLang
              ? clampSeoTitle(
                  `Feelings Shayari in ${langMeta.englishName} – Love & Sad | ZQ`,
                  `Feelings Shayari in ${langMeta.englishName} | ZQ Feelings`,
                  `Feelings Shayari (${langMeta.englishName}) | ZQ`
                )
              : `Feelings Shayari in Hindi – Love & Sad | ${SITE_BRAND}`,
        description:
          pg >= 2
            ? hasCustomLang
              ? `Feelings Shayari in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): Love, Sad, Attitude & Dosti poetry on ZQ Feelings.`
              : `Feelings Shayari in Hindi – Page ${pg} (Shayari ${rStart}–${rEnd}): Love, Sad, Yaad, Attitude, Dosti & Emotional status on ZQ Feelings.`
            : hasCustomLang
              ? `Read 1,631+ Feelings Shayari in ${langMeta.englishName} (${langMeta.nativeLabel}) — Love, Sad, Yaad, Attitude, Dosti & Sorry poetry on ZQ Feelings.`
              : 'Read 1,631+ unique Feelings Shayari in Hindi & 35 languages — Love, Sad, Yaad, Alone, Motivational, Sorry, Attitude, Dosti & Funny Shayari.',
        canonicalPath: canonicalHubPath,
        valentineBasePath: baseHubPath,
        valentinePageSuffix: pageSuffix,
        langCode: langMeta.hreflang,
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Feelings Shayari', path: baseHubPath },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langHubBasePath }] : []),
          ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalHubPath }] : [])
        ]
      };
    };

    const buildMaafiMeta = (
      m: (typeof SSR_MAAFI_SUBS)[number],
      langMeta: (typeof SSR_VALENTINE_LANGS)[number] = SSR_VALENTINE_LANGS[0],
      pg = activePage
    ): ServerSeoResult => {
      const hasCustomLang = langMeta.code !== 'hi';
      const hindiBase = m.slug;
      const langBasePath = buildSsrFeelingsPath(hindiBase, langMeta, 1);
      const canonicalPath = buildSsrFeelingsPath(hindiBase, langMeta, pg);
      const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
      const rStart = (pg - 1) * 20 + 1;
      const rEnd = pg * 20;

      return {
        title:
          pg >= 2
            ? hasCustomLang
              ? clampSeoTitle(
                  `${m.englishTitle} Shayari (${langMeta.englishName}) – Page ${pg} | ZQ`,
                  `${m.englishTitle} (${langMeta.englishName}) – Page ${pg} | ZQ`,
                  `${m.englishTitle} (${langMeta.slug}) P${pg} | ZQ`
                )
              : clampSeoTitle(
                  `${m.englishTitle} Shayari – Page ${pg} | ZQ Feelings`,
                  `${m.englishTitle} – Page ${pg} | ZQ`
                )
            : hasCustomLang
              ? clampSeoTitle(
                  `${m.englishTitle} Shayari in ${langMeta.englishName} | ZQ Feelings`,
                  `${m.englishTitle} Shayari (${langMeta.englishName}) | ZQ`,
                  `${m.englishTitle} (${langMeta.slug}) | ZQ`
                )
              : clampSeoTitle(
                  `${m.name} Shayari | ${SITE_BRAND}`,
                  `${m.englishTitle} Shayari | ${SITE_BRAND}`
                ),
        description:
          pg >= 2
            ? hasCustomLang
              ? `${m.englishTitle} Shayari in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): heartfelt apology status on ZQ Feelings.`
              : `${m.name} Shayari – Page ${pg} (Shayari ${rStart}–${rEnd}): heartfelt apology status on ZQ Feelings.`
            : hasCustomLang
              ? `Read ${m.count} heartfelt ${m.englishTitle} Shayari in ${langMeta.englishName} (${langMeta.nativeLabel}) — emotional apology poetry with 20 stylish fonts & share.`
              : `Read ${m.count} heartfelt ${m.name} Shayari in Hindi, Hinglish & English — emotional apology lines with 20 stylish fonts & share.`,
        canonicalPath,
        valentineBasePath: hindiBase,
        valentinePageSuffix: pageSuffix,
        langCode: langMeta.hreflang,
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Feelings Shayari', path: '/feelings-shayari' },
          { name: `${m.englishTitle} Shayari`, path: hindiBase },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
          ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
        ]
      };
    };

    const buildFeelingMeta = (
      f: (typeof SSR_FEELINGS)[number],
      langMeta: (typeof SSR_VALENTINE_LANGS)[number] = SSR_VALENTINE_LANGS[0],
      pg = activePage
    ): ServerSeoResult => {
      const hasCustomLang = langMeta.code !== 'hi';
      const hindiBase = f.slug;
      const langBasePath = buildSsrFeelingsPath(hindiBase, langMeta, 1);
      const canonicalPath = buildSsrFeelingsPath(hindiBase, langMeta, pg);
      const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
      const rStart = (pg - 1) * 20 + 1;
      const rEnd = pg * 20;
      const feelDisplayName =
        f.id === 'birthday-feelings' ? 'Birthday Feelings Shayari' : f.name;
      const feelShortRoot = feelDisplayName.replace(/\s+Shayari$/i, '');

      return {
        title:
          pg >= 2
            ? hasCustomLang
              ? clampSeoTitle(
                  `${feelDisplayName} in ${langMeta.englishName} – Page ${pg} | ZQ`,
                  `${feelShortRoot} Shayari (${langMeta.englishName}) P${pg} | ZQ`,
                  `${feelShortRoot} (${langMeta.slug}) P${pg} | ZQ`
                )
              : clampSeoTitle(
                  `${feelDisplayName} – Page ${pg} | ZQ Feelings`,
                  `${feelDisplayName} P${pg} | ZQ Feelings`
                )
            : hasCustomLang
              ? clampSeoTitle(
                  `${feelDisplayName} in ${langMeta.englishName} | ZQ Feelings`,
                  `${feelDisplayName} (${langMeta.englishName}) | ZQ`,
                  `${feelShortRoot} (${langMeta.slug}) | ZQ Feelings`
                )
              : clampSeoTitle(
                  `${f.name} (${f.hindiName}) | ${SITE_BRAND}`,
                  `${f.name} in Hindi | ${SITE_BRAND}`
                ),
        description:
          pg >= 2
            ? hasCustomLang
              ? `${feelDisplayName} in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): pre-translated status with 20 stylish fonts & share.`
              : `${f.name} (${f.hindiName}) – Page ${pg} (Shayari ${rStart}–${rEnd}): Hindi, Hinglish & English status with 20 stylish fonts.`
            : hasCustomLang
              ? `Read Best ${feelDisplayName} in ${langMeta.englishName} (${langMeta.nativeLabel}) — original emotional poetry with 20 stylish fonts & WhatsApp share.`
              : f.seoDescription,
        canonicalPath,
        valentineBasePath: hindiBase,
        valentinePageSuffix: pageSuffix,
        langCode: langMeta.hreflang,
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Feelings Shayari', path: '/feelings-shayari' },
          { name: f.name, path: hindiBase },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
          ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
        ]
      };
    };

    const buildHoliday35Meta = (
      holidayId: 'new-year' | 'christmas',
      langMeta: (typeof SSR_VALENTINE_LANGS)[number] = SSR_VALENTINE_LANGS[0],
      pg = activePage
    ): ServerSeoResult => {
      const holMeta = SSR_HOLIDAY_35[holidayId];
      const hasCustomLang = langMeta.code !== 'hi';
      const hindiBasePath = `/hi/${holidayId}-shayari`;
      const langBasePath = `/${langMeta.isoPrefix}/${holidayId}-shayari`;
      const canonicalPath = pg >= 2 ? `${langBasePath}/page/${pg}` : langBasePath;
      const pageSuffix = pg >= 2 ? `/page/${pg}` : undefined;
      const rStart = (pg - 1) * 20 + 1;
      const rEnd = pg * 20;

      const title =
        pg >= 2
          ? clampSeoTitle(
              `${holMeta.shortName} Shayari (${langMeta.englishName}) – Page ${pg} | ZQ`,
              `${holMeta.shortName} (${langMeta.englishName}) P${pg} | ZQ`
            )
          : hasCustomLang
            ? holidayId === 'new-year'
              ? clampSeoTitle(
                  `New Year Shayari in ${langMeta.englishName} (1 Jan) | ZQ Feelings`,
                  `New Year Shayari in ${langMeta.englishName} | ZQ Feelings`,
                  `New Year Shayari (${langMeta.englishName}) | ZQ`
                )
              : clampSeoTitle(
                  `Christmas Shayari in ${langMeta.englishName} (25 Dec) | ZQ`,
                  `Christmas Day Shayari (${langMeta.englishName}) | ZQ`,
                  `Christmas (${langMeta.englishName}) | ZQ`
                )
            : holidayId === 'new-year'
              ? 'New Year Shayari 2026 in Hindi (नया साल) | ZQ Feelings'
              : 'Christmas Day Shayari in Hindi (क्रिसमस) | ZQ Feelings';

      const description =
        pg >= 2
          ? `${holMeta.name} Shayari in ${langMeta.englishName} – Page ${pg} (Shayari ${rStart}–${rEnd}): ${holMeta.dateLabel} wishes with 20 stylish fonts & share.`
          : hasCustomLang
            ? `Best ${holMeta.name} Shayari in ${langMeta.englishName} (${langMeta.nativeLabel} • ${holMeta.dateLabel}) — 25 original wishes with 20 stylish fonts & WhatsApp share.`
            : `Best ${holMeta.name} Shayari in Hindi (${holMeta.hindiName} शायरी • ${holMeta.dateLabel}) — 25 original wishes in 35 languages, 20 stylish fonts & share.`;

      return {
        title,
        description,
        canonicalPath,
        hreflangPrefixSlug: `${holidayId}-shayari`,
        valentinePageSuffix: pageSuffix,
        langCode: langMeta.hreflang,
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Festival Shayari', path: '/festival-shayari' },
          { name: `${holMeta.name} Shayari`, path: hindiBasePath },
          ...(hasCustomLang ? [{ name: langMeta.englishName, path: langBasePath }] : []),
          ...(pg >= 2 ? [{ name: `Page ${pg}`, path: canonicalPath }] : [])
        ]
      };
    };

    const resolveSsrFeelingsToken = (
      rawSub: string
    ):
      | { kind: 'maafi'; meta: (typeof SSR_MAAFI_SUBS)[number] }
      | { kind: 'feeling'; meta: (typeof SSR_FEELINGS)[number] }
      | null => {
      const subPath = rawSub.replace(/^\/+|\/+$/g, '');
      const strippedSub = subPath.replace(/-shayari$/, '');

      const matchedMaafi = SSR_MAAFI_SUBS.find((m) => m.id === strippedSub || m.id === subPath);
      if (matchedMaafi) return { kind: 'maafi', meta: matchedMaafi };

      if (subPath === 'birthday-shayari' || strippedSub === 'birthday') {
        const bdayFeel = SSR_FEELINGS.find((f) => f.id === 'birthday-feelings');
        if (bdayFeel) return { kind: 'feeling', meta: bdayFeel };
      }

      for (const feeling of SSR_FEELINGS) {
        const cleanFeelSlug = feeling.slug.replace(/^\/feelings\/+|\/+$/g, '');
        if (
          subPath === cleanFeelSlug ||
          subPath === `${feeling.id}-shayari` ||
          subPath === feeling.id
        ) {
          return { kind: 'feeling', meta: feeling };
        }
      }

      const mappedId = SSR_FEELINGS_MERGE_MAP[strippedSub];
      if (mappedId) {
        const foundMapped = SSR_FEELINGS.find((f) => f.id === mappedId);
        if (foundMapped) return { kind: 'feeling', meta: foundMapped };
      }
      return null;
    };

    if (cleanSlug === 'feelings-shayari' || cleanSlug === 'feelings.html' || cleanSlug === 'feelings') {
      return buildFeelingsHubMeta(SSR_VALENTINE_LANGS[0], activePage);
    }

    if (cleanSlug.startsWith('feelings-shayari/')) {
      const hubLang = resolveValentineLang(cleanSlug.slice('feelings-shayari/'.length));
      if (hubLang) {
        return buildFeelingsHubMeta(hubLang, activePage);
      }
    }

    if (cleanSlug.includes('/')) {
      const pathSegs = cleanSlug.split('/').filter(Boolean);
      const maybePrefixLang = resolveValentineLang(pathSegs[0]);
      if (
        maybePrefixLang &&
        pathSegs[0] !== 'feelings' &&
        pathSegs[0] !== 'religious' &&
        pathSegs[0] !== 'family-rituals' &&
        pathSegs[0] !== 'valentine-week' &&
        pathSegs[0] !== 'maafi'
      ) {
        if (pathSegs.length === 2) {
          const s1 = pathSegs[1];
          if (s1 === 'new-year-shayari' || s1 === 'new-year') {
            return buildHoliday35Meta('new-year', maybePrefixLang, activePage);
          }
          if (s1 === 'christmas-shayari' || s1 === 'christmas' || s1 === 'christmas-day-shayari') {
            return buildHoliday35Meta('christmas', maybePrefixLang, activePage);
          }
          if (s1 === 'feelings-shayari' || s1 === 'feelings') {
            return buildFeelingsHubMeta(maybePrefixLang, activePage);
          }
          const directFeel = resolveSsrFeelingsToken(s1);
          if (directFeel) {
            return directFeel.kind === 'maafi'
              ? buildMaafiMeta(directFeel.meta, maybePrefixLang, activePage)
              : buildFeelingMeta(directFeel.meta, maybePrefixLang, activePage);
          }
        } else if (pathSegs.length === 3 && pathSegs[1] === 'feelings') {
          const prefFeel = resolveSsrFeelingsToken(pathSegs[2]);
          if (prefFeel) {
            return prefFeel.kind === 'maafi'
              ? buildMaafiMeta(prefFeel.meta, maybePrefixLang, activePage)
              : buildFeelingMeta(prefFeel.meta, maybePrefixLang, activePage);
          }
        }
      }

      if (pathSegs.length === 2) {
        const maybeSuffixLang = resolveValentineLang(pathSegs[1]);
        if (maybeSuffixLang) {
          if (pathSegs[0] === 'new-year-shayari' || pathSegs[0] === 'new-year') {
            return buildHoliday35Meta('new-year', maybeSuffixLang, activePage);
          }
          if (pathSegs[0] === 'christmas-shayari' || pathSegs[0] === 'christmas') {
            return buildHoliday35Meta('christmas', maybeSuffixLang, activePage);
          }
        }
      }
    }

    if (
      cleanSlug === '12-months-special-days-shayari' ||
      cleanSlug === 'special-days-shayari' ||
      cleanSlug.startsWith('zq-mansoon-special')
    ) {
      const baseHubPath = '/12-months-special-days-shayari';
      const canonicalHubPath = buildPaginatedCleanPath(baseHubPath, activePage);
      return {
        title:
          activePage >= 2
            ? clampSeoTitle(
                `12 Months Special Shayari – Page ${activePage} | ZQ Feelings`,
                `Special Days – Page ${activePage} | ZQ Feelings`
              )
            : `12 Months Special Days Shayari in Hindi | ${SITE_BRAND}`,
        description:
          activePage >= 2
            ? `12 Months Special Days Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): Jan–Dec wishes in Hindi on ZQ Feelings.`
            : 'Complete Jan–Dec 12 Months Special Days Shayari in Hindi with 20 stylish fonts, 35 languages, one-click copy & WhatsApp share.',
        canonicalPath: canonicalHubPath,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: '12 Months Special Days', path: baseHubPath },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalHubPath }] : [])
        ]
      };
    }

    // 12 Months Special subpages
    for (const month of SSR_MONTHS) {
      if (cleanSlug === `${month.id}-special-shayari` || cleanSlug === `${month.id}-shayari`) {
        const basePath = `/${month.id}-special-shayari`;
        const canonicalPath = buildPaginatedCleanPath(basePath, activePage);
        return {
          title:
            activePage >= 2
              ? clampSeoTitle(
                  `${month.nameEnglish} Special Shayari – Page ${activePage} | ZQ Feelings`,
                  `${month.nameEnglish} Shayari – Page ${activePage} | ZQ`
                )
              : clampSeoTitle(
                  `${month.nameEnglish} Special Days Shayari | ${SITE_BRAND}`,
                  `${month.nameEnglish} Shayari | ${SITE_BRAND}`
                ),
          description:
            activePage >= 2
              ? `${month.nameEnglish} (${month.nameHindi}) Special Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): world & national days wishes on ZQ Feelings.`
              : `Celebrate ${month.nameEnglish} (${month.nameHindi}) national & world special days with 200 unique Hindi Shayari, 35 languages & WhatsApp share.`,
          canonicalPath,
          langCode: 'hi',
          robots: 'index, follow',
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: '12 Months Special', path: '/12-months-special-days-shayari' },
            { name: `${month.nameEnglish} Shayari`, path: basePath },
            ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
          ]
        };
      }
    }

    // Religious pages
    const buildReligiousMeta = (rel: (typeof SSR_RELIGIOUS)[number]): ServerSeoResult => {
      const canonicalPath = buildPaginatedCleanPath(rel.path, activePage);
      return {
        title:
          activePage >= 2
            ? clampSeoTitle(
                `${rel.englishTitle} Shayari – Page ${activePage} | ZQ Feelings`,
                `${rel.englishTitle} – Page ${activePage} | ZQ`
              )
            : clampSeoTitle(
                `${rel.englishTitle} Shayari in Hindi | ${SITE_BRAND}`,
                `${rel.englishTitle} Shayari | ${SITE_BRAND}`
              ),
        description:
          activePage >= 2
            ? `${rel.name} Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd} of ${rel.count}): spiritual quotes & poetry in 20 stylish fonts on ZQ Feelings.`
            : `Read ${rel.count} original ${rel.name} Shayari in Hindi, Hinglish & English — spiritual bhakti & dua poetry with 20 stylish fonts & share.`,
        canonicalPath,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: `${rel.englishTitle} Shayari`, path: rel.path },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    };

    if (cleanSlug === 'religious' || cleanSlug === 'dharmik-shayari') {
      return buildReligiousMeta(SSR_RELIGIOUS[0]);
    }
    if (cleanSlug.startsWith('religious/')) {
      const relSub = cleanSlug.replace(/^religious\/+/, '').replace(/\/+$/, '').replace(/-shayari$/, '');
      const foundRel = SSR_RELIGIOUS.find((c) => c.id === relSub) || SSR_RELIGIOUS[0];
      return buildReligiousMeta(foundRel);
    }
    for (const rel of SSR_RELIGIOUS) {
      if (cleanSlug === rel.id || cleanSlug === `${rel.id}-shayari`) {
        return buildReligiousMeta(rel);
      }
    }

    // Family Rituals pages
    const buildRitualMeta = (rit: (typeof SSR_RITUALS)[number]): ServerSeoResult => {
      const canonicalPath = buildPaginatedCleanPath(rit.path, activePage);
      return {
        title:
          activePage >= 2
            ? clampSeoTitle(
                `${rit.englishTitle} Shayari – Page ${activePage} | ZQ Feelings`,
                `${rit.englishTitle} – Page ${activePage} | ZQ`
              )
            : clampSeoTitle(
                `${rit.name} Shayari | ${SITE_BRAND}`,
                `${rit.englishTitle} Shayari | ${SITE_BRAND}`
              ),
        description:
          activePage >= 2
            ? `${rit.name} Shayari – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd} of ${rit.count}): auspicious family sanskar wishes with stylish fonts.`
            : `Read ${rit.count} unique ${rit.name} Shayari in Hindi, Hinglish & English — heartfelt family sanskar wishes with 20 stylish fonts & share.`,
        canonicalPath,
        langCode: 'hi',
        robots: 'index, follow',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: `${rit.englishTitle} Shayari`, path: rit.path },
          ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
        ]
      };
    };

    if (cleanSlug === 'family-rituals' || cleanSlug === 'sanskar-shayari') {
      return buildRitualMeta(SSR_RITUALS[0]);
    }
    if (cleanSlug.startsWith('family-rituals/')) {
      const ritSub = cleanSlug
        .replace(/^family-rituals\/+/, '')
        .replace(/\/+$/, '')
        .replace(/-shayari$/, '');
      const foundRit = SSR_RITUALS.find((c) => c.id === ritSub) || SSR_RITUALS[0];
      return buildRitualMeta(foundRit);
    }
    for (const rit of SSR_RITUALS) {
      if (cleanSlug === rit.id || cleanSlug === `${rit.id}-shayari`) {
        return buildRitualMeta(rit);
      }
    }

    // Maafi subpages + Feelings pages
    if (cleanSlug.startsWith('maafi/')) {
      const segs = cleanSlug.split('/').filter(Boolean);
      const maafiSub = (segs[1] || '').replace(/-shayari$/, '');
      const parsedLang = (segs[2] ? resolveValentineLang(segs[2]) : undefined) || SSR_VALENTINE_LANGS[0];
      const foundMaafi = SSR_MAAFI_SUBS.find((m) => m.id === maafiSub);
      if (foundMaafi) return buildMaafiMeta(foundMaafi, parsedLang, activePage);
      return buildFeelingMeta(SSR_FEELINGS.find((f) => f.id === 'sorry')!, parsedLang, activePage);
    }

    for (const maafiSub of SSR_MAAFI_SUBS) {
      if (cleanSlug === maafiSub.id || cleanSlug === `${maafiSub.id}-shayari`) {
        return buildMaafiMeta(maafiSub, SSR_VALENTINE_LANGS[0], activePage);
      }
    }

    if (cleanSlug.startsWith('feelings/')) {
      const feelSegs = cleanSlug.split('/').filter(Boolean);
      const subPath = feelSegs[1] || '';
      const strippedSub = subPath.replace(/-shayari$/, '');

      if (!feelSegs[2]) {
        const matchedRel = SSR_RELIGIOUS.find((r) => r.id === strippedSub);
        if (matchedRel) return buildReligiousMeta(matchedRel);

        const matchedRit = SSR_RITUALS.find((r) => r.id === strippedSub);
        if (matchedRit) return buildRitualMeta(matchedRit);
      }

      const resolvedFeel = resolveSsrFeelingsToken(subPath);
      if (resolvedFeel) {
        const parsedLang =
          (feelSegs[2] ? resolveValentineLang(feelSegs[2]) : undefined) || SSR_VALENTINE_LANGS[0];
        return resolvedFeel.kind === 'maafi'
          ? buildMaafiMeta(resolvedFeel.meta, parsedLang, activePage)
          : buildFeelingMeta(resolvedFeel.meta, parsedLang, activePage);
      }
    }

    // 27 Festival pages (New Year & Christmas use 35-language Static SEO)
    for (const fest of SSR_FESTIVALS) {
      if (cleanSlug === `${fest.id}-shayari` || cleanSlug === fest.id) {
        if (fest.id === 'new-year' || fest.id === 'christmas') {
          return buildHoliday35Meta(fest.id, SSR_VALENTINE_LANGS[0], activePage);
        }
        const basePath = `/${fest.id}-shayari`;
        const canonicalPath = buildPaginatedCleanPath(basePath, activePage);
        return {
          title:
            activePage >= 2
              ? clampSeoTitle(
                  `${fest.name} Festival Shayari – Page ${activePage} | ZQ`,
                  `${fest.name} – Page ${activePage} | ZQ Feelings`,
                  `${fest.id} – P${activePage} | ZQ Feelings`
                )
              : clampSeoTitle(
                  `${fest.name} Shayari in Hindi | ${SITE_BRAND}`,
                  `${fest.name} Shayari | ${SITE_BRAND}`
                ),
          description:
            activePage >= 2
              ? `${fest.name} Shayari (${fest.hindiName}) – Page ${activePage} (Shayari ${rangeStart}–${rangeEnd}): unique festival wishes with stylish fonts & share.`
              : `Best ${fest.name} Shayari in Hindi (${fest.hindiName} शायरी) — 25 unique 2-4 line wishes with 20 stylish fonts, copy & WhatsApp share.`,
          canonicalPath,
          langCode: 'hi',
          robots: 'index, follow',
          breadcrumbs: [
            { name: 'Home', path: '/' },
            { name: 'Festival Shayari', path: '/festival-shayari' },
            { name: `${fest.name} Shayari`, path: basePath },
            ...(activePage >= 2 ? [{ name: `Page ${activePage}`, path: canonicalPath }] : [])
          ]
        };
      }
    }

    // Direct or legacy feelings aliases (e.g. /love-shayari, /love-shayari/tamil, /love-shayari/page/2)
    for (const feeling of SSR_FEELINGS) {
      if (cleanSlug === `${feeling.id}-shayari` || cleanSlug === feeling.id) {
        return buildFeelingMeta(feeling, SSR_VALENTINE_LANGS[0], activePage);
      }
      if (cleanSlug.startsWith(`${feeling.id}-shayari/`)) {
        const tailLang = resolveValentineLang(cleanSlug.slice(`${feeling.id}-shayari/`.length));
        if (tailLang) {
          return buildFeelingMeta(feeling, tailLang, activePage);
        }
      }
    }

    const strippedLegacy = cleanSlug.replace(/-shayari$/, '');
    if (SSR_FEELINGS_MERGE_MAP[strippedLegacy]) {
      const foundMapped = SSR_FEELINGS.find((f) => f.id === SSR_FEELINGS_MERGE_MAP[strippedLegacy]);
      if (foundMapped) return buildFeelingMeta(foundMapped, SSR_VALENTINE_LANGS[0], activePage);
    }

    return buildHomeSeo(activePage);
  }

  function renderSsrMetaHtml(
    baseHtml: string,
    rawPathname: string,
    siteOrigin = DEFAULT_PRODUCTION_ORIGIN,
    forceNoIndex = false
  ): string {
    const meta = resolveServerSeoMeta(rawPathname);
    const canonicalUrl = `${siteOrigin}${meta.canonicalPath}`;
    const ogImageUrl = `${siteOrigin}/og-image.jpg`;
    const safeTitle = escapeHtml(meta.title);
    const safeDesc = escapeHtml(meta.description);
    const safeLang = escapeHtml(meta.langCode);
    const safeRobots = escapeHtml(forceNoIndex ? 'noindex, nofollow' : meta.robots);
    const ogType = meta.canonicalPath === '/' ? 'website' : 'article';
    const safeImageAlt =
      meta.canonicalPath === '/'
        ? safeTitle
        : escapeHtml(`${meta.title} • ZQ FEELINGS - Dil Ki Awaaz`);

    const pageSuffix = meta.valentinePageSuffix || '';
    const hreflangTags = meta.hreflangPrefixSlug
      ? [
          ...SSR_VALENTINE_LANGS.map((lang) => {
            const hrefUrl = `${siteOrigin}/${lang.isoPrefix}/${meta.hreflangPrefixSlug}${pageSuffix}`;
            return `    <link rel="alternate" hreflang="${lang.hreflang}" href="${hrefUrl}" />`;
          }),
          `    <link rel="alternate" hreflang="x-default" href="${siteOrigin}/hi/${meta.hreflangPrefixSlug}${pageSuffix}" />`
        ].join('\n')
      : meta.valentineBasePath
        ? (() => {
            const trimmedBase = meta.valentineBasePath.replace(/\/+$/, '');
            const hindiHrefUrl = pageSuffix
              ? `${siteOrigin}${trimmedBase}${pageSuffix}`
              : `${siteOrigin}${meta.valentineBasePath}`;
            return [
              ...SSR_VALENTINE_LANGS.map((lang) => {
                const hrefUrl =
                  lang.hreflang === 'hi'
                    ? hindiHrefUrl
                    : `${siteOrigin}${trimmedBase}/${lang.slug}${pageSuffix}`;
                return `    <link rel="alternate" hreflang="${lang.hreflang}" href="${hrefUrl}" />`;
              }),
              `    <link rel="alternate" hreflang="x-default" href="${hindiHrefUrl}" />`
            ].join('\n');
          })()
        : [
            `    <link rel="alternate" hreflang="hi" href="${canonicalUrl}" />`,
            `    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />`
          ].join('\n');

    const ssrJsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteOrigin}/#website`,
          url: `${siteOrigin}/`,
          name: 'Best Shayari - Love, Sad, Diwali, Valentine | ZQ Feelings',
          alternateName: 'ZQ FEELINGS - Dil Ki Awaaz',
          description:
            'Best Love, Sad, Diwali, Valentine and more festival & celebration Shayari in Hindi, English & Urdu for Boy & Girl - ZQ Feelings.',
          inLanguage: 'hi'
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: meta.breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: `${siteOrigin}${crumb.path}`
          }))
        },
        {
          '@type': 'CollectionPage',
          '@id': `${canonicalUrl}#collection`,
          url: canonicalUrl,
          name: meta.title,
          description: meta.description,
          inLanguage: meta.langCode,
          isPartOf: { '@id': `${siteOrigin}/#website` },
          breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
        },
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          headline: meta.title,
          description: meta.description,
          image: ogImageUrl,
          inLanguage: meta.langCode,
          author: {
            '@type': 'Organization',
            name: 'ZQ FEELINGS - Dil Ki Awaaz',
            url: `${siteOrigin}/`
          },
          publisher: {
            '@type': 'Organization',
            name: 'ZQ FEELINGS - Dil Ki Awaaz'
          }
        }
      ]
    });

    return baseHtml
      .replace(/<html\s+lang="[^"]*"/i, `<html lang="${safeLang}"`)
      .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="description" content="${safeDesc}" />`
      )
      .replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:image" content="${ogImageUrl}" />`
      )
      .replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:image" content="${ogImageUrl}" />`
      )
      .replace(
        /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="robots" content="${safeRobots}" />`
      )
      .replace(
        /<meta\s+name="language"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="language" content="${safeLang}" />`
      )
      .replace(
        /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:type" content="${ogType}" />`
      )
      .replace(
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:title" content="${safeTitle}" />`
      )
      .replace(
        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:description" content="${safeDesc}" />`
      )
      .replace(
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:url" content="${canonicalUrl}" />`
      )
      .replace(
        /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:image:alt" content="${safeImageAlt}" />`
      )
      .replace(
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:title" content="${safeTitle}" />`
      )
      .replace(
        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:description" content="${safeDesc}" />`
      )
      .replace(
        /<meta\s+name="twitter:image:alt"\s+content="[^"]*"\s*\/?>/i,
        `<meta name="twitter:image:alt" content="${safeImageAlt}" />`
      )
      .replace(
        /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`
      )
      .replace(/<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="[^"]*"\s*\/?>\s*/gi, '')
      .replace(
        /<script\s+id="dynamic-seo-jsonld"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
        `<script id="dynamic-seo-jsonld" type="application/ld+json">${ssrJsonLd}</script>`
      )
      .replace('</head>', `${hreflangTags}\n  </head>`);
  }

  app.get('/robots.txt', (req: Request, res: Response) => {
    const activeOrigin = resolveRequestSiteOrigin(req);
    if (isPreviewSubdomain(req)) {
      res
        .status(200)
        .type('text/plain')
        .setHeader('Cache-Control', 'public, max-age=3600')
        .send('User-agent: *\nDisallow: /\n');
      return;
    }
    res
      .status(200)
      .type('text/plain')
      .setHeader('Cache-Control', 'public, max-age=3600')
      .send(
        [
          'User-agent: Googlebot',
          'Allow: /',
          'Disallow: /admin-zq',
          '',
          'User-agent: Mediapartners-Google',
          'Allow: /',
          '',
          'User-agent: AdsBot-Google',
          'Allow: /',
          '',
          'User-agent: *',
          'Allow: /',
          'Disallow: /admin-zq',
          '',
          `Sitemap: ${activeOrigin}/sitemap.xml`,
          ''
        ].join('\n')
      );
  });

  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    const assetsPath = path.join(distPath, 'assets');
    const indexHtmlPath = path.join(distPath, 'index.html');

    const cachedIndexHtml = fs.existsSync(indexHtmlPath)
      ? fs.readFileSync(indexHtmlPath, 'utf8')
      : null;

    if (fs.existsSync(assetsPath)) {
      app.use(
        '/assets',
        express.static(assetsPath, {
          immutable: true,
          maxAge: '365d'
        })
      );
    }

    // Serve static files (ads.txt, sitemap.xml, og-image.jpg, favicon.svg) without directory index auto-serving
    app.use(
      express.static(distPath, {
        index: false,
        redirect: false,
        maxAge: '1h'
      })
    );

    // SPA & Universal SSR SEO route handler across all routes
    app.use((req: Request, res: Response) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.status(404).end();
        return;
      }

      if (cachedIndexHtml !== null) {
        const previewHost = isPreviewSubdomain(req);
        const siteOrigin = resolveRequestSiteOrigin(req);
        if (previewHost) {
          res.setHeader('X-Robots-Tag', 'noindex, nofollow');
        }
        res.setHeader('Cache-Control', 'no-cache');
        const routeHtml = renderSsrMetaHtml(cachedIndexHtml, req.path, siteOrigin, previewHost);
        res.status(200).type('html').send(routeHtml);
      } else {
        res.status(503).send('Application build not found. Run npm run build first.');
      }
    });

    app.listen(port, '0.0.0.0', () => {
      console.log(`ZQ FEELINGS server listening on http://0.0.0.0:${port} (production)`);
    });
  } else {
    let viteServerInstance: Awaited<ReturnType<typeof import('vite')['createServer']>> | null = null;
    const devIndexHtmlPath = path.resolve(__dirname, 'index.html');

    app.use(async (req: Request, res: Response, next: NextFunction) => {
      if (!viteServerInstance) {
        res
          .status(200)
          .setHeader('Content-Type', 'text/html; charset=utf-8')
          .setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
          .end(
            '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="1"><title>Starting...</title></head><body>Starting...</body></html>'
          );
        return;
      }

      const isHtmlNav =
        (req.method === 'GET' || req.method === 'HEAD') &&
        !req.path.startsWith('/@') &&
        !req.path.startsWith('/src/') &&
        !req.path.startsWith('/node_modules/') &&
        !path.extname(req.path) &&
        /\btext\/html\b/i.test(String(req.headers.accept || 'text/html'));

      if (isHtmlNav && fs.existsSync(devIndexHtmlPath)) {
        try {
          const previewHost = isPreviewSubdomain(req);
          const siteOrigin = resolveRequestSiteOrigin(req);
          if (previewHost) {
            res.setHeader('X-Robots-Tag', 'noindex, nofollow');
          }
          const rawDevHtml = fs.readFileSync(devIndexHtmlPath, 'utf8');
          const ssrDevHtml = renderSsrMetaHtml(rawDevHtml, req.path, siteOrigin, previewHost);
          const transformed = await viteServerInstance.transformIndexHtml(req.originalUrl, ssrDevHtml);
          res.status(200).type('html').send(transformed);
          return;
        } catch (err) {
          next(err);
          return;
        }
      }

      viteServerInstance.middlewares(req, res, next);
    });

    const httpServer = app.listen(port, '0.0.0.0', () => {
      console.log(`ZQ FEELINGS server listening on http://0.0.0.0:${port} (development)`);
    });
    httpServer.on('error', (err: NodeJS.ErrnoException) => {
      console.error(`HTTP server error on port ${port}:`, err);
      process.exit(1);
    });

    const disableHmr = process.env.DISABLE_HMR === 'true';
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        allowedHosts: true,
        hmr: disableHmr ? false : { server: httpServer },
        watch: disableHmr ? null : {}
      },
      appType: 'spa'
    });
    viteServerInstance = vite;
  }
}

startServer().catch((err: unknown) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
