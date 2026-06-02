export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image?: string
  url?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'ai-app-frontend',
    title: 'AI App Frontend',
    description: 'Nuxt frontend for the AI app with conversations, prompt tools, and a photography-focused portfolio shell.',
    longDescription: 'Current front-end project for the AI app experience. Built with Nuxt, Vue, and TypeScript, it handles the portfolio UI, conversations, navigation, and content sections in a lightweight client.',
    tags: ['Nuxt', 'Vue', 'TypeScript'],
    repoUrl: 'https://github.com/arifkiddocare/ai-app-frontend',
  }
]
