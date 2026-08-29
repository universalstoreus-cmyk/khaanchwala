import Link from 'next/link'

const pages = ['Privacy Policy', 'Terms & Conditions', 'Sitemap.xml']

export default function LegalPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <h1 className="mt-6 text-4xl font-black text-[#10234d]">Legal</h1>
      <p className="mt-3 max-w-3xl text-slate-600">Important website policies and navigation resources for Kaanchwala customers.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pages.map((item) => <article key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-[#10234d]">{item}</h2><p className="mt-2 text-sm leading-6 text-slate-500">This section will contain the final approved {item.toLowerCase()} content.</p></article>)}
      </div>
    </main>
  )
}
