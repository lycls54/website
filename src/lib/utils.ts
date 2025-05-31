import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

export function formatDateRange(startDate: string, endDate?: string, current?: boolean): string {
  const start = new Date(startDate).toLocaleDateString('en-US', { 
    month: 'short', 
    year: 'numeric' 
  })
  
  if (current) {
    return `${start} - Present`
  }
  
  if (endDate) {
    const end = new Date(endDate).toLocaleDateString('en-US', { 
      month: 'short', 
      year: 'numeric' 
    })
    return `${start} - ${end}`
  }
  
  return start
}
