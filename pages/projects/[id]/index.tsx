import Link from "next/link";
import styles from "../../../styles/main.module.scss";
import { projects } from "../../../projects";
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
export const getStaticProps: GetStaticProps = async (context) => {
  const project = projects.filter((art) => art.id === context.params?.id);
  return {
    props: {
      project: project[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = projects.map((project) => project.id);

  const paths = ids.map((id) => ({
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
