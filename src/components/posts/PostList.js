import React from "react"
import { Link } from "gatsby"
import styles from "./post-list.module.css"
import { Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

const PostList = ({ posts }) => {
  return (
    <>
      <Row>
        {posts.map(post => {
          return (
            <Col lg={4} className={styles.postColumn} key={post.id}>
              <Link to={`/post/${post.slug}`}>
                <Image fluid={post.image.fluid} alt={post.title} />
                <h3 className={styles.postTitle}>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt.excerpt}</p>
                <div className={styles.postTags}>
                  {post.tags.map(tag => {
                    return (
                      <Link to={`/${tag.slug}`}>
                        <button
                          className={`btn btn-sm btn-outline-${tag.color}`}
                          key={tag.slug}
                        >
                          {tag.name}
                        </button>
                      </Link>
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
