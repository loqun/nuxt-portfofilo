export const useBackendUrl = () => {
  const config = useRuntimeConfig()
  const backendUrl = config.public.backendUrl

  const resolveBackendUrl = (path?: string | null) => {
    if (!path) return ''
    if (/^https?:\/\//.test(path)) return path

    const base = backendUrl.replace(/\/$/, '')
    const cleanPath = path.replace(/^\//, '')
    return `${base}/${cleanPath}`
  }

  return {
    backendUrl,
    resolveBackendUrl,
  }
}
