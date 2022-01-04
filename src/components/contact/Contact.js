import React from 'react';
import ContactFiller1 from "../../media/contact_filler1.png";
import ContactFiller2 from "../../media/contact_filler2.png";
import ContactFiller3 from "../../media/contact_filler3.png";

export const Contact = () => {
    return (
        <div>
            <div>
                <img src={ContactFiller1} />
                <img src={ContactFiller2} />
            </div>
            <div>
                <h2>Contact Me</h2>
                <form>
                    <label for="name">Name: </label>
                    <input type="text" name="name" placeholder="Name" /><br /> 
                    <label for="email">Email: </label>
                    <input type="text" name="email" placeholder="Email" />
                </form>
                <textarea id="name" name="details">Please include details on project request</textarea>
            </div>
            <div>
                <img src={ContactFiller3} />
            </div>
        </div>
    )
}