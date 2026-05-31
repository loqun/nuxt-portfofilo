<template>
  <div class="about">
    <h1>About</h1>
    <div class="content">
      <p v-for="para in paragraphs" :key="para">{{ para }}</p>
    </div>
    <div class="info">
      <div class="row">
        <span class="label">Email</span>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </div>
      <div class="row">
        <span class="label">GitHub</span>
        <a :href="social.github" target="_blank" rel="noopener">loqun</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const about = ref<Awaited<ReturnType<typeof api.getAbout>>>(null)

onMounted(async () => {
  about.value = await api.getAbout()
})

const paragraphs = computed(() => about.value?.bio.split('\n\n') ?? [])
const email = computed(() => about.value?.email ?? '')
const social = computed(() => about.value?.social ?? { github: '', linkedin: '' })
useHead({ title: 'About' })
</script>

<style scoped>
.about {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.content p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

.info {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  transition: border-color 0.3s;
}

.row {
  display: flex;
  gap: 2rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color 0.3s;
}

.label {
  font-size: 0.75rem;
  color: var(--text-muted);
  width: 60px;
  transition: color 0.3s;
}

.row a {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.3s;
}

.row a:hover {
  text-decoration: none;
}

@media (max-width: 600px) {
  .about { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
}
</style>
