import React from 'react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const payload = await getPayload()

  const {
    docs: [post],
  } = await payload.findByID({
    collection: 'posts',
    id: params.slug,
    depth: 0,
  })

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>{post.title || 'Blog Post'} | Kaanchwala Glass & Mirror Solutions</title>
        <meta
          name="description"
          content={post.meta?.description || post.excerpt || 'Latest article from Kaanchwala Glass'}
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
              <span>Blog</span>
              <span className="separator mx-1">/</span>
              <span>{post.title}</span>
            </nav>

            {/* Post Hero Image */}
            {post.coverImage && (
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg dark:shadow-2xl">
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}

            {/* Post Content */}
            <div className="prose lg:prose-2xl max-w-none">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {post.title}
              </h1>

              <div className="text-gray-500 dark:text-gray-400 mb-8">
                {post.publishedAt ? (
                  <p>
                    Published {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                ) : (
                  <p>No publication date</p>
                )}
              </div>

              <RichText data={post.content} enableGutter={false} />

              {/* Related Posts */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                  Related Posts
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  {/* Placeholder for related posts */}
                  <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
                  <div className="h-40 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}