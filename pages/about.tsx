import Head from "next/head";
import styles from "../styles/About.module.scss";
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.bg_color}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.text_color}>
        <Link href="/">
          <h2>Hello there</h2>
        </Link>
       <i className="fas fa-envelope-open-text"></i>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
