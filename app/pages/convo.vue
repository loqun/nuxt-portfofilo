<template>
  <div class="album-page" v-if="album">
    <NuxtLink to="/photography" class="back">&larr; Profile</NuxtLink>
    <div class="album-hero">
      <img :src="album.cover" :alt="album.title" />
    </div>
    <div class="album-info">
      <h1>{{ album.title }}</h1>
      <p>{{ album.description }}</p>
    </div>
    <div class="album-grid">
      <NuxtLink
        v-for="photo in album.photos"
        :key="photo.id"
        :to="`/photography/${photo.id}`"
        class="photo-card"
        :class="photo.aspect"
      >
        <div class="photo-img">
          <img :src="photo.src" :alt="photo.title" loading="lazy" />
        </div>
        <div class="photo-overlay">
          <span class="photo-title">{{ photo.title }}</span>
          <span class="photo-location">{{ photo.location }}</span>
        </div>
      </NuxtLink>
    </div>
  </div>
  <div v-else-if="loaded" class="album-page">
    <NuxtLink to="/photography" class="back">&larr; Profile</NuxtLink>
    <AvailableSoon
      title="Album available soon."
      message="This album could not be loaded right now."
      to="/photography"
      action-label="Back to profile"
    />
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const album = ref<Awaited<ReturnType<typeof api.getAlbum>>>(null)
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getAlbum('convo')
  if (data) album.value = data
  loaded.value = true
})
useHead({ title: 'Convo' })
</script>

<style scoped>
.album-page {
  background: #f5faff;
  min-height: 100vh;
  padding: 2rem;
}

.back {
  display: inline-block;
  font-size: 0.8125rem;
  color: #64748b;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: color 0.2s;
}

.back:hover { color: #2563eb; }

.album-hero {
  max-width: 1200px;
  margin: 0 auto 2rem;
  border-radius: 4px;
  overflow: hidden;
}

.album-hero img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.album-info {
  max-width: 700px;
  margin: 0 auto 2.5rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.5rem;
}

.album-info p {
  font-size: 0.9375rem;
  color: #64748b;
  line-height: 1.7;
}

.album-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.photo-card {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
}

.photo-card.portrait { grid-row: span 2; }
.photo-card.square { grid-row: span 1; }

.photo-img {
  width: 100%;
  height: 100%;
}

.photo-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.photo-card:hover .photo-img img { transform: scale(1.05); }

.photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(30, 64, 175, 0.8) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-card:hover .photo-overlay { opacity: 1; }

.photo-title {
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
}

.photo-location {
  font-size: 0.75rem;
  color: #bfdbfe;
  margin-top: 0.15rem;
}

@media (max-width: 900px) {
  .album-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .album-page { padding: 1rem; }
  h1 { font-size: 2rem; }
  .album-hero img { height: 250px; }
  .album-grid { grid-template-columns: 1fr; gap: 0.75rem; }
  .photo-card.portrait { grid-row: span 1; }
  .photo-overlay { opacity: 1; }
}
</style>
