import Head from "next/head";
import styles from "../styles/main.module.scss";
import Link from 'next/link'

 const Education = () => {
  return (
   <>
      <Head>
        <title>Education | Workexperience</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    <div className={ styles.container }>
      <div className={styles.height}>
        <main className={styles.text_color}>
           <Link href="/">
           <h2>My eduction & workexperience</h2>
           </Link>   
        </main>
      </div>
    </div>
   </>
  );
}

export default Education