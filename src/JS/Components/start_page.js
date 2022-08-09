import "../../CSS/start_page.css"
import anime from "../../../node_modules/animejs/lib/anime.es.js"


function StartPage() {

    function slide(event) {
        console.log("click!")
        anime({
            targets: "#response",
            translateY: -50,
            easing: "easeOutSine",
            duration: 1500
        })
    }

    return (
        <div id = "start">
            <div id="top-gradient"></div>
        
            <p className="mono" id="doc">[DOCUMENTATION]</p>
            <h2>GiftGiwa</h2>
            <p className="mono" id="SWE">software engineer.</p>

            <button className="mono" id = "response" onClick = {slide}>[click anywhere to proceed]</button>

            <div className="mono" id="circle_bound"></div>

            <div id="bg_rect"></div>
    
        </div>   
    )
}



export default StartPage;
