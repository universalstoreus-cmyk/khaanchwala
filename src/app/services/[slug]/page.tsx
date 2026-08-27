import React from 'react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import { CMSLink } from '@/components/Link'
import { RichText } from '@/components/RichText'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payload = await getPayload()

  const { docs } = await payload.find({
    collection: 'services',
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    depth: 1,
  })

  const service = docs[0]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
              <span className="separator mx-1">/</span>
              <span>{service.title}</span>
            </nav>

            {service.coverImage && typeof service.coverImage === 'object' && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg dark:shadow-2xl">
                <img
                  src={service.coverImage.url || ''}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            <div className="prose lg:prose-xl max-w-none">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {service.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
                {service.summary}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="mb-8 space-y-4">
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    Key Benefits
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-blue-600 flex-shrink-0 mt-1"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>

                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  Description
                </h2>
                {service.content && <RichText data={service.content} enableGutter={false} />}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <CMSLink
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors w-full justify-center"
                >
                  Get a Free Quote
                </CMSLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
