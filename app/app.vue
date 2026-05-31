<template>
  <div>
    <LayoutNavBar />
    <main class="main">
      <NuxtPage />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const { mode } = useMode()
</script>

<style scoped>
.main {
  min-height: calc(100vh - 160px);
}
</style>
