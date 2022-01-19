import React from 'react';
import MyAboutImg from "../../media/me_in_suit.jpg";
import AboutFiller from "../../media/placeholder_img.png";
import AboutStyle from "./About.module.scss";

export const About = () => {
    return (
        <div className={AboutStyle.aboutContainer}>
            <div className={AboutStyle.myImgContainer}>
                <img src={MyAboutImg} alt="This is me" className={AboutStyle.myImgStyle} />
            </div>
            <div className={AboutStyle.aboutTextContainer}>
                <h2 className={AboutStyle.aboutTextTitle}>About Me</h2>
                <img src={MyAboutImg} alt="This is me" className={AboutStyle.myImgStylePhone} />
                <p className={AboutStyle.aboutPStyle}>blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                </p>
                <img src={AboutFiller} alt="Just filler" className={AboutStyle.fillerImgStyle} />
            </div>
        </div>
    )
}