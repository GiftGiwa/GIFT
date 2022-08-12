import "../../CSS/start_page.css"
import anime from "../../../node_modules/animejs/lib/anime.es.js"
import { ReactComponent as Grid } from './Grid.svg'


function StartPage() {

    function slide() {

        function move_up(id) {
            anime({
                targets: id,
                translateY: -1 * window.innerHeight,
                easing: "easeOutExpo",
                duration: 1500
            })
        }
        move_up('#bg_rect')
    }

    anime({
        targets: "#moving",
        translateY: 50,
        easing: "easeOutExpo",
        duration: 1500
    })

    return (
        <div id = "start">

            <div id="top-gradient"></div>
        
            <p className="mono" id="doc">[DOCUMENTATION]</p>
            <h2>GiftGiwa</h2>
            <p className="mono" id="SWE">software engineer.</p>
            <p className="mono" id="label">[click anywhere to proceed]</p>

            <div className="mono" id = "response" onClick = {slide}></div>

            <div className="mono" id="circle_bound"></div>

            <div id="bg_rect"></div>

            <Grid id = "static" />
            <Grid id = "moving" />
    
        </div>   
    )
}

export default StartPage;