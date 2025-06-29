import { SERVER_CONFIG } from "@/config/serverConfig";
import { Metadata } from "next";

export function getMetadata(metas?: Partial<Metadata>): Metadata {
    return {
        title: SERVER_CONFIG.APP.TITLE,
        description: SERVER_CONFIG.APP.DESCRIPTION,
        keywords: SERVER_CONFIG.APP.KEYWORDS,
        applicationName: SERVER_CONFIG.APP.NAME,
        metadataBase: new URL(SERVER_CONFIG.APP.URL),
        openGraph: {
            title: SERVER_CONFIG.APP.TITLE,
            description: SERVER_CONFIG.APP.DESCRIPTION,
            images: ["/assets/og-image.png"],
            url: SERVER_CONFIG.APP.URL,
            siteName: SERVER_CONFIG.APP.NAME,
            locale: "en_US",
            type: "website",
            ...metas?.openGraph,
        },
        twitter: {
            title: SERVER_CONFIG.APP.TITLE,
            description: SERVER_CONFIG.APP.DESCRIPTION,
            images: ["/assets/og-image.png"],
            card: "summary_large_image",
            creator: "@nabby27",
            ...metas?.twitter,
        },
        alternates: {
            canonical: SERVER_CONFIG.APP.URL,
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
