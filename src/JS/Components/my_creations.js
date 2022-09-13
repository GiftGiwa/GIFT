import "../../CSS/my_creations.css"
import "../../CSS/components.css"
import "../../CSS/descriptions.css"
import sudoku from "../../Images/sudoku.png"
import personal_site from "../../Images/personal_site.png"
import Filler from "./filler"

function MyCreations() {

    

    return (
        <div className = "horizontal-center" id="my-creations">
            <div id="creations-header" className = "horizontal-center">
                <h3 className="headings">.my-creations</h3>
            </div>

            <div id = "projects-body">

                <div id = "projects">
                    <div className = "project"><img className = "images" id = "sudoku" src={sudoku}></img></div>
                    <div className = "project"><img className = "images" id = "personal_site" src={personal_site}></img></div>
                    <Filler bgcolor="rgba(255, 255, 255, 0.06)" /><Filler bgcolor="rgba(255, 255, 255, 0.04)"/><Filler bgcolor="rgba(255, 255, 255, 0.025)"/>
                </div>

            </div>
        </div>
    )
}

export default MyCreations