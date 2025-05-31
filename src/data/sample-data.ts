import { CVData } from '@/types/cv'
import { generateId } from '@/lib/utils'

export const sampleCVData: CVData = {
  id: generateId(),
  personal: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    summary: 'Experienced software developer with 5+ years of expertise in React, Node.js, and TypeScript. Passionate about creating scalable web applications and leading development teams.',
    website: 'https://johndoe.dev',
    linkedin: 'https://linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe'
  },
  experience: [
    {
      id: generateId(),
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      startDate: '2022-01',
      current: true,
      endDate: '',
      description: 'Lead frontend development for enterprise web applications serving 100k+ users.',
      location: 'New York, NY',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led a team of 4 developers in agile development process',
        'Implemented automated testing that reduced bugs by 60%'
      ]
    },
    {
      id: generateId(),
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: 'Developed responsive web applications using React and TypeScript.',
      location: 'San Francisco, CA',
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Collaborated with designers to implement pixel-perfect UIs'
      ]
    }
  ],
  education: [
    {
      id: generateId(),
      degree: 'Bachelor of Science',
      school: 'University of Technology',
      field: 'Computer Science',
      startDate: '2016-09',
      endDate: '2020-05',
      current: false,
      gpa: '3.8',
      location: 'Boston, MA'
    }
  ],
  skills: [
    { id: generateId(), name: 'React', level: 'Expert', category: 'Frontend' },
    { id: generateId(), name: 'TypeScript', level: 'Advanced', category: 'Programming' },
    { id: generateId(), name: 'Node.js', level: 'Advanced', category: 'Backend' },
    { id: generateId(), name: 'Next.js', level: 'Advanced', category: 'Frontend' },
    { id: generateId(), name: 'Tailwind CSS', level: 'Advanced', category: 'Frontend' },
    { id: generateId(), name: 'PostgreSQL', level: 'Intermediate', category: 'Database' }
  ],
  languages: [
    { id: generateId(), name: 'English', level: 'Native' },
    { id: generateId(), name: 'Spanish', level: 'B2' }
  ],
  projects: [
    {
      id: generateId(),
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      url: 'https://ecommerce-demo.com',
      github: 'https://github.com/johndoe/ecommerce',
      startDate: '2023-01',
      endDate: '2023-06'
    }
  ],
  template: 'modern',
  createdAt: new Date(),
  updatedAt: new Date()
}

export const emptyCVData: CVData = {
  personal: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
  projects: [],
  certifications: []
}