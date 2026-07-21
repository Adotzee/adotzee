import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search', '/api/', '/admin/'],
    },
    sitemap: `${COMPANY_INFO.fullUrl}/sitemap.xml`,
  };
}
