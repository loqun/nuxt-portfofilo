<template>
  <div class="project-page" v-if="!loaded" :aria-busy="true">
    <NuxtLink to="/projects" class="back">&larr; Back</NuxtLink>
    <SkeletonBlock width="58%" height="3rem" radius="1rem" class="title-skeleton" />
    <SkeletonBlock width="84%" height="1.2rem" radius="999px" class="desc-skeleton" />
    <SkeletonBlock width="100%" height="0.95rem" radius="999px" class="para-skeleton" />
    <SkeletonBlock width="96%" height="0.95rem" radius="999px" class="para-skeleton" />
    <SkeletonBlock width="88%" height="0.95rem" radius="999px" class="para-skeleton" />
    <div class="tags">
      <SkeletonBlock v-for="n in 3" :key="`tag-skeleton-${n}`" width="5rem" height="1.2rem" radius="999px" />
    </div>
    <div class="links">
      <SkeletonBlock width="5.5rem" height="0.9rem" radius="999px" />
      <SkeletonBlock width="4.5rem" height="0.9rem" radius="999px" />
    </div>
  </div>
  <div class="project-page" v-else-if="project">
    <NuxtLink to="/projects" class="back">&larr; Back</NuxtLink>
    <h1>{{ project.title }}</h1>
    <p class="desc">{{ project.description }}</p>
    <p class="long">{{ project.longDescription }}</p>
    <div class="tags">
      <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
    </div>
    <div class="links" v-if="project.url || project.repoUrl">
      <a v-if="project.url" :href="project.url" target="_blank" rel="noopener">Live site &rarr;</a>
      <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" rel="noopener">Source &rarr;</a>
    </div>
  </div>
  <div v-else-if="loaded" class="project-page">
    <p class="not-found">Project not found.</p>
    <NuxtLink to="/projects" class="back">&larr; Back to projects</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const route = useRoute()
const project = ref<Awaited<ReturnType<typeof api.getProject>>>(null)
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getProject(route.params.slug as string)
  if (data) project.value = data
  loaded.value = true
})
useHead({ title: computed(() => project.value ? project.value.title : 'Not Found') })
</script>

<style scoped>
.project-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.back {
  font-size: 0.8125rem;
  color: var(--accent-light);
  text-decoration: none;
  display: inline-block;
  margin-bottom: 2rem;
  transition: color 0.2s;
}

.back:hover {
  color: var(--accent);
}

.title-skeleton,
.desc-skeleton,
.para-skeleton {
  margin-bottom: 1rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
  transition: color 0.3s;
}

.long {
  font-size: 0.9375rem;
  color: var(--text-tertiary);
  line-height: 1.8;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tags span {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: var(--tag-bg);
  color: var(--tag-text);
  border-radius: 2px;
  transition: all 0.3s;
}

.links {
  display: flex;
  gap: 2rem;
}

.links a {
  font-size: 0.8125rem;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.3s;
}

.links a:hover {
  text-decoration: none;
}

.not-found {
  color: var(--text-tertiary);
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .project-page { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
}
</style>
