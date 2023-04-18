import { Noto_Sans_JP  } from '@next/font/google'
import 'normalize.css/normalize.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const notoSansJP = Noto_Sans_JP ({  weight: ["400", "700"], preload: false })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
