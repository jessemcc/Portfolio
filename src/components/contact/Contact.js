import React from 'react';
import ContactFiller1 from "../../media/contact_filler1.png";
import ContactFiller3 from "../../media/contact_filler3.png";
import ContactStyle from "./Contact.module.scss";

export const Contact = () => {
    return (
        <div className={ContactStyle.contactContainer}>
            <div className={ContactStyle.fillerContainer}>
                <img src={ContactFiller1} />
            </div>
            <div className={ContactStyle.mainContainer}>
                <div className={ContactStyle.containerTitle}>
                    <h2>Contact Me</h2>
                </div>
                <div>
                    <form>
                        <label for="name">Name: </label>
                        <input type="text" name="name" placeholder="Name" /><br /> 
                        <label for="email">Email: </label>
                        <input type="text" name="email" placeholder="Email" />
                    </form>
                    <textarea id="name" name="details" className={ContactStyle.textBox}>Please include details on project request</textarea>
                </div>
            </div>
            <div className={ContactStyle.fillerContainer}>
                <img src={ContactFiller3} />
            </div>
        </div>
    )
}