export interface WishlistItem {
  name: string
  description: string
  url?: string
}

export interface WishlistCategory {
  category: string
  items: WishlistItem[]
}

export const wishlist: WishlistCategory[] = [
  {
    category: 'Books',
    items: [
      { name: 'Designing Data-Intensive Applications', description: 'Martin Kleppmann', url: 'https://amzn.to/example' },
      { name: 'The Pragmatic Programmer', description: 'David Thomas & Andrew Hunt' },
      { name: 'Clean Architecture', description: 'Robert C. Martin' }
    ]
  },
  {
    category: 'Gear',
    items: [
      { name: 'HHKB Professional', description: 'Topre mechanical keyboard' },
      { name: 'LG UltraFine 5K', description: '27-inch display' },
      { name: 'AirPods Max', description: 'Noise-cancelling headphones' }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Raspberry Pi 5', description: 'For homelab experiments' },
      { name: 'Synology NAS', description: 'Network-attached storage' },
      { name: 'Kindle Scribe', description: 'For reading and note-taking' }
    ]
  },
  {
    category: 'Learning',
    items: [
      { name: 'Rust', description: 'Systems programming, memory safety without GC' },
      { name: 'Go', description: 'Concurrency, building CLI tools and APIs' },
      { name: 'Machine Learning', description: 'PyTorch, transformers, and model fine-tuning' },
      { name: 'System Design', description: 'Distributed systems, scalability patterns' },
      { name: 'Elixir', description: 'Functional programming, Phoenix framework' },
      { name: 'Kubernetes', description: 'Container orchestration, deployment' }
    ]
  }
]
