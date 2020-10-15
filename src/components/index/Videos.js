import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./videos.module.css"
import { Row, Col } from "react-bootstrap"

const Videos = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulVideo {
        nodes {
          title
          link
          uploaded
        }
      }
    }
  `)
  const {
    allContentfulVideo: { nodes: videos },
  } = data
  console.log(videos)
  return (
    <>
      <Row>
        {videos.map(video => {
          return (
            <Col sm={4} className={styles.videoColumn} key={video.id}>
              <iframe
                title={video.title}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.link}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3 className={styles.videoTitle}>{video.title}</h3>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Videos
