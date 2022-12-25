import React from "react"
import "../../CSS/components.css"
import "../../CSS/experience.css"
import ExperienceCard from "./experience_card"

function Experience() {

    const experience = [ // **to be filled over time**
        { // sharp
            count: "01",
            company: "Sharp Performance",
            companyColor: "#5cbcf2",
            startDate: "May 2022",
            endDate: "Aug. 2022",
            position: "SWE Intern",
            bullets: ["Designed mobile application in Unity and C# with cognitive performance exercises to strengthen the user’s mental fortitude, based on methods delivered to U.S. Military Special Operations personnel.",
            "Improved average login time by 4 seconds with back-end login system built in C# and MySQL.",
            "Increased user base by 300% by extending compatibility to iOS devices."]
        },
        { // better-meet
            count: "02",
            company: "BetterMeet",
            companyColor: "#3ae0bf",
            position: "SWE Intern",
            startDate: "Sept. 2022",
            endDate: "Dec. 2022",
            bullets: ["Programmed UI for BetterMeet Chrome extension in JavaScript and CSS, enabling employees of organizations to intuitively provide feedback on virtual meetings’ productivity.",
            "Coded data access from AWS cloud database containing analytics on employee feedback for 1,000 businesses using Flask.",
            "Maintained goal achievement rate and reduced meeting times for organizations by 33% on average."]
        },
        { // (?)
            count:"03",
            company: "",
            startDate: "",
            endDate: "",
            position: "SWE Intern",
            bullets: ["???", "???", "???"]
        },
        { // (?)
            count:"04",
            company: "???",
            position: "???",
            bullets: ["???", "???", "???"]
        }
    ]

    return (
        <div className="horizontal-center" id = "experience">
            
            {/* <div id="experience-header" className = "horizontal-center">
                <h3 className="headings">.experience</h3>
            </div> */}
            <h3 className="headings" id = "experience-header">.experience</h3>

            <div id="cards">
                
                <ExperienceCard color="rgba(54, 165, 224, 0.15)" bgcolor="rgb(54, 165, 224)" id="build-lab" date = {experience[0].date} count={experience[0].count} companyColor={experience[0].companyColor} company={experience[0].company} position={experience[0].position} bullets={experience[0].bullets} startDate={experience[0].startDate} endDate={experience[0].endDate}></ExperienceCard>
                <ExperienceCard color="rgba(58, 224, 191, 0.15)" bgcolor="rgb(58, 224, 191)" id="build-lab" date = {experience[1].date} count={experience[1].count} companyColor={experience[1].companyColor} company={experience[1].company} position={experience[1].position} bullets={experience[1].bullets} startDate={experience[1].startDate} endDate={experience[1].endDate}></ExperienceCard>
                <div id = "xp-filler">
                    <p id = "xp-ellipsis">...</p>
                </div>
                
            </div>
        
        </div>
    )
}

export default Experience