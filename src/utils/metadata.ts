import { config } from "@/config";
import { Metadata } from "next";

export function getMetadata(metas?: Partial<Metadata>): Metadata {
    return {
        title: config.app.title,
        description: config.app.description,
        keywords: config.app.keywords,
        applicationName: config.app.name,
        metadataBase: new URL(config.app.url),
        openGraph: {
            title: config.app.title,
            description: config.app.description,
            images: ["/assets/og-image.png"],
            url: config.app.url,
            siteName: config.app.name,
            locale: "en_US",
            type: "website",
            ...metas?.openGraph,
        },
        twitter: {
            title: config.app.title,
            description: config.app.description,
            images: ["/assets/og-image.png"],
            card: "summary_large_image",
            creator: "@nabby27",
            ...metas?.twitter,
        },
        alternates: {
            canonical: config.app.url,
            ...metas?.alternates,
        },
        icons: {
            icon: [
                { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
                { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
                { url: '/favicon/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
            ],
            apple: [
                { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
            ],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
        creator: "@nabby27",
        ...metas,
    }
}
