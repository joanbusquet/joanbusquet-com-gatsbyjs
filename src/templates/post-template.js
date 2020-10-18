import React from "react"
import moment from "moment" //To format dates
import "moment/locale/es"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout/Layout"
import { Container } from "react-bootstrap"

import styles from "./post-template.module.css"
//To render rich text from Contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const postTemplate = ({
  data: {
    post: {
      title,
      image: { fluid },
      text: { json },
      createdAt,
      tags,
    },
  },
}) => {
  //Render images inside rich text Contentful
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              alt={node.data.target.fields.file["en-US"].fileName}
              src={node.data.target.fields.file["en-US"].url}
            />
          </div>
        )
      },
      //Render post inside post Contentful
      "embedded-entry-block": node => {
        const { title, image, excerpt, slug } = node.data.target.fields

        return (
          <div className={styles.relatedPost}>
            <hr />
            <h3 className={styles.relatedPostLike}>También te puede gustar:</h3>
            <Link to={`/blog/${slug["en-US"]}`}>
              <div className={styles.relatedPostColumn}>
                <img
                  width="400"
                  src={image["en-US"].fields.file["en-US"].url}
                  alt={image["en-US"].fields.file["en-US"].fileName}
                />
                <h3 className={styles.relatedPostTitle}>{title["en-US"]}</h3>
                <p className={styles.relatedPostExcerpt}>{excerpt["en-US"]}</p>
                <div className={styles.relatedPostTags}>
                  {/*tags["en-US"].map(tag => {
                    return (
                      <button className={`btn btn-sm btn-outline-${tag.color}`}>
                        {tag.name}
                      </button>
                    )
                  })*/}
                </div>
              </div>
            </Link>
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <Container>
        {/* TAGS CONTAINER */}
        <div className={styles.tagsContainer}>
          {tags.map(tag => {
            return (
              <button className={`btn btn-sm ml-1 btn-outline-${tag.color}`}>
                {tag.name}
              </button>
            )
          })}
        </div>

        <Image fluid={fluid} alt={title} className={styles.image} />

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.meta}>
          {moment(createdAt).locale("es").format("LL")}
        </p>
        <article className={styles.relatedPost}>
          {documentToReactComponents(json, options)}
        </article>
      </Container>
    </Layout>
  )
}

export default postTemplate

//Single post QUERY
export const query = graphql`
  query GetSinglePost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      tags {
        name
        color
      }
      text {
        json
      }
      createdAt
    }
  }
`
