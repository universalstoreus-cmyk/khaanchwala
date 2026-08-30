import Link from 'next/link'

const services = [
  ['Toughened Glass','Safety-focused toughened glass for doors, partitions and interiors.','toughened-glass','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=82'],
  ['Shower Cubicles','Custom shower enclosures with clean hardware and practical layouts.','shower-cubicles','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82'],
  ['Glass Partitions','Frameless and framed partition systems for homes and offices.','glass-partitions','https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=82'],
  ['Office Glass Cabins','Professional glass cabins for private, bright workspaces.','office-glass-cabins','https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=82'],
  ['Custom Wall Mirrors','Made-to-measure mirrors for residential and commercial interiors.','custom-wall-mirrors','https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=82'],
  ['Decorative Mirrors','Designer mirror solutions that add depth, light and character.','decorative-mirrors','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=82'],
  ['Glass Railings & Balustrades','Elegant railing systems for stairs, balconies and terraces.','glass-railings-balustrades','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82'],
  ['Aluminium Sliding Windows','Durable sliding windows with modern aluminium profiles.','aluminium-sliding-windows','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82'],
  ['UPVC Windows','Low-maintenance window solutions for comfort and durability.','upvc-windows','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=82'],
  ['Mesh Doors','Practical mesh door systems for ventilation and protection.','mesh-doors','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=82'],
  ['Fusion Glass & Beveling','Precision decorative glass with fusion and beveling finishes.','fusion-glass-beveling','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82'],
  ['Glass Polishing','Professional polishing for clean, smooth glass edges.','glass-polishing','https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=900&q=82'],
  ['PVD Work & Aluminium Profiles','Premium PVD finishes and aluminium profile solutions.','pvd-work-aluminium-profiles','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=82'],
  ['Aristo Wardrobes','Premium wardrobe systems designed for modern interiors.','aristo-wardrobes','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=82'],
]

export default function ServicesPage() {
  return <main className="container py-12 md:py-16"><Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Our Services</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">Complete Glass & Interior Solutions</h1><p className="mt-4 max-w-3xl text-slate-600">From toughened glass and partitions to mirrors, windows, railings and wardrobes, Kaanchwala delivers design, fabrication and installation.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title,text,slug,image])=><Link href={`/services/${slug}`} key={slug} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="h-48 overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition duration-300 hover:scale-105" loading="lazy" /></div><div className="p-6"><div className="mb-4 h-1.5 w-14 rounded bg-[#0644a4]"/><h2 className="text-xl font-bold text-[#10234d]">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p><span className="mt-4 inline-block text-sm font-bold text-[#0644a4]">VIEW SERVICE →</span></div></Link>)}</div><Link href="/contact" className="mt-8 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">REQUEST A QUOTE</Link></main>
}
