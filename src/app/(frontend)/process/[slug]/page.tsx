import Link from 'next/link'
import { notFound } from 'next/navigation'

const processSteps = {
  'site-visit': ['Site Visit', 'We understand the space, requirements and intended use before recommending a solution.'],
  measurement: ['Measurement', 'Accurate site measurements help us plan glass sizes, openings, hardware and installation details.'],
  design: ['Design', 'We discuss layouts, finishes, profiles and practical details before fabrication begins.'],
  fabrication: ['Fabrication', 'Approved specifications are translated into carefully prepared glass, mirrors, profiles and hardware.'],
  installation: ['Installation', 'Our team installs the approved solution with attention to alignment, finish and safety.'],
  'after-sales-support': ['After-Sales Support', 'We remain available for guidance and support after installation is completed.'],
} as const

export default async function ProcessDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const step = processSteps[slug as keyof typeof processSteps]
  if (!step) notFound()

  return <main className="container py-16"><Link href="/process" className="text-sm font-bold text-[#0644a4]">← Our Process</Link><p className="mt-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Process</p><h1 className="mt-2 text-4xl font-black text-[#10234d] md:text-5xl">{step[0]}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{step[1]}</p><div className="mt-10 rounded-xl border border-slate-200 bg-white p-7 shadow-sm"><h2 className="text-2xl font-black">A clear path from idea to completion</h2><p className="mt-3 max-w-2xl leading-7 text-slate-600">Every project is coordinated around your measurements, finish preferences, timeline and installation requirements.</p><Link href="/contact" className="mt-6 inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">BOOK A SITE VISIT</Link></div></main>
}
