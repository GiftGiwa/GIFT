import React from "react"
import "../../CSS/start_page.css"
import anime from "../../../node_modules/animejs/lib/anime.es.js"
import { ReactComponent as Grid } from '../../SVGs/Grid.svg'


function Page() {

    function slide() {

        anime({
            targets: '#moving',
            easing: "linear",
            translateX: -2520,
            translateY: -80,
            duration: 0,
        });

        function move_up() {

            anime({
                targets: '#bg_rect_2',
                translateY: -1 * window.innerHeight,
                easing: "easeOutExpo",
                duration: 1500
            })

            //background grid animation loop

            anime({
                targets: '#moving',
                easing: 'easeOutSine',
                loop: true,
                translateX: [
                    {duration: 1500, value: '+=80px',},
                    {duration: 1500, value: '+=0px',},
                    {duration: 1500, value: '-=80px',},
                    {duration: 1500, value: '+=0px',
                    },
                ],
                translateY: [
                    {duration: 1500, value: '+=0px',},
                    {duration: 1500, value: '+=80px',},
                    {duration: 1500, value: '+=0px',},
                    {duration: 1500, value: '-=80px',},
                ],
                duration: 3000
            });

            setTimeout(function () {
                // document.getElementById("bg_rect").style.top = "0px"
                // document.getElementById("bg_rect_2").style.top = "0px"
                // document.body.style.height = "4015px"

                // document.getElementById("html").style.height = "4015px"
                document.getElementById("html").style.overflowY = "scroll"
            }, 1500)

        }

        move_up()
        
    }

    return (
        <div id = "start">

            {/* <div id="top-gradient"></div>
        
            <p className="mono" id="doc">[DOCUMENTATION]</p>
            <h2>GiftGiwa</h2>
            <p className="mono" id="SWE">software engineer.</p>
            <p className="mono" id="label">[click anywhere to proceed]</p>

            <div className="mono" id = "response" onClick = {slide}></div> */}

            

            {/* <div id="bg_rect"></div> */}

            {/* <div id="bg_rect_2">
                <Grid id = "static" />
                <Grid id = "moving" />   
            </div> */}
    
        </div>   
    )
}

export default Page;