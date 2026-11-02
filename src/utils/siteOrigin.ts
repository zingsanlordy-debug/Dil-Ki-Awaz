const DEFAULT_PRODUCTION_ORIGIN = 'https://zqfeelings.com';

const FREE_HOSTING_PREVIEW_SUFFIXES: ReadonlyArray<string> = [
  '.pages.dev',
  '.vercel.app',
  '.netlify.app',
  '.web.app',
  '.firebaseapp.com',
  '.github.io',
  '.onrender.com'
];

function normalizeOriginUrl(raw?: string): string | null {
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
      FREE_HOSTING_PREVIEW_SUFFIXES.some((s) => cleanHost.endsWith(s))
    ) {
      return null;
    }
    return `https://${cleanHost}`;
  } catch {
    return null;
  }
}

/**
 * Returns true when running on a public free-hosting staging subdomain
 * (e.g. zqfeelings.pages.dev, zqfeelings.vercel.app, zqfeelings.netlify.app)
 * so search engines do not index duplicate staging copies alongside the custom domain.
 */
export function isFreeHostingPreviewHost(hostname?: string): boolean {
  const host = (
    hostname ?? (typeof window !== 'undefined' ? window.location.hostname : '')
  )
    .trim()
    .toLowerCase();
  if (!host) return false;
  return FREE_HOSTING_PREVIEW_SUFFIXES.some((suffix) => host.endsWith(suffix));
}

/**
 * Resolves the canonical production origin automatically for custom domains
 * such as `https://zqfeelings.com` or `https://zqfeelings.in` without code edits.
 */
export function getActiveSiteOrigin(): string {
  const envOrigin = normalizeOriginUrl(
    typeof import.meta !== 'undefined' && import.meta.env
      ? (import.meta.env.VITE_SITE_URL as string | undefined)
      : undefined
  );

  if (typeof window !== 'undefined' && window.location?.hostname) {
    const liveOrigin = normalizeOriginUrl(`https://${window.location.hostname}`);
    if (liveOrigin) {
      return liveOrigin;
    }
  }

  return envOrigin || DEFAULT_PRODUCTION_ORIGIN;
}
