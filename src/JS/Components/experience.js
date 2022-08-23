import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience.css"
import ExperienceCard from "./experience_card"

function Experience() {

    const experience = [ // **to be filled over time
        {
            count: "01",
            company: "Columbia Build Lab",
            position: "SWE Intern",
            firstBullet: "Development of Sharp Performance, an Android/iOS compatible application that provides a plethora of cognitive performance exercises to the user to maintain mental fortitude while transitioning between high- and low-stress environments, based on methods delivered to U.S. Military Special Operations personnel.",
            secondBullet: "Improved login time by 4+ seconds on average in the back-end login system using C# and MySQL in Unity.",
            thirdBullet: "Increased potential user base by 300% by app deployment to iOS devices",
        }
    ]

    return (
        <div className="horizontal-center" id = "experience">
            
            <div id="experience-header" className = "horizontal-center">
                <h3 className="headings">.experience</h3>
            </div>

            <ExperienceCard color="#45D4B2" id="build-lab" count={experience[0].count} company={experience[0].company} position={experience[0].position}></ExperienceCard>
        </div>
    )
}

export default Experience