import Link from 'next/link'

const faqs = [
  ['What is the cost of office glass partitions?', 'Pricing depends on glass type, dimensions, hardware and installation requirements. Contact us for a project-specific quote.'],
  ['Which glass thickness is suitable?', 'The right thickness depends on the application, panel size, framing and safety requirements. We confirm this during the site assessment.'],
  ['Do you provide customized designs?', 'Yes. We can plan layouts and finishes around your office, privacy and branding requirements.'],
  ['How long does installation take?', 'The timeline depends on measurements, fabrication and site readiness. We provide an estimated schedule with the quotation.'],
  ['Do you offer after-sales service?', 'Yes. Our team can assist with installation follow-up, adjustments and service requirements.'],
]

export default function FAQPage() {
  return (
    <main className="container py-16">
      <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">FAQ</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Frequently asked questions</h1>
      <div className="mt-10 max-w-4xl space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-extrabold text-slate-900">{question}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
          </details>
        ))}
      </div>
      <Link href="/contact" className="mt-10 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">ASK FOR A QUOTE</Link>
    </main>
  )
}
