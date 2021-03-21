import Head from "next/head";
import styles from "../styles/main.module.scss";
// import Link from 'next/link'

 const Contact = () => {
   return (
    <>
      <Head>
        <title>Contact Me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.contact__container}>
         <section className={styles.contact__main}>
            <form className={styles.contact__form}>
              <legend>Contact Me</legend>
              <div>
                <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Please enter your name" required />       
              </div>
              <div>
                <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Please enter your email" required />       
              </div>
              <div>
                <label htmlFor="description">Description:</label>
              <textarea id="description" name="description" required >
                Please enter...
              </textarea>       
              </div>
            </form> 
         </section>
         <section className={styles.contact__image}>
           <img src="/pngwing.png" alt="logo"/>
         </section>
        </div>
    

    </>
  );
}

export default Contact