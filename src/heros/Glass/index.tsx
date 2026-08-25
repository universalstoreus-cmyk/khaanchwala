'use client'

import React from 'react'

import { getCachedGlobal } from '@/utilities/getGlobals'
import { ThemeContext } from '@/providers/Theme'
import { useImage } from '@/hooks/useImage'

import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import { RichText } from '@/components/RichText'
import { getLocalizedPath, type Locale } from '@/i18n/config'

type GlassHeroProps = {
  eyebrow?: string
  heading?: string
  highlightedHeading?: string
  description?: string
  primaryButton?: {
    label: string
    url: string
    appearance?: 'default' | 'outline'
  }
  secondaryButton?: {
    label: string
    url: string
    appearance?: 'default' | 'outline'
  }
  heroImage?: any
  mobileHeroImage?: any
  locale?: Locale
}

export const GlassHero: React.FC<GlassHeroProps> = ({
  eyebrow,
  heading,
  highlightedHeading,
  description,
  primaryButton,
  secondaryButton,
  heroImage,
  mobileHeroImage,
  locale = 'en',
}) => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <section
      className="relative overflow-hidden pb-24 md:pb-32 lg:pb-40"
      style={{
        background: theme === 'dark' ? 'var(--bg-dark)' : 'var(--bg-light)',
      }}
    >
      <div className="relative container mx-auto max-w-5xl px-4 grid-cols-1 gap-6 md:grid-cols-2 items-center">
        <div className="self-start">
          {eyebrow && (
            <p className="text-sm text-capitalize text-blue-600 dark:text-blue-400 mb-4 font-medium tracking-wider">
              {eyebrow}
            </p>
          )}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white dark:text-white mb-6">
            {heading}
            {highlightedHeading && (
              <span className="text-blue-400 dark:text-blue-300 relative px-1">
                {highlightedHeading}
              </span>
            )}
          </h1>

          <p className="text-lg md:text-xl text-white/80 dark:text-white/60 max-w-xl leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {primaryButton && (
              <CMSLink
                className="inline-flex items-center rounded-md text-white bg-blue-600 py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors"
                {...primaryButton}
              >
                {primaryButton.label}
              </CMSLink>
            )}

            {secondaryButton && (
              <CMSLink
                className="inline-flex items-center rounded-md border-2 border-white text-white py-3 px-6 font-medium hover:bg-white/5 dark:hover:bg-white/10 transition-colors"
                {...secondaryButton}
              >
                {secondaryButton.label}
              </CMSLink>
            )}
          </div>
        </div>

        {heroImage && typeof heroImage === 'object' && (
          <div className="self-end relative">
            <Media
              className="rounded-2xl overflow-hidden shadow-lg md:shadow-2xl"
              imgClassName=""
              priority
              resource={heroImage}
            />

            {mobileHeroImage && typeof mobileHeroImage === 'object' && (
              <Media
                className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-xl shadow-lg max-w-md"
                imgClassName=""
                priority
                resource={mobileHeroImage}
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}