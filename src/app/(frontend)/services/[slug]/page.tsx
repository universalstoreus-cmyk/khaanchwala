import Link from 'next/link'
import { notFound } from 'next/navigation'

const services: Record<string, { title: string; description: string }> = {
  'frameless-glass-partitions': {
    title: 'Frameless Glass Partitions',
    description: 'Minimal, modern partitions that maximize transparency and natural light while keeping the workspace visually open.',
  },
  'aluminium-framed-partitions': {
    title: 'Aluminium Framed Partitions',
    description: 'Durable framed systems with clean aluminium profiles for offices that need structure, privacy and a refined finish.',
  },
  'half-glass-partitions': {
    title: 'Half Glass Partitions',
    description: 'A practical balance of privacy and openness using solid lower panels with glass above.',
  },
  'sliding-glass-partitions': {
    title: 'Sliding Glass Partitions',
    description: 'Space-saving sliding systems for flexible meeting rooms, cabins and work areas.',
  },
  'double-glazed-partitions': {
    title: 'Double Glazed Partitions',
    description: 'Enhanced acoustic and thermal performance for offices that need quieter, more private spaces.',
  },
  'curved-glass-partitions': {
    title: 'Curved Glass Partitions',
    description: 'Custom curved glass designs for distinctive reception areas, cabins and premium interiors.',
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
    <main className="container py-16">
      <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Office Glass Partitions</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">{service.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.description}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/contact" className="rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
        <Link href="/services" className="rounded-md border border-[#0750b8] px-6 py-3 font-bold text-[#0750b8]">VIEW ALL SERVICES</Link>
      </div>
    </main>
  )
}
