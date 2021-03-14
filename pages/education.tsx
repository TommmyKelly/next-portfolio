import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link'

 const Education = () => {
  return (
    <div className={styles.bg_color}>
      <Head>
        <title>Education | Workexperience</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.text_color}>
        <Link href="/">
          <h2>My eduction & workexperience</h2>
        </Link>
      
      </main>
    </div>
  );
}

export default Education