import Link from 'next/link'

const projects = [
  ['Residential Projects', 'residential-projects', 'Homes, villas, apartments and custom interiors'],
  ['Commercial Projects', 'commercial-projects', 'Offices, retail, hospitality and commercial spaces'],
  ['Before & After', 'before-after', 'Space transformations from first measurement to final installation'],
  ['Video Gallery', 'video-gallery', 'Project walkthroughs and installation videos'],
] as const

export default function PortfolioPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Portfolio</p>
      <h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">Our Work</h1>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">Explore residential and commercial glass work, transformations and project media from Kaanchwala.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map(([title, slug, description]) => (
          <Link href={`/portfolio/${slug}`} key={slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br from-slate-100 via-white to-blue-50">
              <div className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#0644a4]/20 bg-white text-2xl text-[#0644a4]">KW</div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-400">Project media</p>
              </div>
            </div>
            <div className="p-7">
              <h2 className="text-2xl font-black text-[#10234d] group-hover:text-[#0644a4]">{title}</h2>
              <p className="mt-2 text-slate-500">{description}</p>
              <span className="mt-5 inline-block text-sm font-black text-[#0644a4]">OPEN GALLERY →</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">Project photographs and videos can be added from the Payload admin panel. No unavailable client media has been replaced with stock imagery.</p>
    </main>
  )
}
