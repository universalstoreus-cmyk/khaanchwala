import Link from 'next/link'
import { notFound } from 'next/navigation'

const industries = {
  residential: 'Residential',
  apartments: 'Apartments',
  villas: 'Villas',
  offices: 'Offices',
  hotels: 'Hotels',
  'restaurants-cafes': 'Restaurants & Cafés',
  hospitals: 'Hospitals',
  'retail-stores': 'Retail Stores',
  'salons-gyms': 'Salons & Gyms',
} as const

const descriptions: Record<string, string> = {
  residential: 'Glass, mirrors, shower solutions, windows and railings designed for comfortable modern homes.',
  apartments: 'Practical glass and mirror solutions for apartment interiors, balconies, bathrooms and living spaces.',
  villas: 'Premium custom glass, mirrors, railings and windows for distinctive villa interiors and exteriors.',
  offices: 'Partitions, glass cabins, doors and windows that create bright, professional and productive workplaces.',
  hotels: 'Elegant glass and mirror solutions for guest rooms, lobbies, bathrooms and hospitality spaces.',
  'restaurants-cafes': 'Durable and attractive glass solutions for dining areas, façades, partitions and interiors.',
  hospitals: 'Safety-conscious glass and partition solutions for clean, functional healthcare environments.',
  'retail-stores': 'Display, partition, mirror and glass solutions that support modern retail experiences.',
  'salons-gyms': 'Practical mirrors, partitions, doors and glass solutions for customer-focused fitness and beauty spaces.',
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = industries[slug as keyof typeof industries]
  if (!title) notFound()

  return <main className="container py-16"><Link href="/industries" className="text-sm font-bold text-[#0644a4]">← Industries We Serve</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Industries We Serve</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">Glass Solutions for {title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{descriptions[slug]}</p><div className="mt-10 rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-2xl font-black text-[#10234d]">Designed around your project</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">From measurement and design through fabrication, installation and after-sales support, Kaanchwala can tailor the solution to your space.</p><Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">REQUEST A QUOTE</Link></div></main>
}
