export interface CVData {
  id?: string
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
  languages?: Language[]
  projects?: Project[]
  certifications?: Certification[]
  template?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface PersonalInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  location: string
  summary: string
  photo?: string
  website?: string
  linkedin?: string
  github?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  location?: string
  achievements?: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  field?: string
  startDate: string
  endDate?: string
  current: boolean
  gpa?: string
  description?: string
  location?: string
}

export interface Skill {
  id: string
  name: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  category?: string
}

export interface Language {
  id: string
  name: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Native'
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  url?: string
  github?: string
  startDate?: string
  endDate?: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  url?: string
  description?: string
}

export interface CVTemplate {
  id: string
  name: string
  description: string
  preview: string
  category: 'modern' | 'classic' | 'creative' | 'minimal'
  isPremium: boolean
}
