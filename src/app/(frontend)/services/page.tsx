import Link from 'next/link'
import SiteHeader from '@/components/SiteHeader'

const items = [
  ['Frameless Glass Partitions', 'Sleek, minimal partitions that maximize transparency and natural light.', 'frameless-glass-partitions'],
  ['Aluminium Framed Partitions', 'Durable framed systems with clean profiles for privacy and structure.', 'aluminium-framed-partitions'],
  ['Half Glass Partitions', 'A practical balance of privacy and openness for modern offices.', 'half-glass-partitions'],
  ['Sliding Glass Partitions', 'Space-saving sliding systems for flexible meeting rooms and work areas.', 'sliding-glass-partitions'],
  ['Double Glazed Partitions', 'Enhanced acoustic and thermal performance for quieter private spaces.', 'double-glazed-partitions'],
  ['Curved Glass Partitions', 'Custom curved designs for distinctive receptions, cabins and interiors.', 'curved-glass-partitions'],
] as const

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Our Services</p>
        <h1 className="mt-3 text-4xl font-black text-[#10234d] md:text-5xl">Office glass partitions for every workspace</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">Explore all partition types below. Select any service to open its dedicated page with details and a quote option.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, description, slug]) => (
            <Link key={slug} href={`/services/${slug}`} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 h-2 w-14 rounded bg-[#0644a4]" />
              <h2 className="text-xl font-black text-slate-900 group-hover:text-[#0644a4]">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
              <span className="mt-5 inline-block text-sm font-bold text-[#0644a4]">VIEW SERVICE →</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
