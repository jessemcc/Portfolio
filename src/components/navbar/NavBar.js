import React from 'react';
import JesseLogo from "../../media/jesse_logo.png";

export const NavBar = () => {
    return (
        <ul>
            <li><img src={JesseLogo} /></li>
            <li><a>About</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact</a></li>
        </ul>
    )
}
