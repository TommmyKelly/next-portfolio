import React from "react";
import styles from "../styles/components.module.scss";
import media from "../styles/main.module.scss";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter()

  return (
    <div className={router.pathname="/" ? styles.footer : styles.footer__index}>
      <div className={media.color}>hello</div>
    </div>
  );
};

export default Footer;
