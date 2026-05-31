export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
}

export const posts: Post[] = [
  {
    slug: 'building-with-nuxt',
    title: 'Building with Nuxt 4',
    date: '2026-04-15',
    excerpt: 'Thoughts on the new Nuxt 4 architecture and how it changes the way we build Vue applications.',
    content: 'Nuxt 4 introduces a new directory structure and leverages the latest Vue 3 features. The app/ directory replaces the previous pages/ and components/ conventions, providing a cleaner separation of concerns.\n\nOne of the biggest improvements is the automatic imports and the new composables system. This reduces boilerplate significantly and makes the developer experience much smoother.\n\nThe new nitro server engine also brings better performance and more flexible deployment options. Overall, Nuxt 4 feels like a mature framework that strikes the right balance between convention and flexibility.',
    tags: ['Nuxt', 'Vue', 'JavaScript']
  },
  {
    slug: 'laravel-tips',
    title: 'Laravel Tips for Cleaner Code',
    date: '2026-03-01',
    excerpt: 'Practical tips for writing cleaner, more maintainable Laravel code.',
    content: 'After years of working with Laravel, I have collected a few patterns that consistently lead to cleaner code.\n\n1. Use actions instead of controllers for complex logic. Controllers should be thin — they should only handle HTTP concerns and delegate to action classes.\n\n2. Leverage Laravels pipeline for complex request processing. It allows you to chain operations cleanly.\n\n3. Use form requests for validation instead of inline validation in controllers. This keeps your controllers clean and makes validation reusable.\n\n4. Prefer resources over arrays for API responses. They give you control over the response structure and make transformations predictable.',
    tags: ['Laravel', 'PHP', 'Best Practices']
  },
  {
    slug: 'why-typescript',
    title: 'Why TypeScript Makes Me a Better Developer',
    date: '2026-01-20',
    excerpt: 'TypeScript is not just about types — it changes how you think about code architecture.',
    content: 'I started using TypeScript hesitantly, thinking it would slow me down. But over time, I realized it actually accelerates development.\n\nThe type system forces you to think about your data shapes upfront. This leads to better architecture decisions because you have to consider how different parts of your system interact.\n\nRefactoring becomes much safer. When I rename a property or change a function signature, the compiler tells me exactly what needs to be updated. No more hunting through the codebase for string references.\n\nTypeScript also serves as living documentation. The types tell you what a function expects and returns without having to read the implementation.',
    tags: ['TypeScript', 'JavaScript', 'Development']
  }
]
