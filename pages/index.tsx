import Head from "next/head";
import styles from "@/styles/main.module.scss";

import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.container__index}>
       <div className={router.pathname == "/" ? styles.index__height : styles.height}>
        <figure className={styles.index__main}>
          <img className={styles.index__profile} src="/sven.JPG" alt=""/>
        </figure>
        <section className={styles.index__info}>
          <h3>I am <span>Sven Notermans</span></h3>
          <p>Frontend Developer</p>
        </section>
        <section className={styles.index__icons}>
          <a href="#" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-instagram-square"></i>
          </a>
        </section>
        <section className={styles.index__skills}>
          <i className="fab fa-html5"></i> 
          <i className="fab fa-css3-alt"></i>
          <i className="fab fa-js-square"></i>
          <i className="fab fa-react"></i>
          <i className="fab fa-bootstrap"></i>
          <i className="fab fa-node"></i>
        </section>

       <div className={styles.container}>
        <img
          className={styles.background__image}
          src='https://images.unsplash.com/photo-1604488382778-ff54757c0f42?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDExMHxibzhqUUtUYUUwWXx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          alt=''
        />
        <div
          className={
            router.pathname == "/" ? styles.index__height : styles.height
          }
        >
          <figure className={styles.index__main}>
            <img className={styles.index__profile} src='/sven.JPG' alt='' />
          </figure>
          <section className={styles.index__info}>
            <h3>
              I am <span>Sven Notermans</span>
            </h3>
            <p>Frontend Developer</p>
          </section>
          <section className={styles.index__icons}>
            <a href='#' target='_blank'>
              <i className='fab fa-linkedin'></i>
            </a>
            <a href='#' target='_blank'>
              <i className='fab fa-facebook-square'></i>
            </a>
            <a href='#' target='_blank'>
              <i className='fab fa-instagram-square'></i>
            </a>
          </section>
          <section className={styles.index__skills}>
            <i className='fab fa-html5'></i>
            <i className='fab fa-css3-alt'></i>
            <i className='fab fa-js-square'></i>
            <i className='fab fa-react'></i>
            <i className='fab fa-bootstrap'></i>
            <i className='fab fa-node'></i>
          </section>
        </div>
    </div>
    </div>
    </div>
  
    </>
  );
};

export default Index;
