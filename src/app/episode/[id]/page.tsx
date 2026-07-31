import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import V1EpisodePage from '@/themes/v1/pages/V1EpisodePage'
import { getAllEpisodes, getEpisodeByIdOrSlug, getEpisodeTranscript } from '@/lib/data'

export const revalidate = 3600
// Preserve older published episode URLs even when they are no longer present
// in the current RSS feed; the handler resolves them from static fallbacks.
export const dynamicParams = true

function metaDescription(value: string): string {
  const normalized = value.replace(/\s+/g, ' ').trim()
  if (normalized.length <= 160) return normalized
  const clipped = normalized.slice(0, 157)
  const lastSpace = clipped.lastIndexOf(' ')
  return `${clipped.slice(0, lastSpace > 120 ? lastSpace : 157).trimEnd()}...`
}

export async function generateStaticParams() {
  try {
    const episodes = await getAllEpisodes()
    return episodes.map(ep => ({ id: ep.slug ?? String(ep.id) }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const episode = await getEpisodeByIdOrSlug(id)

  if (!episode) {
    return { title: 'Episode Not Found' }
  }

  const description = metaDescription(episode.seoDescription || episode.description)
  const imageUrl = episode.logo || 'https://www.floridacaraccident.lawyer/Hero.jpg'
  const canonicalPath = `/episode/${episode.slug ?? episode.id}`

  return {
    title: episode.seoTitle ? { absolute: episode.seoTitle } : episode.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: episode.title,
      description,
      url: `https://www.floridacaraccident.lawyer${canonicalPath}`,
      siteName: 'The Eberst Advantage: Florida Accident & Injury Law Podcast',
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: episode.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: episode.title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const allEpisodes = await getAllEpisodes()
  const episode = await getEpisodeByIdOrSlug(id)
  if (!episode) notFound()

  const transcript = await getEpisodeTranscript(episode)

  return (
    <V1EpisodePage
      episodeId={id}
      episode={episode}
      allEpisodes={allEpisodes}
      transcript={transcript}
    />
  )
}
