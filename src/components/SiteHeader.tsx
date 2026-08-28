import Link from 'next/link'

const navItems = [
  ['Home', '/'],
  ['About Us', '/about-us'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Blog', '/blog'],
  ['FAQ', '/faq'],
  ['Contact Us', '/contact'],
] as const

export default function SiteHeader() {
  return (
    <>
      <div className="bg-[#062d70] text-xs text-white">
        <div className="container flex min-h-8 items-center justify-between gap-4">
          <span>● 6-2-69/A/36, Ameerpet, Hyderabad - 500038, Telangana</span>
          <span>◷ Mon - Sun: 9:00 AM - 7:00 PM</span>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Kaanchwala home">
            <span className="grid h-12 w-12 place-items-center rounded-sm bg-[#0750b8] text-3xl font-black text-white">K</span>
            <span>
              <strong className="block text-xl font-black tracking-tight text-[#063f9d] sm:text-2xl">KAANCHWALA</strong>
              <small className="font-bold tracking-wide text-[#49617f]">GLASS &amp; MIRROR SOLUTIONS</small>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-semibold lg:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-[#0644a4]">
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <div className="text-right text-sm">
              <b className="block">☎ Call Us Now</b>
              <a href="tel:+919000000000">+91 90000 00000</a>
            </div>
            <Link href="/contact" className="rounded-md bg-[#0644a4] px-4 py-3 text-sm font-bold text-white shadow">
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
