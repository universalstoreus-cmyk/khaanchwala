'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  ['Home', '/'], ['About Us', '/about'], ['Services', '/services'], ['Portfolio', '/portfolio'], ['Blog', '/blog'], ['FAQ', '/faq'], ['Contact Us', '/contact'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="kw-header">
      <div className="kw-header-top"><div className="container kw-header-top-inner"><button type="button" className="kw-address" onClick={() => alert('Beside Royal Bawarchi Restaurant, New Hafeezpet, Marthanda Nagar, Hafeezpet, Hyderabad, Telangana 500049')}>📍 <span>Hyderabad, Telangana</span></button><span>Mon - Sun: 9:00 AM - 7:00 PM</span></div></div>
      <div className="container kw-nav">
        <Link href="/" className="kw-logo" aria-label="Kaanch Wala home"><Image src="/kaanchwala-logo.svg" alt="Kaanch Wala Glass & Mirror Solutions" width={176} height={60} priority /></Link>
        <nav className="kw-desktop-nav" aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
        <div className="kw-nav-actions"><a href="tel:+919891980070" className="kw-call">☎ <span>+91 98919 80070</span></a><Link href="/contact" className="kw-quote">GET A FREE QUOTE</Link><button type="button" className="kw-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/><span/></button></div>
      </div>
      {open && <nav className="kw-mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a href="tel:+919891980070" onClick={() => setOpen(false)}>Call Now</a><a href="https://wa.me/919891980070" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp</a></nav>}
    </header>
  )
}
