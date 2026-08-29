import Link from 'next/link'

const services: Record<string, { title: string; description: string }> = {
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
}

export function generateStaticParams() { return Object.keys(services).map((slug) => ({ slug })) }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug]
  if (!service) return null
  return <main className="container py-16"><Link href="/services" className="text-sm font-bold text-[#0644a4]">← All Services</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Kaanchwala Services</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">{service.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{service.description}</p><div className="mt-10 rounded-xl border bg-white p-6 shadow-sm"><h2 className="text-2xl font-black">Professional design, fabrication & installation</h2><p className="mt-3 max-w-2xl text-slate-600">Tell us your measurements, finish preferences and project requirements. Our team can guide you from site visit to installation and after-sales support.</p><Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link></div></main>
}
