import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./video-list.module.css"
import { Row, Col } from "react-bootstrap"

const VideoList = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulVideo {
        nodes {
          id
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

  return (
    <>
      <Row>
        {videos.map(video => {
          return (
            <Col
              sm={{ span: 4, offset: 1 }}
              className={styles.videoColumn}
              key={video.id}
            >
              <iframe
                title={video.title}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.link}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className={styles.videoTitle}>{video.title}</h3>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default VideoList
