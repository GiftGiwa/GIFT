import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience_card.css"


function ExperienceCard(props) {

    return (
        <div style={{borderColor: props.color}} className="body" id="experience-card">
            <h4 style={{color: props.color}}>{props.count}</h4>
            <p style={{color:props.companyColor}}>{props.company}, {props.position}</p>
            <li>{props.firstBullet}</li>
            <li>{props.secondBullet}</li>
            <li>{props.thirdBullet}</li>
        </div>
    )
}

export default ExperienceCard

/* ○ <--might use this character later*/