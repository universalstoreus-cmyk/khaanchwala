import Link from 'next/link'

const services = [
  ['Frameless Glass Partitions', 'Sleek, minimal design with maximum transparency'],
  ['Aluminium Framed Partitions', 'Durable frames with a modern clean finish'],
  ['Half Glass Partitions', 'Privacy-focused glass with a professional style'],
  ['Sliding Glass Partitions', 'Flexible sliding solutions for changing spaces'],
  ['Double Glazed Partitions', 'Extra sound insulation for private discussions'],
  ['Curved Glass Partitions', 'Custom curved glass for distinctive interiors'],
]

const projects = [
  ['Tech Startup Office', 'Hyderabad'],
  ['Corporate Office', 'Gachibowli, Hyderabad'],
  ['Co-working Space', 'Madhapur, Hyderabad'],
  ['Conference Room', 'Ameerpet, Hyderabad'],
  ['IT Company Office', 'Hitech City, Hyderabad'],
  ['Corporate Office', 'Jubilee Hills, Hyderabad'],
]

const benefits = [
  ['◯', 'Elegant Aesthetics', 'Enhance the look of your workspace'],
  ['◉', 'Noise Reduction', 'Minimise distractions with sound insulation'],
  ['☼', 'Natural Light', 'Maximize natural light for a positive environment'],
  ['▣', 'Space Optimization', 'Smart solutions for better space utilization'],
  ['✓', 'Premium Quality', 'Toughened & safety glass used'],
  ['⚒', 'Expert Installation', 'Professional team for seamless installation'],
]

const image = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=82`

export default function HomePage() {
  return (
    <main>
      <div className="bg-[#062d70] text-white text-xs">
        <div className="container flex min-h-8 items-center justify-between gap-4">
          <span>● Ameerpet, Hyderabad, Telangana - 500038</span>
          <span>◷ Mon - Sun: 9:00 AM - 7:00 PM</span>
          <span className="hidden md:inline">f&nbsp;&nbsp;◎&nbsp;&nbsp;▶&nbsp;&nbsp;in</span>
        </div>
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center bg-[#0750b8] text-3xl font-black text-white">K</span>
            <span><strong className="block text-2xl font-black tracking-tight text-[#063f9d]">KAANCHWALA</strong><small className="font-bold tracking-wide text-[#49617f]">GLASS & MIRROR SOLUTIONS</small></span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'FAQ', 'Contact Us'].map((item) => (
              <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase().replaceAll(' ', '-')}`} className="text-slate-700 hover:text-[#063f9d]">{item}</Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <div className="text-right text-sm"><b className="block">☎ Call Us Now</b><span>+91 90000 00000</span></div>
            <Link href="/contact" className="rounded-md bg-[#0644a4] px-5 py-3 text-sm font-bold text-white shadow">GET A FREE QUOTE</Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-100" style={{ backgroundImage: `url(${image('photo-1497366754035-f200968a6e72')})` }} />
        <div className="relative min-h-[420px] bg-gradient-to-r from-white via-white/95 to-white/20 md:min-h-[480px]">
          <div className="container flex min-h-[420px] items-center md:min-h-[480px]">
            <div className="max-w-xl py-12">
              <div className="mb-5 inline-flex rounded-md bg-[#0644a4] px-4 py-2 text-xs font-bold text-white">OFFICE GLASS PARTITIONS</div>
              <h1 className="text-4xl font-black leading-tight text-[#10234d] md:text-6xl">Modern Glass Partitions <span className="text-[#0750b8]">for Productive Workspaces</span></h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">Create smart, stylish and functional office spaces with our customized glass partition solutions.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Link href="/contact" className="rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GET FREE QUOTE</Link><a href="https://wa.me/919000000000" className="rounded-md border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700">◉ WHATSAPP US</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="container relative z-10 -mt-10 grid overflow-hidden rounded-xl bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-6">
        {benefits.map(([icon, title, text]) => <div key={title} className="border-b border-slate-100 p-5 text-center lg:border-b-0 lg:border-r last:border-0"><div className="mx-auto mb-2 text-2xl text-[#0750b8]">{icon}</div><h3 className="text-sm font-extrabold">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{text}</p></div>)}
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div><h2 className="mb-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Types of Office Glass Partitions</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(([title, text], i) => <article key={title} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"><img src={image(['photo-1497366811353-6870744d04b2','photo-1497366216548-37526070297c','photo-1497366754035-f200968a6e72'][i % 3])} alt={title} className="h-32 w-full object-cover"/><div className="p-4"><h3 className="font-extrabold">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p></div></article>)}</div><Link href="/services" className="mt-6 inline-block rounded-md border border-[#0750b8] px-6 py-3 text-sm font-bold text-[#0750b8]">VIEW ALL PARTITION TYPES →</Link></div>
          <div><h2 className="mb-6 text-sm font-black uppercase tracking-wide text-[#0644a4]">Glass Options</h2><div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2 xl:grid-cols-5">{['Clear Glass','Frosted Glass','Tinted Glass','Patterned Glass','Smart Glass'].map((x) => <div key={x} className="rounded-lg border border-slate-200 p-5 text-center"><div className="mx-auto mb-4 h-16 w-8 rounded-sm border-2 border-slate-300 bg-gradient-to-r from-white/30 to-slate-200/50"/><b className="text-xs">{x}</b></div>)}</div><div className="mt-5 grid gap-6 rounded-lg bg-slate-50 p-5 sm:grid-cols-2"><div><h3 className="text-xl font-black text-[#0644a4]">Why Choose Glass Partitions?</h3><ul className="mt-4 space-y-3 text-sm text-slate-600">{['Improves teamwork and collaboration','Creates open and airy environment','Customizable to your office needs','Easy to maintain and high durability','Adds value to your office interiors'].map(x => <li key={x}>✓ {x}</li>)}</ul></div><img src={image('photo-1497366811353-6870744d04b2')} alt="Glass office" className="h-56 w-full rounded-lg object-cover"/></div></div>
        </div>
      </section>

      <section className="container rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8"><div className="mb-6 flex flex-wrap items-center justify-between gap-4"><h2 className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Featured Projects</h2><div className="flex gap-2 text-xs font-bold"><span className="rounded bg-[#0644a4] px-4 py-2 text-white">All</span><span className="rounded border px-4 py-2">IT Offices</span><span className="rounded border px-4 py-2">Corporate Offices</span></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{projects.map(([title, place], i) => <article key={title + place} className="overflow-hidden rounded-lg border"><img src={image(['photo-1497366754035-f200968a6e72','photo-1497366216548-37526070297c'][i % 2])} alt={title} className="h-28 w-full object-cover"/><div className="p-3"><b className="text-sm">{title}</b><p className="mt-1 text-xs text-slate-500">{place}</p></div></article>)}</div><div className="text-center"><Link href="/portfolio" className="mt-7 inline-block rounded-md border border-[#0750b8] px-7 py-3 text-sm font-bold text-[#0750b8]">VIEW ALL PROJECTS →</Link></div></section>

      <section className="container py-16"><div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]"><div><h2 className="mb-7 text-sm font-black uppercase tracking-wide text-[#0644a4]">Our Installation Process</h2><div className="grid grid-cols-2 gap-4 md:grid-cols-7">{['Consultation','Site Visit','Design & Plan','Manufacturing','Installation','Quality Check','After Sales'].map((x,i)=><div key={x} className="text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#0644a4] font-black text-white">{String(i+1).padStart(2,'0')}</div><b className="mt-3 block text-xs">{x}</b><p className="mt-1 text-[10px] leading-4 text-slate-500">Professional support at every step.</p></div>)}</div></div><div className="rounded-xl bg-slate-50 p-6"><div className="text-4xl text-[#0644a4]">“</div><p className="mt-2 text-sm leading-6 text-slate-600">Kaanchwala provided excellent glass partition solutions for our office. The quality, finish and installation were perfect!</p><div className="mt-4 font-bold">Ramesh Verma</div><div className="text-xs text-slate-500">Operations Head, TechNova Solutions</div><div className="mt-3 text-amber-400">★★★★★</div></div></div></section>

      <section className="container pb-14"><div className="rounded-xl bg-[#0644a4] p-7 text-white md:p-10"><div className="grid items-center gap-7 md:grid-cols-[1fr_auto]"><div><h2 className="text-3xl font-black">Ready to Transform Your Office Space?</h2><p className="mt-2 text-white/80">Get a FREE site visit & quote today.</p></div><div className="flex flex-wrap gap-3"><a href="tel:+919000000000" className="rounded-md bg-white px-5 py-3 font-bold text-[#0644a4]">CALL NOW</a><a href="https://wa.me/919000000000" className="rounded-md border border-white/50 px-5 py-3 font-bold">WHATSAPP US</a></div></div></div></section>

      <footer className="bg-[#071f4e] py-10 text-white"><div className="container grid gap-8 md:grid-cols-4"><div><b className="text-xl">KAANCHWALA</b><p className="mt-3 text-sm leading-6 text-white/70">Premium glass and mirror solutions with expert design, manufacturing and installation.</p></div><div><b>Quick Links</b><div className="mt-3 space-y-2 text-sm text-white/70"><Link className="block" href="/">Home</Link><Link className="block" href="/services">Services</Link><Link className="block" href="/portfolio">Portfolio</Link><Link className="block" href="/contact">Contact Us</Link></div></div><div><b>Support</b><div className="mt-3 space-y-2 text-sm text-white/70"><span className="block">Privacy Policy</span><span className="block">Terms & Conditions</span><span className="block">Warranty</span></div></div><div><b>Contact</b><p className="mt-3 text-sm leading-6 text-white/70">6-2-69/A/36, Ameerpet<br/>Hyderabad - 500038, Telangana<br/>+91 90000 00000<br/>info@kaanchwala.com</p></div></div><div className="container mt-8 border-t border-white/10 pt-5 text-xs text-white/50">© 2026 Kaanchwala Glass & Mirror Solutions. All Rights Reserved.</div></footer>
    </main>
  )
}
