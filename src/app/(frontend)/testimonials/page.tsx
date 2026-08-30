import Link from 'next/link'

const testimonials = [
  ['Ramesh Verma', 'Operations Head, TechNova Solutions', 'Excellent quality, clean installation and professional support from start to finish.'],
  ['Priya Sharma', 'Homeowner, Hyderabad', 'The team understood our requirements and delivered a beautiful mirror and railing finish.'],
  ['Amit Rao', 'Facility Manager', 'Reliable communication, accurate measurements and a very neat installation.'],
]

export default function TestimonialsPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Customer Reviews</p>
      <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">What Our Clients Say</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Feedback from residential, office and commercial project customers. New approved testimonials can be connected to Payload CMS as the content library grows.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map(([name, role, text]) => (
          <article key={name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl text-[#0644a4]" aria-label="5 star review">★★★★★</div>
            <p className="mt-4 leading-7 text-slate-600">“{text}”</p>
            <p className="mt-5 font-black text-[#10234d]">{name}</p>
            <p className="text-sm text-slate-500">{role}</p>
          </article>
        ))}
      </div>
      <Link href="/contact" className="mt-8 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">START YOUR PROJECT</Link>
    </main>
  )
}
