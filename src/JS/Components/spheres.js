import React, { Component } from "react"
import * as THREE from "three" 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import "../../CSS/components.css"              

class Spheres extends Component {

	componentDidMount() {

		let time = 0.00
		const scene = new THREE.Scene();
		//scene.background = new THREE.Color(0xffffff);

		const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 )

		camera.position.z = -30;
		camera.lookAt(0, 0, 100)
		
		const renderer = new THREE.WebGLRenderer({alpha:true})
		renderer.setSize( window.innerWidth, window.innerHeight )

		window.addEventListener( 'resize', onWindowResize, false );

		function onWindowResize(){

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize( window.innerWidth, window.innerHeight );

		}

		// document.body.appendChild( renderer.domElement )
		// use ref as a mount point of the Three.js scene instead of the document.body
		this.mount.appendChild( renderer.domElement )

		const geometry = new THREE.SphereGeometry(5, 40, 20)

		// "glass"
		const sphereMaterial = new THREE.MeshPhysicalMaterial({
			metalness:0,
			transmission:1,
			roughness:0, 
			depthTest: true
		})

		// for personal website
		const sphereMaterial_2 = new THREE.MeshPhongMaterial({
			color: 0x2e2e2e
		})

		const randomizeMatrix = function () { //randomize location and size for each instance of the sphere

			const position = new THREE.Vector3()
			const quaternion = new THREE.Quaternion()
			const scale = new THREE.Vector3()
	
			return function ( matrix ) {
	
				position.x = (Math.random() * 50 - 25) * (window.innerWidth / window.innerHeight)
				position.y = Math.random() * 50 - 25
				position.z = (Math.random() * 50 - 25) * (window.innerWidth / window.innerHeight)
	
				scale.x = scale.y = scale.z = (Math.random() * 0.5) + 0.2
	
				matrix.compose( position, quaternion, scale )
	
			};
			
		}();

		let mesh
		const count = 70

		let period = 15 // rotation time in seconds
		const matrix = new THREE.Matrix4()

		mesh = new THREE.InstancedMesh( geometry, sphereMaterial_2, count )
		mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage )

		for ( let i = 0; i < count; i ++ ) {
			randomizeMatrix( matrix )
			mesh.setMatrixAt( i, matrix )
		}

		scene.add(mesh);

		let ambient = new THREE.AmbientLight( 0xffffff)
		scene.add(ambient)

		let animate = function () {

			requestAnimationFrame( animate );

			time += 0.001

			matrix.makeRotationY(0.025 * 2 * Math.PI / period)

			camera.lookAt(new THREE.Vector3(0, 0, 0)) //keep camera looking at center of scene
			camera.position.applyMatrix4(matrix)

			renderer.render( scene, camera );
		};
    
		animate()
	}

	render() {
		return (
			<div id = "canvas" ref={ref => (this.mount = ref)} />
		)
	}

}

export default Spheres