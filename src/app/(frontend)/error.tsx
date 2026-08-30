'use client'

import Link from 'next/link'

export default function FrontendError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="kw-page min-h-[60vh] flex items-center">
      <section className="kw-section w-full">
        <div className="container max-w-2xl text-center">
          <p className="kw-eyebrow">Something went wrong</p>
          <h1 className="kw-title mt-3 text-4xl md:text-5xl">We couldn't load this page.</h1>
          <p className="mt-5 leading-7 text-slate-600">Please try again. If the problem continues, you can return to the homepage or contact Kaanchwala.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={() => reset()} className="rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">TRY AGAIN</button>
            <Link href="/" className="rounded-md border border-slate-300 px-6 py-3 font-bold text-[#10234d]">GO TO HOME</Link>
            <Link href="/contact" className="rounded-md border border-slate-300 px-6 py-3 font-bold text-[#10234d]">CONTACT US</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
