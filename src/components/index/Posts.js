import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./blog.module.css"
import { Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPost {
        nodes {
          title
          slug
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
            <Col sm={4} className={styles.blogColumn} key={post.id}>
              <Link to={`blog/${post.slug}`}>
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
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Blog
