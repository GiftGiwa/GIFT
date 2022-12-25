import React  from 'react';
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
                <li className = "sections"><a href="#about-me">01  .about-me</a></li>
                <li className = "sections"><a href="#experience">02  .experience</a></li>
                <li className = "sections"><a href="#my-creations">03  .my-creations</a></li>
                
            </ul>

            <div id = "media">
                <a target="_blank" href = "https://github.com/GiftGiwa"><GitHubIcon id = "github"></GitHubIcon></a>
                <a target="_blank" href = "https://www.linkedin.com/in/gift-g-426146166/"><LinkedInIcon id = "linkedin"></LinkedInIcon></a>
                <a target="_blank" href = "https://mail.google.com/mail/u/0/?fs=1&to=gdg2131@columbia.edu&tf=cm"><EmailOutlinedIcon id="email"></EmailOutlinedIcon></a>
            </div>
        </div>
    )
}

export default Navbar