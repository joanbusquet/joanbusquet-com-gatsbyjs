import React from "react"
import Layout from "../components/layout/Layout"
import { Container } from "react-bootstrap"

//Page components import
import Hero from "../components/index/Hero"
import VideoList from "../components/videos/VideoList"
//import Podcast from "../components/podcast/Podcast"
import PostList from "../components/posts/PostList"

export default function Home({ data }) {
  return (
    <Layout hero={<Hero />}>
      {/* VIDEOS BLOCK */}
      <Container className="page-block-container">
        <h2 className="page-block-title">Vídeos para tí</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>

        <VideoList />
      </Container>
      {/* PODCAST BLOCK 
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
        <PostList />
      </Container>
    </Layout>
  )
}
