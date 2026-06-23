import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EpisodeHero from '../components/EpisodeHero'
import EpisodeContent from '../components/EpisodeContent'
import OtherEpisodes from '../components/OtherEpisodes'
import FAQ from '../components/FAQ'
import { siteConfig } from '@/data/siteData'
import type { Episode } from '@/lib/data'
import type { TranscriptSegment } from '@/lib/rss'

const episodeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.floridacaraccident.lawyer/episode/1#webpage",
      "url": "https://www.floridacaraccident.lawyer/episode/1",
      "name": "What Every Florida Driver Needs to Know in the First 72 Hours After a Crash | Episode 1 | The Eberst Advantage: Florida Accident & Injury Law Podcast",
      "description": "Jonathon T. Eberst and co-host Alexis walk through exactly what an injured Floridian should do in the first 72 hours after a crash - from medical care to the call you should not make.",
      "isPartOf": {
        "@id": "https://www.floridacaraccident.lawyer/#website"
      },
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "h1",
          ".episode-description",
          ".episode-overview",
          ".key-takeaways"
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.floridacaraccident.lawyer/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Episodes",
            "item": "https://www.floridacaraccident.lawyer/#episodes"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "What Every Florida Driver Needs to Know in the First 72 Hours After a Crash",
            "item": "https://www.floridacaraccident.lawyer/episode/1"
          }
        ]
      }
    },
    {
      "@type": "PodcastEpisode",
      "@id": "https://www.floridacaraccident.lawyer/episode/1#episode",
      "name": "What Every Florida Driver Needs to Know in the First 72 Hours After a Crash",
      "description": "In the debut episode of The Eberst Advantage: Florida Accident & Injury Law Podcast, host Jonathon T. Eberst and co-host Alexis walk through exactly what an injured Floridian should do in the first 72 hours after a car accident - what to say (and not say) to the adjuster, why late-onset neck and back pain doesn't mean it's too late, how Florida's comparative fault rules actually work, and why insurance carriers open every file hoping you settle before you learn any of this. TODO: finalize title, description, and episode art from final recording and show notes.",
      "episodeNumber": 1,
      "url": "https://www.floridacaraccident.lawyer/episode/1",
      "image": "https://www.floridacaraccident.lawyer/cover.jpg",
      "partOfSeries": {
        "@id": "https://www.floridacaraccident.lawyer/#podcast"
      },
      "author": {
        "@id": "https://www.floridacaraccident.lawyer/#host"
      },
      "publisher": {
        "@id": "https://eberstlaw.com/#org"
      },
      "inLanguage": "en-US",
      "genre": [
        "Personal Injury Law",
        "Legal Education",
        "Florida Personal Injury Law"
      ],
      "keywords": [
        "The Eberst Law Firm",
        "Florida",
        "Personal Injury",
        "Car Accidents",
        "PIP Coverage"
      ],
      "isAccessibleForFree": true
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.floridacaraccident.lawyer/episode/1#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should a Florida driver do in the first 72 hours after a crash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In the debut episode, Jonathon T. Eberst and co-host Alexis walk through exactly what an injured Floridian should do after a crash: seek immediate medical attention to protect PIP coverage, document the scene, file a crash report, preserve physical and digital evidence, and avoid giving any recorded statement to an insurance adjuster before consulting a Florida-licensed attorney."
          }
        },
        {
          "@type": "Question",
          "name": "How does Florida's PIP system affect injured drivers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jonathon explains Florida's no-fault PIP system, the 14-day rule for seeking initial treatment, the permanent-injury threshold for non-economic damages, and the common mistakes that forfeit PIP benefits - including treating too late, failing to document symptoms at the first visit, or giving inconsistent statements between providers."
          }
        },
        {
          "@type": "Question",
          "name": "Why can't I handle the insurance claim myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alexis asks the question most injured Floridians ask themselves, and Jonathon answers: insurance adjusters have training, scripts, and reserves - and they track which claimants are unrepresented. Self-represented claims resolve for a fraction of represented claims on identical facts, not because the adjuster is dishonest but because leverage shifts the moment an attorney files suit."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reach The Eberst Law Firm after this episode?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact The Eberst Law Firm at eberstlaw.com or by calling (772) 225-4900. Consultations are free, cases are handled on contingency, and the firm serves clients from Stuart, Gainesville, and Daytona Beach."
          }
        }
      ]
    }
  ]
}

export function generateEpisodeSchema(episodeId: string, resolvedEpisode?: Episode | null) {
  const siteUrl = siteConfig.podcastUrl.replace(/\/$/, '')
  const slugPart = resolvedEpisode?.slug ?? episodeId
  const episodeUrl = `${siteUrl}/episode/${slugPart}`
  const graph = episodeSchema['@graph'].map((schemaNode) => {
    const node = schemaNode as Record<string, any>

    if (node['@type'] === 'WebPage') {
      return {
        ...node,
        '@id': `${episodeUrl}#webpage`,
        url: episodeUrl,
        name: resolvedEpisode ? `${resolvedEpisode.title} | ${siteConfig.podcastName}` : node.name,
        description: resolvedEpisode?.description ?? node.description,
        breadcrumb: node.breadcrumb
          ? {
              ...node.breadcrumb,
              itemListElement: node.breadcrumb.itemListElement.map((item: Record<string, any>) => (
                item.position === 3
                  ? { ...item, name: resolvedEpisode?.title ?? item.name, item: episodeUrl }
                  : item
              )),
            }
          : node.breadcrumb,
      }
    }

    if (node['@type'] === 'PodcastEpisode') {
      return {
        ...node,
        '@id': `${episodeUrl}#episode`,
        name: resolvedEpisode?.title ?? node.name,
        description: resolvedEpisode?.description ?? node.description,
        episodeNumber: resolvedEpisode?.number ?? node.episodeNumber,
        url: episodeUrl,
        duration: resolvedEpisode ? `PT${resolvedEpisode.duration.replace(':', 'H').replace(':', 'M')}S` : node.duration,
        associatedMedia: resolvedEpisode?.audioUrl
          ? {
              '@type': 'MediaObject',
              contentUrl: resolvedEpisode.audioUrl,
              encodingFormat: resolvedEpisode.audioType || 'audio/mpeg',
            }
          : node.associatedMedia,
      }
    }

    return node
  })

  return { ...episodeSchema, '@graph': graph }
}

interface V1EpisodePageProps {
  episodeId: string
  episode?: Episode | null
  allEpisodes?: Episode[]
  transcript?: TranscriptSegment[]
}

const V1EpisodePage = ({ episodeId, episode: rssEpisode, allEpisodes, transcript }: V1EpisodePageProps) => {
  const schema = generateEpisodeSchema(episodeId, rssEpisode)

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header variant="light" />

      <main className="pt-[6rem]">
        <EpisodeHero episode={rssEpisode} />
        <EpisodeContent episode={rssEpisode} transcript={transcript} />
        <OtherEpisodes episodes={allEpisodes} />
        <FAQ />
      </main>

      <Footer episodes={allEpisodes} />
    </div>
  )
}

export default V1EpisodePage
