import Head from "next/head";
import styles from "../styles/main.module.scss";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import Project from "../components/Project";

const Projects = ({ projects }: any) => {
  console.log(projects);
  return (
    <>
      <Head>
        <title>My Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        <div className={styles.height}>
          <main className={styles.text_color}>
            <Link href='/'>
              <h2>Hello there</h2>
            </Link>
          </main>
          <section className={styles.projectCard}>
            {projects.map((project: ChildNode) => (
              <Project project={project} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/projects");
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};
