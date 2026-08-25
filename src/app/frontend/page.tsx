'use client'

import React, { useEffect, useState } from 'react'
import { getPayload } from 'payload'
import { Head } from 'next/head'

import { GlassHero } from '@/heros/Glass'
import { ServiceGrid } from '@/components/ServicesGrid/ServiceGrid'
import { ProjectsGrid } from '@/components/ProjectsGrid/ProjectsGrid'
import { TrustBenefits } from '@/components/TrustBenefits/TrustBenefits'
import { WhyChooseUs } from '@/components/WhyChooseUs/WhyChooseUs'
import { InstallationProcess } from '@/components/InstallationProcess/InstallationProcess'
import { TestimonialsGrid } from '@/components/TestimonialsGrid/TestimonialsGrid'
import { CTASection } from '@/components/CTASection/CTASection'
import { getCachedGlobal } from '@/utilities/getGlobals'

export default async function HomePage() {
  // Fetch site settings
  const siteSettings: any = await getCachedGlobal('site-settings', 1, 'en')

  // Fetch services
  const { docs: services } = await getPayload({
    config: await import('@/payload-config').then((mod) => mod.default),
  }).find({
    collection: 'services',
    where: { published: { equals: true } },
    limit: 6,
  })

  // Fetch projects
  const { docs: projects } = await getPayload({
    config: await import('@/payload-config').then((mod) => mod.default),
  }).find({
    collection: 'portfolio',
    where: { published: { equals: true } },
    limit: 6,
  })

  // Fetch testimonials
  const { docs: testimonials } = await getPayload({
    config: await import('@/payload-config').then((mod) => mod.default),
  }).find({
    collection: 'testimonials',
    where: { published: { equals: true }, featured: { equals: true } },
    limit: 4,
  })

  return (
    <div>
      <Head>
        <title>{siteSettings?.siteName || 'Kaanchwala Glass & Mirror Solutions'}</title>
        <meta
          name="description"
          content={siteSettings?.siteDescription || 'Premium glass and mirror solutions for modern spaces'}
        />
      </Head>

      <section className="min-h-screen">
        <div className="relative">
          {/* Top Information Bar */}
          <div className="bg-gray-50 dark:bg-gray-900 border-b border-border py-2 px-4">
            <div className="container max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                <span>{siteSettings?.address || '123 Glass Street, City Center'}</span>
                <span>{siteSettings?.workingHours || 'Mon - Sat: 9AM - 6PM'}</span>
              </div>

              <div className="flex items-center gap-4">
                <a href="tel:{siteSettings?.contactPhone || '+1234567890'}" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {siteSettings?.contactPhone || '+1 234 567 890'}
                </a>

                <a href={`https://wa.me/${siteSettings?.contactPhone?.replace(/[^\d]/g, '') || '1234567890'}}` target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white rounded-full px-3 py-1 text-sm flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 2H13c-1.1 0-2 .9-2 2v10l7 5 7-5v-8c0-1.1-.9-2-2-2zM7 2l-5 4.5 5 3.3L7 16l5 2.8 5-2.8L7 2z" />
                  </svg>
                  WhatsApp
                </a>

                <a href="mailto:{siteSettings?.contactEmail || 'info@kaanchwala.com'}" className="text-blue-600 dark:text-blue-400 hover:underline">
                  {siteSettings?.contactEmail || 'info@kaanchwala.com'}
                </a>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative pt-20 pb-32 md:pb-40">
            <GlassHero
              eyebrow="Premium Glass & Mirror Solutions"
              heading="Transform Your Space with Elegance"
              highlightedHeading="Kaanchwala Glass"
              description="We specialize in high-quality glass partitions, glass doors, shower enclosures, mirrors, and customized glass solutions for residential and commercial properties. Experience elegance, durability, and functionality in every project."
              primaryButton={{
                label: 'View Our Services',
                url: '/services',
                appearance: 'default',
              }}
              secondaryButton={{
                label: 'Get a Quote',
                url: '/contact',
                appearance: 'outline',
              }}
              heroImage="/placeholder-hero-desktop.webp"
              mobileHeroImage="/placeholder-hero-mobile.webp"
            />
          </div>

          {/* Trust Benefits Section */}
          <div className="container mx-auto max-w-7xl px-4 py-16">
            <TrustBenefits
              benefits={[
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M6 2L3 6l3 6l3-6" />
                      <path d="M2 12l3 6l3-6l3 6l-3 6l3-6l3 6" />
                    </svg>
                  ),
                  title="Elegant Aesthetics",
                  description="Transform your space with sleek, modern glass designs that elevate the look of any environment."
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  title="Noise Reduction",
                  description="Our glass solutions help create quieter, more peaceful environments for work and living."
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="1" y="3" width="15" height="13" />
                      <path d="M1 8h4l2 3l2 1" />
                      <path d="M1 16h2l2 1" />
                    </svg>
                  ),
                  title="Natural Light",
                  description "Maximize natural light flow while maintaining privacy and style with our glass partitions."
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 18V5l12-2v13" />
                      <rect x="2" y="4" width="20" height="12" rx="2" />
                    </svg>
                  ),
                  title="Space Optimization",
                  description="Our glass partitions maximize available space while maintaining an open, airy feel."
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M8 14l1.4-1.4a1.89 1.89 0 1 1 2.8 2.8L15 19.8l1.4-1.4a1.89 1.89 0 1 1-2.8 2.8L12 21l-4.1-1.7" />
                    </svg>
                  ),
                  title="Premium Quality",
                  description="We use only the finest materials and expert craftsmanship for long-lasting results."
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                  title="Expert Installation",
                  description="Our certified installers ensure perfect fit and finish for every project."
                },
              ]}
            />
          </div>

          {/* Services Section */}
          <ServiceGrid services={services} />

          {/* Glass Options Section */}
          <div className="py-24 md:py-32 bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-7xl px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Available Glass Options
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Clear Glass', description: 'Crystal clear glass for maximum visibility' },
                  { title: 'Frosted Glass', description: 'Privacy glass with elegant frost pattern' },
                  { title: 'Tinted Glass', description: 'Subtle tint for heat and glare reduction' },
                  { title: 'Patterned Glass', description: 'Decorative patterns for unique designs' },
                  { title: 'Smart Glass', description: 'Switchable glass that changes from transparent to opaque' },
                ].map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6 transition-transform hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                        {option.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                        {option.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <WhyChooseUs
            title="Why Kaanchwala Glass & Mirror Solutions"
            description="We combine premium quality, expert craftsmanship, and exceptional service to deliver glass solutions that exceed your expectations."
            bullets={[
              'Improves teamwork and collaboration',
              'Creates an open and airy environment',
              'Customizable to your office needs',
              'Easy maintenance and cleaning',
              'High durability and long-lasting performance',
              'Professional installation guaranteed',
            ]}
            ctaButton={{ label: 'Contact Us', url: '/contact', appearance: 'default' }}
            image="/placeholder-office.webp"
          />

          {/* Installation Process Section */}
          <InstallationProcess steps={[
            { number: 1, title: 'Consultation', description: 'Free site visit and design consultation' },
            { number: 2, title: 'Site Visit', description: 'Detailed measurements and assessment' },
            { number: 3, title: 'Design & Plan', description: 'Custom design and engineering plans' },
            { number: 4, title: 'Manufacturing', description: 'Precision fabrication in our workshop' },
            { number: 5, title: 'Installation', description: 'Professional installation by certified technicians' },
            { number: 6, title: 'Quality Check', description: 'Thorough inspection and finishing' },
            { number: 7, title: 'After Sales', description: 'Ongoing support and maintenance' },
          ]} />
        </div>

        {/* Featured Projects Section */}
        <ProjectsGrid projects={projects} />

        {/* Testimonials Section */}
        <div className="py-24 md:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">
              What Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => {
                return (
                  <div
                    key={testimonial.id}
                    className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {testimonial.quote}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {testimonial.authorName}
                        </span>

                        <span className="text-gray-400 dark:text-gray-500 text-sm">
                          {testimonial.company}
                        </span>
                      </div>

                      <div className="flex text-yellow-500">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="inline-block">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <CTASection
          heading="Ready to Transform Your Space?"
          supportingText="Get in touch with our experts today for a free consultation and quote. We're here to help you find the perfect glass solution for your project."
          primaryButton={{ label: 'Call Now', url: 'tel:+1234567890', appearance: 'default' }}
          secondaryButton={{ label: 'WhatsApp Us', url: 'https://wa.me/1234567890', appearance: 'outline' }}
          trustPoints={[
            { title: 'Free Site Visit', description: 'We visit your location at no cost' },
            { title: 'Transparent Pricing', description: 'No hidden fees, honest quotes' },
            { title: 'Expert Guidance', description: 'Our team guides you every step of the way' },
            { title: 'Timely Delivery', description: 'We respect your time and deadlines' },
            { title: 'Quality Assured', description: 'Premium materials and workmanship' },
          ]}
          ctaButton={{ label: 'Get Free Quote', url: '/contact', appearance: 'default' }}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}