import "../../CSS/about_me.css"
import "../../CSS/components.css"
import ProgrammingLanguages from "./programming_languages"


function AboutMe () {

    return (
        <div id="aboutMe">
            <div id="about-me-header">
                <h3 className="headings">.about-me</h3>
            </div>
            
            {/* <div id="portrait"></div> */}

            <div id = "about-me-body">
                
                <div id="portrait"></div>

                <div id="about-me-text">
                    
                    <p className="main-text body">Hi, I'm Gift! I’m currently a sophomore Computer Science student at <span>Columbia University</span>. I’ve worked with these technologies so far:</p>
                    <br></br>

                    <ProgrammingLanguages />
                    <br></br>

                    <p className="main-text body">I started programming in my senior year of high school with Java in AP Computer Science A. After practicing a bit, I've expanded into Python, JavaScript, HTML, and CSS through my college coursework and self-studying.</p>
                    <br></br>

                    <p className="main-text body">I’m interested in app development (mainly front-end), and computer graphics. I also like playing video games (especially Mario Kart) and – though I’m new to them – music production and creating 3D designs.</p>

                </div>

            </div>
            
        </div>
    )

}

export default AboutMe;