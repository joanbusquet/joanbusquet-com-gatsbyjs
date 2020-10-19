import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/global.css"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, hero }) => {
  console.log(hero)
  //TODO: Control sidebar
  return (
    <>
      <div className="site">
        <Header hero={hero} />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
