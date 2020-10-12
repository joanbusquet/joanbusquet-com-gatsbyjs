import React from "react"
import Layout from "../components/layout/layout.js"

//Page components import
import Hero from "../components/index/Hero"

export default function Home({ data }) {
  return <Layout hero={<Hero />}>joanbusquet.com</Layout>
}
