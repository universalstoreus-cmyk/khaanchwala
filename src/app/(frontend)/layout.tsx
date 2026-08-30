import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaanchwala.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kaanch Wala | Glass & Mirror Solutions',
    template: '%s | Kaanch Wala',
  },
  description: 'Premium glass, mirror, windows, partitions and interior solutions in Hyderabad.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Kaanch Wala',
    title: 'Kaanch Wala | Glass & Mirror Solutions',
    description: 'Premium glass, mirror, windows, partitions and interior solutions in Hyderabad.',
    url: siteUrl,
    images: [{ url: '/kaanchwala-logo.webp', alt: 'Kaanch Wala Glass & Mirror Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaanch Wala | Glass & Mirror Solutions',
    description: 'Premium glass, mirror, windows, partitions and interior solutions in Hyderabad.',
    images: ['/kaanchwala-logo.webp'],
  },
  icons: {
    icon: '/kaanchwala-logo.webp',
    shortcut: '/kaanchwala-logo.webp',
    apple: '/kaanchwala-logo.webp',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
