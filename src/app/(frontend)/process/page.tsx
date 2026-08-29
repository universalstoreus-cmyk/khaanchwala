import Link from 'next/link'

const steps = ['Site Visit', 'Measurement', 'Design', 'Fabrication', 'Installation', 'After-Sales Support']

export default function ProcessPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <h1 className="mt-6 text-4xl font-black text-[#10234d]">Our Process</h1>
      <p className="mt-3 max-w-3xl text-slate-600">A clear, professional workflow from the first site visit through installation and after-sales support.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((item, index) => <article key={item} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><div className="grid h-10 w-10 place-items-center rounded-full bg-[#0644a4] font-black text-white">{index + 1}</div><h2 className="mt-5 text-xl font-bold text-[#10234d]">{item}</h2><p className="mt-2 text-sm leading-6 text-slate-500">Careful coordination, quality checks and clear communication at every stage.</p></article>)}
      </div>
    </main>
  )
}
