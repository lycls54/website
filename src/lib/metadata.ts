import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/images/og-image.png',
  url = ''
}: SEOProps): Metadata {
  const appName = 'CV Creator'
  const fullTitle = title.includes(appName) ? title : {title} | {appName}

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: appName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image]
    },
    robots: {
      index: true,
      follow: true
    }
  }
}
