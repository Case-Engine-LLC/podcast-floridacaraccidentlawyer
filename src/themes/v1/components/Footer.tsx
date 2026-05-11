'use client'

import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { footer, episodes as staticEpisodes } from '@/data/siteData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const episodes = staticEpisodes.map((episode) => ({
    name: `Episode ${episode.number}: ${episode.title}`,
    href: `/episode/${episode.id}`,
  }))
  const socialItems = [
    { href: footer.socialLinks.twitter, label: 'Twitter', Icon: Twitter },
    { href: footer.socialLinks.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: footer.socialLinks.facebook, label: 'Facebook', Icon: Facebook },
    { href: footer.socialLinks.instagram, label: 'Instagram', Icon: Instagram },
    { href: footer.socialLinks.youtube, label: 'YouTube', Icon: Youtube },
  ].filter(item => item.href && item.href !== '#')

  return (
    <footer className="bg-[#0a0a1a] text-white">
      {/* Marquee Section */}
      <div className="py-12 md:py-16 overflow-hidden">
        <div className="flex animate-marquee-fast">
          <span className="font-extrabold text-white whitespace-nowrap" style={{ fontSize: 'clamp(4rem, 8vw, 12.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01
          </span>
          <span className="font-extrabold text-white whitespace-nowrap ml-8" style={{ fontSize: 'clamp(4rem, 8vw, 12.5rem)', lineHeight: 1, letterSpacing: '-0.02em' }}>
            SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01 SEASON 01
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-container mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Logo & Social */}
          <div>
            <div className="mb-6">
              <img src="/logo.svg" alt={footer.logo} className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">
              {footer.description}
            </p>
            {socialItems.length > 0 && (
              <div className="flex items-center gap-4">
                {socialItems.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Icon size={20} className="text-white" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Episodes */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Episodes</h3>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {episodes.map((episode, index) => (
                <a
                  key={index}
                  href={episode.href}
                  className="text-base text-white/80 hover:text-white transition-colors"
                >
                  {episode.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-6 md:px-12 py-6">
          <p className="text-sm text-white/60 text-center">
            © {currentYear} {footer.copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
