import React from 'react';
import backgroundImg from "../../media/header_background.jpg";

export const Header = () => {
    return (
        <div>
            <img src={backgroundImg} alt="Myself coding at a pc" />
            <span>Talk is cheap</span>
            <span>Show me the code!</span>
        </div>
    )
}