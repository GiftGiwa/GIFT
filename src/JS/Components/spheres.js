import React, { Component } from "react"
import * as THREE from "three" 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
//import { RGBELoader } from "three/examples/js/loaders/RGBELoader.js"
import "../../CSS/components.css"              

class Spheres extends Component {

	componentDidMount() {

		let time = 0.00

		const scene = new THREE.Scene();
		//scene.background = new THREE.Color(0xffffff);
		const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 )

		camera.position.z = -30;
		//camera.position.y = 6;
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

		/*
		//hdri map
		// const hdrEquirect = new RGBELoader()
		
		// hdrEquirect.load(
		// 	"./paul_lobe_haus_4k.hdr",  
		// 	() => { hdrEquirect.mapping = THREE.EquirectangularReflectionMapping; }
		// ) */

		const geometry = new THREE.SphereGeometry(5, 40, 20)

		// "glass"
		const sphereMaterial = new THREE.MeshPhysicalMaterial({
			metalness:0,
			transmission:1,
			/*envMap: hdrEquirect,*/ 
			roughness:0, 
			depthTest: true
		})

		// for personal website
		const sphereMaterial_2 = new THREE.MeshPhongMaterial({
			color: 0x2d2d2d
		})

		// var geometry = new THREE.SphereGeometry( 1, 1, 1 )
		// var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } )
		// var cube = new THREE.Mesh( geometry, sphereMaterial_2 )
		// scene.add( cube )

		//const loader = new GLTFLoader()

		const randomizeMatrix = function () { //randomize location and size for each instance of the sphere

			const position = new THREE.Vector3()
			const quaternion = new THREE.Quaternion()
			const scale = new THREE.Vector3()
	
			return function ( matrix ) {
	
				position.x = (Math.random() * 50 - 25) * (window.innerWidth / window.innerHeight)
				position.y = Math.random() * 50 - 25
				position.z = (Math.random() * 50 - 25) * (window.innerWidth / window.innerHeight)
	
				scale.x = scale.y = scale.z = (Math.random() * 0.5)
	
				matrix.compose( position, quaternion, scale )
	
			};
		}();

		// let mesh = new THREE.Mesh(geometry, sphereMaterial_2)
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

		// let initializeMesh = function () {

		// 	loader.load( './ball.gltf', function ( gltf ) { //load sphere
		// 		// gltf.scene.traverse(function(model) {
		// 		// 	if (model.isMesh) {
		// 		// 		model.castShadow = true
		// 		// 	}
		// 		// });

		// 		console.log("initialized!")
			
		// 		const matrix = new THREE.Matrix4() //not the same as matrix defined above!
	
		// 		mesh = new THREE.InstancedMesh( gltf.scene.children[0].geometry, sphereMaterial_2, count )
		// 		mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage )
	
		// 		// mesh_2 = new THREE.InstancedMesh( gltf.scene.children[1].geometry, gltf.scene.children[1].material, count )
		// 		// mesh_2.instanceMatrix.setUsage( THREE.DynamicDrawUsage )
	
		// 		for ( let i = 0; i < count; i ++ ) {
		// 			randomizeMatrix( matrix )
		// 			mesh.setMatrixAt( i, matrix )
		// 			// mesh_2.setMatrixAt(i, matrix)
		// 		}
	
		// 		scene.add(mesh)
		// 		//scene.add(mesh_2)
				
		// 	}, undefined, function ( error ) {
		// 		console.error( error )
		// 	} );	

		// }

		// initializeMesh()
		

		// let light = new THREE.DirectionalLight( 0xffffff )
		// scene.add(light)

		let ambient = new THREE.AmbientLight( 0xffffff)
		scene.add(ambient)

		let animate = function () {

			requestAnimationFrame( animate );
			// cube.rotation.x += 0.01;
			// cube.rotation.y += 0.01;
			time += 0.00001

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