import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link';

 const Index = () => {
  return (
    <div className={styles.bg_color}>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      

      <main className={styles.text_color}>
       <Link href="/about">
          <h2>Hello there</h2>
        </Link>
      </main>
    </div>
  );
}

export default Index
