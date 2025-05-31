'use client'

import { useState } from 'react'
import { useCVData } from '@/hooks/useCVData'
import { CVForm } from './CVForm'
import { CVPreview } from './CVPreview'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Download, Eye, Edit, RotateCcw, FileText } from 'lucide-react'

export function CVBuilder() {
  const [activeView, setActiveView] = useState<'edit' | 'preview'>('edit')
  const cvDataHook = useCVData()

  const handleDownloadPDF = async () => {
    // PDF export functionality will be added later
    alert('PDF export feature coming soon!')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">CV Creator</h1>
            </div>
            
            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveView('edit')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeView === 'edit'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Edit size={16} className="mr-2 inline" />
                  Edit
                </button>
                <button
                  onClick={() => setActiveView('preview')}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeView === 'preview'
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Eye size={16} className="mr-2 inline" />
                  Preview
                </button>
              </div>

              {/* Action Buttons */}
              <Button
                onClick={cvDataHook.loadSampleData}
                variant="outline"
                size="sm"
              >
                Load Sample
              </Button>
              
              <Button
                onClick={cvDataHook.resetCV}
                variant="outline"
                size="sm"
              >
                <RotateCcw size={16} className="mr-2" />
                Reset
              </Button>
              
              <Button
                onClick={handleDownloadPDF}
                variant="primary"
                size="sm"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeView === 'edit' ? (
          /* Edit View - Split Layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Edit Your CV</span>
                    <Button
                      onClick={() => setActiveView('preview')}
                      variant="outline"
                      size="sm"
                    >
                      <Eye size={16} className="mr-2" />
                      Preview
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Fill in your information below. Your changes are automatically saved locally.
                  </p>
                </CardContent>
              </Card>

              <CVForm
                data={cvDataHook.cvData}
                updatePersonalInfo={cvDataHook.updatePersonalInfo}
                addExperience={cvDataHook.addExperience}
                updateExperience={cvDataHook.updateExperience}
                removeExperience={cvDataHook.removeExperience}
                addEducation={cvDataHook.addEducation}
                updateEducation={cvDataHook.updateEducation}
                removeEducation={cvDataHook.removeEducation}
                addSkill={cvDataHook.addSkill}
                updateSkill={cvDataHook.updateSkill}
                removeSkill={cvDataHook.removeSkill}
              />
            </div>

            {/* Live Preview Section */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Live Preview</span>
                    <Button
                      onClick={handlePrint}
                      variant="outline"
                      size="sm"
                    >
                      Print
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="transform scale-75 origin-top-left" style={{ width: '133.33%' }}>
                      <CVPreview data={cvDataHook.cvData} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Preview View - Full Width */
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>CV Preview</span>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setActiveView('edit')}
                      variant="outline"
                      size="sm"
                    >
                      <Edit size={16} className="mr-2" />
                      Back to Edit
                    </Button>
                    <Button
                      onClick={handlePrint}
                      variant="outline"
                      size="sm"
                    >
                      Print
                    </Button>
                    <Button
                      onClick={handleDownloadPDF}
                      variant="primary"
                      size="sm"
                    >
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>

            <div className="flex justify-center">
              <CVPreview data={cvDataHook.cvData} />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p className="text-sm">
              © 2024 CV Creator. Build professional CVs with ease.
            </p>
            <p className="text-xs mt-2">
              Your data is stored locally in your browser. No information is sent to external servers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}