import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, hero }) => {
  console.log(hero)
  //TODO: Control sidebar
  return (
    <>
      <Header hero={hero} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
