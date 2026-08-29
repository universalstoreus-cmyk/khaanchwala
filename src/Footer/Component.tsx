import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

import { getLocalizedPath, type Locale } from '@/i18n/config'

export async function Footer({ locale = 'en' }: { locale?: Locale }) {
  const footerData: Footer = await getCachedGlobal('footer', 1, locale)
  const columns = footerData?.columns || []
  const socialLinks = footerData?.socialLinks || []
  const homeHref = getLocalizedPath(locale, '/')

  return (
    <footer className="mt-auto border-t border-border bg-black text-white dark:bg-card">
      <div className="container flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <Link className="flex w-[72px] shrink-0 items-center justify-center" href={homeHref} aria-label="Kaanchwala home">
            <Logo />
          </Link>

          {columns.length > 0 && (
            <nav className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-3">
                  {column.heading && (
                    <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {column.heading}
                    </span>
                  )}
                  <ul className="flex flex-col gap-2">
                    {column.links?.map((item, i) => (
                      <li key={i}>
                        <CMSLink className="text-white hover:underline" {...item.link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          )}

          <div className="flex flex-col gap-4 md:items-end">
            <ThemeSelector />
            {socialLinks.length > 0 && (
              <ul className="flex gap-4">
                {socialLinks.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-white"
                      aria-label={item.platform ?? 'Social link'}
                    >
                      {item.platform}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="border-t border-border pt-6 text-xs text-muted-foreground sm:text-sm">
          © 2026 Kaanch Wala. All Rights Reserved. <span className="mx-1">|</span>{' '}
          Developed by{' '}
          <a
            href="https://robustwebsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white hover:underline"
          >
            Robust Web Solution
          </a>
          <span className="mx-1">|</span> Developer: Mohd Tariq Malik
        </p>
      </div>
    </footer>
  )
}
