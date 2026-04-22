import type { Document } from '@contentful/rich-text-types'

export interface Post {
  id: string
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  coverImage: string
  body: Document
  readingTime: number
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  target: 'particular' | 'empresa'
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface Review {
  author: string
  rating: number
  text: string
  source: 'google'
}
