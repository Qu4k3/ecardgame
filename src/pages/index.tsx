import Head from 'next/head'
// import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import SiteLayout from '@/layouts/SiteLayout'
import EMenu from '@/components/EMenu'

export default function Home() {
  return (
    <div className="min-w-full min-h-full">
      <SiteLayout title='Home'>
        <EMenu></EMenu>
      </SiteLayout>
    </div>
  )
}
