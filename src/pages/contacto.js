import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
const contacto = () => {
  return (
    <Layout>
      <Container className="page-block-container">
        <h2 className="page-block-title">¿Hablamos?</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
      </Container>
      <Container>
        <Row>
          <Col sm={6} className="mx-auto d-block mt-3">
            <Form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre completo *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  placeholder="Introduce tu nombre completo"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  placeholder="Introduce tu email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Introduce tu teléfono (opcional)"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Asunto *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="subject"
                  placeholder="Introduce el motivo"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje *</Form.Label>
                <Form.Control as="textarea" rows="3" name="message" required />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  required
                  type="checkbox"
                  className="d-inline-block"
                />
                <Form.Label>
                  He leído y acepto los el{" "}
                  <a href="/aviso-legal" target="_BLANK">
                    Aviso legal
                  </a>{" "}
                  y la{" "}
                  <a href="/politica-privacidad" target="_BLANK">
                    Política de privacidad
                  </a>
                </Form.Label>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mx-auto d-block"
              >
                Enviar mensaje
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default contacto
