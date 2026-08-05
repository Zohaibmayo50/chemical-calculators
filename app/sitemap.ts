import type { MetadataRoute } from 'next';
import sitemapMeta from '@/data/sitemapMeta.json';

// Regenerate data/sitemapMeta.json (real per-page lastmod from git history) via:
//   node scripts/update-lastmod.js
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(sitemapMeta).map(([url, meta]) => ({
    url,
    lastModified: meta.lastmod,
    changeFrequency: meta.changefreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: parseFloat(meta.priority),
  }));
}
