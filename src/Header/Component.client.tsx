'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { HeaderNav } from './Nav'
import { prefixWithLocale, useLocale } from '@/i18n/locale'
import type { Locale } from '@/i18n/config'

interface HeaderClientProps {
  data: Header
  locale?: Locale
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const locale = useLocale()
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="container flex min-h-[72px] items-center justify-between gap-3 py-2 sm:min-h-[80px] sm:py-2.5">
        <Link
          href={prefixWithLocale('/', locale)}
          aria-label="Kaanchwala home"
          className="flex h-[64px] w-[64px] shrink-0 items-center justify-center overflow-visible sm:h-[72px] sm:w-[72px]"
        >
          <Logo loading="eager" priority="high" />
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <HeaderNav data={data} locale={locale} />
          <LocaleSwitcher currentLocale={locale} className="ml-0 sm:ml-1" />
        </div>
      </div>
    </header>
  )
}
