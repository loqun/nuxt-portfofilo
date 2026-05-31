<template>
  <div class="post-page" v-if="post">
    <NuxtLink to="/blog" class="back">&larr; Back</NuxtLink>
    <h1>{{ post.title }}</h1>
    <div class="meta">
      <span>{{ post.date }}</span>
      <span v-for="tag in post.tags" :key="tag">{{ tag }}</span>
    </div>
    <div class="content" v-html="html"></div>
  </div>
  <div v-else-if="loaded" class="post-page">
    <p class="not-found">Post not found.</p>
    <NuxtLink to="/blog" class="back">&larr; Back to blog</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const route = useRoute()
const post = ref<Awaited<ReturnType<typeof api.getPost>>>(null)
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getPost(route.params.slug as string)
  if (data) post.value = data
  loaded.value = true
})

const html = computed(() => {
  if (!post.value) return ''
  return post.value.content
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('')
})

useHead({ title: computed(() => post.value ? post.value.title : 'Not Found') })
</script>

<style scoped>
.post-page {
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

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 1rem;
  line-height: 1.2;
  transition: color 0.3s;
}

.meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  transition: color 0.3s;
}

.content p {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

.not-found {
  color: var(--text-tertiary);
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .post-page { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
}
</style>
