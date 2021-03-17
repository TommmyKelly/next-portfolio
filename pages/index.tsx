import Head from "next/head";
import styles from "../styles/main.module.scss";
// import Link from 'next/link';


 const Index = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
          <img className={styles.index__image} src="https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHN0YXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>       
       <div className={styles.height}>
        <main className={styles.text_color}>
       
        </main>
      </div>
    </div>
    </>
  );
}

export default Index
