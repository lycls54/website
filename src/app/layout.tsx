import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CV Creator - Professional Resume Builder',
  description: 'Create professional CVs and resumes with our easy-to-use online builder. Choose from modern templates and export to PDF.',
  keywords: ['CV builder', 'resume maker', 'professional CV', 'resume template', 'job application'],
  authors: [{ name: 'CV Creator Team' }],
  creator: 'CV Creator',
  publisher: 'CV Creator',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'CV Creator - Professional Resume Builder',
    description: 'Create professional CVs and resumes with our easy-to-use online builder.',
    siteName: 'CV Creator',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CV Creator - Professional Resume Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CV Creator - Professional Resume Builder',
    description: 'Create professional CVs and resumes with our easy-to-use online builder.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}