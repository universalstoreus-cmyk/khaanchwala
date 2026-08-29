import Link from 'next/link'

const sections = [
  ['Our Story', 'Kaanchwala Glass & Mirror Solutions is focused on dependable glass, mirror, window and interior solutions for modern homes and businesses in Hyderabad.'],
  ['Mission & Vision', 'Our mission is to deliver practical designs, quality materials and professional installation. Our vision is to become a trusted long-term partner for glass and interior projects.'],
  ['Our Team', 'Our team brings together project coordination, measurement, fabrication and installation skills so every project moves from planning to completion with care.'],
  ['Why Trust Us', 'We focus on transparent communication, accurate measurements, quality workmanship and responsive after-sales support.'],
]

export default function AboutPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <p className="mt-8 text-sm font-black uppercase tracking-wide text-[#0644a4]">About Kaanchwala</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Glass solutions built for modern spaces</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">Kaanchwala Glass & Mirror Solutions provides design, manufacturing and installation for residential, office, commercial and hospitality glass requirements across Hyderabad.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {sections.map(([title, text]) => <article key={title} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-2xl font-black text-[#0644a4]">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}
      </div>
      <Link href="/contact" className="mt-10 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
    </main>
  )
}
