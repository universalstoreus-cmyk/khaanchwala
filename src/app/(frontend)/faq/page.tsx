import Link from 'next/link'

const faqs = [
  ['What is the cost of toughened glass?', 'Pricing depends on glass thickness, dimensions, finish, hardware and installation requirements. Contact Kaanchwala for a project-specific quote.'],
  ['What is the right glass thickness?', 'The suitable thickness depends on the application, panel size, framing and safety requirements. We confirm the specification during the site assessment.'],
  ['Do you make customized glass and mirror designs?', 'Yes. Glass partitions, shower cubicles, mirrors, railings, windows and other solutions can be planned around the project dimensions and finish requirements.'],
  ['How long does installation take?', 'Timelines depend on site measurements, design approval, fabrication and site readiness. The estimated schedule is confirmed with the quotation.'],
  ['Do you provide a site visit and measurement?', 'Yes. A site assessment can be used to confirm measurements, application requirements, access and installation details before fabrication.'],
  ['Do you provide after-sales support?', 'Yes. Kaanchwala can assist with installation follow-up, adjustments and service requirements after completion.'],
  ['Can I request a WhatsApp quotation?', 'Yes. Use the WhatsApp CTA or contact page to share your requirements, measurements and project location for an initial discussion.'],
  ['Do you serve residential and commercial projects?', 'Yes. Services are intended for homes, apartments, villas, offices, hotels, restaurants, hospitals, retail stores and other suitable spaces.'],
]

export default function FAQPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">FAQ</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Frequently Asked Questions</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Answers to common questions about Kaanchwala glass, mirror, window and installation services.</p>
      <div className="mt-10 max-w-4xl space-y-4">
        {faqs.map(([question, answer]) => (
          <details key={question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-extrabold text-slate-900">{question}</summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/contact" className="rounded-md bg-[#0644a4] px-6 py-3 text-center font-bold text-white">REQUEST A QUOTE</Link>
        <a href="https://wa.me/919891980070" className="rounded-md border border-slate-300 px-6 py-3 text-center font-bold text-[#10234d]">WHATSAPP US</a>
      </div>
    </main>
  )
}
