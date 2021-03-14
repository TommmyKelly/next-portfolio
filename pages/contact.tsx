import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link'

 const Contact = () => {
   return (
    <>
      <Head>
        <title>Contact Me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    <div className={ styles.container }>
      <div className={styles.height}>
         <main className={styles.text_color}>
            <Link href="/">
            <h2>Hello to my contact page</h2>
            </Link>    
         </main>
      </div>
    </div>
    </>
  );
}

export default Contact