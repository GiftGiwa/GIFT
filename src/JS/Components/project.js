import "../../CSS/project.css"
import "../../CSS/components.css"

function Project(props) {

    return (
        <>
            <div className = "project" id = {props.project} ><img className = "images" src={props.imageSource}></img></div>
            <div className = "desc" id = {props.projectDesc}>
                <p className = "body project_body"><a className = "body project_body" style={{ color:props.headerColor }}>{props.name}</a>; {props.info}</p>
            </div>
        </>       
    )
}

export default Project