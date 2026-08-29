import Link from 'next/link'

const services = [
  ['Toughened Glass', 'Safety-focused toughened glass for doors, partitions and modern interiors.', 'toughened-glass'],
  ['Shower Cubicles', 'Custom shower enclosures with clean hardware and practical layouts.', 'shower-cubicles'],
  ['Glass Partitions', 'Frameless and framed partition systems for homes and offices.', 'glass-partitions'],
  ['Office Glass Cabins', 'Professional glass cabins for private, bright and productive workspaces.', 'office-glass-cabins'],
  ['Custom Wall Mirrors', 'Made-to-measure mirrors for residential and commercial interiors.', 'custom-wall-mirrors'],
  ['Decorative Mirrors', 'Designer mirror solutions that add depth, light and character.', 'decorative-mirrors'],
  ['Glass Railings & Balustrades', 'Safe, elegant railing systems for stairs, balconies and terraces.', 'glass-railings-balustrades'],
  ['Aluminium Sliding Windows', 'Durable sliding windows with modern aluminium profiles.', 'aluminium-sliding-windows'],
  ['UPVC Windows', 'Low-maintenance UPVC window solutions for comfort and durability.', 'upvc-windows'],
  ['Mesh Doors', 'Practical mesh door systems for ventilation and protection.', 'mesh-doors'],
  ['Fusion Glass & Beveling', 'Precision decorative glass with fusion and beveling finishes.', 'fusion-glass-beveling'],
  ['Glass Polishing', 'Professional polishing for clean, smooth and refined glass edges.', 'glass-polishing'],
  ['PVD Work & Aluminium Profiles', 'Premium PVD finishes and aluminium profile solutions.', 'pvd-work-aluminium-profiles'],
  ['Aristo Wardrobes', 'Premium wardrobe systems designed for modern interiors.', 'aristo-wardrobes'],
]

export default function ServicesPage() {
  return <main className="container py-16"><Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Our Services</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">Complete Glass & Interior Solutions</h1><p className="mt-4 max-w-3xl text-slate-600">From toughened glass and partitions to mirrors, windows, railings and wardrobes, Kaanchwala delivers design, fabrication and installation.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title,text,slug])=><Link href={`/services/${slug}`} key={slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="mb-4 h-2 w-14 rounded bg-[#0644a4]"/><h2 className="text-xl font-bold text-[#10234d]">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p><span className="mt-4 inline-block text-sm font-bold text-[#0644a4]">VIEW SERVICE →</span></Link>)}</div><Link href="/contact" className="mt-8 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">REQUEST A QUOTE</Link></main>
}
