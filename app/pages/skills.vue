<template>
  <div class="skills-page">
    <h1>Skills</h1>
    <div v-if="skills.length" class="list">
      <div v-for="skill in skills" :key="skill.name" class="item">
        <span class="name">{{ skill.name }}</span>
        <span class="cat">{{ skill.category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const api = useApi()
const skills = ref<Awaited<ReturnType<typeof api.getSkills>>>([])

onMounted(async () => {
  const data = await api.getSkills()
  if (data) skills.value = data
})
useHead({ title: 'Skills' })
</script>

<style scoped>
.skills-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

h1 {
  font-family: 'Sora', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: var(--heading);
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.list {
  border-top: 1px solid var(--border);
  transition: border-color 0.3s;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
  transition: border-color 0.3s;
}

.name {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--item-title);
  transition: color 0.3s;
}

.cat {
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: color 0.3s;
}

@media (max-width: 600px) {
  .skills-page { padding: 3rem 1.5rem; }
  h1 { font-size: 2.25rem; }
}
</style>
