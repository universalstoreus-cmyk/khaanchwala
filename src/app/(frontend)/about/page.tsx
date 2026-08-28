import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="container py-16">
      <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">About Kaanchwala</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Glass solutions built for modern spaces</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
        Kaanchwala Glass & Mirror Solutions provides design, manufacturing and installation for office and commercial glass requirements across Hyderabad.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ['Design', 'Practical layouts and clean architectural finishes.'],
          ['Quality', 'Safety glass and carefully selected hardware.'],
          ['Installation', 'Professional site execution and after-sales support.'],
        ].map(([title, text]) => (
          <article key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-[#0644a4]">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </article>
        ))}
      </div>
      <Link href="/contact" className="mt-10 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
    </main>
  )
}
