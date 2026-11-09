/**
 * Asynchronous on-demand Google Fonts loader
 * Ensures maximum page load speed (90+ PageSpeed score) by loading non-critical
 * regional font stylesheets only when requested or when active language changes.
 */

const loadedFonts = new Set<string>();

export function loadGoogleFontAsync(googleFontFamily: string | undefined): void {
  if (!googleFontFamily || typeof document === 'undefined') return;
  if (loadedFonts.has(googleFontFamily)) return;

  const fontId = `gfont-${googleFontFamily.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`;
  if (document.getElementById(fontId)) {
    loadedFonts.add(googleFontFamily);
    return;
  }

  try {
    const link = document.createElement('link');
    link.id = fontId;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${googleFontFamily}&display=swap`;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
    loadedFonts.add(googleFontFamily);
  } catch {
    // Non-fatal if font fails to fetch
  }
}
