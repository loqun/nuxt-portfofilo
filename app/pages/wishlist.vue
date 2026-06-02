<template>
  <div class="wishlist-page" :aria-busy="!loaded">
    <h1>Wishlist</h1>
    <div v-if="!loaded">
      <div v-for="group in 2" :key="`wishlist-group-skeleton-${group}`" class="group">
        <SkeletonBlock width="5rem" height="0.75rem" radius="999px" class="group-skeleton" />
        <div class="list">
          <div v-for="item in 3" :key="`wishlist-item-skeleton-${group}-${item}`" class="item skeleton-item">
            <SkeletonBlock width="48%" height="0.95rem" radius="999px" />
            <SkeletonBlock width="34%" height="0.8rem" radius="999px" />
          </div>
        </div>
      </div>
    </div>
    <template v-if="wishlist.length">
      <div v-for="group in wishlist" :key="group.category" class="group">
        <h2>{{ group.category }}</h2>
        <div class="list">
          <div v-for="item in group.items" :key="item.name" class="item">
            <span class="name">{{ item.name }}</span>
            <span class="desc">{{ item.description }}</span>
          </div>
        </div>
      </div>
    </template>
    <AvailableSoon
      v-else-if="loaded"
      title="Wishlist is available soon."
      message="This section is not available right now. Please check back soon."
    />
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const wishlist = ref<Awaited<ReturnType<typeof api.getWishlist>>>([])
const loaded = ref(false)

onMounted(async () => {
  const data = await api.getWishlist()
  if (data) wishlist.value = data
  loaded.value = true
})
useHead({ title: 'Wishlist' })
</script>

<style scoped>
.wishlist-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 1rem;
  transition: color 0.3s;
}

.group {
  margin-bottom: 3rem;
}

.group-skeleton {
  margin-bottom: 1rem;
}

h2 {
  font-family: 'Sora', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 1rem;
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
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s;
}

.skeleton-item {
  align-items: center;
}

.name {
  font-family: 'Sora', sans-serif;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--item-title);
  transition: color 0.3s;
}

.desc {
  font-size: 0.8125rem;
  color: var(--text-tertiary);
  transition: color 0.3s;
}

@media (max-width: 600px) {
  .wishlist-page { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
  .item { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
}
</style>
