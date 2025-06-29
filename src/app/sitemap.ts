import { SERVER_CONFIG } from '@/config/serverConfig'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SERVER_CONFIG.APP.URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            images: ['https://autofork.ai/assets/og-image.png'],
            priority: 1,
        },
    ]
}