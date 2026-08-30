import Link from 'next/link'
import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

type CatalogService = { title: string; description: string; image: string; cutaway: string }

type MediaLike = { url?: string | null; filename?: string | null }
type ServiceDoc = {
  title?: string
  summary?: string
  coverImage?: MediaLike | string | null
  cutawayImage?: MediaLike | string | null
  gallery?: Array<{ image?: MediaLike | string | null; caption?: string | null }>
  features?: Array<{ title?: string; description?: string }>
  applications?: Array<{ title?: string; description?: string }>
  faqs?: Array<{ question?: string; answer?: string }>
  ctaLabel?: string
  ctaUrl?: string
  content?: unknown
}

const catalog: Record<string, CatalogService> = {
  'toughened-glass': { title: 'Toughened Glass', description: 'Safety-focused toughened glass for doors, partitions and modern interiors.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=82' },
  'shower-cubicles': { title: 'Shower Cubicles', description: 'Custom shower enclosures with clean hardware and practical layouts.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=82' },
  'glass-partitions': { title: 'Glass Partitions', description: 'Frameless and framed partition systems for homes and offices.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=82' },
  'office-glass-cabins': { title: 'Office Glass Cabins', description: 'Professional glass cabins for private, bright and productive workspaces.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=82' },
  'custom-wall-mirrors': { title: 'Custom Wall Mirrors', description: 'Made-to-measure mirrors for residential and commercial interiors.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=82' },
  'decorative-mirrors': { title: 'Decorative Mirrors', description: 'Designer mirror solutions that add depth, light and character.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82' },
  'glass-railings-balustrades': { title: 'Glass Railings & Balustrades', description: 'Safe, elegant railing systems for stairs, balconies and terraces.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82' },
  'aluminium-sliding-windows': { title: 'Aluminium Sliding Windows', description: 'Durable sliding windows with modern aluminium profiles.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=82' },
  'upvc-windows': { title: 'UPVC Windows', description: 'Low-maintenance UPVC window solutions for comfort and durability.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=82' },
  'mesh-doors': { title: 'Mesh Doors', description: 'Practical mesh door systems for ventilation and protection.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=82' },
  'fusion-glass-beveling': { title: 'Fusion Glass & Beveling', description: 'Precision decorative glass with fusion and beveling finishes.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=82' },
  'glass-polishing': { title: 'Glass Polishing', description: 'Professional polishing for clean, smooth and refined glass edges.', image: 'https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=82' },
  'pvd-work-aluminium-profiles': { title: 'PVD Work & Aluminium Profiles', description: 'Premium PVD finishes and aluminium profile solutions.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=82' },
  'aristo-wardrobes': { title: 'Aristo Wardrobes', description: 'Premium wardrobe systems designed for modern interiors.', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=84', cutaway: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82' },
}

function mediaUrl(value: MediaLike | string | null | undefined, fallback: string) {
  if (!value) return fallback
  if (typeof value === 'string') return value
  return value.url || fallback
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fallback = catalog[slug]
  if (!fallback) notFound()

  let doc: ServiceDoc | undefined
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({ collection: 'services', limit: 1, depth: 2, where: { slug: { equals: slug } } })
    doc = result.docs[0] as ServiceDoc | undefined
  } catch {
    // Public fallback keeps the route available if the CMS is temporarily unavailable.
  }

  const title = doc?.title || fallback.title
  const description = doc?.summary || fallback.description
  const hero = mediaUrl(doc?.coverImage, fallback.image)
  const cutaway = mediaUrl(doc?.cutawayImage, fallback.cutaway)
  const gallery = (doc?.gallery || []).map((item) => mediaUrl(item.image, hero)).filter(Boolean)
  const features = doc?.features?.filter((x) => x.title) || []
  const applications = doc?.applications?.filter((x) => x.title) || []
  const faqs = doc?.faqs?.filter((x) => x.question && x.answer) || []
  const ctaLabel = doc?.ctaLabel || 'GET FREE QUOTE'
  const ctaUrl = doc?.ctaUrl || '/contact'

  return (
    <main className="kw-page">
      <div className="container py-4 text-sm font-semibold text-slate-500"><Link href="/" className="text-[#0644a4]">Home</Link><span className="mx-2">›</span><Link href="/services" className="text-[#0644a4]">Services</Link><span className="mx-2">›</span><span>{title}</span></div>

      <section className="border-y border-slate-200 bg-white">
        <div className="container grid items-center gap-8 py-8 md:grid-cols-2 md:py-14">
          <div><p className="kw-eyebrow">Kaanchwala Services</p><h1 className="kw-title mt-3 text-4xl md:text-5xl">{title}</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">{description}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link href={ctaUrl} className="rounded-md bg-[#0644a4] px-6 py-3 text-center font-bold text-white">{ctaLabel}</Link><a href="https://wa.me/919891980070" className="rounded-md border border-slate-300 px-6 py-3 text-center font-bold text-[#10234d]">WHATSAPP US</a></div></div>
          <div className="overflow-hidden rounded-xl shadow-soft"><img src={hero} alt={`${title} by Kaanchwala`} className="h-[280px] w-full object-cover md:h-[390px]" /></div>
        </div>
      </section>

      <section className="kw-section bg-[#f7faff]">
        <div className="container grid items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div><p className="kw-eyebrow">Service Cutaway</p><h2 className="kw-title mt-2 text-3xl">See the details behind {title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">This visual is dedicated to this service. Content and imagery can be managed independently in Payload CMS, so one service never has to reuse another service’s cutaway.</p></div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-soft"><img src={cutaway} alt={`${title} cutaway and detail visual`} className="h-[260px] w-full rounded-lg object-cover md:h-[360px]" /></div>
        </div>
      </section>

      {features.length > 0 && <section className="kw-section"><div className="container"><p className="kw-eyebrow">Key Features</p><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map((item, i) => <article key={`${item.title}-${i}`} className="kw-card p-5"><h2 className="font-black text-[#10234d]">{item.title}</h2>{item.description && <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>}</article>)}</div></div></section>}

      {applications.length > 0 && <section className="kw-section kw-section-soft"><div className="container"><p className="kw-eyebrow">Applications</p><div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{applications.map((item, i) => <article key={`${item.title}-${i}`} className="kw-card p-5"><h2 className="font-black text-[#10234d]">{item.title}</h2>{item.description && <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>}</article>)}</div></div></section>}

      {gallery.length > 0 && <section className="kw-section"><div className="container"><p className="kw-eyebrow">Project Gallery</p><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((image, i) => <div key={`${image}-${i}`} className="kw-image h-56"><img src={image} alt={`${title} project ${i + 1}`} loading="lazy" /></div>)}</div></div></section>}

      {faqs.length > 0 && <section className="border-t border-slate-200 py-12"><div className="container max-w-4xl"><p className="kw-eyebrow">Frequently Asked Questions</p><div className="mt-5 grid gap-2">{faqs.map((item, i) => <details key={`${item.question}-${i}`} className="rounded border border-slate-200 bg-white px-4 py-3"><summary className="cursor-pointer text-sm font-bold text-[#10234d]">{item.question}</summary><p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p></details>)}</div></div></section>}

      <section className="bg-[#0644a4] py-10 text-white"><div className="container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><p className="text-2xl font-black">Need {title} for your project?</p><p className="mt-1 text-sm text-blue-100">Get a site visit and project-specific quotation from Kaanchwala.</p></div><Link href={ctaUrl} className="rounded bg-white px-6 py-3 text-sm font-black text-[#0644a4]">{ctaLabel}</Link></div></section>
    </main>
  )
}
