<template>
  <header class="nav">
    <NuxtLink to="/" class="logo">{{ name }}</NuxtLink>
    <div class="right">
      <nav>
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
      <button class="toggle" @click="toggle" :title="`Switch to ${mode === 'dev' ? 'photography' : 'developer'} mode`">
        <span class="toggle-track">
          <span class="toggle-dot" :class="mode"></span>
        </span>
        <span class="toggle-label">{{ mode === 'dev' ? 'Dev' : 'Photo' }}</span>
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
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  transition: background 0.3s;
  background: var(--bg);
}

.logo {
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--heading);
  transition: color 0.3s;
}

.right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

nav {
  display: flex;
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
    padding: 1rem;
    flex-direction: column;
    gap: 0.75rem;
  }

  .right {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}
</style>
