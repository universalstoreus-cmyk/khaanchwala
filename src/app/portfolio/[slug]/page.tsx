import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import config from '@/payload.config'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const metadata: Metadata = {
  title: 'Portfolio | Kaanchwala Glass & Mirror Solutions',
  description: 'Project showcase for Kaanchwala Glass & Mirror Solutions',
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'portfolio',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })

  const project = docs[0]

  if (!project) notFound()

  const media = project.media && typeof project.media !== 'number' ? project.media : null
  const glassOptions = project.glassOptions ?? []
  const features = project.features ?? []
  const categories = project.categories ?? []

  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
              <span className="separator mx-1">/</span><span>Portfolio</span>
              <span className="separator mx-1">/</span><span>{project.title}</span>
            </nav>

            {media && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg dark:shadow-2xl">
                <Media priority resource={media} imgClassName="h-64 w-full object-cover" />
              </div>
            )}

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">{project.description}</p>

              <div className="mb-8 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"><span>{project.client?.name || 'Client'}</span></div>
                {project.location && <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"><span>{project.location}</span></div>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {glassOptions.length > 0 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Glass Types Used</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {glassOptions.map((glass, index) => (
                        <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <h3 className="font-medium text-gray-900 dark:text-white">{glass.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-1">{glass.description || 'High-quality glass solution'}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {features.length > 0 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Features</h2>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                      {features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Project Information</h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-600 dark:text-gray-300 text-sm">
                    <div><strong>Completion Date:</strong> {project.completionDate || 'Completed'}</div>
                    <div><strong>Category:</strong> {categories[0]?.name || 'Commercial'}</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <CMSLink href="/contact" className="inline-flex items-center rounded-md bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors w-full justify-center">
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