import Link from 'next/link'

const items = [
  'Toughened Glass',
  'Shower Cubicles',
  'Glass Partitions',
  'Office Glass Cabins',
  'Custom Wall Mirrors',
  'Decorative Mirrors',
  'Glass Railings & Balustrades',
  'Aluminium Sliding Windows',
  'UPVC Windows',
  'Mesh Doors',
  'Fusion Glass & Beveling',
  'Glass Polishing',
  'PVD Work & Aluminium Profiles',
  'Aristo Wardrobes',
]

export default function ServicesPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <h1 className="mt-6 text-4xl font-black text-[#10234d]">Our Services</h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        Complete glass, mirror, window and interior solutions for residential, commercial and hospitality spaces.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 h-2 w-14 rounded bg-[#0644a4]" />
            <h2 className="text-xl font-bold text-[#10234d]">{item}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Quality materials, precise fabrication and professional installation tailored to your project.
            </p>
            <Link href="/contact" className="mt-4 inline-block text-sm font-bold text-[#0644a4]">Request a Quote →</Link>
          </article>
        ))}
      </div>
    </main>
  )
}
