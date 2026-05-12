'use client'

import React from 'react'
import { ExternalLink, MapPin, Phone, Mail } from 'lucide-react'
import { contact, formConfig, siteConfig } from '@/data/siteData'

const ContactSection = () => {
  const contactUrl = siteConfig.formCTA?.href || 'https://eberstlaw.com/contact-us/'

  return (
    <section id="contact" className="py-24 bg-[#f1f2f4]">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[12px] shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-1/3 bg-[#070519] p-12 text-white">
            <h2 className="text-[24px] font-bold mb-12 leading-none">{formConfig.heading}</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-white/50 shrink-0" size={24} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.96px] mb-1 opacity-50">ADDRESS</p>
                  <p className="text-[18px]">{contact.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-white/50 shrink-0" size={24} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.96px] mb-1 opacity-50">PHONE</p>
                  <a href={`tel:${contact.phone}`} className="text-[18px] hover:text-white/80 transition-colors">{contact.phone}</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-white/50 shrink-0" size={24} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.96px] mb-1 opacity-50">EMAIL</p>
                  <a href={`mailto:${contact.email}`} className="text-[18px] hover:text-white/80 transition-colors">{contact.email}</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="md:w-2/3 p-12 flex flex-col justify-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              No form required
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-5 leading-tight">
              Start with the Eberst Law contact page.
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">
              Use the firm contact page for case inquiries, consultation requests, and podcast-related questions. That keeps every message inside the main Eberst Law intake flow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-[3px] font-bold text-[14px] uppercase tracking-[0.7px] hover:bg-black/80 transition-all"
              >
                Contact Eberst Law
                <ExternalLink size={16} />
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-black/15 text-black px-8 py-4 rounded-[3px] font-bold text-[14px] uppercase tracking-[0.7px] hover:bg-black/5 transition-all"
              >
                <Phone size={16} />
                Call {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
