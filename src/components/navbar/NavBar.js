import React from 'react';
import JesseLogo from "../../media/jesse_logo.png";
import NavStyle from "./NavBar.module.scss";
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
    return (
        <div className={NavStyle.navContainer}>
            <div className={NavStyle.logoContainer}>
                <img src={JesseLogo} className={NavStyle.navLogo} />
            </div>
            <div className={NavStyle.listContainer}>
                <ul className={NavStyle.listStyle}>
                    <li><HashLink 
                        className ={NavStyle.linkStyle} 
                        to="../about/About.js#aboutHash"
                    >About</HashLink></li>
                    <li><HashLink 
                        className ={NavStyle.linkStyle} 
                        to="../portfolio/Portfolio.js#portfolioHash"
                    >Portfolio</HashLink></li>
                    <li><HashLink 
                        className ={NavStyle.linkStyle} 
                        to="../contact/Contact.js#contactHash"
                    >Contact</HashLink></li>
                </ul>
            </div>
        </div>
    )
}
