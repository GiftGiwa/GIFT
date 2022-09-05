import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience.css"
import ExperienceCard from "./experience_card"

function Experience() {

    const experience = [ // **to be filled over time
        {
            count: "01",
            company: "Columbia Build Lab",
            companyColor: "#5cbcf2",
            position: "SWE Intern",
            data: "",
            bullets: ["Development of Sharp Performance, an Android/iOS compatible application that provides a plethora of cognitive performance exercises to the user to maintain mental fortitude while transitioning between high- and low-stress environments, based on methods delivered to U.S. Military Special Operations personnel.",
            "Improved login time by 4+ seconds on average in the back-end login system using C# and MySQL in Unity.",
            "Increased potential user base by 300% by app deployment to iOS devices"]
        },
        {
            count:"02",
            company: "Creative Machines Lab",
            position: "SWE",
            bullets: ["???", "???", "???"]
        },
        {
            count:"03",
            company: "???",
            position: "???",
            bullets: ["???", "???", "???"]
        }
    ]

    return (
        <div className="horizontal-center" id = "experience">
            
            <div id="experience-header" className = "horizontal-center">
                <h3 className="headings">.experience</h3>
            </div>

            <div id="cards">
                <ExperienceCard color="rgba(69, 212, 179, 0.15)" bgcolor="rgb(69, 212, 179)" id="build-lab" date = {experience[0].date} count={experience[0].count} companyColor={experience[0].companyColor} company={experience[0].company} position={experience[0].position} bullets={experience[0].bullets}></ExperienceCard>
                <div id = "xp-filler"></div>
                {/* <ExperienceCard color="#4553D4" id="creative-machines" count={experience[1].count} company={experience[1].company} position={experience[1].position} bullets={experience[1].bullets}></ExperienceCard>
                <ExperienceCard color="#ffffff" id="third-experience" count={experience[2].count} company={experience[2].company} position={experience[2].position} bullets={experience[2].bullets}></ExperienceCard> */}
            </div>
        
        </div>
    )
}

export default Experience