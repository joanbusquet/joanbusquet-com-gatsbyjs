import React from "react"
import moment from "moment" //To format dates
import "moment/locale/es"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "./post-list.module.css"
import { Row, Col } from "react-bootstrap"
import Image from "gatsby-image"

const PostList = ({ posts }) => {
  const data = useStaticQuery(graphql`
    {
      play: file(relativePath: { eq: "images/play.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const { play } = data

  console.log(posts)
  return (
    <>
      <Row>
        {posts.map(post => {
          return (
            <Col lg={4} className={styles.postColumn} key={post.id}>
              <Link to={`/post/${post.slug}`}>
                {post.videoLink ? (
                  <div className={styles.image}>
                    <div className={styles.overlay}>
                      <Image
                        fixed={play.childImageSharp.fixed}
                        alt="play"
                        className={styles.play}
                      />
                    </div>
                    <Image
                      fluid={post.image.fluid}
                      alt={post.title}
                      className={styles.postImage}
                    />
                  </div>
                ) : (
                  <Image fluid={post.image.fluid} alt={post.title} />
                )}
                {/* POST - TITLE */}
                <h3 className={styles.postTitle}>{post.title}</h3>
                {/* POST - DATE */}
                <p className={styles.postDate}>
                  {moment(post.createdAt).locale("es").format("LL")}
                </p>
                {/* POST - EXCERPT */}
                <p className={styles.postExcerpt}>{post.excerpt.excerpt}</p>
                {/* POST - TAGS */}
                <div className={styles.postTags}>
                  {post.tags.map(tag => {
                    return (
                      <Link to={`/${tag.slug}`} key={tag.slug}>
                        <button
                          className={`btn btn-sm btn-outline-${tag.color}`}
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
