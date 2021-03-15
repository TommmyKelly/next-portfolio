import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter()
  const [buttonState, setButtonState] = useState(true)

  const showMobileMenu = () => {
    if (innerWidth <= 768) {
      setButtonState(true)
    }
  }

  return (
    <div className="header">
      <section className={buttonState ? "header__container hidden" : "header__container"}>
          <nav className="header__nav">
            <ul>
              <li className={router.pathname == "/" ? "active" : ""}>
                <Link
                  href="/"
                  >
                  <a onClick={showMobileMenu}>Home</a>
                </Link>
              </li>
              <li className={router.pathname == "/about" ? "active" : ""}>
                <Link
                  href="/about">
                  <a onClick={showMobileMenu}>About</a>
                </Link>
              </li>
              <li className={router.pathname == "/education" ? "active" : ""}>
                <Link
                href="/education">
                <a onClick={showMobileMenu}>Education</a>
                </Link>
              </li>
              <li className={router.pathname == "/projects" ? "active" : ""}>
                <Link
                href="/projects">
                <a onClick={showMobileMenu}>Projects</a>
                </Link>
              </li>
              <li className={router.pathname == "/skills" ? "active" : ""}>
                <Link
                  href="/skills">
                  <a onClick={showMobileMenu}>Skills</a>
                </Link>
              </li>
              <li className={router.pathname == "/contact" ? "active" : ""}>
                <Link 
                  href="/contact">
                  <a onClick={showMobileMenu}>Contact</a>
                </Link> 
              </li>
            </ul>
          </nav>
        </section>
      <section
        className="header__menu"
        onClick={() => setButtonState(!buttonState)}>
        {
          buttonState ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-times"></i>
          )
        }
        </section>
    </div>
  )
}

export default Header
