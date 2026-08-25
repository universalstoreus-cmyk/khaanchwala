import React from 'react'
import Link from 'next/link'

type WhyChooseUsProps = {
  image?: any
  title: string
  description: string
  bullets: string[]
  ctaButton?: {
    label: string
    url: string
    appearance?: 'default' | 'outline'
  }
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  image,
  title,
  description,
  bullets,
  ctaButton,
}) => {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
              {description}
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start text-gray-600 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1">
                    {/* Checkmark icon */}
                  </span>
                  <span className="flex-1">{bullet}</span>
                </li>
              ))}
            </ul>

            {ctaButton && (
              <CMSLink
                href={ctaButton.url}
                className="inline-flex items-center rounded-md bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors"
              >
                {ctaButton.label}
              </CMSLink>
            )}
          </div>

          {image && typeof image === 'object' && (
            <div className="relative">
              <img
                src={image.url}
                alt={title}
                className="rounded-2xl overflow-hidden shadow-2xl lg:shadow-4xl transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}