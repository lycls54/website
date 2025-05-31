import { useState, useCallback } from 'react'
import { CVData, Experience, Education, Skill, Language, Project, Certification } from '@/types/cv'
import { useLocalStorage } from './useLocalStorage'
import { emptyCVData } from '@/data/sample-data'
import { generateId } from '@/lib/utils'

export function useCVData() {
  const [cvData, setCvData] = useLocalStorage<CVData>('cv-data', emptyCVData)

  // Personal Info
  const updatePersonalInfo = useCallback((info: Partial<CVData['personal']>) => {
    setCvData(prev => ({
      ...prev,
      personal: { ...prev.personal, ...info },
      updatedAt: new Date()
    }))
  }, [setCvData])

  // Experience
  const addExperience = useCallback(() => {
    const newExperience: Experience = {
      id: generateId(),
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      location: '',
      achievements: []
    }
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience],
      updatedAt: new Date()
    }))
  }, [setCvData])

  const updateExperience = useCallback((id: string, updates: Partial<Experience>) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, ...updates } : exp
      ),
      updatedAt: new Date()
    }))
  }, [setCvData])

  const removeExperience = useCallback((id: string) => {
    setCvData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id),
      updatedAt: new Date()
    }))
  }, [setCvData])

  // Education
  const addEducation = useCallback(() => {
    const newEducation: Education = {
      id: generateId(),
      degree: '',
      school: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      location: ''
    }
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, newEducation],
      updatedAt: new Date()
    }))
  }, [setCvData])

  const updateEducation = useCallback((id: string, updates: Partial<Education>) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, ...updates } : edu
      ),
      updatedAt: new Date()
    }))
  }, [setCvData])

  const removeEducation = useCallback((id: string) => {
    setCvData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id),
      updatedAt: new Date()
    }))
  }, [setCvData])

  // Skills
  const addSkill = useCallback(() => {
    const newSkill: Skill = {
      id: generateId(),
      name: '',
      level: 'Intermediate',
      category: ''
    }
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill],
      updatedAt: new Date()
    }))
  }, [setCvData])

  const updateSkill = useCallback((id: string, updates: Partial<Skill>) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.map(skill => 
        skill.id === id ? { ...skill, ...updates } : skill
      ),
      updatedAt: new Date()
    }))
  }, [setCvData])

  const removeSkill = useCallback((id: string) => {
    setCvData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id),
      updatedAt: new Date()
    }))
  }, [setCvData])

  // Reset CV
  const resetCV = useCallback(() => {
    setCvData(emptyCVData)
  }, [setCvData])

  // Load sample data
  const loadSampleData = useCallback(() => {
    const { sampleCVData } = require('@/data/sample-data')
    setCvData(sampleCVData)
  }, [setCvData])

  return {
    cvData,
    setCvData,
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
    resetCV,
    loadSampleData
  }
}