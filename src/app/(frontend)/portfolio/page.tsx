import Link from 'next/link'

const projects = [
  ['Residential Projects', 'residential-projects'],
  ['Commercial Projects', 'commercial-projects'],
  ['Before & After', 'before-after'],
  ['Video Gallery', 'video-gallery'],
] as const

export default function PortfolioPage() {
  return <main className="container py-16"><Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Portfolio</p><h1 className="mt-2 text-4xl font-black text-[#10234d]">Our Work</h1><p className="mt-3 max-w-3xl text-slate-600">Explore residential and commercial glass work, transformations and project media from Kaanchwala.</p><div className="mt-10 grid gap-6 md:grid-cols-2">{projects.map(([title,slug])=><Link href={`/portfolio/${slug}`} key={slug} className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="grid h-44 place-items-center rounded-lg bg-slate-100 text-sm text-slate-400">Project media managed in Payload</div><h2 className="mt-5 text-2xl font-black text-[#10234d] group-hover:text-[#0644a4]">{title}</h2><p className="mt-2 text-sm text-slate-500">Open the gallery section →</p></Link>)}</div></main>
}
