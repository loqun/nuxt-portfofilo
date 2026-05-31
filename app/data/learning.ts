export interface LearningItem {
  name: string
  description: string
  status: 'Learning' | 'Exploring' | 'Next'
}

export const learning: LearningItem[] = [
  { name: 'Rust', description: 'Systems programming, memory safety without GC', status: 'Learning' },
  { name: 'Go', description: 'Concurrency, building CLI tools and APIs', status: 'Learning' },
  { name: 'Machine Learning', description: 'PyTorch, transformers, and model fine-tuning', status: 'Exploring' },
  { name: 'System Design', description: 'Distributed systems, scalability patterns', status: 'Reading' },
  { name: 'Elixir', description: 'Functional programming, Phoenix framework', status: 'Next' },
  { name: 'Kubernetes', description: 'Container orchestration, deployment', status: 'Next' }
]
