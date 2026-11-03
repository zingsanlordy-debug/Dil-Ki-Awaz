export const DEFAULT_PRODUCTION_ORIGIN = 'https://dil-ki-awaaz.vercel.app';

/**
 * Returns true ONLY for ephemeral git-branch / deploy-preview URLs
 * (e.g. dil-ki-awaaz-git-main-*.vercel.app or deploy-preview-*--*.netlify.app)
 * so the primary live production domain `https://dil-ki-awaaz.vercel.app`
 * and any custom domain (`zqfeelings.com` / `zqfeelings.in`) remain 100% indexable.
 */
export function isFreeHostingPreviewHost(hostname?: string): boolean {
  const host = (
    hostname ?? (typeof window !== 'undefined' ? window.location.hostname : '')
  )
    .trim()
    .split(':')[0]
    .toLowerCase();
  if (!host) return false;
  if (host === 'dil-ki-awaaz.vercel.app') return false;
  if (host.endsWith('.vercel.app') && (host.includes('-git-') || host.endsWith('-projects.vercel.app'))) {
    return true;
  }
  if (host.endsWith('.netlify.app') && host.startsWith('deploy-preview-')) {
    return true;
  }
  return false;
}

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
      isFreeHostingPreviewHost(cleanHost)
    ) {
      return null;
    }
    return `https://${cleanHost}`;
  } catch {
    return null;
  }
}

/**
 * Resolves the canonical production origin (`https://dil-ki-awaaz.vercel.app` by default,
 * or any custom domain / `VITE_SITE_URL` override automatically).
 */
export function getActiveSiteOrigin(): string {
  if (typeof window !== 'undefined' && window.location?.hostname) {
    const liveOrigin = normalizeOriginUrl(`https://${window.location.hostname}`);
    if (liveOrigin) {
      return liveOrigin;
    }
  }

  return DEFAULT_PRODUCTION_ORIGIN;
}
