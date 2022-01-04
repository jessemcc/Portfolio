import React from 'react';
import MyAboutImg from "../../media/me_in_suit.jpg";
import AboutFiller from "../../media/placeholder_img.png";

export const About = () => {
    return (
        <div>
            <div>
                <img src={MyAboutImg} alt="A picture of me" />
            </div>
            <div>
                <h2>About Me</h2>
                <p>blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                blah blah blah blah blah blah blah blah blah 
                </p>
                <img src={AboutFiller} />
            </div>
        </div>
    )
}