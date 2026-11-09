import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import {
  DEFAULT_PRODUCTION_ORIGIN,
  isPreviewHostname,
  normalizeCustomOrigin,
  renderSsrMetaHtml
} from './scripts/seo-prerender-engine.mjs';

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

  function extractHostname(req: Request): string {
    return String(req.headers['x-forwarded-host'] || req.headers.host || '')
      .split(',')[0]
      .trim()
      .split(':')[0]
      .toLowerCase();
  }

  function isPreviewSubdomain(req: Request): boolean {
    return isPreviewHostname(extractHostname(req));
  }

  function resolveRequestSiteOrigin(req: Request): string {
    const rawHost = extractHostname(req);
    const fromHost = normalizeCustomOrigin(rawHost ? `https://${rawHost}` : undefined);
    if (fromHost) return fromHost;

    const fromVercelProd = normalizeCustomOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL);
    return fromVercelProd || DEFAULT_PRODUCTION_ORIGIN;
  }

  const LEGACY_301_MAP: Array<{ pattern: RegExp; target: string }> = [
    // 18 feelings categories (both bare slug and /feelings/ prefix)
    { pattern: /^\/(?:feelings\/)?romantic-love-shayari(?:\/(.*))?$/, target: '/feelings/love-shayari' },
    { pattern: /^\/(?:feelings\/)?pyar-bhari-shayari(?:\/(.*))?$/, target: '/feelings/love-shayari' },
    { pattern: /^\/(?:feelings\/)?mohabbat-shayari(?:\/(.*))?$/, target: '/feelings/love-shayari' },
    { pattern: /^\/(?:feelings\/)?dard-bhari-shayari(?:\/(.*))?$/, target: '/feelings/sad-shayari' },
    { pattern: /^\/(?:feelings\/)?yaad-intezaar-shayari(?:\/(.*))?$/, target: '/feelings/yaad-shayari' },
    { pattern: /^\/(?:feelings\/)?intezaar-shayari(?:\/(.*))?$/, target: '/feelings/yaad-shayari' },
    { pattern: /^\/(?:feelings\/)?yaadein-shayari(?:\/(.*))?$/, target: '/feelings/yaad-shayari' },
    { pattern: /^\/(?:feelings\/)?naseeb-shayari(?:\/(.*))?$/, target: '/feelings/kismat-shayari' },
    { pattern: /^\/(?:feelings\/)?kismat-bhagya-shayari(?:\/(.*))?$/, target: '/feelings/kismat-shayari' },
    { pattern: /^\/(?:feelings\/)?smile-shayari(?:\/(.*))?$/, target: '/feelings/khushi-shayari' },
    { pattern: /^\/(?:feelings\/)?judai-shayari(?:\/(.*))?$/, target: '/feelings/alone-shayari' },
    { pattern: /^\/(?:feelings\/)?zindagi-shayari(?:\/(.*))?$/, target: '/feelings/motivational-shayari' },
    { pattern: /^\/(?:feelings\/)?maafi-shayari(?:\/(.*))?$/, target: '/feelings/sorry-shayari' },
    { pattern: /^\/(?:feelings\/)?gussa-shayari(?:\/(.*))?$/, target: '/feelings/sorry-shayari' },
    { pattern: /^\/(?:feelings\/)?boy-shayari(?:\/(.*))?$/, target: '/feelings/boys-shayari' },
    { pattern: /^\/(?:feelings\/)?girl-shayari(?:\/(.*))?$/, target: '/feelings/girls-shayari' },
    { pattern: /^\/(?:feelings\/)?two-line-shayari(?:\/(.*))?$/, target: '/feelings/2-line-shayari' },
    { pattern: /^\/(?:feelings\/)?maikhana-shayari(?:\/(.*))?$/, target: '/feelings/sharabi-shayari' },
    // 8 legacy hubs and utility endpoints
    { pattern: /^\/feelings\/?$/, target: '/feelings-shayari' },
    { pattern: /^\/festival\/?$/, target: '/festival-shayari' },
    { pattern: /^\/(?:religious\/?|dharmik-shayari\/?)$/, target: '/religious/sanatan-hindu' },
    { pattern: /^\/(?:family-rituals\/?|sanskar-shayari\/?)$/, target: '/newborn-babies-shayari/' },
    { pattern: /^\/(?:valentine\/?|valentine-shayari\/?)$/, target: '/valentine-week' },
    { pattern: /^\/moments\/?$/, target: '/zq-moments' },
    { pattern: /^\/(?:write-shayari\/?|apni-shayari\/?)$/, target: '/apni-shayari-likhe' },
    { pattern: /^\/(?:favorites\/?|pasandida\/?)$/, target: '/pasandida-shayari' }
  ];

  // 301 Permanent Redirects for Google Search Console 404 Resolution
  app.use((req: Request, res: Response, next: NextFunction): void => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    const reqPath = req.path;
    for (const item of LEGACY_301_MAP) {
      const match = item.pattern.exec(reqPath);
      if (match) {
        const subpath = match[1] ? `/${match[1]}` : (item.target.startsWith('/feelings/') || item.target.endsWith('/') ? '/' : '');
        const destination = `${item.target.replace(/\/$/, '')}${subpath}`;
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.redirect(301, destination);
        return;
      }
    }
    next();
  });

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

  app.get('/googlec97049106a7959f6.html', (_req: Request, res: Response) => {
    res
      .status(200)
      .type('text/html')
      .setHeader('Cache-Control', 'public, max-age=3600')
      .send('google-site-verification: googlec97049106a7959f6.html');
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
        /(\btext\/html\b|\*\/\*)/i.test(String(req.headers.accept || 'text/html'));

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
