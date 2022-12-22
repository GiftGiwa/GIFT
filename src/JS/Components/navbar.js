import React, { Component }  from 'react';
import "../../CSS/navbar.css"
import "../../CSS/components.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


function Navbar() {
    return (
        <div id = "navbar">
            <h4>GiftGiwa</h4>
            <ul>
                <li><a href="#about-me">01  .about-me</a></li>
                <li><a href="#experience">02  .experience</a></li>
                <li><a href="#my-creations">03  .my-creations</a></li>
                
                <div id = "media">
                    <GitHubIcon id = "github"></GitHubIcon>
                    <LinkedInIcon id = "linkedin"></LinkedInIcon>
                    <EmailOutlinedIcon id="email"></EmailOutlinedIcon>
                </div>
            </ul>
        </div>
    )
}

export default Navbar