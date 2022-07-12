import React from "react";
import emailLogo from "../images/email-icon.png"

export default function Emailbtn() {
    return (
        <button className="btn--email">
            <span className="btn-email-icon">
                <img src={emailLogo} alt="email logo"/>
            </span>
            <span className="btn-text">Email</span>
        </button>
    )
}