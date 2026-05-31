<template>
  <header class="nav">
    <div class="top-row">
      <NuxtLink to="/" class="logo">{{ name }}</NuxtLink>
      <button class="toggle" @click="toggle" :title="`Switch to ${mode === 'dev' ? 'photography' : 'developer'} mode`">
        <span class="toggle-track">
          <span class="toggle-dot" :class="mode"></span>
        </span>
        <span class="toggle-label">{{ mode === 'dev' ? 'Dev' : 'Photo' }}</span>
      </button>
    </div>
    <nav class="nav-links" aria-label="Primary">
        <template v-if="mode === 'dev'">
          <NuxtLink to="/home">Home</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
          <NuxtLink to="/wishlist">Wishlist</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </template>
        <template v-else>
          <NuxtLink to="/home">Home</NuxtLink>
          <NuxtLink to="/photography" class="photo-link" active-class="active">
            Profile
          </NuxtLink>
          <NuxtLink to="/wedding">Wedding</NuxtLink>
          <NuxtLink to="/convo">Convo</NuxtLink>
          <NuxtLink to="/sports">Sports</NuxtLink>
        </template>
    </nav>
  </header>
</template>

<script setup lang="ts">
const api = useApi()
const about = ref<Awaited<ReturnType<typeof api.getAbout>>>(null)

onMounted(async () => {
  about.value = await api.getAbout()
})

const name = computed(() => about.value?.name.split(' ')[0] ?? '')
const { mode, toggle } = useMode()
</script>

<style scoped>
.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem 0.75rem;
  transition: background 0.3s, border-color 0.3s;
  background: color-mix(in srgb, var(--bg) 94%, transparent);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid color-mix(in srgb, var(--border) 75%, transparent);
}

.top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.logo {
  font-family: 'Sora', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--heading);
  transition: color 0.3s;
  min-width: 0;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.85rem;
  padding-bottom: 0.25rem;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.nav-links::-webkit-scrollbar {
  display: none;
}

.nav-links a {
  flex: 0 0 auto;
  font-size: 0.8125rem;
  color: var(--accent-light);
  text-decoration: none;
  transition: color 0.2s;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  white-space: nowrap;
  background: transparent;
}

.nav-links a:hover,
.nav-links a.router-link-active,
.nav-links a.active {
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, transparent);
}

.photo-link {
  position: relative;
}

.photo-link.active {
  color: var(--accent);
  font-weight: 600;
}

.toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}

.toggle-track {
  width: 36px;
  height: 20px;
  background: var(--border);
  border-radius: 10px;
  position: relative;
  transition: background 0.3s;
}

.toggle-dot {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent);
  transition: all 0.3s;
}

.toggle-dot.photo {
  left: 18px;
}

.toggle-label {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .nav {
    padding: 0.85rem 1rem 0.6rem;
  }

  .top-row {
    gap: 0.75rem;
  }

  .logo {
    font-size: 0.9rem;
  }

  .nav-links {
    gap: 0.35rem;
    margin-top: 0.7rem;
    padding-bottom: 0.15rem;
    margin-left: -0.15rem;
    margin-right: -0.15rem;
  }

  .nav-links a {
    font-size: 0.75rem;
    padding: 0.38rem 0.62rem;
  }

  .toggle-label {
    display: none;
  }
}
</style>
