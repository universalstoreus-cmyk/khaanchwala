import Link from 'next/link'

const articles = [
  ['How to choose office glass partitions', 'Compare privacy, light, acoustic performance and maintenance before selecting a partition system.'],
  ['Clear vs frosted glass for offices', 'A practical guide to balancing natural light, privacy and visual openness.'],
  ['Planning a glass installation', 'What to prepare before the site visit, measurement and final installation.'],
]

export default function BlogPage() {
  return (
    <main className="container py-16">
      <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Kaanchwala Blog</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Ideas for better glass spaces</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {articles.map(([title, text]) => (
          <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-[#0644a4]">Glass & interiors</p>
            <h2 className="mt-3 text-xl font-black text-slate-900">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            <Link href="/contact" className="mt-5 inline-block font-bold text-[#0644a4]">Discuss your project →</Link>
          </article>
        ))}
      </div>
    </main>
  )
}
