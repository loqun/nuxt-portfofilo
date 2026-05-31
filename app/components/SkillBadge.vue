<template>
  <div class="skill-badge">
    <div class="skill-header">
      <span class="skill-name">{{ skill.name }}</span>
      <span class="skill-level">{{ skill.proficiency }}%</span>
    </div>
    <div class="skill-bar">
      <div class="skill-progress" :style="{ width: `${skill.proficiency}%` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from '~/data/skills'

defineProps<{
  skill: Skill
}>()
</script>

<style scoped>
.skill-badge {
  padding: var(--space-4);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border-light);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-3);
}

.skill-name {
  font-weight: 500;
  color: var(--color-primary);
  font-size: var(--font-size-sm);
}

.skill-level {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

.skill-bar {
  height: 6px;
  background: var(--color-border);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), var(--color-primary));
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
}
</style>