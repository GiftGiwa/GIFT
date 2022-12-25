import React  from 'react';
import "../../CSS/my_creations.css"
import "../../CSS/components.css"
import sudoku from "../../Images/sudoku.png"
import personal_site from "../../Images/personal_site.png"
import Filler from "./filler"
import Project from "./project"

function MyCreations() {
    
    setTimeout(function () {

        let descriptions = document.querySelectorAll(".desc")
        const onMouseMove = (e) => {

            let bounds = document.getElementById("projects").getBoundingClientRect()

            descriptions.forEach((element) => {  

                if (bounds.left !== undefined && bounds.top !== undefined && bounds.top !== 0 && bounds.left !== 0) {
                    element.style.left = (e.clientX - bounds.left + 30) + "px"
                    element.style.top = (e.clientY - bounds.top + 30) + "px"
                }
                element.addEventListener('click', function(e) {
                    console.log("click")
                })
            }) 
        }
        document.addEventListener('mousemove', onMouseMove)

    }, 50)


    let info = [
        ["Sudoku", "A sudoku puzzle generator/checker webpage. Made in HTML, CSS, and vanilla JavaScript."],
        ["Personal Website (here)", "A showcase of my experience, projects and current/future programming endeavors. Made in React.js."]
    ]

    return (
        <div className = "horizontal-center" id="my-creations">
            <h3 className="headings" id="creations-header">.my-creations</h3>

            <div id = "projects-body">

                <div id = "projects">

                    <a href="https://giftgiwa.github.io/SUDOKU/" target = "_blank">
                        <Project project = "sudoku" projectDesc = "sudoku_desc" imageSource={sudoku} headerColor = "#4FC1FF" name = {info[0][0]} info = {info[0][1]}></Project>
                    </a>
                    <Project project = "personalSite" projectDesc = "personal_desc" imageSource={personal_site} headerColor = "#FFE600" name = {info[1][0]} info = {info[1][1]}></Project>
                    
                    <Filler bgcolor="rgba(255, 255, 255, 0.06)" /><Filler bgcolor="rgba(255, 255, 255, 0.04)"/><Filler bgcolor="rgba(255, 255, 255, 0.025)"/>
                </div>
            </div>

        </div>
    )
}

export default MyCreations