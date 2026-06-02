<template>
  <header class="nav">
    <NuxtLink to="/" class="logo">
      <SkeletonBlock v-if="!name" width="5rem" height="1rem" radius="999px" />
      <span v-else>{{ name }}</span>
    </NuxtLink>
    <div class="right">
      <nav aria-label="Primary">
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
      <button
        class="toggle"
        @click="toggle"
        :title="`Switch to ${mode === 'dev' ? 'photography' : 'developer'} mode`"
        :aria-label="`Switch to ${mode === 'dev' ? 'photography' : 'developer'} mode`"
      >
        <span class="toggle-track">
          <svg v-if="mode === 'dev'" class="toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 7.5h15v9h-15z" />
            <path d="M9 18h6" />
          </svg>
          <svg v-else class="toggle-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 8.5h15v8h-15z" />
            <path d="M8 8.5l1.5-2h5L16 8.5" />
            <circle cx="12" cy="12.5" r="2.5" />
          </svg>
        </span>
        <span class="toggle-label">{{ mode === 'dev' ? 'Dev' : 'Photo' }}</span>
        <span class="toggle-mobile-icon" aria-hidden="true">
          <svg v-if="mode === 'dev'" class="toggle-icon" viewBox="0 0 24 24">
            <path d="M4.5 7.5h15v9h-15z" />
            <path d="M9 18h6" />
          </svg>
          <svg v-else class="toggle-icon" viewBox="0 0 24 24">
            <path d="M4.5 8.5h15v8h-15z" />
            <path d="M8 8.5l1.5-2h5L16 8.5" />
            <circle cx="12" cy="12.5" r="2.5" />
          </svg>
        </span>
      </button>
    </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  transition: background 0.3s;
  background: var(--bg);
}

.right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.logo {
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--heading);
  transition: color 0.3s;
  min-width: 0;
}

.logo :deep(.skeleton-block) {
  display: block;
}

nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

nav a {
  font-size: 0.8125rem;
  color: var(--accent-light);
  text-decoration: none;
  transition: color 0.2s;
}

nav a:hover,
nav a.router-link-active {
  color: var(--accent);
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
  width: 44px;
  height: 24px;
  background: var(--border);
  border-radius: 12px;
  position: relative;
  transition: background 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.toggle-icon {
  width: 15px;
  height: 15px;
  color: var(--accent);
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.toggle-label {
  font-size: 0.6875rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.toggle-mobile-icon {
  display: none;
}

@media (max-width: 768px) {
  .nav {
    position: relative;
    padding: 1rem 1rem 0.85rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }

  .right {
    width: 100%;
    display: block;
    padding-top: 2.15rem;
  }

  .logo {
    font-size: 0.9rem;
  }

  nav {
    width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 0.4rem;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    padding-bottom: 0;
  }

  nav::-webkit-scrollbar {
    display: none;
  }

  nav a {
    flex: 0 0 auto;
    font-size: 0.75rem;
    padding: 0.38rem 0.62rem;
    border-radius: 999px;
    white-space: nowrap;
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }

  .toggle {
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    border-radius: 999px;
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    color: var(--text-muted);
  }

  .toggle-track {
    display: none;
  }

  .toggle-label {
    display: none;
  }

  .toggle-mobile-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
