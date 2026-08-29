import Link from 'next/link'
import { notFound } from 'next/navigation'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const dynamic = 'force-dynamic'

const fallbackServices: Record<string, { title: string; description: string }> = {
  'toughened-glass': { title: 'Toughened Glass', description: 'Safety-focused toughened glass for doors, partitions and modern interiors.' },
  'shower-cubicles': { title: 'Shower Cubicles', description: 'Custom shower enclosures with clean hardware and practical layouts.' },
  'glass-partitions': { title: 'Glass Partitions', description: 'Frameless and framed partition systems for homes and offices.' },
  'office-glass-cabins': { title: 'Office Glass Cabins', description: 'Professional glass cabins for private, bright and productive workspaces.' },
  'custom-wall-mirrors': { title: 'Custom Wall Mirrors', description: 'Made-to-measure mirrors for residential and commercial interiors.' },
  'decorative-mirrors': { title: 'Decorative Mirrors', description: 'Designer mirror solutions that add depth, light and character.' },
  'glass-railings-balustrades': { title: 'Glass Railings & Balustrades', description: 'Safe, elegant railing systems for stairs, balconies and terraces.' },
  'aluminium-sliding-windows': { title: 'Aluminium Sliding Windows', description: 'Durable sliding windows with modern aluminium profiles.' },
  'upvc-windows': { title: 'UPVC Windows', description: 'Low-maintenance UPVC window solutions for comfort and durability.' },
  'mesh-doors': { title: 'Mesh Doors', description: 'Practical mesh door systems for ventilation and protection.' },
  'fusion-glass-beveling': { title: 'Fusion Glass & Beveling', description: 'Precision decorative glass with fusion and beveling finishes.' },
  'glass-polishing': { title: 'Glass Polishing', description: 'Professional polishing for clean, smooth and refined glass edges.' },
  'pvd-work-aluminium-profiles': { title: 'PVD Work & Aluminium Profiles', description: 'Premium PVD finishes and aluminium profile solutions.' },
  'aristo-wardrobes': { title: 'Aristo Wardrobes', description: 'Premium wardrobe systems designed for modern interiors.' },
}

const partitionTypes = [
  ['Frameless Glass Partitions', 'Sleek, minimal design with maximum transparency', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=82'],
  ['Aluminium Framed Partitions', 'Durable frames with a modern clean finish', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=82'],
  ['Half Glass Partitions', 'Glass top with solid panels for privacy & style', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=82'],
  ['Sliding Glass Partitions', 'Space-saving sliding solutions for flexible usage', 'https://images.unsplash.com/photo-1497366811360-2f6b7c4f3b9a?auto=format&fit=crop&w=700&q=82'],
  ['Double Glazed Partitions', 'Extra sound insulation for private discussions', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=82'],
  ['Curved Glass Partitions', 'Add elegance with custom curved glass design', 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=700&q=82'],
]

const benefits = [
  ['Elegant Aesthetics', 'Enhance the look of your workspace'],
  ['Noise Reduction', 'Minimize distractions with sound insulation'],
  ['Natural Light', 'Maximize natural light for a positive environment'],
  ['Space Optimization', 'Smart solutions for better space utilization'],
  ['Premium Quality', 'Toughened & safety glass used'],
  ['Expert Installation', 'Professional team for seamless installation'],
]

const projects = [
  ['Tech Startup Office', 'Hyderabad', partitionTypes[0][2]],
  ['Corporate Office', 'Gachibowli, Hyderabad', partitionTypes[1][2]],
  ['Co-working Space', 'Madhapur, Hyderabad', partitionTypes[2][2]],
  ['Conference Room', 'Ameerpet, Hyderabad', partitionTypes[3][2]],
  ['IT Company Office', 'Hitech City, Hyderabad', partitionTypes[4][2]],
  ['Corporate Office', 'Jubilee Hills, Hyderabad', partitionTypes[5][2]],
]

const process = ['Consultation', 'Site Visit', 'Design & Plan', 'Manufacturing', 'Installation', 'Quality Check', 'After Sales']

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const fallbackService = fallbackServices[slug]
  let databaseService: { title?: string; summary?: string } | undefined

  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({ collection: 'services', limit: 1, depth: 1, where: { slug: { equals: slug } } })
    databaseService = result.docs[0] as typeof databaseService
  } catch {
    // Public fallback keeps the route available when the CMS is temporarily unavailable.
  }

  if (!databaseService && !fallbackService) notFound()

  const title = databaseService?.title || fallbackService?.title || slug
  const description = databaseService?.summary || fallbackService?.description || 'Professional glass and mirror solutions from Kaanchwala.'

  if (slug !== 'office-glass-partitions') {
    return (
      <main className="container py-16">
        <Link href="/services" className="text-sm font-bold text-[#0644a4]">← All Services</Link>
        <p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Kaanchwala Services</p>
        <h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-10 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Professional design, fabrication & installation</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Tell us your measurements, finish preferences and project requirements. Our team can guide you from site visit to installation and after-sales support.</p>
          <Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET A FREE QUOTE</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="kw-page">
      <section className="border-b border-slate-200 bg-white">
        <div className="container py-3 text-xs font-semibold text-slate-600">
          <Link href="/" className="hover:text-[#0644a4]">Home</Link><span className="mx-2">›</span>
          <Link href="/services" className="hover:text-[#0644a4]">Services</Link><span className="mx-2">›</span>
          <span className="font-bold text-[#10234d]">Office Glass Partitions</span>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="container grid items-center gap-7 py-8 md:grid-cols-[.85fr_1.35fr] md:py-0">
          <div className="relative z-10 py-3 md:py-16">
            <span className="inline-flex rounded-md bg-[#0644a4] px-3 py-2 text-[11px] font-black uppercase tracking-wide text-white">Office Glass Partitions</span>
            <h1 className="kw-title mt-5 text-4xl leading-[1.03] md:text-5xl">Modern Glass Partitions <span className="text-[#0644a4]">for Productive Workspaces</span></h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">Create smart, stylish and functional office spaces with our customized glass partition solutions.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-md bg-[#0644a4] px-5 py-3 text-center text-sm font-black text-white shadow-sm">GET FREE QUOTE</Link>
              <a href="https://wa.me/919891980070" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-center text-sm font-black text-[#10234d]">◉ WHATSAPP US</a>
            </div>
          </div>
          <div className="h-[270px] overflow-hidden md:h-[410px] md:[clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=84" alt="Modern office glass partitions" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="container grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6">
          {benefits.map(([heading, text]) => (
            <div key={heading} className="px-3 py-5 text-center md:px-4">
              <div className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-full border-2 border-[#0644a4] text-sm font-black text-[#0644a4]">✓</div>
              <h2 className="text-xs font-black text-[#10234d] md:text-sm">{heading}</h2>
              <p className="mt-1 text-[10px] leading-4 text-slate-500 md:text-xs">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="kw-section">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="kw-eyebrow">Types of Office Glass Partitions</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partitionTypes.map(([name, text, image]) => (
                <article key={name} className="kw-card overflow-hidden">
                  <div className="kw-image h-32 rounded-none sm:h-36"><img src={image} alt={name} loading="lazy" /></div>
                  <div className="p-4"><h3 className="text-sm font-black text-[#10234d] md:text-base">{name}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p><span className="mt-4 inline-block text-xs font-black text-[#0644a4]">VIEW SERVICE →</span></div>
                </article>
              ))}
            </div>
            <Link href="/services" className="mt-5 inline-flex rounded border border-[#0644a4] px-5 py-2 text-xs font-black text-[#0644a4]">VIEW ALL PARTITION TYPES →</Link>
          </div>

          <div>
            <p className="kw-eyebrow">Glass Options</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5">
              {['Clear Glass','Frosted Glass','Tinted Glass','Patterned Glass','Smart Glass'].map((name, i) => (
                <div key={name} className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm">
                  <div className="mx-auto h-16 w-9 rounded-sm border border-slate-300 bg-gradient-to-br from-slate-50 to-slate-200" style={{ transform: `skewY(${i % 2 ? '-6deg' : '6deg'})` }} />
                  <p className="mt-3 text-[11px] font-black text-[#10234d]">{name}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-5 rounded-xl bg-[#f4f8fd] p-5 sm:grid-cols-2">
              <div><h2 className="text-lg font-black text-[#10234d]">Why Choose Glass Partitions?</h2><ul className="mt-4 grid gap-2 text-xs leading-5 text-slate-600">{['Improves teamwork and collaboration','Creates open and airy environment','Customizable to your office needs','Easy to maintain and high durability','Adds value to your office interiors'].map(x => <li key={x}>✓ {x}</li>)}</ul></div>
              <div className="kw-image h-44 sm:h-full"><img src={partitionTypes[0][2]} alt="Glass partition interior" loading="lazy" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="kw-section kw-section-soft border-y border-slate-200">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="kw-eyebrow">Featured Projects</p><h2 className="kw-title mt-1 text-2xl md:text-3xl">Office Spaces We Transform</h2></div><div className="hidden gap-2 sm:flex">{['All','IT Offices','Corporate Offices','Co-working Spaces','Conference Rooms'].map((x,i)=><span key={x} className={`rounded border px-3 py-2 text-[11px] font-bold ${i===0?'bg-[#0644a4] text-white':'bg-white text-slate-600'}`}>{x}</span>)}</div></div>
          <div className="kw-scrollbar mt-6 flex gap-4 overflow-x-auto pb-3">
            {projects.map(([name, place, image]) => <article key={name+place} className="kw-card min-w-[220px] flex-1 overflow-hidden sm:min-w-[250px]"><div className="kw-image h-36 rounded-none"><img src={image} alt={name} loading="lazy" /></div><div className="p-4"><h3 className="text-sm font-black text-[#10234d]">{name}</h3><p className="mt-1 text-xs text-slate-500">{place}</p></div></article>)}
          </div>
          <div className="text-center"><Link href="/portfolio" className="inline-flex rounded border border-[#0644a4] px-6 py-2 text-xs font-black text-[#0644a4]">VIEW ALL PROJECTS →</Link></div>
        </div>
      </section>

      <section className="kw-section">
        <div className="container grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <div><p className="kw-eyebrow">Our Installation Process</p><div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">{process.map((step,i)=><div key={step} className="text-center"><div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#0644a4] text-xs font-black text-white">0{i+1}</div><h3 className="mt-2 text-[11px] font-black text-[#10234d]">{step}</h3><p className="mt-1 text-[10px] leading-4 text-slate-500">Professional service</p></div>)}</div></div>
          <div className="rounded-xl bg-[#f7faff] p-6"><p className="kw-eyebrow">What Our Clients Say</p><div className="mt-4 grid gap-5 sm:grid-cols-[1fr_170px]"><div><div className="text-4xl font-black text-[#0644a4]">“</div><p className="text-sm leading-6 text-slate-600">Kaanchwala provided excellent glass partition solutions for our office. The quality, finish and installation were excellent.</p><p className="mt-4 text-xs font-black text-[#10234d]">— Happy Office Client</p></div><div className="kw-image h-36"><img src={partitionTypes[2][2]} alt="Office project" loading="lazy" /></div></div></div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-8">
        <div className="container grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="kw-eyebrow">Frequently Asked Questions</p><div className="mt-4 grid gap-2">{['What is the cost of office glass partitions?','Which glass thickness is suitable for partitions?','Do you provide customized designs?','How long does the installation take?','Do you offer after sales service?'].map(q=><details key={q} className="rounded border border-slate-200 px-4 py-3"><summary className="cursor-pointer text-xs font-bold text-[#10234d]">{q}</summary><p className="mt-2 text-xs leading-5 text-slate-500">Contact our team for a project-specific recommendation, measurements and quotation.</p></details>)}</div></div>
          <div className="relative overflow-hidden rounded-xl bg-[#0644a4] p-7 text-white"><div className="relative z-10 max-w-lg"><p className="text-2xl font-black">Ready to Transform Your Office Space?</p><p className="mt-2 text-sm text-blue-100">Get a FREE site visit & quote today.</p><div className="mt-5 flex flex-col gap-3 sm:flex-row"><a href="tel:+919891980070" className="rounded bg-white px-5 py-3 text-center text-xs font-black text-[#0644a4]">CALL NOW · +91 9891980070</a><a href="https://wa.me/919891980070" className="rounded border border-white/50 px-5 py-3 text-center text-xs font-black text-white">WHATSAPP US</a></div></div><div className="absolute right-0 top-0 hidden h-full w-2/5 lg:block"><img src={partitionTypes[4][2]} alt="Office glass project" className="h-full w-full object-cover opacity-80" loading="lazy" /></div></div>
        </div>
      </section>
    </main>
  )
}
