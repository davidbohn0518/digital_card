import React from "react";
import facebookLogo from "../images/facebook-icon.png"
import githubLogo from "../images/github-icon.png"
import twitterLogo from "../images/twitter-icon.png"
import discordLogo from "../images/discord-icon.png"


export default function Links() {
    return (
        <footer>
            <img src={twitterLogo} className="footer--twitter" alt="Twitter Logo"/>
            <img src={facebookLogo} className="footer--facebook" alt="Facebook Logo"/>
            <img src={discordLogo} className="footer--discord" alt="Discord Logo"/>
            <img src={githubLogo} className="footer--github" alt="Github Logo"/>
        </footer>
    )
}