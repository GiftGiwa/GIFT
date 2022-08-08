import React from "react"
import "../../CSS/main.css"


function StartPage() {

    //document.createElement("circle_bound")

    function createRipple(event) {
        const button = event.currentTarget

        const circle = document.createElement("span")
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");

        button.appendChild(circle)

        
    }


    return (
        <div id = "start">
            <div id="top-gradient"></div>
        
            <p className="mono" id="doc">[DOCUMENTATION]</p>
            <h2>GiftGiwa</h2>
            <p className="mono" id="SWE">software engineer.</p>

            {/* <button id="response" onClick={createRipple} ></button> */}

            <div className="mono" id="circle_bound"></div>

            <p id="label">[click here to proceed]</p>
    
        </div>   
    )
}



export default StartPage;
