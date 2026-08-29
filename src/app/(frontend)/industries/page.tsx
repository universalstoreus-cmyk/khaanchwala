import Link from 'next/link'

const industries = ['Residential', 'Apartments', 'Villas', 'Offices', 'Hotels', 'Restaurants & Cafés', 'Hospitals', 'Retail Stores', 'Salons & Gyms']

export default function IndustriesPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <h1 className="mt-6 text-4xl font-black text-[#10234d]">Industries We Serve</h1>
      <p className="mt-3 max-w-3xl text-slate-600">Glass, mirror, railing, window and partition solutions tailored to different spaces and project requirements.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((item) => <article key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-4 h-2 w-14 rounded bg-[#0644a4]"/><h2 className="text-xl font-bold text-[#10234d]">{item}</h2><p className="mt-2 text-sm leading-6 text-slate-500">Professional glass and interior solutions designed around the needs of this space.</p></article>)}
      </div>
      <Link href="/contact" className="mt-8 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">REQUEST A QUOTE</Link>
    </main>
  )
}
