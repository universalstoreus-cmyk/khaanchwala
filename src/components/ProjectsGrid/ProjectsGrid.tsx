import React from 'react'
import Link from 'next/link'

import { Card } from '@/components/Card'

type ProjectCardProps = {
  project: any
  categoryFilter?: string
}

export const ProjectsGrid: React.FC<{
  projects: any[]
  categoryFilter?: string
}> = ({ projects, categoryFilter }) => {
  const filteredProjects = categoryFilter
    ? projects.filter((p) => p.categories?.some((cat: any) => cat.slug === categoryFilter))
    : projects

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Featured Projects
          </h2>

          {/* Category Filter Tabs */}
          {filteredProjects.length > 0 && (
            <div className="mb-8 flex justify-center gap-2">
              <button
                className="px-4 py-2 rounded-full text-sm font-medium text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                onClick={() => window.location.reload()}
                aria-label="Show all projects"
              >
                All
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const primaryImage =
                project.media && project.media.length > 0
                  ? project.media[0]
                  : undefined

              return (
                <Link
                  key={project.id}
                  href={`/portfolio/${project.slug}`}
                  className="group rounded-2xl overflow-hidden hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <Card className="relative h-full flex flex-col">
                    {primaryImage && (
                      <img
                        src={primaryImage.url}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90"
                      />
                    }}

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <span>{project.client?.name || 'Client'}</span>
                        <span className="ml-2">•</span>
                        <span>{project.location || 'Location'}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}