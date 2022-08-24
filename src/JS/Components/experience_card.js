import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience_card.css"


function ExperienceCard(props) {

    return (
        <div style={{borderColor: props.color}} id="experience-card">
            <h4 style={{color: props.color}}>{props.count}</h4>
            <p className = "positions" style={{color:props.companyColor}}><span id="CU">{props.company},</span> <br></br>{props.position}</p>
            <li>{props.bullets[0]}</li>
            <li>{props.bullets[1]}</li>
            <li>{props.bullets[2]}</li>
        </div>
    )
}

export default ExperienceCard

/* ○ <--might use this character later*/