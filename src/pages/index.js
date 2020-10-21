import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import { Container } from "react-bootstrap"

//Page components import
import Hero from "../components/index/Hero"
//import VideoList from "../components/videos/VideoList"
//import Podcast from "../components/podcast/Podcast"
import PostList from "../components/posts/PostList"

export default function Home({
  data: {
    posts: { nodes: posts },
  },
}) {
  return (
    <Layout hero={<Hero />}>
      {/* VIDEOS BLOCK 
      <Container className="page-block-container">
        <h2 className="page-block-title">Vídeos para tí</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>

        <VideoList />
      </Container>
      PODCAST BLOCK 
      <Container className="page-block-container">
        <h2 className="page-block-title">Los últimos podcast</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <Podcast />
      </Container>*/}
      {/* POSTS BLOCK */}
      <Container className="page-block-container">
        <h2 className="page-block-title">Posts que te van a interesar</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <PostList posts={posts} />
      </Container>
    </Layout>
  )
}

//RECENT POSTS QUERY
export const query = graphql`
  query GetRecentPosts {
    posts: allContentfulPost(limit: 6) {
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
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
