import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'

export default async function BlogPage() {
  const payload = await getPayload()

  const {
    docs: posts,
    totalDocs,
  } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 10,
  })

  return (
    <div className="min-h-screen">
      <Head>
        <title>Blog | Kaanchwala Glass & Mirror Solutions</title>
        <meta
          name="description"
          content="Latest articles and insights from Kaanchwala Glass & Mirror Solutions"
        />
      </Head>

      <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-6xl mx-auto">

            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Blog
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Insights, tips, and stories from the world of glass and design
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => {
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl overflow-hidden hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    {/* Featured Image */}
                    {post.coverImage && (
                      <img
                        src={post.coverImage.url}
                        alt={post.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                      />
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
                        </span>
                      </div>

                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {post.title}
                      </h3>

                      <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                        {post.excerpt || post.summary?.substring(0, 100) + '...'}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Pagination */}
            {totalDocs > 10 && (
              <div className="mt-16 flex justify-center">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Older Posts
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}