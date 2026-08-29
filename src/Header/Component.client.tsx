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

  const address = 'Beside Royal Bawarchi Restaurant, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049'

  return (
    <header className="relative z-50 bg-white" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="bg-[#062d70] text-white">
        <div className="container flex min-h-8 items-center justify-between gap-3 text-[11px] font-semibold sm:text-xs">
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="min-w-0 truncate hover:underline">
            📍 {address}
          </a>
          <span className="hidden shrink-0 sm:block">◷ Mon–Sun: 9:00 AM – 7:00 PM</span>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="container flex min-h-[70px] items-center justify-between gap-3 py-2 sm:min-h-[78px]">
          <Link
            href={prefixWithLocale('/', locale)}
            aria-label="Kaanchwala home"
            className="flex h-14 w-[150px] shrink-0 items-center justify-start sm:h-[62px] sm:w-[190px]"
          >
            <Logo loading="eager" priority="high" className="!h-auto !w-full max-h-[58px] object-contain object-left" />
          </Link>
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <HeaderNav data={data} locale={locale} />
            <LocaleSwitcher currentLocale={locale} className="ml-0 sm:ml-1" />
          </div>
        </div>
      </div>
    </header>
  )
}
