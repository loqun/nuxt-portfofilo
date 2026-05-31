<template>
  <NuxtLink :to="`/projects/${project.slug}`" class="project-card">
    <div class="card-image">
      <img v-if="project.image" :src="resolveBackendUrl(project.image)" :alt="project.title" loading="lazy" />
      <div class="card-overlay"></div>
    </div>
    <div class="card-content">
      <div class="card-tags">
        <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="badge">
          {{ tag }}
        </span>
      </div>
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-description">{{ project.description }}</p>
      <span class="card-link">
        View Project
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

defineProps<{
  project: Project
}>()

const { resolveBackendUrl } = useBackendUrl()
</script>

<style scoped>
.project-card {
  display: block;
  background: var(--color-background);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  overflow: hidden;
  text-decoration: none;
  transition: all var(--transition-base);
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-border-light);
}

.card-image {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.3), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.card-content {
  padding: var(--space-6);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.card-tags .badge {
  font-size: 0.7rem;
  padding: 2px 8px;
}

.card-title {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.card-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: var(--space-4);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-accent);
}

.card-link svg {
  transition: transform var(--transition-fast);
}

.project-card:hover .card-link svg {
  transform: translateX(4px);
}
</style>
