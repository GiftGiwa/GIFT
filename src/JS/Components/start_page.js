import React from "react"
import "../../CSS/start_page.css"

function Page() {
    
    return (
        <div id = "start">

            <div className="intro">
                <div id="top-gradient"></div>
                <p className="mono intro" id="doc">[DOCUMENTATION]</p>
                <h2 className="intro">GiftGiwa</h2>
                <p className="mono intro" id="SWE">software engineer.</p>
                
                <p className="mono intro" id="label">WELCOME!
                [click anywhere to proceed]</p>
            </div>

        </div>
    )
}

export default Page;