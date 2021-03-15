import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
const router = useRouter() 

  return (
    <div className="header">
      <header className="header__container home">
          <nav className="header__nav">
            <ul>
              <li className={router.pathname == "/" ? "active" : ""}>
                <Link
                  href="/"
                  passHref
                  >
                  <a>Home</a>
                </Link>
              </li>
              <li className={router.pathname == "/about" ? "active" : ""}>
                <Link
                  href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li className={router.pathname == "/education" ? "active" : ""}>
                <Link
                href="/education">
                Education
                </Link>
              </li>
              <li className={router.pathname == "/projects" ? "active" : ""}>
                <Link
                href="/projects">
                Projects
                </Link>
              </li>
              <li className={router.pathname == "/skills" ? "active" : ""}>
                <Link
                  href="/skills">
                  Skills
                </Link>
              </li>
              <li className={router.pathname == "/contact" ? "active" : ""}>
                <Link 
                  href="/contact">
                  Contact
                </Link> 
              </li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Header
