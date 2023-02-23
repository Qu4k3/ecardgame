import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaiji's E-Card game - Play live !</title>
        <meta name="description" content="Play Kaiji's E-Card game from anime Gyakkyou Burai Kaiji: Ultimate Survivor. Face your friends to this psychological card game." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2e3141"></meta>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}></div>

        <div className={styles.center}>
          <h1 className={inter.className}>E-Card Game</h1>
          <h2 className={inter.className}>Ｅカード</h2>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  )
}
