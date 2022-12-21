import React from "react"
import Page from "./Components/start_page"
import AboutMe from "./Components/about_me"
import Credits from "./Components/credits"
import Experience from "./Components/experience"
import MyCreations from "./Components/my_creations"
import Navbar from "./Components/navbar"
import Spheres from "./Components/spheres"
import DecoBars from "./Components/deco_bars"
import WIP from "./Components/WIP"
import Frost from "./Components/frost"


function App() {

  return (
    <>
      <Navbar />
      {/* <Spheres /> */}
      <DecoBars />
      <Frost />
      {/* <WIP /> */}
      <AboutMe />
      <Experience />
      <MyCreations />
      <Credits />
    </>
  )

}

export default App;