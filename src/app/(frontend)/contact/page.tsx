import Link from 'next/link'

const address = 'Beside Royal Bawarchi Restaurant, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049'
const phone = '+91-9891980070'
const email = 'info@kaanchwala.com'
const whatsapp = 'https://wa.me/919891980070'

export default function ContactPage() {
  const mapQuery = encodeURIComponent(address)
  return (
    <main className="kw-page">
      <section className="kw-section">
        <div className="container">
          <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
          <div className="mt-6 grid gap-10 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="kw-eyebrow">Contact Us</p>
              <h1 className="kw-title mt-2 text-4xl md:text-5xl">Request a Free Quote</h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Tell us about your glass, mirror, window or interior requirement and our team will get back to you.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-600">
                <div><span className="font-black text-[#10234d]">Location</span><p className="mt-1">{address}</p><a className="mt-2 inline-block font-bold text-[#0644a4] hover:underline" href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer">OPEN IN GOOGLE MAPS →</a></div>
                <p><span className="font-black text-[#10234d]">Phone:</span> <a className="font-semibold hover:underline" href="tel:+919891980070">{phone}</a></p>
                <p><span className="font-black text-[#10234d]">Email:</span> <a className="font-semibold hover:underline" href="mailto:info@kaanchwala.com">{email}</a></p>
                <p><span className="font-black text-[#10234d]">Business Hours:</span> Mon - Sun: 9:00 AM - 7:00 PM</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="tel:+919891980070" className="rounded-md bg-[#0644a4] px-5 py-3 font-bold text-white">CALL NOW</a>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#159447] px-5 py-3 font-bold text-white">WHATSAPP</a>
                </div>
              </div>
            </div>
            <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft" action={whatsapp} method="get">
              <h2 className="text-2xl font-black text-[#10234d]">Tell us about your project</h2>
              <p className="mt-2 text-sm text-slate-500">Share your requirement and continue the conversation on WhatsApp.</p>
              <label className="mt-6 block text-sm font-bold">Name<input name="name" required className="mt-2 w-full rounded border border-slate-300 p-3" /></label>
              <label className="mt-4 block text-sm font-bold">Phone<input name="phone" required type="tel" className="mt-2 w-full rounded border border-slate-300 p-3" /></label>
              <label className="mt-4 block text-sm font-bold">Requirement<textarea name="message" rows={5} required className="mt-2 w-full rounded border border-slate-300 p-3" /></label>
              <button type="submit" className="mt-5 w-full rounded bg-[#0644a4] px-6 py-3 font-bold text-white">REQUEST QUOTE ON WHATSAPP</button>
            </form>
          </div>
          <section className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"><iframe title="Kaanchwala location map" src={`https://www.google.com/maps?q=${mapQuery}&output=embed`} className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></section>
          <p className="mt-3 text-xs text-slate-400">Address shown above is temporary business information and can be updated when the client provides the final address.</p>
        </div>
      </section>
    </main>
  )
}
