import { Metadata } from 'next'
import V1AuthorPage from '@/themes/v1/pages/V1AuthorPage'
import { authorProfiles, siteConfig } from '@/data/siteData'

export async function generateStaticParams() {
  return Object.keys(authorProfiles).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const author = authorProfiles[slug]
  if (!author) return { title: 'Author Not Found' }

  const canonicalPath = `/author/${slug}`

  return {
    title: `${author.name} - ${author.title}`,
    description: author.bio[0],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${author.name} - ${author.title}`,
      description: author.bio[0],
      url: `${siteConfig.podcastUrl}${canonicalPath}`,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <V1AuthorPage slug={slug} />
}
