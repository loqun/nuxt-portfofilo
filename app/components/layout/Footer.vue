<template>
  <footer class="footer">
    <span v-if="name">&copy; {{ year }} {{ name }}</span>
    <SkeletonBlock v-else width="12rem" height="0.75rem" radius="999px" class="footer-skeleton" />
  </footer>
</template>

<script setup lang="ts">
const api = useApi()
const about = ref<Awaited<ReturnType<typeof api.getAbout>>>(null)

onMounted(async () => {
  about.value = await api.getAbout()
})

const name = computed(() => about.value?.name ?? '')
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 3rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color 0.3s;
}

.footer-skeleton {
  margin: 0 auto;
}
</style>
