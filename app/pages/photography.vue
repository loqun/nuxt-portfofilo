<template>
  <div v-if="!loaded" class="profile-page" :aria-busy="true">
    <header class="profile-header">
      <SkeletonBlock width="6rem" height="0.8rem" radius="999px" class="heading-skeleton" />
      <SkeletonBlock width="46%" height="3rem" radius="1rem" class="title-skeleton" />
      <SkeletonBlock width="72%" height="1rem" radius="999px" class="subtitle-skeleton" />
    </header>

    <section class="bio-section">
      <SkeletonBlock width="100%" height="0.95rem" radius="999px" class="para-skeleton" />
      <SkeletonBlock width="96%" height="0.95rem" radius="999px" class="para-skeleton" />
      <SkeletonBlock width="88%" height="0.95rem" radius="999px" class="para-skeleton" />
    </section>

    <section class="gear-section">
      <SkeletonBlock width="4rem" height="0.8rem" radius="999px" class="heading-skeleton" />
      <div class="gear-list">
        <div v-for="n in 3" :key="`gear-skeleton-${n}`" class="gear-item skeleton-item">
          <SkeletonBlock width="34%" height="0.9rem" radius="999px" />
          <SkeletonBlock width="58%" height="0.8rem" radius="999px" />
        </div>
      </div>
    </section>

    <section class="social-section">
      <SkeletonBlock width="4rem" height="0.8rem" radius="999px" class="heading-skeleton" />
      <SkeletonBlock width="9rem" height="1rem" radius="999px" />
    </section>
  </div>
  <div v-else-if="about" class="profile-page">
    <header class="profile-header">
      <h1>{{ name }}</h1>
      <p class="subtitle">I shoot with film — Canon F-1, MinoltaCord, and Olympus Pen half-frame. Every frame feels intentional when you can't chimp.</p>
    </header>

    <section class="bio-section">
      <p>Photography, for me, is about slowing down. With film, there's no delete button, no LCD to peek at. You compose, you meter, you commit. That discipline carries into everything I see.</p>
      <p>I'm drawn to natural light, candid moments, and the texture that only film can give. Whether it's a wedding, a concert, or just the streets — I'm always looking for the frame.</p>
    </section>

    <section class="gear-section">
      <h2>Gear</h2>
      <div class="gear-list">
        <div class="gear-item">
          <span class="gear-name">Canon F-1</span>
          <span class="gear-desc">My main body. Built like a tank, meter like a dream.</span>
        </div>
        <div class="gear-item">
          <span class="gear-name">MinoltaCord</span>
          <span class="gear-desc">Twin lens reflex — square format, waist-level finder, pure joy.</span>
        </div>
        <div class="gear-item">
          <span class="gear-name">Olympus Pen</span>
          <span class="gear-desc">Half-frame, 72 shots per roll. Perfect for street and storytelling.</span>
        </div>
      </div>
    </section>

    <section class="social-section">
      <h2>Follow</h2>
      <a href="https://www.instagram.com/loktangkap/" target="_blank" rel="noopener" class="social-link">
        @loktangkap &rarr;
      </a>
    </section>
  </div>
  <div v-else-if="loaded" class="profile-page">
    <AvailableSoon
      title="Photography is available soon."
      message="I could not load the photography profile right now. Please check back soon."
    />
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const about = ref<Awaited<ReturnType<typeof api.getAbout>>>(null)
const loaded = ref(false)

onMounted(async () => {
  about.value = await api.getAbout({ fallback: false })
  loaded.value = true
})

const name = computed(() => about.value?.name.split(' ')[0] ?? '')
useHead({ title: 'Photography' })
</script>

<style scoped>
.profile-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.profile-header {
  margin-bottom: 3rem;
}

.heading-skeleton,
.title-skeleton,
.subtitle-skeleton,
.para-skeleton {
  margin-bottom: 0.9rem;
}

.skeleton-item {
  align-items: center;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.75rem;
}

.subtitle {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 540px;
}

.bio-section p {
  font-size: 0.9375rem;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

.gear-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #dbeafe;
}

h2 {
  font-family: 'Sora', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
  margin-bottom: 1.25rem;
}

.gear-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 0;
  border-bottom: 1px solid #dbeafe;
}

.gear-name {
  font-family: 'Sora', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1e293b;
}

.gear-desc {
  font-size: 0.8125rem;
  color: #64748b;
  max-width: 320px;
  text-align: right;
}

.social-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #dbeafe;
}

.social-link {
  display: inline-block;
  font-family: 'Sora', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  color: #2563eb;
  text-decoration: none;
  transition: opacity 0.2s;
}

.social-link:hover {
  opacity: 0.7;
}

@media (max-width: 600px) {
  .profile-page {
    padding: 2rem 1.5rem;
  }
  h1 {
    font-size: 2.25rem;
  }
  .gear-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  .gear-desc {
    text-align: left;
  }
}
</style>
