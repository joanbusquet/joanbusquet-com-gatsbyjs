import React from "react"
import Topbar from "./Topbar"
import Navigationbar from "./Navigationbar"
import Hero from "./Hero"
import Waves from "../../assets/svg/waves.svg"
import "./header.css"

const Header = ({ hero }) => {
  return (
    <header>
      <div class="inner-header flex">
        <Topbar />
        <Navigationbar />
        <Hero>{hero}</Hero>
        {/* HEADER */}
      </div>

      <Waves />
    </header>
  )
}

export default Header
