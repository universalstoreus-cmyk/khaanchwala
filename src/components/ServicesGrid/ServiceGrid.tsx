import React from 'react'
import Link from 'next/link'

import { Card } from '@/components/Card'

type ServiceCardProps = {
  title: string
  description: string
  icon: string
  image?: unknown
  slug: string
  feature?: boolean
}

export const ServiceGrid: React.FC<{
  services: any[]
}> = ({ services }) => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Glass Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const href = `/services/${service.slug}`

              return (
                <Card key={service.id} className="relative h-full flex flex-col overflow-hidden">
                  <Link href={href} className="group block">
                    {service.coverImage && (
                      <img
                        src={service.coverImage.url}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                    )}

                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <svg
                          className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </svg>
                      </div>

                      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                        {service.summary}
                      </p>
                    </div>
                  </Link>

                  <div className="mt-auto p-6 border-t border-gray-100 dark:border-gray-800">
                    <Link
                      href={href}
                      className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
