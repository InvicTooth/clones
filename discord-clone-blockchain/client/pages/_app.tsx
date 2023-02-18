import '@/styles/globals.css'
import { DiscordProvider } from '@/context/context'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  )
}
