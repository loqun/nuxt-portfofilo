import Echo from 'laravel-echo'
import 'pusher-js'

export const useEcho = () => {
  const config = useRuntimeConfig()
  const echo = ref<Echo | null>(null)

  function connect(): Echo {
    if (echo.value) return echo.value
    if (import.meta.server) throw new Error('Echo is client-only')

    echo.value = new Echo({
      broadcaster: 'reverb',
      key: config.public.reverbKey,
      wsHost: config.public.reverbHost,
      wsPort: Number(config.public.reverbPort),
      wssPort: Number(config.public.reverbPort),
      forceTLS: config.public.reverbScheme === 'https',
      enabledTransports: ['ws', 'wss'],
    })
    return echo.value
  }

  function disconnect() {
    echo.value?.disconnect()
    echo.value = null
  }

  function listen(channel: string, event: string, callback: (data: any) => void) {
    connect().channel(channel).listen(event, callback)
  }

  function leave(channel: string) {
    echo.value?.leave(channel)
  }

  return { connect, disconnect, listen, leave, echo }
}
