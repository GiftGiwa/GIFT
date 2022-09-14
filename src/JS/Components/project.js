import "../../CSS/project.css"
import "../../CSS/components.css"
import sudoku from "../../Images/sudoku.png"
import personal_site from "../../Images/personal_site.png"

function Project(props) {

    return (
        <>
            <div className = "project" id = {props.project} ><img className = "images" src={props.imageSource}></img></div>
            <div className = "desc" id = {props.projectDesc}>
                <p className = "body">{props.info}</p>
            </div>
        </>       
    )
}

export default Project

// Sudoku
//                 <br></br> 
                
//                 Sudoku puzzle generator/solver, built in vanilla HTML/CSS/JavaScript.