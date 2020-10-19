import React from "react"
//import Layout from "../components/layout/Layout"
//import Image from "gatsby-image"

const postsTagTemplate = ({
  data: {
    posts: { nodes: postsList },
  },
}) => {
  return (
    <div>
      {postsList.map(post => {
        return <div>{post.title}</div>
      })}
    </div>
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
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
