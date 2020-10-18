import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./post-list.module.css"
import { Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

const PostList = () => {
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
            <Col sm={4} className={styles.postColumn} key={post.id}>
              <Link to={`post/${post.slug}`}>
                <Image fluid={post.image.fluid} alt={post.title} />
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt.excerpt}</p>
                <div className={styles.postTags}>
                  {post.tags.map(tag => {
                    return (
                      <button className={`btn btn-sm btn-outline-${tag.color}`}>
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

export default PostList
