import React  from 'react';
import "../../CSS/project.css"
import "../../CSS/components.css"

function Project(props) {

    return (
        <>
            <div className = "project" id = {props.project} ><img className = "images" src={props.imageSource}></img></div>
            <div className = "desc" id = {props.projectDesc}>
                <a className = "body project_body header" style={{ color:props.headerColor }}>{props.name}</a>
                <p className = "body project_body">{props.info}</p>
            </div>
        </>       
    )

}

export default Project