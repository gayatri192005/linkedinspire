export interface Session {
  id: number
  title: string
  speaker: string
  date: string
  description: string
}

export interface Speaker {
  name: string
  title: string
  bio: string
  image: string
  social: {
    linkedin?: string
    twitter?: string
  }
}

export interface CourseModule {
  id: number
  title: string
  duration: string
  topics: string[]
}

export interface FAQ {
  question: string
  answer: string
}
