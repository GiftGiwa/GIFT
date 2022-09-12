import "../../CSS/navbar.css"
import "../../CSS/components.css"

function Navbar() {
    return (
        <div id = "navbar">
            <ul>
                {/* <li><a href="default.asp">Home</a></li> */}
                <li><a href="#about-me">01  .about-me</a></li>
                <li><a href="#experience">02  .experience</a></li>
                <li><a href="#my-creations">03  .my-creations</a></li>
                <li><a href="about.asp">04  .contact-me</a></li>
            </ul>
        </div>
    )
}

export default Navbar