import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const portfolio: Record<string, { title: string; description: string; image: string }> = {
  'residential-projects': { title: 'Residential Projects', description: 'Explore residential glass, mirror, shower, railing and window work for modern homes and villas.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=84' },
  'commercial-projects': { title: 'Commercial Projects', description: 'Explore office, retail, hospitality and other commercial glass and mirror installations.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=84' },
  'before-after': { title: 'Before & After', description: 'See project transformations from the original space through completed glass and mirror installation.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=84' },
  'video-gallery': { title: 'Video Gallery', description: 'A dedicated place for project walkthroughs, installation videos and future video case studies.', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=84' },
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = portfolio[slug]
  if (!item) notFound()
  return <main className="kw-page"><div className="container py-4 text-sm font-semibold text-slate-500"><Link href="/" className="text-[#0644a4]">Home</Link><span className="mx-2">›</span><Link href="/portfolio" className="text-[#0644a4]">Portfolio</Link><span className="mx-2">›</span><span>{item.title}</span></div><section className="kw-section"><div className="container grid items-center gap-8 md:grid-cols-2"><div><p className="kw-eyebrow">Our Work</p><h1 className="kw-title mt-2 text-4xl md:text-5xl">{item.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{item.description}</p><Link href="/contact" className="mt-7 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">DISCUSS YOUR PROJECT</Link></div><div className="overflow-hidden rounded-xl shadow-soft"><Image src={item.image} alt={`${item.title} — Kaanchwala`} width={1500} height={900} className="h-[300px] w-full object-cover md:h-[390px]" priority /></div></div></section><section className="kw-section bg-[#f7faff]"><div className="container"><h2 className="kw-title text-3xl">Project media</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">The final client-approved photographs, before/after pairs and videos can be added and managed through Payload CMS. These current visuals are temporary presentation imagery, not claims of completed Kaanchwala projects.</p></div></section></main>
}
