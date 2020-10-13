import React from "react"
import styles from "./videos.module.css"
import { Row, Col } from "react-bootstrap"

const Videos = () => {
  return (
    <>
      <Row>
        <Col className={styles.videoColumn}>
          <img
            className={styles.videoImage}
            alt="aa"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.videoTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el video es largo
          </h3>
        </Col>
        <Col className={styles.videoColumn}>
          <img
            className={styles.videoImage}
            alt="bb"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.videoTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el video es largo
          </h3>
        </Col>
        <Col className={styles.videoColumn}>
          <img
            className={styles.videoImage}
            alt="cc"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.videoTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el video es largo
          </h3>
        </Col>
      </Row>
      <Row>
        <Col className={styles.videoColumn}>
          <img
            className={styles.videoImage}
            alt="bb"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.videoTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el video es largo
          </h3>
        </Col>
        <Col className={styles.videoColumn}>
          <img
            className={styles.videoImage}
            alt="cc"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.videoTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el video es largo
          </h3>
        </Col>

        <Col className={styles.videoColumn}>
          <img
            className={styles.videoImage}
            alt="aa"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.videoTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el video es largo
          </h3>
        </Col>
      </Row>
    </>
  )
}

export default Videos
