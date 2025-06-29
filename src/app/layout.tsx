import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SERVER_CONFIG } from "./config/SERVER_CONFIG";
import { Toaster } from "@/shadcn/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SERVER_CONFIG.APP_TITLE,
  description: SERVER_CONFIG.APP_DESCRIPTION,
  keywords: SERVER_CONFIG.APP_KEYWORDS,
  openGraph: {
    title: SERVER_CONFIG.APP_TITLE,
    description: SERVER_CONFIG.APP_DESCRIPTION,
    images: ["/assets/og-image.png"],
    url: SERVER_CONFIG.ENV.APP_URL,
    siteName: SERVER_CONFIG.APP_NAME,
    locale: "en_US",
    type: "website",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Toaster />
    </html>
  );
}
