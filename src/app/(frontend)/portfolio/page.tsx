import Link from 'next/link'

export default function PortfolioPage() {
  const projects = ['Residential Projects','Commercial Projects','Before & After','Video Gallery']
  return <main className="container py-16"><Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Portfolio</p><h1 className="mt-2 text-4xl font-black text-[#10234d]">Our Work</h1><p className="mt-3 max-w-3xl text-slate-600">Explore residential and commercial glass work, transformations and project media from Kaanchwala.</p><div className="mt-10 grid gap-6 md:grid-cols-2">{projects.map((x)=><article key={x} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><div className="h-44 rounded-lg bg-slate-100"/><h2 className="mt-5 text-2xl font-black">{x}</h2><p className="mt-2 text-sm text-slate-500">Project gallery and case studies will be managed from the Payload admin panel.</p></article>)}</div></main>
}
