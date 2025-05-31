import { CVBuilder } from '@/components/cv/CVBuilder'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV Creator - Build Your Professional Resume',
  description: 'Create a professional CV/resume with our easy-to-use builder. Modern templates, real-time preview, and PDF export.',
}

export default function EditorPage() {
  return (
    <div className="min-h-screen">
      <CVBuilder />
    </div>
  )
}