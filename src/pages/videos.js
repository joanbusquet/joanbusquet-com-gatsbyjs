import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PostList from "../components/posts/PostList"
import { Container } from "react-bootstrap"
import SEO from "../components/shared/seo"

const videos = ({
  data: {
    posts: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Videos"
        description="Videos acerca de desarrollo web, productividad, Tecnología y Apps, Emprendimiento, Dinero, Libros y mucho más."
      />
      <Container className="page-block-container">
        <h2 className="page-block-title">Videos</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <PostList posts={posts} />
      </Container>
    </Layout>
  )
}

export default videos

//ALL POSTS QUERY
export const query = graphql`
  query GetAllVideos {
    posts: allContentfulPost(filter: { videoLink: { ne: null } }) {
      nodes {
        id
        title
        slug
        videoLink
        excerpt {
          excerpt
        }
        tags {
          name
          color
          slug
        }
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
