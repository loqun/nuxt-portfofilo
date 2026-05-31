<template>
  <section class="available-soon">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <NuxtLink v-if="to" :to="to" class="action">
      {{ actionLabel }}
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  message?: string
  to?: string
  actionLabel?: string
}>(), {
  eyebrow: 'Available soon',
  title: 'Content is on the way.',
  message: 'This section is not available right now. Please check back soon.',
  to: '',
  actionLabel: 'Back home',
})
</script>

<style scoped>
.available-soon {
  max-width: 620px;
  margin: 0 auto;
  padding: 3rem 2rem;
  border: 1px solid var(--border);
  border-radius: 18px;
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--accent) 12%, transparent), transparent 36%),
    color-mix(in srgb, var(--bg) 88%, #fff);
  text-align: center;
}

.eyebrow {
  font-family: 'Sora', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

h2 {
  font-family: 'Sora', sans-serif;
  font-size: 1.75rem;
  line-height: 1.2;
  color: var(--heading);
  margin-bottom: 0.75rem;
}

p {
  color: var(--text-tertiary);
  line-height: 1.7;
}

.action {
  display: inline-block;
  margin-top: 1.5rem;
  font-family: 'Sora', sans-serif;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
}

.action:hover {
  text-decoration: none;
}

@media (max-width: 600px) {
  .available-soon {
    padding: 2rem 1.25rem;
  }

  h2 {
    font-size: 1.375rem;
  }
}
</style>
