import Link from 'next/link'

export default function PortfolioPage() {
  const projects = ['Tech Startup Office','Corporate Office','Co-working Space','Conference Room','IT Company Office','Corporate Office']
  return <main className="container py-16"><Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link><h1 className="mt-6 text-4xl font-black">Featured Projects</h1><p className="mt-3 text-slate-600">A selection of office and commercial glass installations across Hyderabad.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{projects.map((x,i)=><article key={x+i} className="rounded-xl border p-6"><div className="h-40 rounded-lg bg-slate-100"/><h2 className="mt-4 font-bold">{x}</h2><p className="text-sm text-slate-500">Hyderabad, Telangana</p></article>)}</div></main>
}
