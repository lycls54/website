import { CVBuilder } from '@/components/cv/CVBuilder'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV Creator - Build Your Professional Resume',
  description: 'Create a professional CV/resume with our easy-to-use builder. Modern templates, real-time preview, and PDF export.',
  keywords: ['CV builder', 'resume maker', 'professional CV', 'resume template', 'job application', 'career'],
  openGraph: {
    title: 'CV Creator - Build Your Professional Resume',
    description: 'Create a professional CV/resume with our easy-to-use builder.',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <CVBuilder />
    </div>
  )
}