import React from 'react'
import Link from 'next/link'

type TrustPoint = {
  title: string
  description: string
}

type CTASectionProps = {
  heading: string
  supportingText: string
  primaryButton: {
    label: string
    url: string
    appearance?: 'default' | 'outline'
  }
  secondaryButton?: {
    label: string
    url: string
    appearance?: 'default' | 'outline'
  }
  trustPoints: TrustPoint[]
  ctaButton?: {
    label: string
    url: string
    appearance?: 'default' | 'outline'
  }
}

export const CTASection: React.FC<CTASectionProps> = ({
  heading,
  supportingText,
  primaryButton,
  secondaryButton,
  trustPoints,
  ctaButton,
}) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-blue-900 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white dark:text-white mb-6">
            {heading}
          </h2>

          <p className="text-lg text-white/80 dark:text-white/60 mb-12 line-clamp-3">
            {supportingText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {primaryButton && (
              <Link
                href={primaryButton.url}
                className="inline-flex items-center rounded-md bg-white text-blue-600 py-3 px-6 font-medium hover:bg-white/90 dark:hover:bg-white/20 transition-colors"
              >
                {primaryButton.label}
              </Link>
            )}

            {secondaryButton && (
              <Link
                href={secondaryButton.url}
                className="inline-flex items-center rounded-md border-2 border-white text-white py-3 px-6 font-medium hover:bg-white/10 dark:hover:bg-white/20 transition-colors"
              >
                {secondaryButton.label}
              </Link>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {trustPoints.map((point, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start rounded-md bg-white/20 p-4 text-left"
                >
                  <span className="text-blue-100 dark:text-blue-700 flex-shrink-0 mt-1">
                    {/* Checkmark icon */}
                  </span>

                  <div className="flex-1 pl-4">
                    <h3 className="font-medium text-white dark:text-white mb-1">
                      {point.title}
                    </h3>

                    <p className="text-white/70 dark:text-white/40 text-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}