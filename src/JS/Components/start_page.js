import React from "react"
import "../../CSS/start_page.css"
import anime from "../../../node_modules/animejs/lib/anime.es.js"
import { ReactComponent as Grid } from '../../SVGs/Grid.svg'

function Page() {

    function slide() {
        //document.getElementById("label").style.color = "rgba(0, 0, 0, 0)"
        /* anime({
            targets: '#moving',
            easing: "linear",
            translateX: -2520,
            translateY: -80,
            duration: 0,
        }); */

        function move_up() {

            anime({
                targets: '.intro',
                translateY: -1 * window.innerHeight,
                easing: "easeOutExpo",
                duration: 1500
            })

            //background grid animation loop
            /* anime({
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
            }); */

            setTimeout(function () {
                document.querySelectorAll(".intro").forEach(el => el.remove()) //remove the start screen after click
                
            }, 1500)

        }

        move_up()       
    }

    return (
        <div id = "start">

            <div className="intro" id="top-gradient"></div>
        
            <p className="mono intro" id="doc">[DOCUMENTATION]</p>
            <h2 className="intro">GiftGiwa</h2>
            <p className="mono intro" id="SWE">software engineer.</p>
            <p className="mono intro" id="label">[click anywhere to proceed]</p>

            <div className="mono" id = "response" onClick = {slide}></div>

        </div>   
    )
}

export default Page;