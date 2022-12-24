import React  from 'react';
import "../../CSS/components.css"
import "../../CSS/experience_card.css"

function ExperienceCard(props) {

    return (
        <div style={{backgroundColor: props.color}} id="experience-card">
            <h4 style={{color: props.bgcolor}}>{props.count}</h4>
            <p className = "positions" ><span style={{color:props.companyColor}}>{props.company},</span> <br></br>{props.position}</p>
            <p className = "description">{props.bullets[0]}</p>
            <p className = "description">{props.bullets[1]}</p>
            <p className = "description">{props.bullets[2]}</p>
        </div>
    )
}

export default ExperienceCard