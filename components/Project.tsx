import React from "react";
import styles from "../styles/main.module.scss";

interface Props {
  id: string;
  excerpt: string;
  body: string;
}

const Project: React.FC<Props> = ({ project }) => {
  return (
    <div className={styles.card}>
      <img style={{ height: "40px" }} src='/vercel.svg' alt='pic' />
      <p>{project.title}</p>
      <p>{project.excerpt}</p>
    </div>
  );
};

export default Project;
