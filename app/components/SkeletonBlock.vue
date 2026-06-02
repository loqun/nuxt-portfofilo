<template>
  <div class="skeleton-block" :style="style" aria-hidden="true" />
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  width?: string
  height?: string
  radius?: string
  inline?: boolean
}>(), {
  width: '100%',
  height: '1rem',
  radius: '0.75rem',
  inline: false,
})

const style = computed(() => ({
  width: props.width,
  height: props.height,
  borderRadius: props.radius,
  display: props.inline ? 'inline-block' : 'block',
}))
</script>
