import React from 'react';
import BackgroundImg from "../../media/header_background.jpg";
import HeaderStyle from "./Header.module.scss";

export const Header = () => {
    return (
        <div className={HeaderStyle.headerContainer} id="homeHash">
            <span className={HeaderStyle.textStyle1}>Talk is cheap</span>
            <span className={HeaderStyle.textStyle2}>Show me the code!</span>
            <img src={BackgroundImg} alt="Myself coding at a pc" className={HeaderStyle.headerBackgroundImg} />
        </div>
    )
}