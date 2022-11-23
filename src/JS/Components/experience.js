import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience.css"
import ExperienceCard from "./experience_card"

function Experience() {

    const experience = [ // **to be filled over time
        { // sharp
            count: "01",
            company: "Sharp Performance",
            companyColor: "#5cbcf2",
            position: "SWE Intern",
            data: "",
            bullets: ["Development of Sharp Performance, an Android/iOS compatible application that provides a plethora of cognitive performance exercises to the user to maintain mental fortitude while transitioning between high- and low-stress environments, based on methods delivered to U.S. Military Special Operations personnel.",
            "Improved login time by 4+ seconds on average in the back-end login system using C# and MySQL in Unity.",
            "Increased potential user base by 300% by app deployment to iOS devices"]
        },
        { // better-meet
            count: "02",
            company: "BetterMeet",
            companyColor: "#5cbcf2",
            position: "SWE Intern",
            data: "",
            bullets: ["Program UI for BetterMeet Chrome extension, enabling employees of organizations to intuitively provide feedback on virtual meetings’ productivity.",
            "Maintain AWS database employees’ form response analytics for 1,000 businesses.",
            "Raise productivity of virtual meetings held by businesses and organizations by a projected 67%."]
        },
        { // creative mechanics lab (?)
            count:"03",
            company: "Creative Machines Lab",
            position: "SWE",
            bullets: ["???", "???", "???"]
        },
        {
            count:"04",
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
                
                <ExperienceCard color="rgba(54, 165, 224, 0.15)" bgcolor="rgb(54, 165, 224)" id="build-lab" date = {experience[0].date} count={experience[0].count} companyColor={experience[0].companyColor} company={experience[0].company} position={experience[0].position} bullets={experience[0].bullets}></ExperienceCard>
                <ExperienceCard color="rgba(58, 224, 191, 0.15)" bgcolor="rgb(58, 224, 191)" id="build-lab" date = {experience[1].date} count={experience[1].count} companyColor={experience[1].companyColor} company={experience[1].company} position={experience[1].position} bullets={experience[1].bullets}></ExperienceCard>
                <div id = "xp-filler">
                    <p id = "xp-ellipsis">...</p>
                </div>
                
            </div>
        
        </div>
    )
}

export default Experience