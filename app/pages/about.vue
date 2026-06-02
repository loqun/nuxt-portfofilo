<template>
  <div class="about" :aria-busy="!loaded">
    <h1>About</h1>
    <div v-if="!loaded" class="content">
      <SkeletonBlock width="100%" height="0.95rem" radius="999px" class="para-skeleton" />
      <SkeletonBlock width="94%" height="0.95rem" radius="999px" class="para-skeleton" />
      <SkeletonBlock width="86%" height="0.95rem" radius="999px" class="para-skeleton" />
      <SkeletonBlock width="78%" height="0.95rem" radius="999px" class="para-skeleton" />
    </div>
    <div v-else class="content">
      <p v-for="para in paragraphs" :key="para">{{ para }}</p>
    </div>
    <div v-if="!loaded" class="info">
      <div class="row">
        <SkeletonBlock width="3rem" height="0.8rem" radius="999px" class="label-skeleton" />
        <SkeletonBlock width="12rem" height="0.9rem" radius="999px" />
      </div>
      <div class="row">
        <SkeletonBlock width="3rem" height="0.8rem" radius="999px" class="label-skeleton" />
        <SkeletonBlock width="9rem" height="0.9rem" radius="999px" />
      </div>
    </div>
    <div v-else class="info">
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
const loaded = ref(false)

onMounted(async () => {
  about.value = await api.getAbout()
  loaded.value = true
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

.para-skeleton {
  margin-bottom: 1rem;
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

.label-skeleton {
  margin-right: 2rem;
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
