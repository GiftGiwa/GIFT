import React, {Component} from "react"
import Page from "./Components/start_page"
import AboutMe from "./Components/about_me"
import Credits from "./Components/credits"
import Experience from "./Components/experience"
import MyCreations from "./Components/my_creations"
import Navbar from "./Components/navbar"
import Canvas from "./Components/canvas"
import * as THREE from "three"

import "../CSS/components.css"



// function App() {

  // window.onunload = function () { // start at beginning of page after reloading
  //   window.scrollTo(0, 0);
  // }
  
  // return (
  //   <>
  //     <Navbar></Navbar>
  //     {/* <Page /> */}
  //     {/* <Canvas /> */}
  //     {/* <Spheres /> */}
  //     <AboutMe />
  //     <Experience />
  //     <MyCreations />
  //     <Credits />
  //   </>
  // )

  // componentDidMount() {
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  //   // document.body.appendChild( renderer.domElement );
  //   // use ref as a mount point of the Three.js scene instead of the document.body
  //   this.mount.appendChild( renderer.domElement );
  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   var cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
  //   camera.position.z = 5;
  //   var animate = function () {
  //     requestAnimationFrame( animate );
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render( scene, camera );
  //   };
  //   animate();
  // }
  // render() {
  //   return (
  //     <div ref={ref => (this.mount = ref)} />
  //   )
  // }
  
// }



  {/* <Navbar></Navbar>
  <div id = "canvas" ref={ref => (this.mount = ref)} />
  <Page />
  <Canvas />
  <Spheres />
  <AboutMe />
  <Experience />
  <MyCreations />
<Credits /> */}


class App extends Component {
    componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha:true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );


    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );

    scene.add( cube );
    camera.position.z = 5;

    let light = new THREE.DirectionalLight( 0xffffff );
    scene.add(light);

    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };


    animate();
  }
  render() {
    return (
      <div id = "canvas" ref={ref => (this.mount = ref)} />
    )
  }
}

export default App;