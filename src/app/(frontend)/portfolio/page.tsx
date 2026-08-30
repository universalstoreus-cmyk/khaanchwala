import Image from 'next/image'
import Link from 'next/link'

const projects = [
  ['Residential Projects', 'residential-projects', 'Premium glass, mirrors and railings for modern homes, villas and apartments.', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88'],
  ['Commercial Projects', 'commercial-projects', 'High-quality glass installations for offices, retail, hospitality and workspaces.', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=88'],
  ['Before & After', 'before-after', 'See how thoughtful glass and mirror upgrades transform everyday spaces.', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=88'],
  ['Video Gallery', 'video-gallery', 'Project walkthroughs, installation highlights and finished-space showcases.', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=88'],
] as const

export default function PortfolioPage() {
  return (
    <main className="container py-10 sm:py-14 lg:py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <div className="mt-6 max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[.12em] text-[#0644a4]">Portfolio</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight text-[#10234d] sm:text-5xl">Our Work</h1>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Explore premium residential and commercial glass work, transformations and project media from Kaanchwala.</p>
      </div>
      <div className="mt-9 grid gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
        {projects.map(([title, slug, description, image]) => (
          <Link href={`/portfolio/${slug}`} key={slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#0644a4] focus:ring-offset-2">
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <Image src={image} alt={`${title} — Kaanchwala portfolio`} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold text-[#0644a4] shadow-lg transition group-hover:translate-x-1" aria-hidden="true">→</span>
            </div>
            <div className="p-5 sm:p-7">
              <h2 className="text-xl font-black text-[#10234d] transition group-hover:text-[#0644a4] sm:text-2xl">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">{description}</p>
              <span className="mt-4 inline-block text-sm font-black tracking-wide text-[#0644a4]">EXPLORE PROJECTS →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
