import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

export default function PortfolioPage() {
  const projects = ['Tech Startup Office','Corporate Office','Co-working Space','Conference Room','IT Company Office','Corporate Office']
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Portfolio</p>
        <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Featured Projects</h1>
        <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-600">A selection of office and commercial glass installations across Hyderabad.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map((x, i) => (
            <article key={x + i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-40 rounded-lg bg-slate-100" />
              <h2 className="mt-4 font-black">{x}</h2>
              <p className="mt-1 text-sm text-slate-500">Hyderabad, Telangana</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="mt-10 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">START YOUR PROJECT</Link>
      </main>
    </>
  )
}
