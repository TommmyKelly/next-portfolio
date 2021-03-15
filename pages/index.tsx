import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link';


 const Index = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    <div className={ styles.container }>
      <div className={styles.height}>
        <main className={styles.text_color}>
          <Link href="/about">
          <h2>Hello there</h2>
            </Link>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
            <img src="/vercel.svg" width="800px" alt="pic"/>
        </main>
      </div>
    </div>
    </>
  );
}

export default Index
