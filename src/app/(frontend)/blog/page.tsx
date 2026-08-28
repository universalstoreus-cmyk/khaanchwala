import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

const articles = [
  ['Office Glass Partitions: 7 Design Ideas for Modern Workspaces', 'How transparent partitions can improve light, collaboration and privacy without making an office feel closed in.'],
  ['Clear, Frosted or Tinted Glass: Which Is Right for Your Office?', 'A practical guide to choosing the right balance of natural light, privacy, comfort and visual style.'],
  ['How to Plan a Glass Partition Project', 'The important steps from site measurement and design through fabrication, installation and final quality checks.'],
  ['5 Ways Glass Can Make a Small Office Feel Bigger', 'Use light, sightlines and carefully planned partitions to create a brighter and more spacious working environment.'],
]

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Kaanchwala Blog</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black text-[#10234d] md:text-5xl">Ideas for better glass spaces</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Practical ideas and expert-style guidance for planning glass partitions, doors and modern office interiors.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-xs font-bold uppercase tracking-wide text-[#0644a4]">Glass &amp; interiors</p>
              <h2 className="mt-3 text-xl font-black text-slate-900">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              <Link href="/contact" className="mt-5 inline-block font-bold text-[#0644a4]">Discuss your project →</Link>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
