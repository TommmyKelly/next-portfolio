import React, { useState } from "react";
import styles from "../styles/components.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [buttonState, setButtonState] = useState(true);

  const showMobileMenu = () => {
    if (innerWidth <= 768) {
      setButtonState(true);
    }
  };

  return (

    <div
      className={router.pathname == "/" ? styles.header__index : styles.header}
    >
      <section
        className={
          buttonState
            ? styles.header__containerHidden
            : styles.header__container
        }
      >
        <nav className={styles.header__nav}>
          <ul>
            <li className={router.pathname == "/" ? styles.active : ""}>
              <Link href='/'>
                <a onClick={showMobileMenu}>Home</a>
              </Link>
            </li>
            <li className={router.pathname == "/about" ? styles.active : ""}>
              <Link href='/about'>
                <a onClick={showMobileMenu}>About</a>
              </Link>
            </li>
            <li
              className={router.pathname == "/education" ? styles.active : ""}
            >
              <Link href='/education'>

                <a onClick={showMobileMenu}>Education</a>
              </Link>
            </li>
            <li className={router.pathname == "/projects" ? styles.active : ""}>
              <Link href='/projects'>
                <a onClick={showMobileMenu}>Projects</a>
              </Link>
            </li>
            <li className={router.pathname == "/skills" ? styles.active : ""}>
              <Link href='/skills'>
                <a onClick={showMobileMenu}>Skills</a>
              </Link>
            </li>
            <li className={router.pathname == "/contact" ? styles.active : ""}>
              <Link href='/contact'>
                <a onClick={showMobileMenu}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section
        className={styles.header__menu}
        onClick={() => setButtonState(!buttonState)}
      >
        {buttonState ? (
          <i className='fas fa-bars'></i>
        ) : (
          <i className='fas fa-times'></i>
        )}
      </section>
    </div>
  );
};

export default Header;
