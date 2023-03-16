import Head from 'next/head'
// import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import SiteLayout from '@/layouts/SiteLayout'

export default function Home() {
  return (
    <div className="min-w-full min-h-full">
      <SiteLayout title='Home'>
        <div className={styles.description}>Description</div>

        <div className={styles.center}>
          <h1 className=''>E-Card Game</h1>
          <h2 className=''>Ｅカード</h2>
        </div>
      </SiteLayout>

    </div>
  )
}
