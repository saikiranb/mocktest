import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mocktest</title>
      </Head>

      <main className={styles.main}>
        Main
      </main>

      <footer className={styles.footer}>
       Footer
      </footer>
    </div>
  )
}
