'use client'

import React from 'react'
import { Star, ThumbsUp, Briefcase } from 'lucide-react'
import { stats } from '@/data/siteData'

const StatsBanner = () => {
  const statItems = [
    {
      value: stats.rating ? String(stats.rating) : '',
      label: stats.rating ? 'Positive Reviews' : '',
      text: stats.ratingVerbalization,
      Icon: Star,
      cardClass: 'bg-secondary',
      valueClass: 'text-white',
      textClass: 'text-white',
      bodyClass: 'text-white/85',
    },
    {
      value: stats.satisfactionRate ? `${stats.satisfactionRate}%` : '',
      label: stats.satisfactionLabel,
      text: stats.satisfactionVerbalization,
      Icon: ThumbsUp,
      cardClass: 'bg-primary',
      valueClass: 'text-secondary',
      textClass: 'text-white',
      bodyClass: 'text-white/80',
    },
    {
      value: stats.casesHandled ? `${stats.casesHandled}+` : '',
      label: stats.casesLabel,
      text: stats.casesVerbalization,
      Icon: Briefcase,
      cardClass: 'bg-secondary',
      valueClass: 'text-white',
      textClass: 'text-white',
      bodyClass: 'text-white/85',
    },
  ].filter(item => item.value && item.label && item.text && !/TODO/i.test(item.text))

  if (statItems.length === 0) {
    return null
  }

  return (
    <section className="bg-white py-0 md:py-12">
      <div className="max-w-container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {statItems.map(({ value, label, text, Icon, cardClass, valueClass, textClass, bodyClass }) => (
            <div key={label} className={`${cardClass} rounded-3xl px-6 py-8 md:px-5 md:py-10 text-left`}>
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <span className={`${valueClass} text-4xl md:text-6xl font-bold`}>{value}</span>
                <Icon size={56} className={valueClass} fill="currentColor" />
              </div>
              <p className={`${textClass} text-xl md:text-2xl font-bold mb-3`}>{label}</p>
              <p className={`${bodyClass} text-sm md:text-base leading-relaxed`}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
