import "../../CSS/my_creations.css"
import "../../CSS/components.css"
import sudoku from "../../Images/sudoku.png"
import personal_site from "../../Images/personal_site.png"

function MyCreations() {
    return (
        <div className = "horizontal-center" id="my-creations">
            <div id="creations-header" className = "horizontal-center">
                <h3 className="headings">.my-creations</h3>
            </div>

            <div id = "projects">

                <div className = "project"><img className = "images" id = "sudoku" src={sudoku}></img></div>
                <div className = "project"><img className = "images" id = "personal_site" src={personal_site}></img></div>
                <div className = "filler"></div>
            </div>
        </div>
    )
}

export default MyCreations