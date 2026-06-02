<template>
  <div class="projects-page" :aria-busy="!loaded">
    <h1>Projects</h1>
    <div v-if="!loaded" class="list">
      <div v-for="n in 4" :key="`project-skeleton-${n}`" class="item skeleton-item">
        <SkeletonBlock width="52%" height="1.15rem" radius="999px" />
        <SkeletonBlock width="84%" height="0.9rem" radius="999px" class="desc-skeleton" />
      </div>
    </div>
    <div v-if="projects.length" class="list">
      <NuxtLink
        v-for="project in projects"
        :key="project.slug"
        :to="`/projects/${project.slug}`"
        class="item"
      >
        <span class="title">{{ project.title }}</span>
        <span class="desc">{{ project.description }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const projects = ref<Awaited<ReturnType<typeof api.getProjects>>>([])
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getProjects()
  if (data) projects.value = data
  loaded.value = true
})
useHead({ title: 'Projects' })
</script>

<style scoped>
.projects-page {
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

.list {
  border-top: 1px solid var(--border);
  transition: border-color 0.3s;
}

.item {
  display: block;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  transition: opacity 0.2s, border-color 0.3s;
}

.item:hover {
  opacity: 0.6;
}

.skeleton-item {
  display: block;
}

.desc-skeleton {
  margin-top: 0.55rem;
}

.title {
  display: block;
  font-family: 'Sora', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--item-title);
  margin-bottom: 0.25rem;
  transition: color 0.3s;
}

.desc {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  transition: color 0.3s;
}

@media (max-width: 600px) {
  .projects-page { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
}
</style>
