import React from "react";
import linkedinLogo from "../images/linkedin-icon.png"

export default function Linkedinbtn() {
    return (
        <button className="btn--linkedin">
            <span className="btn-linkedin-icon">
                <img src={linkedinLogo} alt="LinkedIn Logo"/>
            </span>
            <span className="btn-text">LinkedIn</span>
        </button>
    )
}