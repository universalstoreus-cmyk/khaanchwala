import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles = {
  'glass-buying-guide': ['Glass Buying Guide', 'A practical starting point for choosing glass thickness, safety requirements, finishes and hardware for your project.'],
  'mirror-design-ideas': ['Mirror Design Ideas', 'Explore modern mirror layouts, finishes and placement ideas for homes, offices and hospitality interiors.'],
  'shower-cubicle-guide': ['Shower Cubicle Guide', 'Understand layouts, glass options, hardware and maintenance considerations before choosing a shower enclosure.'],
  'office-partition-guide': ['Office Partition Guide', 'Compare privacy, light, acoustics and flexibility when planning glass partitions for workspaces.'],
  'glass-maintenance-tips': ['Glass Maintenance Tips', 'Simple cleaning and care habits can keep glass and mirrors clear, safe and looking refined for longer.'],
  'interior-design-trends': ['Interior Design Trends', 'Ideas for using glass, mirrors, profiles and modern finishes in contemporary interiors.'],
} as const

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles[slug as keyof typeof articles]
  if (!article) notFound()

  return <main className="container py-16"><Link href="/blog" className="text-sm font-bold text-[#0644a4]">← Kaanchwala Blog</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Glass & Interiors</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">{article[0]}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{article[1]}</p><article className="mt-10 max-w-4xl rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-2xl font-black">Practical guidance for your project</h2><p className="mt-4 leading-8 text-slate-600">Start with the intended use of the space, accurate measurements and the finish you want. Kaanchwala can help you compare suitable glass and mirror options, hardware, profiles and installation requirements before work begins.</p><p className="mt-4 leading-8 text-slate-600">For a project-specific recommendation, share your requirements and measurements with the team for a site visit and quotation.</p><Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link></article></main>
}
