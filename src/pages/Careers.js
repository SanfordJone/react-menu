import React from "react"
import Navbar from "../Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Careers(){
    return(
        <div>
        <Navbar></Navbar>
        <FontAwesomeIcon icon="fa-thin fa-plane" />
        <div className="content"><h1 style={{color: "#d094ea"}}>Careers</h1></div>
        </div>
    )
}

export default Careers