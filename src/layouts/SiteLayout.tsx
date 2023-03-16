import Head from "next/head";
import Image from 'next/image'
import { FC, ReactNode } from "react";

interface SiteLayoutProps {
  children: ReactNode,
  title: string,
}

const SiteLayout: FC<SiteLayoutProps> = ({ children, title }) => {

  const prefixTitle = 'Kaiji&apos;s E-Card game';
  const pageTitle = `${prefixTitle} - ${title}`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Play Kaiji's E-Card game from anime Gyakkyou Burai Kaiji: Ultimate Survivor. Face your friends to this psychological card game." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2e3141"></meta>
      </Head>
      <section className="h-screen grid grid-cols-[1fr_2fr] grid-rows-[1fr_4fr_100px]">
        <section className="row-span-3 bg-red-900 relative">
          <Image
            src="/kaiji-bg.jpg"
            className="object-cover"
            alt=""
            fill />
        </section>
        <header className="bg-slate-500 flex justify-center items-center text-2xl">
          <h1>Header</h1>
        </header>
        <main className="bg-green-100">
          {children}
        </main>
        <footer className="flex py-2 mt-5 w-100 justify-center">
          <span className="block center mx-auto"> © {(new Date().getFullYear())}</span>
        </footer>
      </section>
    </>
  );
}

export default SiteLayout;