<template>
  <div class="blog-page">
    <h1>Blog</h1>
    <div v-if="posts.length" class="list">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="item"
      >
        <span class="title">{{ post.title }}</span>
        <span class="meta">{{ post.date }} &middot; {{ post.tags.join(', ') }}</span>
        <span class="excerpt">{{ post.excerpt }}</span>
      </NuxtLink>
    </div>
    <AvailableSoon
      v-else-if="loaded"
      title="Blog is available soon."
      message="This section is not available right now. Please check back soon."
    />
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const posts = ref<Awaited<ReturnType<typeof api.getPosts>>>([])
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getPosts()
  if (data) posts.value = data
  loaded.value = true
})
useHead({ title: 'Blog' })
</script>

<style scoped>
.blog-page {
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

.title {
  display: block;
  font-family: 'Sora', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--item-title);
  margin-bottom: 0.25rem;
  transition: color 0.3s;
}

.meta {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.excerpt {
  display: block;
  font-size: 0.875rem;
  color: var(--text-tertiary);
  line-height: 1.6;
  transition: color 0.3s;
}

@media (max-width: 600px) {
  .blog-page { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
}
</style>
