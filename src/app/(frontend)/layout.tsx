import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kaanch Wala | Glass & Mirror Solutions',
  description: 'Premium glass, mirror, windows, partitions and interior solutions in Hyderabad.',
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
