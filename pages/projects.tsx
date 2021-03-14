import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link'

 const Projects = () => {
  return (
    <div className={`${ styles.bg_color }${styles.main_height}`}>
      <Head>
        <title>My Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={ styles.text_color }>
        <Link href="/">
          <h2>Hello there</h2>
        </Link>
      
      </main>

    </div>
  );
}

export default Projects