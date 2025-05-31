'use client'

import { CVData } from '@/types/cv'
import { formatDateRange } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/Card'
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react'

interface CVPreviewProps {
  data: CVData
}

export function CVPreview({ data }: CVPreviewProps) {
  const { personal, experience, education, skills, languages, projects } = data

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg print-friendly">
      {/* Header */}
      <div className="bg-primary-600 text-white p-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {personal.firstName} {personal.lastName}
            </h1>
            {personal.summary && (
              <p className="text-primary-100 text-lg leading-relaxed max-w-2xl">
                {personal.summary}
              </p>
            )}
          </div>
          {personal.photo && (
            <img
              src={personal.photo}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          )}
        </div>
        
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          {personal.email && (
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{personal.email}</span>
            </div>
          )}
          {personal.phone && (
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>{personal.phone}</span>
            </div>
          )}
          {personal.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personal.location}</span>
            </div>
          )}
          {personal.website && (
            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>{personal.website}</span>
            </div>
          )}
          {personal.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </div>
          )}
          {personal.github && (
            <div className="flex items-center gap-2">
              <Github size={16} />
              <span>GitHub</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Experience */}
        {experience.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="cv-item print-avoid-break">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">{exp.title}</h3>
                      <p className="cv-item-subtitle">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="cv-item-date">
                      {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                    </span>
                  </div>
                  {exp.description && (
                    <p className="cv-item-description mt-2">{exp.description}</p>
                  )}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-700">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="cv-item print-avoid-break">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">{edu.degree}</h3>
                      <p className="cv-item-subtitle">
                        {edu.school} • {edu.field} • {edu.location}
                        {edu.gpa && ` • GPA: ${edu.gpa}`}
                      </p>
                    </div>
                    <span className="cv-item-date">
                      {formatDateRange(edu.startDate, edu.endDate, edu.current)}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="cv-item-description mt-2">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill.id} className="skill-tag">
                  {skill.name}
                  {skill.level && (
                    <span className="ml-1 text-xs opacity-75">
                      ({skill.level})
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Projects</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="cv-item print-avoid-break">
                  <div className="cv-item-header">
                    <div>
                      <h3 className="cv-item-title">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.startDate && (
                      <span className="cv-item-date">
                        {formatDateRange(project.startDate, project.endDate)}
                      </span>
                    )}
                  </div>
                  <p className="cv-item-description mt-2">{project.description}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    {project.url && (
                      <a href={project.url} className="text-primary-600 hover:underline">
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} className="text-primary-600 hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div className="cv-section">
            <h2 className="cv-section-title">Languages</h2>
            <div className="flex flex-wrap gap-4">
              {languages.map((language) => (
                <div key={language.id} className="flex items-center">
                  <span className="font-medium">{language.name}</span>
                  <span className="language-level">({language.level})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}