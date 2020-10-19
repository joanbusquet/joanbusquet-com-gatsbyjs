import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { Nav, Container } from "react-bootstrap"
import styles from "./topbar.module.css"

const Topbar = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulTag(sort: { fields: order, order: ASC }) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)
  const {
    allContentfulTag: { nodes: tags },
  } = data
  console.log(tags)
  return (
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      className={styles.top}
    >
      <Container className={styles.container}>
        {tags.map(tag => {
          return (
            <Nav.Item className={styles.topItem} key={tag.id}>
              <Nav>
                <Link to={`/${tag.slug}`}>{tag.name}</Link>
              </Nav>
            </Nav.Item>
          )
        })}
      </Container>
    </Nav>
  )
}

export default Topbar
