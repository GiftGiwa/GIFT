import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience.css"
import ExperienceCard from "./experience_card"

function Experience() {

    return (
        <div className="horizontal-center" id = "experience">
            
            <div id="experience-header" className = "horizontal-center">
                <h3 className="headings">.experience</h3>
            </div>

            <ExperienceCard color="#45D4B2" id="build-lab" count="01"></ExperienceCard>
        </div>
    )
}

export default Experience