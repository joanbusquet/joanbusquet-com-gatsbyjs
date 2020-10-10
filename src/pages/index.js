import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"
import Layout from "../components/layout/layout.js"
import styles from "./index.module.css"
import { graphql } from "gatsby"

import Image from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

export default function Home({ data }) {
  const hero = (
    <Container>
      <Row>
        <Col sm={4}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            className={styles.avatar}
          />
        </Col>
        <Col sm={8} className={styles.textColumn}>
          <h1>¡Hola, soy Joan!</h1>
          <p>
            De profesión, desarrollador fullstack de aplicaciones y páginas web.
          </p>
          <p>De pasión, ser cada día un 1% mejor que ayer.</p>
          <p>
            Soy un fanboy de la productividad, del control de nuestro tiempo, y
            por supuesto, un apasionado de la tecnología y de los libros.
          </p>
        </Col>
      </Row>
    </Container>
  )

  return <Layout hero={hero}>joanbusquet.com</Layout>
}

export const query = graphql`
  {
    avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
      childImageSharp {
        fixed(width: 300, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
