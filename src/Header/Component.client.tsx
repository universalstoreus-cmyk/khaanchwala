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

interface HeaderClientProps { data: Header; locale?: Locale }

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const locale = useLocale()
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const address = 'Beside Royal Bawarchi Restaurant, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049'

  useEffect(() => { setHeaderTheme(null) }, [pathname])
  useEffect(() => { if (headerTheme && headerTheme !== theme) setTheme(headerTheme) }, [headerTheme])

  return (
    <header className="relative z-50 bg-white" {...(theme ? { 'data-theme': theme } : {})}>
      <div className="bg-[#062d70] text-white">
        <div className="container flex min-h-8 items-center justify-between gap-3 text-[11px] font-semibold sm:text-xs">
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} target="_blank" rel="noreferrer" className="min-w-0 truncate hover:underline" title={address}>
            📍 <span className="sm:hidden">New Hafeezpet, Hyderabad</span><span className="hidden sm:inline">{address}</span>
          </a>
          <span className="hidden shrink-0 sm:block">◷ Mon–Sun: 9:00 AM – 7:00 PM</span>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-white">
        <div className="container flex min-h-[62px] items-center justify-between gap-3 py-1.5 sm:min-h-[70px] sm:py-2">
          <Link href={prefixWithLocale('/', locale)} aria-label="Kaanchwala home" className="flex h-12 w-[112px] shrink-0 items-center justify-start sm:h-14 sm:w-[150px]">
            <Logo loading="eager" priority="high" />
          </Link>
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <HeaderNav data={data} locale={locale} />
            <LocaleSwitcher currentLocale={locale} />
          </div>
        </div>
      </div>
    </header>
  )
}
