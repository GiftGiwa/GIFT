import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from 'sphere_background/imports/RGBELoader.js';

class Spheres extends Component() {

    componentDidMount() {

        let time = 0.00

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xffffff);
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
        console.log(window.innerWidth * window.innerHeight)

        //readjust camera to focus on spheres
        camera.position.z = -60;
        camera.position.y = 6;
        camera.lookAt(0, 0, 100)

        const renderer = new THREE.WebGLRenderer({alpha: true}) // {alpha: true} makes the background transparent

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio( window.devicePixelRatio);

        let root = document.getElementById("root");

        const hdrEquirect = new RGBELoader().load(
            "./sphere_background/paul_lobe_haus_4k.hdr",  
            () => { hdrEquirect.mapping = THREE.EquirectangularReflectionMapping; }
        );

        const sphereMaterial = new THREE.MeshPhysicalMaterial({
            metalness:0,
            transmission:1,
            envMap: hdrEquirect, 
            roughness:0, 
            depthTest: true
        })
    
        // for personal website
        const sphereMaterial_2 = new THREE.MeshBasicMaterial({
            color: 0xffff00, 
            opacity:0.1, 
            roughness:0.8
        })

        const loader = new GLTFLoader()

	    const randomizeMatrix = function () { //randomize location and size for each instance of the sphere

		const position = new THREE.Vector3()
		const quaternion = new THREE.Quaternion()
		const scale = new THREE.Vector3()

		return function ( matrix ) {

			position.x = (Math.random() * 45 - 22.5) * (window.innerWidth / window.innerHeight)
			position.y = Math.random() * 45 - 22.5
			position.z = (Math.random() * 45 - 22.5) * (window.innerWidth / window.innerHeight)

			//rotation.x = Math.random() * 2 * Math.PI;
			//rotation.y = Math.random() * 2 * Math.PI;
			//rotation.z = Math.random() * 2 * Math.PI;

			//quaternion.setFromEuler( rotation )

			scale.x = scale.y = scale.z = (Math.random() * 2)

			matrix.compose( position, quaternion, scale )

		};

	}();

	let mesh //mesh to become the InstancedMesh
	let mesh_2

	const count = 50 //number of instances to be made

	//animation variables (for end of code)

	let period = 10 // rotation time in seconds
	let clock = new THREE.Clock()
	let matrix = new THREE.Matrix4()

	initMesh() //initMesh method call
	animate() //animate method call

	function initMesh() { //load mesh and create instanced matrix

		loader.load( 'sphere_background/ball.gltf', function ( gltf ) { //load sphere
			gltf.scene.traverse(function(model) {
				if (model.isMesh) {
					model.castShadow = true
				}
			});
		
			const matrix = new THREE.Matrix4() //not the same as matrix defined above!

			mesh = new THREE.InstancedMesh( gltf.scene.children[0].geometry, sphereMaterial_2, count )
			mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage )

			mesh_2 = new THREE.InstancedMesh( gltf.scene.children[1].geometry, gltf.scene.children[1].material, count )
			mesh_2.instanceMatrix.setUsage( THREE.DynamicDrawUsage )

			for ( let i = 0; i < count; i ++ ) {
				randomizeMatrix( matrix )
				mesh.setMatrixAt( i, matrix )
				mesh_2.setMatrixAt(i, matrix)
			}

			scene.add(mesh)
			//scene.add(mesh_2)
		
		}, undefined, function ( error ) {
			console.error( error )
		} );	

	}

	//light
	const light = new THREE.AmbientLight( 0xffffff )
	scene.add( light )

    function animate() {

		requestAnimationFrame( animate )
		//console.log(clock.getDelta());
		time += 0.00001
	
		matrix.makeRotationY(0.025 * 2 * Math.PI / period)

		camera.lookAt(new THREE.Vector3(0, 0, 0)) //keep camera looking at center of scene
		camera.position.applyMatrix4(matrix)
		
		renderer.render( scene, camera )
	}



    }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }
}

function Canvas() {
    return (
        <div id = "canvas"></div>
    )
}

export default Spheres
//export default Canvas