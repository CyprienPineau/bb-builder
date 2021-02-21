import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>BB Builder</title>
        <link rel="icon" href="/GW-bloodbowl-logo.ico" />
      </Head>
      

      <main className={styles.main}>
          <h1  className={styles.title}>BB Builder</h1>

          <Link href="/TeamSelection">
            <a className={styles.createTeam}>Build your team</a>
          </Link>

      </main>

      {/*<footer className={styles.footer}>
      </footer> */}
    </>
  )
}
