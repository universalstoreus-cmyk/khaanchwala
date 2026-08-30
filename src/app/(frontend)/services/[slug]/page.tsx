import Link from 'next/link'
import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

type Service = { title: string; description: string; image: string }

const catalog: Record<string, Service> = {
  'toughened-glass': { title: 'Toughened Glass', description: 'Safety-focused toughened glass for doors, partitions and modern interiors.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=84' },
  'shower-cubicles': { title: 'Shower Cubicles', description: 'Custom shower enclosures with clean hardware and practical layouts.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=84' },
  'glass-partitions': { title: 'Glass Partitions', description: 'Frameless and framed partition systems for homes and offices.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=84' },
  'office-glass-cabins': { title: 'Office Glass Cabins', description: 'Professional glass cabins for private, bright and productive workspaces.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=84' },
  'custom-wall-mirrors': { title: 'Custom Wall Mirrors', description: 'Made-to-measure mirrors for residential and commercial interiors.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=84' },
  'decorative-mirrors': { title: 'Decorative Mirrors', description: 'Designer mirror solutions that add depth, light and character.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=84' },
  'glass-railings-balustrades': { title: 'Glass Railings & Balustrades', description: 'Safe, elegant railing systems for stairs, balconies and terraces.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84' },
  'aluminium-sliding-windows': { title: 'Aluminium Sliding Windows', description: 'Durable sliding windows with modern aluminium profiles.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=84' },
  'upvc-windows': { title: 'UPVC Windows', description: 'Low-maintenance UPVC window solutions for comfort and durability.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=84' },
  'mesh-doors': { title: 'Mesh Doors', description: 'Practical mesh door systems for ventilation and protection.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=84' },
  'fusion-glass-beveling': { title: 'Fusion Glass & Beveling', description: 'Precision decorative glass with fusion and beveling finishes.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84' },
  'glass-polishing': { title: 'Glass Polishing', description: 'Professional polishing for clean, smooth and refined glass edges.', image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1500&q=84' },
  'pvd-work-aluminium-profiles': { title: 'PVD Work & Aluminium Profiles', description: 'Premium PVD finishes and aluminium profile solutions.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84' },
  'aristo-wardrobes': { title: 'Aristo Wardrobes', description: 'Premium wardrobe systems designed for modern interiors.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=84' },
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = catalog[slug]
  if (!item) notFound()

  let title = item.title
  let description = item.description
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({ collection: 'services', limit: 1, depth: 1, where: { slug: { equals: slug } } })
    const doc = result.docs[0] as { title?: string; summary?: string } | undefined
    title = doc?.title || title
    description = doc?.summary || description
  } catch {
    // Keep the public page available if the CMS is temporarily unavailable.
  }

  return (
    <main className="kw-page">
      <div className="container py-4 text-sm font-semibold text-slate-500"><Link href="/" className="text-[#0644a4]">Home</Link><span className="mx-2">›</span><Link href="/services" className="text-[#0644a4]">Services</Link><span className="mx-2">›</span><span>{title}</span></div>
      <section className="border-y border-slate-200 bg-white">
        <div className="container grid items-center gap-8 py-8 md:grid-cols-2 md:py-14">
          <div><p className="kw-eyebrow">Kaanchwala Services</p><h1 className="kw-title mt-3 text-4xl md:text-5xl">{title}</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{description}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="rounded-md bg-[#0644a4] px-6 py-3 text-center font-bold text-white">GET FREE QUOTE</Link><a href="https://wa.me/919891980070" className="rounded-md border border-slate-300 px-6 py-3 text-center font-bold text-[#10234d]">WHATSAPP US</a></div></div>
          <div className="overflow-hidden rounded-xl shadow-soft"><img src={item.image} alt={`${title} by Kaanchwala`} className="h-[280px] w-full object-cover md:h-[390px]" /></div>
        </div>
      </section>
      <section className="kw-section"><div className="container grid gap-5 md:grid-cols-3"><div className="kw-card p-6"><h2 className="font-black">Site Visit</h2><p className="mt-2 text-sm text-slate-500">Measurements and requirements at your location.</p></div><div className="kw-card p-6"><h2 className="font-black">Design & Fabrication</h2><p className="mt-2 text-sm text-slate-500">A solution selected around your space and finish.</p></div><div className="kw-card p-6"><h2 className="font-black">Installation & Support</h2><p className="mt-2 text-sm text-slate-500">Professional installation followed by after-sales support.</p></div></div></section>
    </main>
  )
}
