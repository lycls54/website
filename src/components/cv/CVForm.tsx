'use client'

import { CVData } from '@/types/cv'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { User, Briefcase, GraduationCap, Code, Plus, Trash2 } from 'lucide-react'

interface CVFormProps {
  data: CVData
  updatePersonalInfo: (info: Partial<CVData['personal']>) => void
  addExperience: () => void
  updateExperience: (id: string, updates: any) => void
  removeExperience: (id: string) => void
  addEducation: () => void
  updateEducation: (id: string, updates: any) => void
  removeEducation: (id: string) => void
  addSkill: () => void
  updateSkill: (id: string, updates: any) => void
  removeSkill: (id: string) => void
}

export function CVForm({
  data,
  updatePersonalInfo,
  addExperience,
  updateExperience,
  removeExperience,
  addEducation,
  updateEducation,
  removeEducation,
  addSkill,
  updateSkill,
  removeSkill,
}: CVFormProps) {
  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User size={20} />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={data.personal.firstName}
              onChange={(e) => updatePersonalInfo({ firstName: e.target.value })}
              placeholder="John"
            />
            <Input
              label="Last Name"
              value={data.personal.lastName}
              onChange={(e) => updatePersonalInfo({ lastName: e.target.value })}
              placeholder="Doe"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              value={data.personal.email}
              onChange={(e) => updatePersonalInfo({ email: e.target.value })}
              placeholder="john.doe@email.com"
            />
            <Input
              label="Phone"
              value={data.personal.phone}
              onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          
          <Input
            label="Location"
            value={data.personal.location}
            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            placeholder="New York, NY"
          />
          
          <Textarea
            label="Professional Summary"
            value={data.personal.summary}
            onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
            placeholder="Brief description of your professional background and goals..."
            rows={4}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Website (Optional)"
              value={data.personal.website || ''}
              onChange={(e) => updatePersonalInfo({ website: e.target.value })}
              placeholder="https://yourwebsite.com"
            />
            <Input
              label="LinkedIn (Optional)"
              value={data.personal.linkedin || ''}
              onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Briefcase size={20} />
              Work Experience
            </CardTitle>
            <Button onClick={addExperience} size="sm" variant="outline">
              <Plus size={16} className="mr-2" />
              Add Experience
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Experience #{index + 1}</h4>
                <Button
                  onClick={() => removeExperience(exp.id)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Job Title"
                  value={exp.title}
                  onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
                  placeholder="Software Developer"
                />
                <Input
                  label="Company"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                  placeholder="Tech Company Inc."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="Start Date"
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                />
                <Input
                  label="End Date"
                  type="month"
                  value={exp.endDate || ''}
                  onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                  disabled={exp.current}
                />
                <div className="flex items-center pt-8">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, { 
                        current: e.target.checked,
                        endDate: e.target.checked ? '' : exp.endDate
                      })}
                      className="rounded"
                    />
                    <span className="text-sm">Current Position</span>
                  </label>
                </div>
              </div>
              
              <Input
                label="Location"
                value={exp.location || ''}
                onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                placeholder="New York, NY"
              />
              
              <Textarea
                label="Description"
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                placeholder="Describe your role and responsibilities..."
                rows={3}
              />
            </div>
          ))}
          
          {data.experience.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
              <p>No work experience added yet.</p>
              <p className="text-sm">Click "Add Experience" to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <GraduationCap size={20} />
              Education
            </CardTitle>
            <Button onClick={addEducation} size="sm" variant="outline">
              <Plus size={16} className="mr-2" />
              Add Education
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.education.map((edu, index) => (
            <div key={edu.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Education #{index + 1}</h4>
                <Button
                  onClick={() => removeEducation(edu.id)}
                  size="sm"
                  variant="ghost"
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Degree"
                  value={edu.degree}
                  onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                  placeholder="Bachelor of Science"
                />
                <Input
                  label="School"
                  value={edu.school}
                  onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
                  placeholder="University Name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Field of Study"
                  value={edu.field || ''}
                  onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                  placeholder="Computer Science"
                />
                <Input
                  label="Location"
                  value={edu.location || ''}
                  onChange={(e) => updateEducation(edu.id, { location: e.target.value })}
                  placeholder="Boston, MA"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  label="Start Date"
                  type="month"
                  value={edu.startDate}
                  onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                />
                <Input
                  label="End Date"
                  type="month"
                  value={edu.endDate || ''}
                  onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                  disabled={edu.current}
                />
                <div className="flex items-center pt-8">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={edu.current}
                      onChange={(e) => updateEducation(edu.id, { 
                        current: e.target.checked,
                        endDate: e.target.checked ? '' : edu.endDate
                      })}
                      className="rounded"
                    />
                    <span className="text-sm">Currently Studying</span>
                  </label>
                </div>
              </div>
            </div>
          ))}
          
          {data.education.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <GraduationCap size={48} className="mx-auto mb-4 opacity-50" />
              <p>No education added yet.</p>
              <p className="text-sm">Click "Add Education" to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Code size={20} />
              Skills
            </CardTitle>
            <Button onClick={addSkill} size="sm" variant="outline">
              <Plus size={16} className="mr-2" />
              Add Skill
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center gap-4 p-3 border rounded-lg">
              <Input
                value={skill.name}
                onChange={(e) => updateSkill(skill.id, { name: e.target.value })}
                placeholder="Skill name"
                className="flex-1"
              />
              <select
                value={skill.level || 'Intermediate'}
                onChange={(e) => updateSkill(skill.id, { level: e.target.value as any })}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
              <Button
                onClick={() => removeSkill(skill.id)}
                size="sm"
                variant="ghost"
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          ))}
          
          {data.skills.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Code size={48} className="mx-auto mb-4 opacity-50" />
              <p>No skills added yet.</p>
              <p className="text-sm">Click "Add Skill" to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}