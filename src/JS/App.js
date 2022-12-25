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

  const [showComponent, setShowComponent] = useState(false);
  // const handleClick = () => {  
  //   console.log(document.getElementById("start").remove();
  //   setShowComponent(!showComponent)
  // } 
  function handleClick() {
    document.getElementById("start").remove()
    setShowComponent(!showComponent)
  }

  return (
    <>
      <div onClick = {handleClick}>
        <Page />
      </div>
      {showComponent && 
      <>
        <Navbar />
        <Spheres />
        <DecoBars />
        <Frost />
        <AboutMe />
        <Experience />
        <MyCreations />
        <Credits />
      </>}
      
      {/* <>
        <Navbar />
        <Spheres />
        <DecoBars />
        <Frost />
        <AboutMe />
        <Experience />
        <MyCreations />
        <Credits />
      </> */}
    </>
  )

}

export default App;