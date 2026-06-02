<template>
  <div :aria-busy="!loaded">
    <div v-if="mode === 'dev' && !loaded" class="home">
      <section class="hero">
        <SkeletonBlock width="7rem" height="0.8rem" radius="999px" class="greeting-skeleton" />
        <SkeletonBlock width="55%" height="3.5rem" radius="1rem" class="title-skeleton" />
        <SkeletonBlock width="42%" height="1.4rem" radius="999px" class="tagline-skeleton" />
        <SkeletonBlock width="100%" height="0.95rem" radius="999px" class="bio-skeleton" />
        <SkeletonBlock width="92%" height="0.95rem" radius="999px" class="bio-skeleton" />
        <SkeletonBlock width="78%" height="0.95rem" radius="999px" class="bio-skeleton" />
      </section>

      <section class="section">
        <SkeletonBlock width="6rem" height="0.8rem" radius="999px" class="section-title-skeleton" />
        <div class="list">
          <div v-for="n in 3" :key="`project-skeleton-${n}`" class="item skeleton-item">
            <div class="item-text">
              <SkeletonBlock width="65%" height="1.05rem" radius="999px" />
              <SkeletonBlock width="38%" height="0.8rem" radius="999px" class="meta-skeleton" />
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <SkeletonBlock width="4.5rem" height="0.8rem" radius="999px" class="section-title-skeleton" />
        <div class="list">
          <div v-for="n in 3" :key="`post-skeleton-${n}`" class="item skeleton-item">
            <div class="item-text">
              <SkeletonBlock width="72%" height="1.05rem" radius="999px" />
              <SkeletonBlock width="28%" height="0.8rem" radius="999px" class="meta-skeleton" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-else-if="mode === 'dev' && about" class="home">
      <section class="hero">
        <p class="greeting">Hello, I'm</p>
        <h1>{{ name }}</h1>
        <p class="tagline">{{ tagline }}</p>
        <p class="bio">{{ bio }}</p>
      </section>

      <section class="section" v-if="projects.length">
        <h2>Projects</h2>
        <div class="list">
          <NuxtLink
            v-for="project in projects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="item"
          >
            <span class="title">{{ project.title }}</span>
            <span class="meta">{{ project.tags.join(', ') }}</span>
          </NuxtLink>
        </div>
      </section>

      <section class="section" v-if="posts.length">
        <h2>Blog</h2>
        <div class="list">
          <NuxtLink
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="item"
          >
            <span class="title">{{ post.title }}</span>
            <span class="meta">{{ post.date }}</span>
          </NuxtLink>
        </div>
      </section>
    </div>

    <div v-else-if="mode === 'photo' && !loaded" class="photo-page">
      <header class="photo-header">
        <SkeletonBlock width="6rem" height="0.8rem" radius="999px" class="heading-skeleton" />
        <SkeletonBlock width="48%" height="3.5rem" radius="1rem" class="title-skeleton" />
        <SkeletonBlock width="68%" height="1rem" radius="999px" class="subtitle-skeleton" />
        <SkeletonBlock width="10rem" height="0.95rem" radius="999px" class="link-skeleton" />
      </header>

      <section class="albums-section">
        <SkeletonBlock width="5rem" height="0.8rem" radius="999px" class="heading-skeleton" />
        <div class="album-grid skeleton-album-grid">
          <div v-for="n in 4" :key="`album-skeleton-${n}`" class="album-card skeleton-album-card">
            <SkeletonBlock height="180px" radius="14px" class="album-cover-skeleton" />
            <div class="album-info">
              <SkeletonBlock width="62%" height="1.15rem" radius="999px" />
              <SkeletonBlock width="88%" height="0.9rem" radius="999px" class="meta-skeleton" />
              <SkeletonBlock width="74%" height="0.9rem" radius="999px" class="meta-skeleton" />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div v-else-if="mode === 'photo' && about" class="photo-page">
      <header class="photo-header">
        <h1>{{ name }}</h1>
        <p class="subtitle">I shoot with film — Canon F-1, MinoltaCord, and Olympus Pen half-frame. Every frame feels intentional when you can't chimp.</p>
        <a href="https://www.instagram.com/loktangkap/" target="_blank" rel="noopener" class="ig-link">@loktangkap &rarr;</a>
      </header>

      <section class="albums-section">
        <h2>Albums</h2>
        <div v-if="albums.length" class="album-grid">
          <NuxtLink
            v-for="album in albums"
            :key="album.id"
            :to="`/${album.id}`"
            class="album-card"
          >
            <div class="album-cover">
              <img :src="album.cover" :alt="album.title" loading="lazy" />
            </div>
            <div class="album-info">
              <h3>{{ album.title }}</h3>
              <p>{{ album.description }}</p>
            </div>
          </NuxtLink>
        </div>
        <AvailableSoon
          v-else-if="loaded"
          title="Albums are available soon."
          message="I could not load the album list right now. Please check back soon."
        />
      </section>
    </div>
    <AvailableSoon
      v-else-if="mode === 'photo' && loaded"
      title="Photography is available soon."
      message="I could not load the photography content right now. Please check back soon."
    />
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const about = ref<Awaited<ReturnType<typeof api.getAbout>>>(null)
const projects = ref<Awaited<ReturnType<typeof api.getProjects>>>([])
const posts = ref<Awaited<ReturnType<typeof api.getPosts>>>([])
const albums = ref<Awaited<ReturnType<typeof api.getAlbums>>>([])
const loaded = ref(false)
const { mode } = useMode()
let loadId = 0

const loadContent = async (targetMode = mode.value) => {
  const currentLoad = ++loadId
  loaded.value = false
  about.value = null
  projects.value = []
  posts.value = []
  albums.value = []

  if (targetMode === 'dev') {
    const [aboutData, projectData, postData] = await Promise.all([
      api.getAbout(),
      api.getProjects(),
      api.getPosts(),
    ])

    if (currentLoad !== loadId || mode.value !== targetMode) return

    about.value = aboutData
    if (projectData) projects.value = projectData.slice(0, 3)
    if (postData) posts.value = postData.slice(0, 3)
  } else {
    const [aboutData, albumData] = await Promise.all([
      api.getAbout({ fallback: false }),
      api.getAlbums(),
    ])

    if (currentLoad !== loadId || mode.value !== targetMode) return

    about.value = aboutData
    if (albumData) albums.value = albumData
  }

  loaded.value = true
}

onMounted(() => loadContent(mode.value))
watch(mode, newMode => loadContent(newMode))

const name = computed(() => about.value?.name ?? '')
const tagline = computed(() => about.value?.tagline ?? '')
const bio = computed(() => about.value?.bio ?? '')
definePageMeta({ alias: ['/home'] })
useHead({ title: 'Portfolio' })
</script>

<style scoped>
/* Dev mode */
.home {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.hero {
  margin-bottom: 5rem;
}

.greeting {
  font-size: 0.875rem;
  color: var(--accent-light);
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.greeting-skeleton,
.title-skeleton,
.tagline-skeleton,
.bio-skeleton,
.section-title-skeleton,
.meta-skeleton,
.heading-skeleton,
.subtitle-skeleton,
.link-skeleton {
  margin-bottom: 0.75rem;
}

.item-text {
  width: 100%;
}

.skeleton-item {
  padding: 1.25rem 0;
}

.skeleton-album-grid {
  border-top: 0;
}

.skeleton-album-card {
  display: block;
}

.album-cover-skeleton {
  width: 100%;
  margin-bottom: 0.9rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 0.75rem;
  transition: color 0.3s;
}

.tagline {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

.bio {
  font-size: 0.9375rem;
  color: var(--text-tertiary);
  line-height: 1.7;
  max-width: 540px;
  transition: color 0.3s;
}

.section {
  margin-bottom: 4rem;
}

h2 {
  font-family: 'Sora', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

.list {
  border-top: 1px solid var(--border);
  transition: border-color 0.3s;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  transition: opacity 0.2s, border-color 0.3s;
}

.item:hover {
  opacity: 0.6;
}

.title {
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: var(--item-title);
  transition: color 0.3s;
}

.meta {
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color 0.3s;
}

/* Photo mode */
.photo-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.photo-header {
  padding: 2rem 0 3rem;
}

.photo-header h1 {
  color: var(--heading);
  font-size: 3rem;
  margin-bottom: 0.25rem;
}

.subtitle {
  max-width: 540px;
  font-size: 0.9375rem;
  color: var(--accent-light);
  line-height: 1.7;
}

.ig-link {
  display: inline-block;
  font-family: 'Sora', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  margin-top: 1rem;
  transition: opacity 0.2s;
}

.ig-link:hover {
  opacity: 0.7;
}

.albums-section {
  padding-top: 2rem;
}

.albums-section h2 {
  font-family: 'Sora', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  transition: color 0.3s;
}

.album-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.album-card {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-decoration: none;
  aspect-ratio: 4 / 3;
}

.album-cover {
  width: 100%;
  height: 100%;
}

.album-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.album-card:hover .album-cover img {
  transform: scale(1.05);
}

.album-info {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--overlay) 0%, transparent 50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem;
}

.album-info h3 {
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.15rem;
}

.album-info p {
  font-size: 0.6875rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.4;
}

@media (max-width: 900px) {
  .album-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .home { padding: 3rem 1.5rem; }
  .photo-page { padding: 1rem; }
  h1 { font-size: 2.25rem; }
  .album-grid { grid-template-columns: 1fr; gap: 0.75rem; }
  .item { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
}
</style>
