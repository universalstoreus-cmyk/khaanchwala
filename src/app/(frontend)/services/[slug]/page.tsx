import Link from 'next/link'
import { notFound } from 'next/navigation'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

const fallbackServices: Record<string, { title: string; description: string }> = {
  'toughened-glass': { title: 'Toughened Glass', description: 'Safety-focused toughened glass for doors, partitions and modern interiors.' },
  'shower-cubicles': { title: 'Shower Cubicles', description: 'Custom shower enclosures with clean hardware and practical layouts.' },
  'glass-partitions': { title: 'Glass Partitions', description: 'Frameless and framed partition systems for homes and offices.' },
  'office-glass-cabins': { title: 'Office Glass Cabins', description: 'Professional glass cabins for private, bright and productive workspaces.' },
  'custom-wall-mirrors': { title: 'Custom Wall Mirrors', description: 'Made-to-measure mirrors for residential and commercial interiors.' },
  'decorative-mirrors': { title: 'Decorative Mirrors', description: 'Designer mirror solutions that add depth, light and character.' },
  'glass-railings-balustrades': { title: 'Glass Railings & Balustrades', description: 'Safe, elegant railing systems for stairs, balconies and terraces.' },
  'aluminium-sliding-windows': { title: 'Aluminium Sliding Windows', description: 'Durable sliding windows with modern aluminium profiles.' },
  'upvc-windows': { title: 'UPVC Windows', description: 'Low-maintenance UPVC window solutions for comfort and durability.' },
  'mesh-doors': { title: 'Mesh Doors', description: 'Practical mesh door systems for ventilation and protection.' },
  'fusion-glass-beveling': { title: 'Fusion Glass & Beveling', description: 'Precision decorative glass with fusion and beveling finishes.' },
  'glass-polishing': { title: 'Glass Polishing', description: 'Professional polishing for clean, smooth and refined glass edges.' },
  'pvd-work-aluminium-profiles': { title: 'PVD Work & Aluminium Profiles', description: 'Premium PVD finishes and aluminium profile solutions.' },
  'aristo-wardrobes': { title: 'Aristo Wardrobes', description: 'Premium wardrobe systems designed for modern interiors.' },
  'frameless-glass-partitions': { title: 'Frameless Glass Partitions', description: 'Sleek, minimal glass partition systems with maximum transparency.' },
  'aluminium-framed-partitions': { title: 'Aluminium Framed Partitions', description: 'Durable framed partition systems with a clean modern finish.' },
  'half-glass-partitions': { title: 'Half Glass Partitions', description: 'Glass-and-solid-panel partitions designed for privacy and style.' },
  'sliding-glass-partitions': { title: 'Sliding Glass Partitions', description: 'Flexible sliding glass solutions for changing spaces.' },
  'double-glazed-partitions': { title: 'Double Glazed Partitions', description: 'Double-glazed systems for improved acoustic separation and privacy.' },
  'curved-glass-partitions': { title: 'Curved Glass Partitions', description: 'Custom curved glass designs for distinctive interiors.' },
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fallbackService = fallbackServices[slug]
  let databaseService: { title?: string; summary?: string } | undefined

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'services',
      limit: 1,
      depth: 1,
      where: { slug: { equals: slug } },
    })
    databaseService = result.docs[0] as typeof databaseService
  } catch {
    // Keep the public service page available even if the CMS is temporarily unavailable.
  }

  if (!databaseService && !fallbackService) notFound()

  const title = databaseService?.title || fallbackService?.title || slug
  const description = databaseService?.summary || fallbackService?.description || 'Professional glass and mirror solutions from Kaanch Wala.'

  return (
    <main className="container py-16">
      <Link href="/services" className="text-sm font-bold text-[#0644a4]">← All Services</Link>
      <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Kaanch Wala Services</p>
      <h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">{title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
      <div className="mt-10 rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">Professional design, fabrication & installation</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Tell us your measurements, finish preferences and project requirements. Our team can guide you from site visit to installation and after-sales support.</p>
        <Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
      </div>
    </main>
  )
}
