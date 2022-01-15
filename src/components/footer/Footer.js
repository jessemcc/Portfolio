import React from 'react';
import JesseLogo from "../../media/jesse_logo.png";
import FooterStyle from "./Footer.module.scss";

export const Footer = () => {
    return (
        <div className={FooterStyle.footerContainer}>
            <img src={JesseLogo} />
            <p>&copy; Jesse McConnell</p>
        </div>
    )
}