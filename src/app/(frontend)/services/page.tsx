import Link from 'next/link'

const items = ['Office Glass Partitions','Glass Doors','Glass Railings','Shower Enclosures','Aluminium Windows','Mirrors & Custom Glass']

export default function ServicesPage() {
  return <main className="container py-16"><Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link><h1 className="mt-6 text-4xl font-black">Our Glass Services</h1><p className="mt-3 max-w-2xl text-slate-600">Premium glass solutions designed, manufactured and installed for homes, offices and commercial spaces.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{items.map(x=><article key={x} className="rounded-xl border p-6 shadow-sm"><div className="mb-4 h-2 w-14 rounded bg-[#0644a4]"/><h2 className="text-xl font-bold">{x}</h2><p className="mt-2 text-sm leading-6 text-slate-500">Custom specifications, professional finishing and reliable installation.</p></article>)}</div></main>
}
