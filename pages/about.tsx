import Head from "next/head";
import styles from "../styles/main.module.scss";
// import Link from 'next/link'

 const About = () => {
   return (
    <>
      <Head>
        <title>About Me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <div className={styles.height}> 
          <main className={styles.text_color}>
        
          </main>
        </div>
      </div>
    </>
  );
}

export default About
