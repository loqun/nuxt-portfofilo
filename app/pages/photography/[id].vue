<template>
  <div class="photo-detail" v-if="!loaded" :aria-busy="true">
    <NuxtLink to="/photography" class="back">&larr; Gallery</NuxtLink>
    <SkeletonBlock height="62vh" radius="1rem" class="image-skeleton" />
    <div class="info">
      <SkeletonBlock width="48%" height="1.8rem" radius="1rem" class="title-skeleton" />
      <SkeletonBlock width="18%" height="0.9rem" radius="999px" class="meta-skeleton" />
      <SkeletonBlock width="22%" height="0.75rem" radius="999px" />
    </div>
  </div>
  <div class="photo-detail" v-else-if="photo">
    <NuxtLink to="/photography" class="back">&larr; Gallery</NuxtLink>
    <div class="image-wrapper">
      <img :src="photo.src" :alt="photo.title" />
    </div>
    <div class="info">
      <h1>{{ photo.title }}</h1>
      <p class="location">{{ photo.location }}</p>
      <p class="category">{{ photo.category }}</p>
    </div>
  </div>
  <div v-else-if="loaded" class="photo-detail">
    <NuxtLink to="/photography" class="back">&larr; Gallery</NuxtLink>
    <AvailableSoon
      title="Photo available soon."
      message="This photo could not be loaded right now."
      to="/photography"
      action-label="Back to gallery"
    />
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const route = useRoute()
const photo = ref<Awaited<ReturnType<typeof api.getPhoto>>>(null)
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getPhoto(route.params.id as string)
  if (data) photo.value = data
  loaded.value = true
})
useHead({ title: computed(() => photo.value ? photo.value.title : 'Not Found') })
</script>

<style scoped>
.photo-detail {
  background: #f5faff;
  min-height: 100vh;
  padding: 2rem;
}

.back {
  display: inline-block;
  font-size: 0.8125rem;
  color: #64748b;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.2s;
}

.back:hover {
  color: #2563eb;
}

.image-skeleton {
  max-width: 1100px;
  margin: 0 auto;
}

.title-skeleton,
.meta-skeleton {
  margin-bottom: 0.5rem;
}

.image-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
}

.info {
  max-width: 700px;
  margin: 2rem auto 0;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.25rem;
}

.location {
  font-size: 0.9375rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}

.category {
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.not-found {
  color: #94a3b8;
}

@media (max-width: 600px) {
  .photo-detail {
    padding: 1rem;
  }
  h1 {
    font-size: 1.5rem;
  }
}
</style>
