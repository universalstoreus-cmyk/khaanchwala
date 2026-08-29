import Link from 'next/link'

const articles = [
  ['Glass Buying Guide', 'What to consider when choosing thickness, safety, finish and hardware.', 'glass-buying-guide'],
  ['Mirror Design Ideas', 'Modern mirror layouts and finishes for homes, offices and hospitality spaces.', 'mirror-design-ideas'],
  ['Shower Cubicle Guide', 'A practical guide to layouts, glass types, hardware and maintenance.', 'shower-cubicle-guide'],
  ['Office Partition Guide', 'Compare privacy, light, acoustics and flexibility before selecting partitions.', 'office-partition-guide'],
  ['Glass Maintenance Tips', 'Simple habits to keep glass and mirrors clear, safe and long-lasting.', 'glass-maintenance-tips'],
  ['Interior Design Trends', 'Current ideas for glass, mirrors, profiles and modern commercial interiors.', 'interior-design-trends'],
]

export default function BlogPage() { return <main className="container py-16"><p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Kaanchwala Blog</p><h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Guides, Ideas & Glass Expertise</h1><div className="mt-10 grid gap-6 md:grid-cols-3">{articles.map(([title,text,slug])=><article key={slug} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-wide text-[#0644a4]">Glass & interiors</p><h2 className="mt-3 text-xl font-black text-slate-900">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p><Link href={`/blog#${slug}`} className="mt-5 inline-block font-bold text-[#0644a4]">Read guide →</Link></article>)}</div></main> }
