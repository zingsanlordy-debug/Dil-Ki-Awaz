export const SITE_BRAND: string;
export const DEFAULT_PRODUCTION_ORIGIN: string;

export function isPreviewHostname(hostname?: string): boolean;
export function normalizeCustomOrigin(raw?: string): string | null;

export interface SsrBreadcrumbItem {
  name: string;
  path: string;
}

export interface ServerSeoResult {
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

export function resolveServerSeoMeta(rawPathname: string): ServerSeoResult;
export function renderSsrMetaHtml(
  baseHtml: string,
  rawPathname: string,
  siteOrigin?: string,
  forceNoIndex?: boolean
): string;
