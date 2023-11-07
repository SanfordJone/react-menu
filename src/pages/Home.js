import React from "react"
import Navbar from "../Navbar"

function Home(){
    return(
        <div>
        <Navbar></Navbar>
        <div className="content"><h1 style={{color: "#d094ea"}}>Home</h1></div>
        </div>
    )
}

export default Home