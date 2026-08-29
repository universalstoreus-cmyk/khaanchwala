import Link from 'next/link'
import { notFound } from 'next/navigation'

const portfolio = {
  'residential-projects': 'Residential Projects',
  'commercial-projects': 'Commercial Projects',
  'before-after': 'Before & After',
  'video-gallery': 'Video Gallery',
} as const

const descriptions: Record<string, string> = {
  'residential-projects': 'Explore residential glass, mirror, shower, railing and window work for modern homes and villas.',
  'commercial-projects': 'Explore office, retail, hospitality and other commercial glass and mirror installations.',
  'before-after': 'See project transformations from the original space through completed glass and mirror installation.',
  'video-gallery': 'A dedicated place for project walkthroughs, installation videos and future video case studies.',
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = portfolio[slug as keyof typeof portfolio]
  if (!title) notFound()

  return <main className="container py-16"><Link href="/portfolio" className="text-sm font-bold text-[#0644a4]">← Portfolio</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Our Work</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{descriptions[slug]}</p><div className="mt-10 rounded-xl border border-slate-200 bg-white p-8 shadow-sm"><div className="grid min-h-48 place-items-center rounded-lg bg-slate-100 text-center text-sm text-slate-500">Project media will appear here as it is added through the Payload admin panel.</div><Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">DISCUSS YOUR PROJECT</Link></div></main>
}
