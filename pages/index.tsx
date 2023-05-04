import type { NextPage } from 'next'
import Head from 'next/head'
import { Landing } from '../components/Home'
import logo from '../assets/logo-light.webp'

const Home: NextPage = () => {
  return (
    <div>
      <Head>

        <title>Amit Kumar</title>
        <meta name="description" content="personal portfolio app" />

        <meta property="og:url" content="https://amit.worf.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Amit Kumar" />
        <meta property="og:description" content="personal portfolio app" />
        <meta property="og:image" content={logo.src} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="amit.worf.in" />
        <meta property="twitter:url" content="https://amit.worf.in" />
        <meta name="twitter:title" content="Amit Kumar" />
        <meta name="twitter:description" content="personal portfolio app" />
        <meta name="twitter:image" content={logo.src} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#323538" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

      </Head>
      <main>
        <Landing />
      </main>
    </div>
  )
}

export default Home