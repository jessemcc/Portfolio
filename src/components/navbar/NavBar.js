import React from 'react';
import JesseLogo from "../../media/jesse_logo.png";
import NavStyle from "./NavBar.module.scss";

export const NavBar = () => {
    return (
        <div>
            <img src={JesseLogo} />
            <ul className={NavStyle.listStyle}>
                <li><a>About</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}
