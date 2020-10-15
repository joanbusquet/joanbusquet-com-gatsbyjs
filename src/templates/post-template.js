import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout/Layout"
//To render rich text from Contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const postTemplate = ({
  data: {
    post: {
      title,
      image: { fluid },
      text: { json },
      createdAt,
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
              width="400"
              alt={node.data.target.fields.file["en-US"].fileName}
              src={node.data.target.fields.file["en-US"].url}
            />
          </div>
        )
      },
    },
  }
  return (
    <Layout>
      <Image fluid={fluid} alt={title} />
      <h1>{title}</h1>
      <article>{documentToReactComponents(json, options)}</article>
    </Layout>
  )
}

export default postTemplate

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      text {
        json
      }
      createdAt
    }
  }
`
