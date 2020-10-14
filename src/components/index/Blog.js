import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.css"
import { Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPost {
        nodes {
          title
          excerpt {
            excerpt
          }
          tags {
            name
            color
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const {
    allContentfulPost: { nodes: posts },
  } = data
  console.log(posts)

  return (
    <>
      <Row>
        {posts.map(post => {
          return (
            <Col className={styles.blogColumn} key={post.id}>
              <Image fluid={post.image.fluid} alt={post.title} />
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.blogExcerpt}>{post.excerpt.excerpt}</p>
              <div className={styles.blogTags}>
                {post.tags.map(tag => {
                  return (
                    <button
                      className="btn btn-sm btn-outline-success"
                      style={{ color: tag.color, borderColor: tag.color }}
                    >
                      {tag.name}
                    </button>
                  )
                })}
              </div>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Blog
