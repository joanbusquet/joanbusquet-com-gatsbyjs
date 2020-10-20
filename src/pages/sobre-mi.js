import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"

const sobreMi = () => {
  return (
    <Layout>
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
