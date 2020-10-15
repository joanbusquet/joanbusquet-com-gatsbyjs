import React from "react"
import moment from "moment" //To format dates
import "moment/locale/es"
import { Link } from "gatsby"
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
          <Link to={`/blog/${slug["en-US"]}`}>
            <div>
              <br />
              <br />
              <br />
              <br />
              <h2>Post relacionado: {title["en-US"]}</h2>
              <img
                width="400"
                src={image["en-US"].fields.file["en-US"].url}
                alt={image["en-US"].fields.file["en-US"].fileName}
              />
              <p>{excerpt["en-US"]}</p>
              <br />
              <br />
              <br />
              <br />
            </div>
          </Link>
        )
      },
    },
  }
  return (
    <Layout>
      <Image fluid={fluid} alt={title} />

      {tags.map(tag => {
        return (
          <button
            className="btn btn-sm btn-outline-success"
            style={{ color: tag.color, borderColor: tag.color }}
          >
            {tag.name}
          </button>
        )
      })}
      <h1>{title}</h1>
      <small>{moment(createdAt).locale("es").format("LL")}</small>
      <article style={{ marginTop: 20 }}>
        {documentToReactComponents(json, options)}
      </article>
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
