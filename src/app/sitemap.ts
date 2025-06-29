import { config } from '@/config'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: config.app.url,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            images: ['https://autofork.ai/assets/og-image.png'],
            priority: 1,
        },
    ]
}