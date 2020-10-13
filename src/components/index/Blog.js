import React from "react"
import styles from "./blog.module.css"
import { Row, Col } from "react-bootstrap"

const Blog = () => {
  return (
    <>
      <Row>
        <Col className={styles.blogColumn}>
          <img
            className={styles.blogImage}
            alt="aa"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.blogTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el blog es largo
          </h3>
          <p className={styles.blogExcerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            delectus molestiae. Eveniet illo rerum iusto incidunt consequuntur
            libero unde quam id! Recusandae aut earum accusantium quidem labore
            minus deserunt neque.
          </p>
          <div className={styles.blogTags}>
            <button className="btn btn-sm btn-outline-success">
              Desarrollo web
            </button>
            <button className="btn btn-sm btn-outline-info">
              Productividad
            </button>
            <button className="btn btn-sm btn-outline-danger">Libros</button>
          </div>
        </Col>
        <Col className={styles.blogColumn}>
          <img
            className={styles.blogImage}
            alt="bb"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.blogTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el blog es largo
          </h3>
          <p className={styles.blogExcerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            delectus molestiae. Eveniet illo rerum iusto incidunt consequuntur
            libero unde quam id!
          </p>
          <div className={styles.blogTags}>
            <button className="btn btn-sm btn-outline-danger">Libros</button>
            <button className="btn btn-sm btn-outline-success">
              Desarrollo web
            </button>
          </div>
        </Col>
        <Col className={styles.blogColumn}>
          <img
            className={styles.blogImage}
            alt="cc"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.blogTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el blog es largo
          </h3>
          <p className={styles.blogExcerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            delectus molestiae. Eveniet illo rerum iusto incidunt consequuntur
            libero unde quam id! Recusandae aut earum accusantium quidem labore
            minus deserunt neque.Recusandae aut earum accusantium quidem labore
            minus deserunt neque.
          </p>
          <div className={styles.blogTags}>
            <button className="btn btn-sm btn-outline-warning">Dinero</button>
            <button className="btn btn-sm btn-outline-primary">
              Tecnología y Apps
            </button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={styles.blogColumn}>
          <img
            className={styles.blogImage}
            alt="bb"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.blogTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el blog es largo
          </h3>
          <p className={styles.blogExcerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            delectus molestiae. Eveniet illo rerum iusto incidunt consequuntur
            libero unde quam id! Recusandae aut earum accusantium quidem labore
            minus deserunt neque.Recusandae aut earum accusantium quidem labore
            minus deserunt neque.
          </p>
          <div className={styles.blogTags}>
            <button className="btn btn-sm btn-outline-danger">Libros</button>
            <button className="btn btn-sm btn-outline-success">
              Desarrollo web
            </button>
          </div>
        </Col>
        <Col className={styles.blogColumn}>
          <img
            className={styles.blogImage}
            alt="cc"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.blogTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el blog es largo
          </h3>
          <p className={styles.blogExcerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            delectus molestiae. Eveniet illo rerum iusto incidunt consequuntur
            libero unde quam id!
          </p>
          <div className={styles.blogTags}>
            <button className="btn btn-sm btn-outline-warning">Dinero</button>
            <button className="btn btn-sm btn-outline-primary">
              Tecnología y Apps
            </button>
          </div>
        </Col>

        <Col className={styles.blogColumn}>
          <img
            className={styles.blogImage}
            alt="aa"
            src="https://images.ctfassets.net/fo9twyrwpveg/5dp65YLLMvi5mbXuz41cQV/8bb6ac10ea598d9e3be615cd55cd083a/B_O_Case_study_landing_page_header_1600x625px.jpg?w=486&fm=jpg&q=70"
          />
          <h3 className={styles.blogTitle}>
            Lorem ipsum dolor sit amet lorem ipsum el blog es largo
          </h3>
          <p className={styles.blogExcerpt}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
            delectus molestiae. Eveniet illo rerum iusto incidunt consequuntur
            libero unde quam id! Recusandae aut earum accusantium quidem labore
            minus deserunt neque.Recusandae aut earum accusantium quidem labore
            minus deserunt neque.
          </p>
          <div className={styles.blogTags}>
            <button className="btn btn-sm btn-outline-success">
              Desarrollo web
            </button>
            <button className="btn btn-sm btn-outline-info">
              Productividad
            </button>
            <button className="btn btn-sm btn-outline-danger">Libros</button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Blog
