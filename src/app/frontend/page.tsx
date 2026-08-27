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
import config from '@/payload.config'

const benefitIcons = [
  <svg key="aesthetics" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="currentColor" d="M12 2 4 7v10l8 5 8-5V7l-8-5Zm0 3.2L17.5 8 12 11.3 6.5 8 12 5.2ZM7 10l4 2.4v6.1l-4-2.5V10Zm6 8.5v-6.1l4-2.4v6l-4 2.5Z"/></svg>,
  <svg key="noise" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="currentColor" d="M4 10v4h3l4 4V6L7 10H4Zm11.5 2a3.5 3.5 0 0 0-1.7-3v6a3.5 3.5 0 0 0 1.7-3Zm0-7.1v2.1a6 6 0 0 1 0 10v2.1a8 8 0 0 0 0-14.2Z"/></svg>,
  <svg key="light" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8-5H2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Zm18 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2ZM5.6 6.4 4.2 5A1 1 0 0 1 5.6 3.6L7 5a1 1 0 0 1-1.4 1.4Zm12.8 0A1 1 0 0 1 17 5l1.4-1.4A1 1 0 0 1 19.8 5l-1.4 1.4ZM7 19l-1.4 1.4A1 1 0 0 1 4.2 19L5.6 17.6A1 1 0 1 1 7 19Zm12.8 0A1 1 0 0 1 18.4 20.4L17 19a1 1 0 0 1 1.4-1.4L19.8 19Z"/></svg>,
  <svg key="space" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="currentColor" d="M4 4h6v2H6v4H4V4Zm10 0h6v6h-2V6h-4V4ZM4 14h2v4h4v2H4v-6Zm14 0h2v6h-6v-2h4v-4Z"/></svg>,
  <svg key="quality" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="currentColor" d="m12 2 2.2 2.1 3-.2.8 2.9 2.5 1.7-1.2 2.8 1.2 2.8-2.5 1.7-.8 2.9-3-.2L12 22l-2.2-2.1-3 .2-.8-2.9-2.5-1.7 1.2-2.8-1.2-2.8L6 8.5l.8-2.9 3 .2L12 2Zm-1.2 13.2 5-5-1.4-1.4-3.6 3.6-1.7-1.7-1.4 1.4 3.1 3.1Z"/></svg>,
  <svg key="installation" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5"><path fill="currentColor" d="M14.7 6.3a4.1 4.1 0 0 0-5.4 5.4l-6.6 6.6a1.4 1.4 0 0 0 2 2l6.6-6.6a4.1 4.1 0 0 0 5.4-5.4l-2.4 2.4-2.1-.7-.7-2.1 2.4-2.4.8.8Z"/></svg>,
]

export default async function HomePage() {
  const siteSettings: any = await getCachedGlobal('site-settings', 1, 'en')
  const payload = await getPayload({ config })
  const [{ docs: services }, { docs: projects }, { docs: testimonials }] = await Promise.all([
    payload.find({ collection: 'services', where: { published: { equals: true } }, limit: 6 }),
    payload.find({ collection: 'portfolio', where: { published: { equals: true } }, limit: 6 }),
    payload.find({ collection: 'testimonials', where: { published: { equals: true }, featured: { equals: true } }, limit: 4 }),
  ])

  const benefitData = [
    ['Elegant Aesthetics', 'Transform your space with sleek, modern glass designs that elevate the look of any environment.'],
    ['Noise Reduction', 'Our glass solutions help create quieter, more peaceful environments for work and living.'],
    ['Natural Light', 'Maximize natural light flow while maintaining privacy and style with our glass partitions.'],
    ['Space Optimization', 'Our glass partitions maximize available space while maintaining an open, airy feel.'],
    ['Premium Quality', 'We use only the finest materials and expert craftsmanship for long-lasting results.'],
    ['Expert Installation', 'Our certified installers ensure perfect fit and finish for every project.'],
  ]

  return (
    <div>
      <section className="min-h-screen">
        <div className="relative">
          <div className="bg-gray-50 dark:bg-gray-900 border-b border-border py-2 px-4"><div className="container max-w-7xl mx-auto flex items-center justify-between"><div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300"><span>{siteSettings?.address || '123 Glass Street, City Center'}</span><span>{siteSettings?.workingHours || 'Mon - Sat: 9AM - 6PM'}</span></div><div className="flex items-center gap-4"><a href={`tel:${siteSettings?.contactPhone || '+1234567890'}`} className="text-blue-600 dark:text-blue-400 hover:underline">{siteSettings?.contactPhone || '+1 234 567 890'}</a><a href={`https://wa.me/${siteSettings?.contactPhone?.replace(/[^\d]/g, '') || '1234567890'}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white rounded-full px-3 py-1 text-sm">WhatsApp</a><a href={`mailto:${siteSettings?.contactEmail || 'info@kaanchwala.com'}`} className="text-blue-600 dark:text-blue-400 hover:underline">{siteSettings?.contactEmail || 'info@kaanchwala.com'}</a></div></div></div>
          <div className="relative pt-20 pb-32 md:pb-40"><GlassHero eyebrow="Premium Glass & Mirror Solutions" heading="Transform Your Space with Elegance" highlightedHeading="Kaanchwala Glass" description="We specialize in high-quality glass partitions, glass doors, shower enclosures, mirrors, and customized glass solutions for residential and commercial properties. Experience elegance, durability, and functionality in every project." primaryButton={{ label: 'View Our Services', url: '/services', appearance: 'default' }} secondaryButton={{ label: 'Get a Quote', url: '/contact', appearance: 'outline' }} heroImage="/placeholder-hero-desktop.webp" mobileHeroImage="/placeholder-hero-mobile.webp" /></div>
          <div className="container mx-auto max-w-7xl px-4 py-16"><TrustBenefits benefits={benefitData.map(([title, description], index) => ({ title, description, icon: benefitIcons[index] }))} /></div>
          <ServiceGrid services={services} />
          <div className="py-24 md:py-32 bg-white dark:bg-gray-900"><div className="container mx-auto max-w-7xl px-4"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-12">Available Glass Options</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{['Clear Glass|Crystal clear glass for maximum visibility','Frosted Glass|Privacy glass with elegant frost pattern','Tinted Glass|Subtle tint for heat and glare reduction','Patterned Glass|Decorative patterns for unique designs','Smart Glass|Switchable glass that changes from transparent to opaque'].map((item) => { const [title, description] = item.split('|'); return <div key={title} className="rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6 transition-transform hover:shadow-lg hover:shadow-blue-500/20"><h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{title}</h3><p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{description}</p></div> })}</div></div></div>
          <WhyChooseUs title="Why Kaanchwala Glass & Mirror Solutions" description="We combine premium quality, expert craftsmanship, and exceptional service to deliver glass solutions that exceed your expectations." bullets={['Improves teamwork and collaboration','Creates an open and airy environment','Customizable to your office needs','Easy maintenance and cleaning','High durability and long-lasting performance','Professional installation guaranteed']} ctaButton={{ label: 'Contact Us', url: '/contact', appearance: 'default' }} image="/placeholder-office.webp" />
          <InstallationProcess steps={[{ number: 1, title: 'Consultation', description: 'Free site visit and design consultation' },{ number: 2, title: 'Site Visit', description: 'Detailed measurements and assessment' },{ number: 3, title: 'Design & Plan', description: 'Custom design and engineering plans' },{ number: 4, title: 'Manufacturing', description: 'Precision fabrication in our workshop' },{ number: 5, title: 'Installation', description: 'Professional installation by certified technicians' },{ number: 6, title: 'Quality Check', description: 'Thorough inspection and finishing' },{ number: 7, title: 'After Sales', description: 'Ongoing support and maintenance' }]} />
        </div>
        <ProjectsGrid projects={projects} />
        <div className="py-24 md:py-32 bg-white dark:bg-gray-900"><div className="container mx-auto max-w-7xl px-4"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center mb-16">What Clients Say</h2><div className="grid md:grid-cols-3 gap-6">{testimonials.map((testimonial) => <div key={testimonial.id} className="group rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 p-6"><p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{testimonial.quote}</p><div className="flex items-center justify-between"><span className="font-medium text-gray-900 dark:text-white">{testimonial.authorName}</span><div className="flex text-yellow-500">{[1,2,3,4,5].map((star) => <span key={star}>★</span>)}</div></div></div>)}</div></div></div>
        <CTASection heading="Ready to Transform Your Space?" supportingText="Get in touch with our experts today for a free consultation and quote. We're here to help you find the perfect glass solution for your project." primaryButton={{ label: 'Call Now', url: 'tel:+1234567890', appearance: 'default' }} secondaryButton={{ label: 'WhatsApp Us', url: 'https://wa.me/1234567890', appearance: 'outline' }} trustPoints={[{ title: 'Free Site Visit', description: 'We visit your location at no cost' },{ title: 'Transparent Pricing', description: 'No hidden fees, honest quotes' },{ title: 'Expert Guidance', description: 'Our team guides you every step of the way' },{ title: 'Timely Delivery', description: 'We respect your time and deadlines' },{ title: 'Quality Assured', description: 'Premium materials and workmanship' }]} ctaButton={{ label: 'Get Free Quote', url: '/contact', appearance: 'default' }} />
      </section>
    </div>
  )
}