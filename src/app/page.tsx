'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const templates = [
  {
    id: 'modern',
    name: 'Modern Template',
    description: 'Clean and professional design with a modern touch',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg',
    popular: true
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNCA0LTEuNzkgNC00LTEuNzktNC00LTR6bTAgNmMtMS4xIDAtMi0uOS0yLTJzLjktMiAyLTIgMiAuOSAyIDItLjkgMi0yIDJ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in">
              Create Your Professional CV
              <span className="block text-primary-200 mt-2">in Minutes</span>
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8 animate-slide-up">
              Choose from our professionally designed templates and build your perfect CV with our intuitive editor.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-primary-50 font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 animate-bounce-in"
              onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Choose Your Template
            </Button>
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 mb-4">
            Professional CV Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our collection of professionally designed templates to kickstart your career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map(template => (
            <Link 
              key={template.id} 
              href={`/editor?template=${template.id}`}
              className="group perspective-1000"
            >
              <Card className="h-full transform-gpu transition-all duration-300 hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm bg-white/90 group-hover:rotate-y-2">
                <div className="relative aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {template.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                      Popular
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary-600 transition-colors">
                    {template.name}
                  </CardTitle>
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
      <div className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 mb-4">
              Why Choose Our CV Builder?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create a professional CV in minutes with our easy-to-use tools and features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "Easy to Use",
                description: "Intuitive editor with real-time preview. No design skills needed."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                ),
                title: "Export to PDF",
                description: "Download your CV in professional PDF format, ready to send."
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                ),
                title: "Customizable",
                description: "Personalize every aspect of your CV to match your style."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Create Your Professional CV?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto animate-slide-up">
            Join thousands of job seekers who have successfully created their CV with our platform.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 animate-bounce-in"
            onClick={() => document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  )
}