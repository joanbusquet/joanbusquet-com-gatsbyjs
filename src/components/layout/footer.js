import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styles from "./footer.module.css"

const Footer = () => {
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
    <footer className={styles.footer}>
      <Image fixed={logo.childImageSharp.fixed} className={styles.logo} />
      <div className={styles.copyright}>
        &copy; Joan Busquet. Todos los derechos reservados |{" "}
        <Link to="aviso-legal">Aviso legal</Link> |{" "}
        <Link to="politica-privacidad">Politica de privacidad</Link>
      </div>
    </footer>
  )
}

export default Footer
