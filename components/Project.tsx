import React from "react";
import styles from "../styles/main.module.scss";
import Link from "next/link";

export interface Props {
  project: {
    id: number;
    title: string;
    excerpt?: string;
  };
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <Link href='/projects/[id]' as={`/projects/${project.id}`}>
      <div className={styles.card}>
        <img style={{ height: "40px" }} src='/vercel.svg' alt='pic' />
        <p>{project.title}</p>
        <p>{project.excerpt}</p>
      </div>
    </Link>
  );
};

export default Project;
