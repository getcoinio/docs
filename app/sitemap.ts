import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const dynamic = 'force-static';

const origin = 'https://docs.getcoinio.me';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${origin}/`, priority: 1 },
    ...source.getPages().map((page) => ({ url: `${origin}${page.url}/`, priority: 0.8 })),
  ];
}
