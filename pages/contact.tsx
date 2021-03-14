import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link'

 const Contact = () => {
  return (
    <div className={styles.bg_color}>
      <Head>
        <title>Contact Me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.text_color}>
        <Link href="/">
          <h2>Hello to my contact page</h2>
        </Link>
      
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  );
}

export default Contact