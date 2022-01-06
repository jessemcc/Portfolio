import React from 'react';
import JesseLogo from "../../media/jesse_logo.png";
import NavStyle from "./NavBar.module.scss";

export const NavBar = () => {
    return (
        <div className={NavStyle.navContainer}>
            <div className={NavStyle.logoContainer}>
                <img src={JesseLogo} className={NavStyle.navLogo} />
            </div>
            <div className={NavStyle.listContainer}>
                <ul className={NavStyle.listStyle}>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
