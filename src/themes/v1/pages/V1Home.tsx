'use client'

import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustBadges from '../components/TrustBadges'
import StatsBanner from '../components/StatsBanner'
import About from '../components/About'
import PodcastTeam from '../components/PodcastTeam'
import LatestEpisodes from '../components/LatestEpisodes'
import PodcastSubscribeCTA from '../components/PodcastSubscribeCTA'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import TopicalEntryGrid from '../components/TopicalEntryGrid'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import type { Episode } from '@/lib/data'

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eberstlaw.com/#org",
      "name": "The Eberst Law Firm",
      "legalName": "The Eberst Law Firm",
      "url": "https://eberstlaw.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://podcast-floridacaraccidentlawyer.vercel.app/logo.svg",
        "width": 200,
        "height": 60
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://podcast-floridacaraccidentlawyer.vercel.app/Hero.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "The Eberst Law Firm is a Florida personal injury firm founded in 2009 by Jonathon T. Eberst. The firm operates from Stuart (headquarters), Gainesville, and Daytona Beach and represents injured Floridians in car, truck, motorcycle, catastrophic injury, and wrongful death matters.",
      "telephone": "+17722254900",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "117 SE Seminole Street",
        "addressLocality": "Stuart",
        "addressRegion": "FL",
        "postalCode": "34994",
        "addressCountry": "US"
      },
      "foundingDate": "2009",
      "areaServed": {
        "@type": "State",
        "name": "Florida"
      },
      "knowsAbout": [
        "Car Accident Law",
        "Truck Accident Law",
        "Motorcycle Accident Law",
        "Wrongful Death Law",
        "Catastrophic Injury Law"
      ],
      "sameAs": [
        "https://eberstlaw.com/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "35"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://podcast-floridacaraccidentlawyer.vercel.app/#website",
      "url": "https://podcast-floridacaraccidentlawyer.vercel.app/",
      "name": "The Eberst Law Podcast",
      "description": "A podcast by Jonathon T. Eberst of The Eberst Law Firm helping injured Floridians understand car, truck, motorcycle, and catastrophic injury claims.",
      "publisher": {
        "@id": "https://eberstlaw.com/#org"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://podcast-floridacaraccidentlawyer.vercel.app/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://podcast-floridacaraccidentlawyer.vercel.app/#webpage",
      "url": "https://podcast-floridacaraccidentlawyer.vercel.app/",
      "name": "The Eberst Law Podcast | The Eberst Law Firm",
      "description": "Jonathon Eberst covers Florida personal injury - PIP, UM/UIM, evidence preservation, and how insurance carriers really evaluate claims.",
      "isPartOf": {
        "@id": "https://podcast-floridacaraccidentlawyer.vercel.app/#website"
      },
      "about": {
        "@id": "https://eberstlaw.com/#org"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".podcast-description",
          ".about-section",
          ".episode-description"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://podcast-floridacaraccidentlawyer.vercel.app/"
          }
        ]
      }
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://podcast-floridacaraccidentlawyer.vercel.app/#podcast",
      "name": "The Eberst Law Podcast",
      "description": "The Eberst Law Podcast covers Florida personal injury law from the plaintiff side - how to handle the first 72 hours after a crash, PIP and UM/UIM coverage, nursing-home neglect, and what insurance companies do not want injured Floridians to know.",
      "url": "https://podcast-floridacaraccidentlawyer.vercel.app/",
      "image": "https://podcast-floridacaraccidentlawyer.vercel.app/Hero.jpg",
      "author": {
        "@type": "Person",
        "@id": "https://podcast-floridacaraccidentlawyer.vercel.app/#host",
        "name": "Jonathon T. Eberst",
        "givenName": "Jonathon",
        "familyName": "T. Eberst",
        "jobTitle": "Founding Attorney & Podcast Host",
        "image": "https://podcast-floridacaraccidentlawyer.vercel.app/headshot-jonathon-eberst.jpg",
        "worksFor": {
          "@id": "https://eberstlaw.com/#org"
        },
        "sameAs": [
          "https://eberstlaw.com/"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Barry University School of Law"
        }
      },
      "webFeed": [],
      "genre": [
        "Legal",
        "Personal Injury Law",
        "Education"
      ],
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://eberstlaw.com/#org"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://podcast-floridacaraccidentlawyer.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What topics does Jonathon Eberst cover on The Eberst Law Podcast?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jonathon Eberst covers the full range of cases The Eberst Law Firm handles - car, truck, motorcycle, bicycle, and pedestrian accidents; brain and spinal injuries; wrongful death; nursing-home neglect; and denied hurricane claims. Episodes focus on what injured Floridians actually need to know: PIP thresholds, UM/UIM stacking, evidence preservation, and when a case has to go to trial."
          }
        },
        {
          "@type": "Question",
          "name": "How often are new episodes released?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Eberst Law Podcast publishes on a weekly, evergreen cadence. Episodes run 40–70 minutes and cover one topic in depth. Subscribe via the platform links in the footer to be notified when each episode drops."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the target audience?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The show is built for injured Floridians on the east coast - from the Treasure Coast (Stuart, Jensen Beach, Port St. Lucie) through Daytona Beach and up to Gainesville - as well as families and caregivers making decisions after a serious accident or nursing-home concern."
          }
        },
        {
          "@type": "Question",
          "name": "How do I contact The Eberst Law Firm?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jonathon and Alexis welcome listener questions and case scenarios through eberstlaw.com or at (772) 225-4900. Consultations are free, cases are handled on contingency - no attorney’s fees unless a recovery is obtained - and the firm serves clients from Stuart, Gainesville, and Daytona Beach."
          }
        }
      ]
    }
  ]
}

interface V1HomeProps {
  episodes?: Episode[]
}

const V1Home = ({ episodes }: V1HomeProps) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Header />

      <main>
        <Hero latestEpisode={episodes?.[0]} />
        <TrustBadges />
        <StatsBanner />
        <About />
        <PodcastTeam />
        <LatestEpisodes episodes={episodes} />
        <Testimonials />
        <PodcastSubscribeCTA />
        <FAQ />
        <TopicalEntryGrid />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default V1Home
