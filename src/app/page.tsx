import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const templates = [
  {
    id: 'modern',
    name: 'Modern Template',
    description: 'Clean and professional design with a modern touch',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg'
  },
  {
    id: 'creative',
    name: 'Creative Template',
    description: 'Stand out with a unique and creative layout',
    image: 'https://images.pexels.com/photos/590037/pexels-photo-590037.jpeg'
  },
  {
    id: 'minimal',
    name: 'Minimal Template',
    description: 'Simple and elegant design focusing on content',
    image: 'https://images.pexels.com/photos/590014/pexels-photo-590014.jpeg'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Create Your Professional CV in Minutes
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Choose from our professionally designed templates and customize your CV with our easy-to-use editor.
          </p>
        </div>
      </div>

      {/* Templates Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Choose Your Template
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map(template => (
            <Link 
              key={template.id} 
              href={`/editor?template=${template.id}`}
              className="transform transition-transform hover:scale-105"
            >
              <Card className="h-full">
                <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{template.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{template.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Intuitive editor with real-time preview</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Export to PDF</h3>
              <p className="text-gray-600">Download your CV in professional PDF format</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Personalize your CV to match your style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}