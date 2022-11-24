import React, { Component }  from 'react';
import "../../CSS/about_me.css"
import "../../CSS/components.css"
import ProgrammingLanguages from "./programming_languages"


function AboutMe () {

    return (
      
            <div className="horizontal-center" id = "about-me">

                <h3 className="headings" id = "top-header">.about-me</h3>
                <div id="about-me-body">

                    <div id="portrait"></div>

                    <div id="about-me-text">                   
                        <p className="body">Hi, I'm Gift! I’m currently a sophomore Computer Science student at <a id="columbia" target="_blank" href="https://www.cs.columbia.edu/">Columbia University</a>, currently taking Fundamentals of Computer Systems, Discrete Math, and Data Structures.</p>

                        {/* <ProgrammingLanguages className="horizontal-center" id="technologies"/> */}

                        <p className="body technologies">I started programming in my senior year of high school with Java in AP Computer Science A. After practicing a bit, I've expanded into other programming languages through my college coursework and self-studying. At the moment, I’ve worked with <span id="html">HTML</span>, <span id="css">CSS</span>, <span id="js">JavaScript</span>, <span id="java">Java</span>, <span id="c-sharp">C#</span>, <span id="python">Python</span>, and <span id="three-js">THREE.js</span> so far.</p>

                        {/* <p className="body">I'm currently taking Fundamentals of Computer Systems, Discrete Math, and Data Structures.</p> */}

                        <p className="body">I’m interested in app development (mainly front-end), and computer graphics. I also like playing video games (especially Mario Kart) and – though I’m new to them – music production and creating 3D designs.</p>
                    
                    </div>
                </div>
            </div>            
      
    )

}

export default AboutMe;