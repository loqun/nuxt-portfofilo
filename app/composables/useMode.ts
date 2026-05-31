import type { Ref } from 'vue'

export type PortfolioMode = 'dev' | 'photo'

const mode: Ref<PortfolioMode> = ref('dev')

export const useMode = () => {
  onMounted(() => {
    const saved = localStorage.getItem('portfolio-mode')
    if (saved === 'dev' || saved === 'photo') {
      mode.value = saved
    }
    applyMode(mode.value)
  })

  function toggle() {
    mode.value = mode.value === 'dev' ? 'photo' : 'dev'
    localStorage.setItem('portfolio-mode', mode.value)
    applyMode(mode.value)
    navigateTo('/home')
  }

  function applyMode(m: PortfolioMode) {
    document.documentElement.setAttribute('data-mode', m)
  }

  return { mode, toggle }
}
