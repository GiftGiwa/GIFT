import React from "react"
import "../../CSS/start_page.css"

function Page() {

    return (
        <div id = "start">

            <div className="intro" id="top-gradient"></div>
        
            <p className="mono intro" id="doc">[DOCUMENTATION]</p>
            <h2 className="intro">GiftGiwa</h2>
            <p className="mono intro" id="SWE">software engineer.</p>
            
            <p className="mono intro" id="label">[scroll to proceed]</p>

            {/* <div className="mono" id = "response" ></div> */}

        </div>   
    )
}

export default Page;