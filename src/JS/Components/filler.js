import React from 'react'
import "../../CSS/filler.css"

function Filler(props) {

    return (
        <div style={{backgroundColor: props.bgcolor}} className = "filler">
            <p className = "horizontal-center" id="ellipsis">•••</p>
        </div>
    )

}

export default Filler