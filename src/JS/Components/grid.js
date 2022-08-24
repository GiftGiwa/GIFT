import React from "react"
import anime from "../../../node_modules/animejs/lib/anime.es.js"
import { ReactComponent as Grid } from '../../SVGs/Grid.svg'
import "../../CSS/grid.css"



function DecoGrid() {
    return (
        <div id="grids">
            <Grid id = "static" />
            <Grid id = "moving" />
        </div>
    )
}


export default DecoGrid