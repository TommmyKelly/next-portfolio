import Head from "next/head";
import styles from "../styles/main.module.scss";
// import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { projects } from "../projects";
import Project from "../components/Project";


interface Props {
  projects: [];
}

const Projects: React.FC<Props> = ({ projects }: Props) => {
  return (
    <>
      <Head>
        <title>My Projects</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.projects__container}>
        <div className={styles.height}>
          <main>
           
          </main>
          <section className={styles.projectCard}>
            {projects.map((project: any) => (
              <Project key={project.id} project={project} />
            ))}
          </section>
        </div>

      </div>
    </>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      projects,
    },
  };
};
