import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import SiteHeader from './components/SiteHeader'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaanchwala.com'
const siteName = 'Kaanch Wala'
const description = 'Premium glass, mirror, windows, partitions and interior solutions in Hyderabad.'
const logo = '/kaanchwala-logo.svg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteName} | Glass & Mirror Solutions`, template: `%s | ${siteName}` },
  description,
  applicationName: siteName,
  creator: siteName,
  publisher: siteName,
  category: 'business',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', siteName, title: `${siteName} | Glass & Mirror Solutions`, description, url: siteUrl, locale: 'en_IN', images: [{ url: logo, width: 1200, height: 630, alt: `${siteName} Glass & Mirror Solutions` }] },
  twitter: { card: 'summary_large_image', title: `${siteName} | Glass & Mirror Solutions`, description, images: [logo] },
  icons: { icon: logo, shortcut: logo, apple: logo },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en-IN"><body><SiteHeader />{children}</body></html>
}
