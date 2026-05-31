<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <span class="hero-greeting">{{ greeting }}</span>
        <h1 class="hero-title">{{ name }}</h1>
        <p class="hero-subtitle">{{ title }}</p>
        <p class="hero-description">{{ shortBio }}</p>
        <div class="hero-actions">
          <NuxtLink to="/projects" class="btn btn-primary">
            View Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-outline">
            Get in Touch
          </NuxtLink>
        </div>
      </div>
      <div class="hero-image">
        <div class="avatar-wrapper">
          <img :src="avatar" :alt="name" />
        </div>
      </div>
    </div>
    <div class="hero-bg"></div>
  </section>
</template>

<script setup lang="ts">
import { about } from '~/data/about'

const name = about.name
const title = about.title
const shortBio = about.shortBio
const avatar = about.avatar

const greeting = computed(() => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: var(--space-20) 0;
}

.hero-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background) 100%);
  z-index: -1;
  border-radius: 0 0 0 50%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--space-16);
  align-items: center;
}

.hero-greeting {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: var(--space-4);
}

.hero-title {
  font-size: var(--font-size-6xl);
  line-height: 1.1;
  margin-bottom: var(--space-4);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  margin-bottom: var(--space-6);
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 500px;
  margin-bottom: var(--space-8);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
}

.hero-image {
  display: flex;
  justify-content: center;
}

.avatar-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
}

.avatar-wrapper::before {
  content: '';
  position: absolute;
  inset: -10px;
  border: 3px solid var(--color-accent);
  border-radius: 50%;
  opacity: 0.3;
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--color-background);
  box-shadow: var(--shadow-xl);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-image {
    order: -1;
  }

  .avatar-wrapper {
    width: 250px;
    height: 250px;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: auto;
    padding: var(--space-12) 0;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }

  .avatar-wrapper {
    width: 200px;
    height: 200px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
  }
}
</style>