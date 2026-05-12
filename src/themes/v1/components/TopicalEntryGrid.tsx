'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { topicalEntryGrid } from '@/data/siteData'

const inferIcon = (title: string) => {
  const text = title.toLowerCase()

  if (text.includes('uninsured') || text.includes('underinsured') || text.includes('hurricane')) {
    return '/topical/icon-svc-insurance.svg'
  }
  if (text.includes('intersection') || text.includes('liable') || text.includes('liability')) {
    return '/topical/icon-svc-liability.svg'
  }
  if (text.includes('truck')) {
    return '/topical/icon-pa-truck.svg'
  }
  if (text.includes('bicycle')) {
    return '/topical/icon-pa-bike.svg'
  }
  if (text.includes('pedestrian')) {
    return '/topical/icon-pa-pedestrian.svg'
  }
  if (text.includes('medical') || text.includes('neck') || text.includes('back')) {
    return '/topical/icon-pa-medical.svg'
  }

  return '/topical/icon-pa-car.svg'
}

const TopicalEntryGrid = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 md:py-20 bg-[#EBF3F7]">
      <div className="max-w-container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 leading-none">
            {topicalEntryGrid.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {topicalEntryGrid.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {topicalEntryGrid.tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all ${
                activeTab === index
                  ? 'bg-secondary text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Link Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {topicalEntryGrid.tabs[activeTab].links.map((link, index) => {
            const isExternal = /^https?:\/\//.test(link.href)
            const linkImage = (link as { image?: string }).image || inferIcon(link.title)
            const cardClass = "bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all group flex flex-col md:flex-row"
            const inner = (
              <>
                <div className="bg-[#FFF6E0] flex items-center justify-center p-6 md:p-8 md:w-40 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={linkImage} alt="" aria-hidden="true" className="w-20 h-20 md:w-24 md:h-24" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">{link.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{link.description}</p>
                  <div className="flex items-center text-black font-semibold group-hover:text-secondary transition-colors">
                    <span className="text-sm md:text-base">Read More</span>
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </>
            )
            return isExternal ? (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
            ) : (
              <Link key={index} href={link.href} className={cardClass}>{inner}</Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TopicalEntryGrid
