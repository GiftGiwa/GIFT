import "../../CSS/my_creations.css"
import "../../CSS/components.css"
import sudoku from "../../Images/sudoku.png"
import personal_site from "../../Images/personal_site.png"
import Filler from "./filler"
import Project from "./project"

function MyCreations() {
    
    setTimeout(function () {
        //apply query selector for multiple divs instead of getElementById !
        let sudoku = document.getElementById('sudoku_desc')
        const onMouseMove = (e) => {

            let bounds = e.target.getBoundingClientRect();
            //console.log(bounds.left, bounds.top)
            if (bounds.left != undefined && bounds.top != undefined && bounds.top != 0 && bounds.left != 0) {
                sudoku.style.left = (e.clientX - bounds.left + 30) + "px";
                sudoku.style.top = (e.clientY - bounds.top + 30) + "px";
            }

        }
        document.addEventListener('mousemove', onMouseMove)
    }, 50)


    return (
        <div className = "horizontal-center" id="my-creations">

            <div id="creations-header" className = "horizontal-center">
                <h3 className="headings">.my-creations</h3>
            </div>

            <div id = "projects-body">

                <div id = "projects">
                    {/* <div className = "project" id = "sudoku"><img className = "images" src={sudoku}></img></div>
                    <div className = "desc body" id = "sudoku_desc">
                        <p className = "body">Sudoku
                        <br></br> 
                        
                        Sudoku puzzle generator/solver, built in vanilla HTML/CSS/JavaScript.
                        </p>
                    </div> */}
                    <Project project = "sudoku" imageSource={sudoku}></Project>
                    <Project project = "personalSite" imageSource={personal_site}></Project>

                    {/* <div className = "project" id = "personal_site"><img className = "images" src={personal_site}></img></div> */}
                    <Filler bgcolor="rgba(255, 255, 255, 0.06)" /><Filler bgcolor="rgba(255, 255, 255, 0.04)"/><Filler bgcolor="rgba(255, 255, 255, 0.025)"/>
                </div>

                

            </div>
        </div>
    )
}

export default MyCreations