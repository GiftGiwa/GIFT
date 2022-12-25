import React, { useState } from "react"
import Page from "./Components/start_page"
import AboutMe from "./Components/about_me"
import Credits from "./Components/credits"
import Experience from "./Components/experience"
import MyCreations from "./Components/my_creations"
import Navbar from "./Components/navbar"
import Spheres from "./Components/spheres"
import DecoBars from "./Components/deco_bars"
import Frost from "./Components/frost"


function App() {

  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(true);

  const handleClick = () => {  
    setShowComponent1(!showComponent1)
    setShowComponent2(!showComponent2)
  }

  return (
    <>
      {/* <div onClick = {handleClick}>
        <Page />
      </div> */}
      
      {/* {!showComponent2 && <Page />}
      {showComponent1 && <>
        <Navbar />
        <Spheres />
        <DecoBars />
        <Frost />
        <AboutMe />
        <Experience />
        <MyCreations />
        <Credits />
      </>} */}
      
      <>
        <Navbar />
        <Spheres />
        <DecoBars />
        <Frost />
        <AboutMe />
        <Experience />
        <MyCreations />
        <Credits />
      </>
      
    </>
  )

}

export default App;