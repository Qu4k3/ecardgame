import Head from 'next/head'
import Link from "next/link";
// import Image from 'next/image'

import SiteLayout from '@/layouts/SiteLayout'
import EMenu from '@/components/EMenu'

export default function Home() {
  return (
    <div className="min-w-full min-h-full">
      <SiteLayout title='Home'>
        <h2>Credits</h2>
        <Link href="/">Atrás</Link>
      </SiteLayout>
    </div>
  )
}
