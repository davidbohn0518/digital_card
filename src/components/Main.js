import React from "react";
import Emailbtn from "./Emailbtn";
import Linkedinbtn from "./Linkedinbtn";
import About from "./About";


export default function Main() {
    return (
        <main>
            <h1 className="main--name">David Bohn</h1>
            <h3 className="main--title">Web Application Developer</h3>
                <div className="main--buttons">
                    <Emailbtn />
                    <Linkedinbtn />
                </div>
            <About />   
        </main>
    )
}