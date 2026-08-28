import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

const values = [
  ['Design', 'Clean, practical glass layouts planned around the way modern offices actually work.'],
  ['Quality', 'Safety-focused glass, reliable hardware and carefully finished details for long-term use.'],
  ['Installation', 'Professional measurement, fabrication and site installation with clear communication throughout.'],
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">About Kaanchwala</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black text-[#10234d] md:text-5xl">Glass &amp; mirror solutions built for modern spaces</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Kaanchwala Glass &amp; Mirror Solutions helps homes, offices and commercial spaces in Hyderabad create brighter, more functional interiors with thoughtfully designed glass solutions.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map(([title, text]) => (
            <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-[#0644a4]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
        <section className="mt-12 rounded-xl bg-slate-50 p-7 md:p-10">
          <h2 className="text-2xl font-black text-[#10234d]">Why clients choose us</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {['Clear guidance from site visit to installation', 'Custom solutions for privacy, light and space', 'Professional workmanship and quality checks', 'Support after installation when you need it'].map((item) => (
              <p key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="font-black text-[#0750b8]">✓</span>{item}</p>
            ))}
          </div>
        </section>
        <Link href="/contact" className="mt-10 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
      </main>
    </>
  )
}
