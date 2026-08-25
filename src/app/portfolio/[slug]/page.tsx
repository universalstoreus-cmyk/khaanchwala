import React from 'react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import { CMSLink } from '@/components/Link'
import { RichText } from '@/components/RichText'
import { Media } from '@/components/Media'

export default async function PortfolioDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const payload = await getPayload()

  // Fetch the project by slug
  const {
    docs: [project],
  } = await payload.findByID({
    collection: 'portfolio',
    id: params.slug,
    depth: 0,
  })

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>{project.title || 'Project Portfolio'} | Kaanchwala Glass & Mirror Solutions</title>
        <meta
          name="description"
          content={project.meta?.description || 'Project showcase for Kaanchwala Glass'}
        />
      </Head>

      <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-6xl mx-auto">

            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
              <span className="separator mx-1">/</span>
              <span>Portfolio</span>
              <span className="separator mx-1">/</span>
              <span>{project.title}</span>
            </nav>

            {/* Project Hero Image */}
            {project.media && project.media.length > 0 && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg dark:shadow-2xl">
                <Media
                  priority
                  resource={project.media[0]}
                  imgClassName="h-64 w-full object-cover"
                />
              </div>
            )}

            {/* Project Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
                {project.description}
              </p>

              {/* Client & Location */}
              <div className="mb-8 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2v-2H5v-2H3v2H3v2H3v-2H2v2H3v2z" />
                  </svg>
                  <span>{project.client?.name || 'Client'}</span>
                </div>

                {project.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <path d="M2 9l10 7 3-3L12 7l-5 5 5 5-1.6-1.6L2 17z" />
                    </svg>
                    <span>{project.location || 'Location'}</span>
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Types/Variants */}
                {project.glassOptions?.length > 0 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                      Glass Types Used
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      {project.glassOptions.map((glass, index) => {
                        return (
                          <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              {glass.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-1">
                              {glass.description || 'High-quality glass solution'}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                      Features
                    </h2>

                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      {project.features.map((feature) => {
                        return (
                          <li key={feature} className="flex items-start gap-2">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}

                {/* Completion Date */}
                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    Project Information
                  </h2>

                  <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300 text-sm">
                    <div>
                      <strong>Completion Date:</strong> {project.completionDate || 'Completed'}
                    </div>
                    <div>
                      <strong>Category:</strong> {project.categories?.[0]?.name || 'Commercial'}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <CMSLink
                  href="/contact"
                  className="inline-flex items-center rounded-md bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors w-full justify-center"
                >
                  Contact for Similar Project
                </CMSLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}