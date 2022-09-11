import "../../CSS/navbar.css"
import "../../CSS/components.css"

function Navbar() {
    return (
        <div id = "navbar">
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">.about-me</a></li>
                <li><a href="contact.asp">.experience</a></li>
                <li><a href="about.asp">.my-creations</a></li>
            </ul>
        </div>
    )
}

export default Navbar