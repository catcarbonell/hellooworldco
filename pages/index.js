import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

import styles from '../styles/Home.module.css'

export default function Home() {
  const stripePublicKey = process.env.STRIPE_PUBLIC_KEY
  // const stripePromise = loadStripe(stripePublicKey)
console.log(stripePublicKey)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>hellooworldco</h1>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
