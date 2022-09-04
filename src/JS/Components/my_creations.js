import "../../CSS/my_creations.css"
import "../../CSS/components.css"


function MyCreations() {
    return (
        <div className = "horizontal-center" id="my-creations">
            <div id="creations-header" className = "horizontal-center">
                <h3 className="headings">.my-creations</h3>
            </div>

            <div id = "projects">
                <img id = "sudoku" src="../../../public/Images/sudoku.png"></img>
            </div>
        </div>
    )
}

export default MyCreations