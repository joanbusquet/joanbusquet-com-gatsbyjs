import React from "react"
import styles from "./hero.module.css"
import { graphql, useStaticQuery } from "gatsby"

import Image from "gatsby-image"
import { Container, Row, Col } from "react-bootstrap"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "images/avatar.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const { avatar } = data
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <Image
            fluid={avatar.childImageSharp.fluid}
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
}

export default Hero
