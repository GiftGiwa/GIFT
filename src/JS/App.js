import React from "react"
import Page from "./Components/start_page"
import AboutMe from "./Components/about_me"
import Credits from "./Components/credits"
import Experience from "./Components/experience"
import MyCreations from "./Components/my_creations"
import Navbar from "./Components/navbar"
import DecoGrid from "./Components/grid"

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Page />
      <AboutMe />
      <Experience />
      {/* <DecoGrid /> */}

      <MyCreations />
      <Credits />
    </>
  )
}

export default App;