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
    slug: 'ai-app',
    title: 'AI Application Platform',
    description: 'A full-stack AI application with Laravel backend and Nuxt frontend.',
    longDescription: 'An AI application platform combining Laravel REST API with Nuxt.js frontend. Features AI model interactions through MCP protocol, conversation management, and configurable model parameters.',
    tags: ['Laravel', 'Nuxt', 'MCP', 'AI'],
    repoUrl: 'https://github.com/arifkiddocare/ai-app'
  },
  {
    slug: 'ai-app-frontend',
    title: 'Nuxt Frontend',
    description: 'Vue.js frontend for the AI application platform.',
    longDescription: 'A Nuxt.js frontend for interacting with AI models. Built with Vue 3, TypeScript, and a focus on responsiveness. Supports real-time streaming responses, conversation history, and a customizable prompt library.',
    tags: ['Nuxt', 'Vue 3', 'TypeScript'],
    repoUrl: 'https://github.com/arifkiddocare/ai-app-frontend'
  },
  {
    slug: 'oauth-server',
    title: 'OAuth2 Authorization Server',
    description: 'A complete OAuth2 server implementation.',
    longDescription: 'Built an OAuth2 authorization server in PHP following RFC 6749. Supports authorization code, implicit, password, and client credentials grant types. Includes refresh token rotation and scope-based access control.',
    tags: ['PHP', 'OAuth2', 'Security'],
    repoUrl: 'https://github.com/arifkiddocare/oauth-server'
  },
  {
    slug: 'web-scraper',
    title: 'Web Scraper Toolkit',
    description: 'A configurable web scraping tool with proxy rotation.',
    longDescription: 'A Python-based web scraping framework built on Scrapy. Handles large-scale data extraction with automatic proxy rotation, rate limiting, and retry logic. Supports multiple export formats.',
    tags: ['Python', 'Scrapy', 'PostgreSQL'],
    repoUrl: 'https://github.com/arifkiddocare/scraper'
  },
  {
    slug: 'laravel-rest-framework',
    title: 'REST API Framework',
    description: 'A Laravel-based REST API framework with authentication.',
    longDescription: 'A production-ready REST API framework built on Laravel. Features JWT authentication, automatic route documentation with OpenAPI/Swagger, request validation, rate limiting, and response caching.',
    tags: ['Laravel', 'PHP', 'REST', 'JWT'],
    repoUrl: 'https://github.com/arifkiddocare/rest-api'
  }
]
