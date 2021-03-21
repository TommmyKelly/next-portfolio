import Head from "next/head";
import styles from "../styles/main.module.scss";
// import Link from 'next/link'

const Education = () => {
  return (
    <>
      <Head>
        <title>Education | Work Experience</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.education__container}>
        <div className={styles.height}>
          <main></main>
        </div>
      </div>
    </>
  );
};

export default Education;
