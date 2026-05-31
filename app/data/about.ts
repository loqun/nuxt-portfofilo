export interface AboutData {
  name: string
  tagline: string
  bio: string
  email: string
  social: {
    github?: string
    linkedin?: string
  }
}

export const about: AboutData = {
  name: 'Arif Muftalib',
  tagline: 'I build tools for the web.',
  bio: 'Developer based in Earth. I work with Laravel and Vue to create clean, functional applications. Currently focused on AI integration and developer tooling.',
  email: 'arifmuhd441@gmail.com',
  social: {
    github: 'https://github.com/loqun',
    linkedin: 'https://www.linkedin.com/in/muhamad-arif-abdul-muftalib-787a3a287/'
  }
}
