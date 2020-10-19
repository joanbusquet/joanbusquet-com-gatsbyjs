import React from "react"
import Layout from "../components/layout/Layout"
import PostList from "../components/posts/PostList"
import { Container } from "react-bootstrap"

const postsTagTemplate = ({
  data: {
    posts: { nodes: posts },
    tag: { name: tagName },
  },
}) => {
  return (
    <Layout>
      <Container className="page-block-container">
        <h2 className="page-block-title">{tagName}</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <PostList posts={posts} />
      </Container>
    </Layout>
  )
}

export default postsTagTemplate

//Get posts by tag QUERY
export const query = graphql`
  query GetPostsTag($slug: String) {
    posts: allContentfulPost(
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      nodes {
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
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    tag: contentfulTag(slug: { eq: $slug }) {
      name
    }
  }
`
