import React from "react"
import Layout from "../components/layout/Layout"
import { Container } from "react-bootstrap"
import SEO from "../components/shared/seo"

const gracias = () => {
  return (
    <Layout>
      <SEO title="Gracias por tu mensaje" />
      <Container>
        <h2 className="page-block-title">¡Gracias por tu mensaje!</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
      </Container>
    </Layout>
  )
}

export default gracias
