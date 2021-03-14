import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link'

 const Skills = () => {
  return (
    <div className={styles.bg_color}>
      <Head>
        <title>Skills</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.text_color}>
        <Link href="/">
          <h2>Hello there</h2>
        </Link>
      
      </main>

      <footer className={styles.footer}>
    
      </footer>
    </div>
  );
}

export default Skills