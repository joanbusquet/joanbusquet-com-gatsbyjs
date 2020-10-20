import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import styles from "./navigationbar.module.css"

const Navigationbar = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(width: 125) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  const { logo } = data

  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image fixed={logo.childImageSharp.fixed} className={styles.logo} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ml-auto ${styles.nav}`}>
            <Nav className={styles.navItem}>
              <a
                //target="_blank"
                //href="https://aprendeinternet.com"
                href="/"
                rel="noreferrer"
              >
                Cursos (próximamente)
              </a>
            </Nav>
            <Nav className={styles.navItem}>
              <Link to="/videos">Vídeos</Link>
            </Nav>

            <Nav className={styles.navItem}>
              <Link to="/blog">Blog</Link>
            </Nav>
            <Nav className={styles.navItem}>
              <Link to="/sobre-mi">Sobre mi</Link>
            </Nav>
            <Nav className={styles.navItem}>
              <Link to="/contacto">
                <Button variant="outline-light" className={styles.button}>
                  ¿Hablamos?
                </Button>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar
