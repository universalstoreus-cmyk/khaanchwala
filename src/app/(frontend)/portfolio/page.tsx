import Image from 'next/image'
import Link from 'next/link'

const projects = [
  ['Residential Projects', 'residential-projects', 'Homes, villas, apartments and custom interiors', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=84'],
  ['Commercial Projects', 'commercial-projects', 'Offices, retail, hospitality and commercial spaces', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=84'],
  ['Before & After', 'before-after', 'Space transformations from first measurement to final installation', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=84'],
  ['Video Gallery', 'video-gallery', 'Project walkthroughs and installation videos', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=84'],
] as const

export default function PortfolioPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Portfolio</p>
      <h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">Our Work</h1>
      <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">Explore residential and commercial glass work, transformations and project media from Kaanchwala.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map(([title, slug, description, image]) => (
          <Link href={`/portfolio/${slug}`} key={slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-56 overflow-hidden bg-slate-100"><Image src={image} alt={`${title} — Kaanchwala portfolio`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
            <div className="p-7"><h2 className="text-2xl font-black text-[#10234d] group-hover:text-[#0644a4]">{title}</h2><p className="mt-2 text-slate-500">{description}</p><span className="mt-5 inline-block text-sm font-black text-[#0644a4]">OPEN GALLERY →</span></div>
          </Link>
        ))}
      </div>
      <p className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">These are visual placeholders until the client supplies final project photographs/videos. Final approved media can be managed from Payload CMS.</p>
    </main>
  )
}
