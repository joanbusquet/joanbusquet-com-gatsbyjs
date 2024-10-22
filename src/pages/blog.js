import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import PostList from "../components/posts/PostList"
import { Container } from "react-bootstrap"
import SEO from "../components/shared/seo"

const blog = ({
  data: {
    posts: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Blog"
        description="Blog acerca de desarrollo web, productividad, Tecnología y Apps, Emprendimiento, Dinero, Libros y mucho más."
      />
      <Container className="page-block-container">
        <h2 className="page-block-title">Blog</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <PostList posts={posts} />
      </Container>
    </Layout>
  )
}

export default blog

//ALL POSTS QUERY
export const query = graphql`
  query GetAllPosts {
    posts: allContentfulPost(filter: { videoLink: { eq: null } }) {
      nodes {
        id
        title
        slug
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
