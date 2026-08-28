import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { getCachedGlobal } from '@/utilities/getGlobals'

const fallbackServices = [
  ['Frameless Glass Partitions', 'Sleek, minimal design with maximum transparency', 'frameless-glass-partitions'],
  ['Aluminium Framed Partitions', 'Durable frames with a modern clean finish', 'aluminium-framed-partitions'],
  ['Half Glass Partitions', 'Privacy-focused glass with a professional style', 'half-glass-partitions'],
  ['Sliding Glass Partitions', 'Flexible sliding solutions for changing spaces', 'sliding-glass-partitions'],
  ['Double Glazed Partitions', 'Extra sound insulation for private discussions', 'double-glazed-partitions'],
  ['Curved Glass Partitions', 'Custom curved glass for distinctive interiors', 'curved-glass-partitions'],
] as const

const fallbackProjects = [
  ['Tech Startup Office', 'Hyderabad'],
  ['Corporate Office', 'Gachibowli, Hyderabad'],
  ['Co-working Space', 'Madhapur, Hyderabad'],
  ['Conference Room', 'Ameerpet, Hyderabad'],
  ['IT Company Office', 'Hitech City, Hyderabad'],
  ['Corporate Office', 'Jubilee Hills, Hyderabad'],
]

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=82`
const tel = (value: string) => `tel:${value.replace(/[^\d+]/g, '')}`
const whatsapp = (value: string) => `https://wa.me/${value.replace(/\D/g, '')}`

export default async function KaanchwalaHome() {
  const payload = await getPayload({ config: configPromise })
  const [settings, serviceData, portfolioData] = await Promise.all([
    getCachedGlobal('site-settings', 1, 'en'),
    payload.find({ collection: 'services', limit: 6, depth: 0, sort: 'sortOrder', locale: 'en' }),
    payload.find({ collection: 'portfolio', limit: 6, depth: 0, sort: '-createdAt' }),
  ])

  const phone = settings.contactPhone || '+91 90000 00000'
  const email = settings.contactEmail || 'info@kaanchwala.com'
  const address = settings.address || '6-2-69/A/36, Ameerpet\nHyderabad - 500038, Telangana'
  const siteName = settings.siteName || 'KAANCHWALA'
  const siteDescription = settings.siteDescription || 'Premium glass and mirror solutions with expert design, manufacturing and installation.'
  const services = serviceData.docs.length ? serviceData.docs.map((item) => ({ title: item.title, summary: item.summary, slug: item.slug })) : fallbackServices.map(([title, summary, slug]) => ({ title, summary, slug }))
  const projects = portfolioData.docs.length ? portfolioData.docs.map((item) => ({ title: item.title, place: item.description || 'Hyderabad' })) : fallbackProjects.map(([title, place]) => ({ title, place }))

  return <main>
    <div className="bg-[#062d70] text-xs text-white"><div className="container flex min-h-8 items-center justify-between gap-4"><span>● {address.replace(/\n/g, ', ')}</span><span>◷ Mon - Sun: 9:00 AM - 7:00 PM</span></div></div>
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="container flex min-h-20 items-center justify-between gap-6"><Link href="/" className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center bg-[#0750b8] text-3xl font-black text-white">K</span><span><strong className="block text-2xl font-black tracking-tight text-[#063f9d]">{siteName}</strong><small className="font-bold tracking-wide text-[#49617f]">GLASS & MIRROR SOLUTIONS</small></span></Link><nav className="hidden items-center gap-7 text-sm font-semibold md:flex"><Link href="/">Home</Link><Link href="/about-us">About Us</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/blog">Blog</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact Us</Link></nav><div className="hidden items-center gap-4 lg:flex"><div className="text-right text-sm"><b className="block">☎ Call Us Now</b><a href={tel(phone)}>{phone}</a></div><Link href="/contact" className="rounded-md bg-[#0644a4] px-5 py-3 text-sm font-bold text-white shadow">GET A FREE QUOTE</Link></div></div></header>
    <section className="relative overflow-hidden bg-slate-50"><div className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-100" style={{ backgroundImage: `url(${image('photo-1497366754035-f200968a6e72')})` }} /><div className="relative min-h-[480px] bg-gradient-to-r from-white via-white/95 to-white/20"><div className="container flex min-h-[480px] items-center"><div className="max-w-xl py-12"><div className="mb-5 inline-flex rounded-md bg-[#0644a4] px-4 py-2 text-xs font-bold text-white">OFFICE GLASS PARTITIONS</div><h1 className="text-4xl font-black leading-tight text-[#10234d] md:text-6xl">Modern Glass Partitions <span className="text-[#0750b8]">for Productive Workspaces</span></h1><p className="mt-5 text-base leading-7 text-slate-600">{siteDescription}</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET FREE QUOTE</Link><a href={whatsapp(phone)} target="_blank" rel="noopener noreferrer" className="rounded-md border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700">◉ WHATSAPP US</a></div></div></div></div></section>
    <section className="container relative z-10 -mt-10 grid overflow-hidden rounded-xl bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-6">{[['◯','Elegant Aesthetics','Enhance the look of your workspace'],['◉','Noise Reduction','Minimise distractions with sound insulation'],['☼','Natural Light','Maximize natural light'],['▣','Space Optimization','Smart solutions for better utilization'],['✓','Premium Quality','Toughened & safety glass'],['⚒','Expert Installation','Professional installation']].map(([icon,title,text]) => <div key={title} className="border-b border-slate-100 p-5 text-center lg:border-b-0 lg:border-r"><div className="mx-auto mb-2 text-2xl text-[#0750b8]">{icon}</div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{text}</p></div>)}</section>
    <section className="container py-16"><h2 className="mb-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Types of Office Glass Partitions</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, i) => <Link href={`/services/${service.slug}`} key={service.slug || service.title} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"><img src={image(['photo-1497366811353-6870744d04b2','photo-1497366216548-37526070297c','photo-1497366754035-f200968a6e72'][i % 3])} alt={service.title} className="h-36 w-full object-cover"/><div className="p-4"><h3 className="font-extrabold group-hover:text-[#0644a4]">{service.title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{service.summary}</p><span className="mt-3 block text-xs font-bold text-[#0644a4]">VIEW SERVICE →</span></div></Link>)}</div><Link href="/services" className="mt-6 inline-block rounded-md border border-[#0750b8] px-6 py-3 text-sm font-bold text-[#0750b8]">VIEW ALL PARTITION TYPES →</Link></section>
    <section className="container rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8"><div className="mb-6 flex items-center justify-between"><h2 className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Featured Projects</h2><Link href="/portfolio" className="text-xs font-bold text-[#0644a4]">VIEW ALL →</Link></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{projects.map((project, i) => <Link href="/portfolio" key={`${project.title}-${i}`} className="group overflow-hidden rounded-lg border"><img src={image(['photo-1497366754035-f200968a6e72','photo-1497366216548-37526070297c'][i % 2])} alt={project.title} className="h-28 w-full object-cover"/><div className="p-3"><b className="text-sm group-hover:text-[#0644a4]">{project.title}</b><p className="mt-1 line-clamp-2 text-xs text-slate-500">{project.place}</p></div></Link>)}</div></section>
    <section className="container py-16"><div className="rounded-xl bg-[#0644a4] p-7 text-white md:p-10"><div className="grid items-center gap-7 md:grid-cols-[1fr_auto]"><div><h2 className="text-3xl font-black">Ready to Transform Your Office Space?</h2><p className="mt-2 text-white/80">Get a FREE site visit & quote today.</p></div><div className="flex flex-wrap gap-3"><a href={tel(phone)} className="rounded-md bg-white px-5 py-3 font-bold text-[#0644a4]">CALL NOW</a><a href={whatsapp(phone)} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/50 px-5 py-3 font-bold">WHATSAPP US</a></div></div></div></section>
    <footer className="bg-[#071f4e] py-10 text-white"><div className="container grid gap-8 md:grid-cols-4"><div><b className="text-xl">{siteName}</b><p className="mt-3 text-sm leading-6 text-white/70">{siteDescription}</p></div><div><b>Quick Links</b><div className="mt-3 space-y-2 text-sm text-white/70"><Link className="block" href="/">Home</Link><Link className="block" href="/about-us">About Us</Link><Link className="block" href="/services">Services</Link><Link className="block" href="/portfolio">Portfolio</Link><Link className="block" href="/blog">Blog</Link><Link className="block" href="/faq">FAQ</Link><Link className="block" href="/contact">Contact Us</Link></div></div><div><b>Support</b><div className="mt-3 space-y-2 text-sm text-white/70"><Link className="block" href="/faq">Privacy & FAQs</Link><Link className="block" href="/contact">Terms & Conditions</Link><Link className="block" href="/contact">Warranty & Service</Link></div></div><div><b>Contact</b><p className="mt-3 whitespace-pre-line text-sm leading-6 text-white/70">{address}<br/><a href={tel(phone)}>{phone}</a><br/><a href={`mailto:${email}`}>{email}</a></p></div></div><div className="container mt-8 border-t border-white/10 pt-5 text-xs text-white/50">© 2026 {siteName}. All Rights Reserved.</div></footer>
  </main>
}
