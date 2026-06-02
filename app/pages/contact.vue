<template>
  <div class="contact" :aria-busy="!loaded">
    <h1>Contact</h1>
    <p class="intro">Get in touch — I'd love to hear from you.</p>
    <SkeletonBlock v-if="!loaded" width="14rem" height="1.2rem" radius="999px" class="email-skeleton" />
    <a v-else :href="`mailto:${email}`" class="email">{{ email }}</a>
    <div v-if="!loaded" class="links">
      <SkeletonBlock width="4.5rem" height="0.8rem" radius="999px" />
      <SkeletonBlock width="4.8rem" height="0.8rem" radius="999px" />
    </div>
    <div v-else class="links">
      <a :href="social.github" target="_blank" rel="noopener">GitHub</a>
      <a :href="social.linkedin" target="_blank" rel="noopener">LinkedIn</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const about = ref<Awaited<ReturnType<typeof api.getAbout>>>(null)
const loaded = ref(false)

onMounted(async () => {
  about.value = await api.getAbout()
  loaded.value = true
})

const email = computed(() => about.value?.email ?? '')
const social = computed(() => about.value?.social ?? { github: '', linkedin: '' })
useHead({ title: 'Contact' })
</script>

<style scoped>
.contact {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

.intro {
  font-size: 0.9375rem;
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.email-skeleton {
  margin-bottom: 2rem;
}

.email {
  display: inline-block;
  font-family: 'Sora', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 4px;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.email:hover {
  text-decoration: none;
}

.links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  min-height: 1rem;
}

.links a {
  font-size: 0.8125rem;
  color: var(--accent-light);
  text-decoration: none;
  transition: color 0.2s;
}

.links a:hover {
  color: var(--accent);
}

@media (max-width: 600px) {
  .contact { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
  .email { font-size: 1rem; }
}
</style>
