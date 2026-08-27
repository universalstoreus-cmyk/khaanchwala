import React from 'react'
import type { Metadata } from 'next'
import { getPayload } from 'payload'

import { FaqBlock } from '@/collections/Faqs'
import config from '@/payload.config'

export const metadata: Metadata = {
  title: 'Contact Us | Kaanchwala Glass & Mirror Solutions',
  description: 'Contact Kaanchwala Glass & Mirror Solutions for a free consultation and quote',
}

export default async function ContactPage() {
  const payload = await getPayload({ config })
  const siteSettings: any = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <div className="min-h-screen">
      <section className="py-24 md:py-32 lg:py-40 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 line-clamp-3">Have a project in mind? Contact us for a free consultation. Our team is ready to help you find the perfect glass solution for your space.</p>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-4"><div><p className="font-medium">{siteSettings?.contactPhone || '+1 (234) 567-890'}</p><p className="text-sm">Mon - Sat: 9AM - 6PM</p></div></div>
                  <div className="flex items-start gap-4"><div><p className="font-medium">{siteSettings?.address || '123 Glass Street, City Center'}</p><p className="text-sm">{siteSettings?.contactEmail || 'info@kaanchwala.com'}</p></div></div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">Social Links</h3>
                  <div className="flex gap-3">
                    {['Instagram', 'Facebook', 'YouTube', 'LinkedIn'].map((social) => <a key={social} href="#!" target="_blank" rel="noopener noreferrer" aria-label={social} className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors" />)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">Fill out the form below and we'll get back to you within 24 hours.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label><input type="text" name="name" required className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="John Doe" /></div><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label><input type="email" name="email" required className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="john@example.com" /></div></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label><input type="tel" name="phone" className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="+1 (234) 567-890" /></div>
                <div className="grid grid-cols-2 gap-4"><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label><input type="text" name="company" className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Your Company" /></div><div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Interest</label><select name="service" className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"><option value="">Select a service</option><option value="frameless-partitions">Frameless Glass Partitions</option><option value="aluminium-partitions">Aluminium Framed Partitions</option><option value="half-partitions">Half Glass Partitions</option><option value="sliding-partitions">Sliding Glass Partitions</option><option value="double-glazed">Double Glazed Partitions</option><option value="curved-partitions">Curved Glass Partitions</option><option value="glass-doors">Glass Doors</option><option value="office-glass">Office Glass Solutions</option><option value="shower-enclosures">Shower Enclosures</option><option value="glass-railings">Glass Railings</option><option value="mirrors">Mirrors</option><option value="custom-solutions">Custom Glass Solutions</option></select></div></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location/Area</label><input type="text" name="location" className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="City or Region" /></div>
                <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label><textarea name="message" rows={4} required className="w-full rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Tell us about your project..." /></div>
                <button type="submit" className="w-full rounded-md bg-blue-600 text-white py-3 px-6 font-medium hover:bg-blue-500 dark:hover:bg-blue-500 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FaqBlock />
    </div>
  )
}