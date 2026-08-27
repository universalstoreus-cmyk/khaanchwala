import React from 'react'
import { getPayload } from 'payload'
import { GlassHero } from '@/heros/Glass'
import { ServiceGrid } from '@/components/ServicesGrid/ServiceGrid'
import { ProjectsGrid } from '@/components/ProjectsGrid/ProjectsGrid'
import { TrustBenefits } from '@/components/TrustBenefits/TrustBenefits'
import { WhyChooseUs } from '@/components/WhyChooseUs/WhyChooseUs'
import { InstallationProcess } from '@/components/InstallationProcess/InstallationProcess'
import { CTASection } from '@/components/CTASection/CTASection'
import { getCachedGlobal } from '@/utilities/getGlobals'

export default async function HomePage() {
  const siteSettings: any = await getCachedGlobal('site-settings', 1, 'en')

  const payload = await getPayload({
    config: await import('@/payload-config').then((mod) => mod.default),
  })

  const [{ docs: services }, { docs: projects }, { docs: testimonials }] = await Promise.all([
    payload.find({ collection: 'services', where: { published: { equals: true } }, limit: 6 }),
    payload.find({ collection: 'portfolio', where: { published: { equals: true } }, limit: 6 }),
    payload.find({ collection: 'testimonials', where: { published: { equals: true }, featured: { equals: true } }, limit: 4 }),
  ])

  return (
    <div>
      <section className="min-h-screen">
        <div className="relative">
          <div className="bg-gray-50 dark:bg-gray-900 border-b border-border py-2 px-4">
            <div className="container max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
                <span>{siteSettings?.address || '123 Glass Street, City Center'}</span>
                <span>{siteSettings?.workingHours || 'Mon - Sat: 9AM - 6PM'}</span>
              </div>
              <div className="flex items-center gap-4">
                <a href={`tel:${siteSettings?.contactPhone || '+1234567890'}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {siteSettings?.contactPhone || '+1 234 567 890'}
                </a>
                <a href={`https://wa.me/${siteSettings?.contactPhone?.replace(/[^\d]/g, '') || '1234567890'}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white rounded-full px-3 py-1 text-sm flex items-center gap-1">
                  WhatsApp
                </a>
                <a href={`mailto:${siteSettings?.contactEmail || 'info@kaanchwala.com'}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {siteSettings?.contactEmail || 'info@kaanchwala.com'}
                </a>
              </div>
            </div>
          </div>

          <div className="relative pt-20 pb-32 md:pb-40">
            <GlassHero
              eyebrow="Premium Glass & Mirror Solutions"
              heading="Transform Your Space with Elegance"
              highlightedHeading="Kaanchwala Glass"
              description="We specialize in high-quality glass partitions, glass doors, shower enclosures, mirrors, and customized glass solutions for residential and commercial properties. Experience elegance, durability, and functionality in every project."
              primaryButton={{ label: 'View Our Services', url: '/services', appearance: 'default' }}
              secondaryButton={{ label: 'Get a Quote', url: '/contact', appearance: 'outline' }}
              heroImage="/placeholder-hero-desktop.webp"
              mobileHeroImage="/placeholder-hero-mobile.webp"
            />
          </div>

          <div className="container mx-auto max-w-7xl px-4 py-16">
            <TrustBenefits
              benefits={[
                { title: 'Elegant Aesthetics', description: 'Transform your space with sleek, modern glass designs that elevate the look of any environment.' },
                { title: 'Noise Reduction', description: 'Our glass solutions help create quieter, more peaceful environments for work and living.' },
                { title: 'Natural Light', description: 'Maximize natural light flow while maintaining privacy and style with our glass partitions.' },
                { title: 'Space Optimization', description: 'Our glass partitions maximize available space while maintaining an open, airy feel.' },
                { title: 'Premium Quality', description: 'We use only the finest materials and expert craftsmanship for long-lasting results.' },
                { title: 'Expert Installation', description: 'Our certified installers ensure perfect fit and finish for every project.' },
              ]}
            />
          </div>

          <ServiceGrid services={services} />

          <div className="py-24 md:py-32 bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-7xl px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">Available Glass Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Clear Glass', description: 'Crystal clear glass for maximum visibility' },
                  { title: 'Frosted Glass', description: 'Privacy glass with elegant frost pattern' },
                  { title: 'Tinted Glass', description: 'Subtle tint for heat and glare reduction' },
                  { title: 'Patterned Glass', description: 'Decorative patterns for unique designs' },
                  { title: 'Smart Glass', description: 'Switchable glass that changes from transparent to opaque' },
                ].map((option, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6 transition-transform hover:shadow-lg hover:shadow-blue-500/20">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{option.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{option.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <WhyChooseUs
            title="Why Kaanchwala Glass & Mirror Solutions"
            description="We combine premium quality, expert craftsmanship, and exceptional service to deliver glass solutions that exceed your expectations."
            bullets={['Improves teamwork and collaboration', 'Creates an open and airy environment', 'Customizable to your office needs', 'Easy maintenance and cleaning', 'High durability and long-lasting performance', 'Professional installation guaranteed']}
            ctaButton={{ label: 'Contact Us', url: '/contact', appearance: 'default' }}
            image="/placeholder-office.webp"
          />

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

        <ProjectsGrid projects={projects} />

        <div className="py-24 md:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">What Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{testimonial.quote}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900 dark:text-white">{testimonial.authorName}</span>
                      <span className="text-gray-400 dark:text-gray-500 text-sm">{testimonial.company}</span>
                    </div>
                    <div className="flex text-yellow-500">{[1, 2, 3, 4, 5].map((star) => <span key={star}>★</span>)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
      </section>
    </div>
  )
}
