import React from "react"
import Page from "./Components/start_page"
import AboutMe from "./Components/about_me"
import Credits from "./Components/credits"
import Experience from "./Components/experience"
import MyCreations from "./Components/my_creations"
import Navbar from "./Components/navbar"
import Canvas from "./Components/canvas.js"


function App() {

  window.onunload = function () { // start at beginning of page after reloading
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      <Navbar></Navbar>
      <Page />
      {/* <Canvas /> */}
      <AboutMe />
      <Experience />
      <MyCreations />
      <Credits />
    </>
  )
}

export default App;