import Link from 'next/link'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/SiteHeader'

const services: Record<string, { title: string; description: string; benefits: string[] }> = {
  'frameless-glass-partitions': {
    title: 'Frameless Glass Partitions',
    description: 'Minimal, modern partitions that maximize transparency and natural light while keeping the workspace visually open.',
    benefits: ['Clean minimal appearance', 'Maximum visual transparency', 'Ideal for modern offices'],
  },
  'aluminium-framed-partitions': {
    title: 'Aluminium Framed Partitions',
    description: 'Durable framed systems with clean aluminium profiles for offices that need structure, privacy and a refined finish.',
    benefits: ['Strong aluminium framing', 'Flexible office layouts', 'Professional clean finish'],
  },
  'half-glass-partitions': {
    title: 'Half Glass Partitions',
    description: 'A practical balance of privacy and openness using solid lower panels with glass above.',
    benefits: ['Better visual privacy', 'Natural light above eye level', 'Practical for cabins and workstations'],
  },
  'sliding-glass-partitions': {
    title: 'Sliding Glass Partitions',
    description: 'Space-saving sliding systems for flexible meeting rooms, cabins and work areas.',
    benefits: ['Space-efficient movement', 'Flexible room separation', 'Modern appearance'],
  },
  'double-glazed-partitions': {
    title: 'Double Glazed Partitions',
    description: 'Enhanced acoustic and thermal performance for offices that need quieter, more private spaces.',
    benefits: ['Improved acoustic separation', 'Enhanced comfort', 'Premium office finish'],
  },
  'curved-glass-partitions': {
    title: 'Curved Glass Partitions',
    description: 'Custom curved glass designs for distinctive reception areas, cabins and premium interiors.',
    benefits: ['Custom curved forms', 'Distinctive architectural look', 'Designed for premium interiors'],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug]
  if (!service) notFound()

  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <Link href="/services" className="text-sm font-bold text-[#0644a4]">← All Services</Link>
        <p className="mt-8 text-sm font-black uppercase tracking-wide text-[#0644a4]">Office Glass Partitions</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black text-[#10234d] md:text-5xl">{service.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.description}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {service.benefits.map((benefit) => <div key={benefit} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><span className="font-black text-[#0750b8]">✓</span><p className="mt-2 font-bold">{benefit}</p></div>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
          <Link href="/services" className="rounded-md border border-[#0750b8] px-6 py-3 font-bold text-[#0750b8]">VIEW ALL SERVICES</Link>
        </div>
      </main>
    </>
  )
}
