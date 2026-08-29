import Link from 'next/link'

const phone = '+91 9891980070'
const email = 'info@kaanchwala.com'
const address = 'Beside Royal Bawarchi Restaurant, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049'

export default function ContactPage() {
  return (
    <main className="container py-16">
      <Link href="/" className="text-sm font-bold text-[#0644a4]">← Home</Link>
      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-[#0644a4]">Contact Us</p>
          <h1 className="mt-2 text-4xl font-black text-[#10234d]">Get a Free Quote</h1>
          <p className="mt-4 leading-7 text-slate-600">Tell us about your glass, mirror, window or interior requirement and our team will get back to you.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-700">
            <p>📍 {address}</p>
            <p>☎ <a href={`tel:${phone.replace(/\D/g, '')}`} className="font-bold text-[#0644a4]">{phone}</a></p>
            <p>✉ <a href={`mailto:${email}`} className="font-bold text-[#0644a4]">{email}</a></p>
            <p>◷ Mon - Sun: 9:00 AM - 7:00 PM</p>
            <a href={`https://wa.me/${phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-[#0644a4] px-6 py-3 font-bold text-white">WHATSAPP US</a>
          </div>
        </div>
        <form className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <label className="block text-sm font-bold">Name<input name="name" required className="mt-2 w-full rounded border p-3" /></label>
          <label className="mt-4 block text-sm font-bold">Phone<input name="phone" required className="mt-2 w-full rounded border p-3" /></label>
          <label className="mt-4 block text-sm font-bold">Requirement<textarea name="message" required rows={5} className="mt-2 w-full rounded border p-3" /></label>
          <button type="submit" className="mt-5 rounded bg-[#0644a4] px-6 py-3 font-bold text-white">REQUEST QUOTE</button>
        </form>
      </div>
    </main>
  )
}
