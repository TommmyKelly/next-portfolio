import Link from "next/link";
import styles from "../../../styles/main.module.scss";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  GetStaticPropsResult,
} from "next";
import React from "react";

interface Props {
  project: {
    id: number;
    title: string;
    body: string;
  };
}

const article: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div className={styles.project__container}>
        <div className={styles.project__left}>
          <img src='/vercel.svg' width='200px' alt='pic' />
        </div>
        <div className={styles.project__right}>
          <h1>{project.title}</h1>
          <p>{project.body}</p>
        </div>
      </div>

      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

//getServerSideProps()
export const getStaticProps: GetStaticProps = async (context: any) => {
  const res = await fetch(
    `http://localhost:3000/api/projects/${context.params.id}`
  );

  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/projects");

  const projects = await res.json();

  const ids = projects.map((project: any) => project.id);

  const paths = ids.map((id: number) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
