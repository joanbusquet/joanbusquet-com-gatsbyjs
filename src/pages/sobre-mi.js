import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/shared/seo"

const sobreMi = () => {
  return (
    <Layout>
      <SEO
        title="Sobre mi"
        description="Sobre mi. Desarrollo web, productividad, Tecnología y Apps, Emprendimiento, Dinero, Libros y mucho más."
      />
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">¡Pronto sabrás sobre mi!</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default sobreMi
