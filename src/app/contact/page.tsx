import React from 'react'
import { getPayload } from 'payload'

import { CTASection } from '@/components/CTASection/CTASection'
import { FaqBlock } from '@/collections/Faqs'

export default async function ContactPage() {
  const payload = await getPayload()

  // Fetch site settings
  const siteSettings: any = await payload.findByID({
    collection: 'site-settings',
    id: 'site-settings',
  })

  // Fetch FAQs
  const { docs: faqs } = await payload.find({
    collection: 'faqs',
    where: { published: { equals: true } },
    limit: 3,
  })

  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact Us | Kaanchwala Glass & Mirror Solutions</title>
        <meta
          name="description"
          content="Contact Kaanchwala Glass & Mirror Solutions for a free consultation and quote"
        />
      </Head>

      <section className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-5xl mx-auto">

            {/* Contact Info Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Get In Touch
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">
                  Have a project in mind? Contact us for a free consultation. Our team is ready to help you find the perfect glass solution for your space.
                </p>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2 19.96 19.96 0 0 1 2 4.88v-3.02c0-2.01 1.59-3.61 3.93-3.72 3.34-.26 3.93 1.37 3.93 3.72v3.02c0 1.55.42 3.06 1.18 4.23a8.01 8.01 0 0 1-.63 1.44A2.96 2.96 0 0 1 2 19.88a2 2 0 0 1-1.94-1.82A7.98 7.98 0 0 1 5 .73a2 2 0 0 1 .99-1.43 8.02 8.02 0 0 1 1.56-.06 2.97 2.97 0 0 1 2.83.19 7.99 7.99 0 0 1 2.65 2.34 2 2 0 0 1-.8 2.14 2 2 0 0 1-.76 4.06 7.98 7.98 0 0 1-.03 3.98 2 2 0 0 1-1.13.45 9.86 9.86 0 0 1-2.31 1.11A11.92 11.92 0 0 1 2 22v3h46v-3a11.92 11.92 0 0 1-2.3-1.11 2 2 0 0 1-1.13-.45 7.98 7.98 0 0 1-.03-3.98 7.98 7.98 0 0 1-1.56-.06 7.99 7.99 0 0 1-2.65-2.34 2 2 0 0 1-.76-4.06 2 2 0 0 1-.8-2.14A2 2 0 0 1 2 4.88zM7 10l5 4.5L7 15V10z" />
                    </svg>

                    <div>
                      <p className="font-medium">{siteSettings?.contactPhone || '+1 (234) 567-890'}</p>
                      <p className="text-sm">{siteSettings?.workingHours || 'Mon - Sat: 9AM - 6PM'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zM4 8h16v7H4V8zm6 4h4v2h-4v-2zm0 4h4v2h-4v-2z" />
                    </svg>

                    <div>
                      <p className="font-medium">{siteSettings?.address || '123 Glass Street, City Center'}</p>
                      <p className="text-sm">{siteSettings?.contactEmail || 'info@kaanchwala.com'}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">
                    Social Links
                  </h3>

                  <div className="flex gap-3">
                    <a
                      href="#!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      {/* Instagram icon */}
                    </a>
                    <a
                      href="#!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      {/* Facebook icon */}
                    </a>
                    <a
                      href="#!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      {/* YouTube icon */}
                    </a>
                    <a
                      href="#!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      {/* LinkedIn icon */}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="mt-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>

                    <input
                      type="text"
                      name="company"
                      className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>

                    <select
                      name="service"
                      className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="frameless-partitions">Frameless Glass Partitions</option>
                      <option value="aluminium-partitions">Aluminium Framed Partitions</option>
                      <option value="half-partitions">Half Glass Partitions</option>
                      <option value="sliding-partitions">Sliding Glass Partitions</option>
                      <option value="double-glazed">Double Glazed Partitions</option>
                      <option value="curved-partitions">Curved Glass Partitions</option>
                      <option value="glass-doors">Glass Doors</option>
                      <option value="office-glass">Office Glass Solutions</option>
                      <option value="shower-enclosures">Shower Enclosures</option>
                      <option value="glass-railings">Glass Railings</option>
                      <option value="mirrors">Mirrors</option>
                      <option value="custom-solutions">Custom Glass Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location/Area
                  </label>

                  <input
                    type="text"
                    name="location"
                    className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="City or Region"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqBlock />
    </div>
  )
}