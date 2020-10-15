import React from "react"
import Layout from "../components/layout/Layout"
import { Container } from "react-bootstrap"

//Page components import
import Hero from "../components/index/Hero"
import Videos from "../components/index/Videos"
import Podcast from "../components/index/Podcast"
import Blog from "../components/index/Blog"

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

        <Videos />
      </Container>
      {/* PODCAST BLOCK */}
      <Container className="page-block-container">
        <h2 className="page-block-title">Los últimos podcast</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <Podcast />
      </Container>
      {/* BLOG BLOCK */}
      <Container className="page-block-container">
        <h2 className="page-block-title">Posts que te van a interesar</h2>
        <p className="page-block-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ornare massa non rutrum.
        </p>
        <Blog />
      </Container>
    </Layout>
  )
}
