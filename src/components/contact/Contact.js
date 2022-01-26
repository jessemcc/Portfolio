import React, { useState } from 'react';
import ContactFiller1 from "../../media/contact_filler1.png";
import ContactFiller3 from "../../media/contact_filler3.png";
import ContactStyle from "./Contact.module.scss";
import { send } from 'emailjs-com';


export const Contact = () => {

    const [toSend, setToSend] = useState({
        user_name: '',
        message: '',
        user_email: '',
      });
    
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'contact_service',
            'contact_form',
            toSend,
            'user_id'
        )
            .then((response) => {
                alert('Email Sent! I will reach out as soon as possible.', response.status, response.text);
        })
            .catch((err) => {
                alert('There was an error, please try again.', err);
        });
    };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    

    return (
        <div className={ContactStyle.contactContainer} id="contactHash"> 
            <div className={ContactStyle.fillerContainer}>
                <img src={ContactFiller1} />
            </div>
            <div className={ContactStyle.mainContainer}>
                <div className={ContactStyle.containerTitle}>
                    <h2>Contact Me</h2>
                </div>
                <div className={ContactStyle.formContainer}>
                    <form id="reset-form" onSubmit={onSubmit}>
                        <input type="text" name="user_name" placeholder="Your Name" value={toSend.user_name} onChange={handleChange} /><br />
                        <input type="text" name="user_email" placeholder="Your Email" value={toSend.user_email} onChange={handleChange} /><br />
                        <textarea type="text" className={ContactStyle.textBox} name="message" value={toSend.message} onChange={handleChange}>Please include details on project request</textarea><br /> 
                        <button type='submit' className={ContactStyle.buttonPushable}><span className={ContactStyle.buttonFront}>Submit</span></button>
                    </form>
                </div>
            </div>
            <div className={ContactStyle.fillerContainer}>
                <img src={ContactFiller3} />
            </div>
        </div>
    )
}