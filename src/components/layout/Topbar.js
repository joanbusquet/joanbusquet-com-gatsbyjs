import React from "react"
import { Nav, Container } from "react-bootstrap"
import styles from "./topbar.module.css"

const Topbar = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      className={styles.top}
    >
      <Container className={styles.container}>
        <Nav.Item className={styles.topItem}>
          <Nav.Link href="/home">Desarrollo web</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.topItem}>
          <Nav.Link eventKey="link-1">Productividad</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.topItem}>
          <Nav.Link eventKey="link-2">Tecnología y Apps</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.topItem}>
          <Nav.Link eventKey="link-2">Emprendimiento</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.topItem}>
          <Nav.Link eventKey="link-2">Dinero</Nav.Link>
        </Nav.Item>
        <Nav.Item className={styles.topItem}>
          <Nav.Link eventKey="link-2">Libros</Nav.Link>
        </Nav.Item>
      </Container>
    </Nav>
  )
}

export default Topbar
