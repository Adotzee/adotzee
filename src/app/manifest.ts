import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_INFO.name,
    short_name: COMPANY_INFO.name,
    description: COMPANY_INFO.seo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563EB',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
