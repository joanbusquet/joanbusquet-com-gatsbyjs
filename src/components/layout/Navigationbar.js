import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { graphql, useStaticQuery } from "gatsby"
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
        <Navbar.Brand href="#home">
          <Image fixed={logo.childImageSharp.fixed} className={styles.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ml-auto ${styles.nav}`}>
            <Nav.Link href="#link" className={styles.navItem}>
              Vídeos
            </Nav.Link>
            <Nav.Link href="#link" className={styles.navItem}>
              Podcast
            </Nav.Link>
            <Nav.Link href="#link" className={styles.navItem}>
              Blog
            </Nav.Link>
            <Nav.Link href="#home" className={styles.navItem}>
              Sobre mi
            </Nav.Link>
            <Nav.Link href="#link" className={styles.navItem}>
              <Button variant="outline-light" className={styles.button}>
                ¿Hablamos?
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar
