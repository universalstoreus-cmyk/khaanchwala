'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, ChevronDown } from 'lucide-react'

const services = [['Toughened Glass','toughened-glass'],['Shower Cubicles','shower-cubicles'],['Glass Partitions','glass-partitions'],['Office Glass Cabins','office-glass-cabins'],['Custom Wall Mirrors','custom-wall-mirrors'],['Decorative Mirrors','decorative-mirrors'],['Glass Railings & Balustrades','glass-railings-balustrades'],['Aluminium Sliding Windows','aluminium-sliding-windows'],['UPVC Windows','upvc-windows'],['Mesh Doors','mesh-doors'],['Fusion Glass & Beveling','fusion-glass-beveling'],['Glass Polishing','glass-polishing'],['PVD Work & Aluminium Profiles','pvd-work-aluminium-profiles'],['Aristo Wardrobes','aristo-wardrobes']] as const
const industries = [['Residential','residential'],['Apartments','apartments'],['Villas','villas'],['Offices','offices'],['Hotels','hotels'],['Restaurants & Cafés','restaurants-cafes'],['Hospitals','hospitals'],['Retail Stores','retail-stores'],['Salons & Gyms','salons-gyms']] as const
const portfolio = [['Residential Projects','residential-projects'],['Commercial Projects','commercial-projects'],['Before & After','before-after'],['Video Gallery','video-gallery']] as const
const process = [['Site Visit','site-visit'],['Measurement','measurement'],['Design','design'],['Fabrication','fabrication'],['Installation','installation'],['After-Sales Support','after-sales-support']] as const
const blog = [['Glass Buying Guide','glass-buying-guide'],['Mirror Design Ideas','mirror-design-ideas'],['Shower Cubicle Guide','shower-cubicle-guide'],['Office Partition Guide','office-partition-guide'],['Glass Maintenance Tips','glass-maintenance-tips'],['Interior Design Trends','interior-design-trends']] as const
const legal = [['Privacy Policy','privacy-policy'],['Terms & Conditions','terms-conditions']] as const

type MenuItems = readonly (readonly [string, string])[]

const Drop = ({ label, items, base, allHref = base }: { label: string; items: MenuItems; base: string; allHref?: string }) => (
  <details className="group relative">
    <summary className="flex cursor-pointer list-none items-center gap-1 rounded px-2 py-2 marker:hidden [&::-webkit-details-marker]:hidden">{label}<ChevronDown className="h-3.5 w-3.5 transition group-open:rotate-180" /></summary>
    <div className="absolute left-0 top-full z-50 mt-1 max-h-[70vh] w-72 overflow-auto rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
      <Link href={allHref} className="block rounded-lg px-3 py-2 text-sm font-bold hover:bg-slate-50">View All {label}</Link>
      {items.map(([title,slug])=><Link key={slug} href={`${base}/${slug}`} className="block rounded-lg px-3 py-2 text-sm hover:bg-slate-50">{title}</Link>)}
    </div>
  </details>
)

export const HeaderNav: React.FC = () => {
  const [open, setOpen] = useState(false)
  const groups = [['Services',services,'/services'],['Industries We Serve',industries,'/industries'],['Portfolio',portfolio,'/portfolio'],['Process',process,'/process'],['Blog',blog,'/blog']] as const
  return <>
    <nav className="hidden items-center gap-1 text-sm font-semibold md:flex">
      <Link className="rounded px-2 py-2 hover:bg-slate-50" href="/">Home</Link>
      <Link className="rounded px-2 py-2 hover:bg-slate-50" href="/about-us">About Us</Link>
      {groups.map(([label,items,base])=><Drop key={label} label={label} items={items} base={base}/>) }
      <Link className="rounded px-2 py-2 hover:bg-slate-50" href="/testimonials">Testimonials</Link>
      <Link className="rounded px-2 py-2 hover:bg-slate-50" href="/faq">FAQ</Link>
      <Link className="rounded px-2 py-2 hover:bg-slate-50" href="/contact">Contact Us</Link>
      <Drop label="Legal" items={legal} base="" allHref="/privacy-policy" />
      <Link className="rounded px-2 py-2 hover:bg-slate-50" href="/search" aria-label="Search"><Search className="h-4 w-4" /></Link>
    </nav>
    <div className="md:hidden">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-[#10234d] shadow-sm"><Menu className="h-5 w-5" /></button>
      {open && <div className="absolute right-4 top-full z-50 mt-2 max-h-[80vh] w-[min(92vw,360px)] overflow-auto rounded-xl border border-slate-200 bg-white p-3 shadow-2xl"><div className="grid gap-1 text-sm font-semibold">
        <Link className="rounded-lg px-3 py-3 hover:bg-slate-50" onClick={() => setOpen(false)} href="/">Home</Link>
        <Link className="rounded-lg px-3 py-3 hover:bg-slate-50" onClick={() => setOpen(false)} href="/about-us">About Us</Link>
        {groups.map(([label,items,base])=><details key={label} className="rounded-lg border border-slate-100"><summary className="cursor-pointer px-3 py-3 font-bold">{label}</summary><div className="grid border-t border-slate-100 p-2"><Link onClick={() => setOpen(false)} className="rounded px-3 py-2 font-bold hover:bg-slate-50" href={base}>View All {label}</Link>{items.map(([title,slug])=><Link key={slug} onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm hover:bg-slate-50" href={`${base}/${slug}`}>{title}</Link>)}</div></details>)}
        <details className="rounded-lg border border-slate-100"><summary className="cursor-pointer px-3 py-3 font-bold">Legal</summary><div className="grid border-t border-slate-100 p-2">{legal.map(([title,slug])=><Link key={slug} onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm hover:bg-slate-50" href={`/${slug}`}>{title}</Link>)}<Link onClick={() => setOpen(false)} className="rounded px-3 py-2 text-sm hover:bg-slate-50" href="/sitemap.xml">Sitemap.xml</Link></div></details>}
        <Link className="rounded-lg px-3 py-3 hover:bg-slate-50" onClick={() => setOpen(false)} href="/testimonials">Testimonials</Link>
        <Link className="rounded-lg px-3 py-3 hover:bg-slate-50" onClick={() => setOpen(false)} href="/faq">FAQ</Link>
        <Link className="rounded-lg px-3 py-3 hover:bg-slate-50" onClick={() => setOpen(false)} href="/contact">Contact Us</Link>
        <Link className="mt-1 rounded-lg bg-[#0644a4] px-3 py-3 text-center text-white" onClick={() => setOpen(false)} href="/contact">GET A FREE QUOTE</Link>
      </div></div>}
    </div>
  </>
}
