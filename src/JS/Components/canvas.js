import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from 'sphere_background/imports/RGBELoader.js';

class Spheres extends Component() {
    componentDidMount() {

    }

    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }
}

export default Canvas