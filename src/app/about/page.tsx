import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function AboutPage() {
  const payload = await getPayload({ config })

  // Fetch site settings
  const siteSettings: any = await payload.findByID({
    collection: 'site-settings',
    id: 'site-settings',
  })

  return (
    <div className="min-h-screen">
      <Head>
        <title>About Us | Kaanchwala Glass & Mirror Solutions</title>
        <meta
          name="description"
          content="Learn about Kaanchwala Glass & Mirror Solutions, our mission, and our team"
        />
      </Head>

      <section className="py-24 md:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  About Kaanchwala Glass & Mirror Solutions
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-4">
                  At Kaanchwala Glass & Mirror Solutions, we specialize in providing premium glass and mirror solutions for residential and commercial properties. With years of experience in the industry, we've established ourselves as a trusted partner for glass partitions, shower enclosures, glass doors, mirrors, and customized glass solutions.
                </p>

                <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                    <span>15+ Years of Experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14l1.4-1.4a1.89 1.89 0 1 1 2.8 2.8L15 19.8l1.4-1.4a1.89 1.89 0 1 1-2.8 2.8L12 21l-4.1-1.7" />
                    </svg>
                    <span>500+ Projects Completed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M6 2L3 6l3 6l3-6" />
                      <path d="M2 12l3 6l3-6l3 6l-3 6l3-6l3 6" />
                    </svg>
                    <span>Certified Installers</span>
                  </li>
                </ul>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    To enhance living and working spaces with elegant, durable, and functional glass solutions that combine aesthetics with performance, delivered with exceptional craftsmanship and customer service.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/placeholder-about.webp"
                  alt="Kaanchwala Glass team"
                  className="rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}