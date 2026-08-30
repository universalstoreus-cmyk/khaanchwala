import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="kw-page min-h-[60vh] flex items-center">
      <section className="kw-section w-full">
        <div className="container max-w-2xl text-center">
          <p className="kw-eyebrow">404 — Page Not Found</p>
          <h1 className="kw-title mt-3 text-4xl md:text-5xl">This page could not be found.</h1>
          <p className="mt-5 leading-7 text-slate-600">The page may have moved or the service link may be incorrect. Use the options below to continue.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">GO TO HOME</Link>
            <Link href="/services" className="rounded-md border border-slate-300 px-6 py-3 font-bold text-[#10234d]">VIEW SERVICES</Link>
            <Link href="/contact" className="rounded-md border border-slate-300 px-6 py-3 font-bold text-[#10234d]">CONTACT US</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
