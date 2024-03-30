import { useState } from "react";


function ContactForm() {

    const [contactInfo, setContactInfo] = useState({
        "firstName": "",
        "lastName": "",
        "phone": "",
        "email": "",
        "message": ""
    });


    function onFieldChange(event) {
        setContactInfo({
            ...contactInfo,
            [event.target.id]: event.target.value
        })
    };

    console.log(contactInfo);

    return (
        <form id="contactForm">
            <h1>Contact Form</h1>
            <label htmlFor="firstName">First Name: </label>
            <input 
                id="firstName" 
                value={contactInfo.firstName} 
                onChange={onFieldChange}>
            </input>
            <label htmlFor="lastName">Last Name: </label>
            <input 
                id="lastName" 
                value={contactInfo.lastName} 
                onChange={onFieldChange}
            ></input>
            <label htmlFor="phone">Phone: </label>
            <input 
                id="phone" 
                value={contactInfo.phone} 
                onChange={onFieldChange}
            ></input>
            <label htmlFor="email">Email: </label>
            <input 
                id="email" 
                value={contactInfo.email} 
                onChange={onFieldChange}
            ></input>
            <label htmlFor="message">Message: </label>
            <textarea 
                id="message" 
                rows={5}
                value={contactInfo.message} 
                onChange={onFieldChange}
            ></textarea>
            <br/>
            <button>Submit</button>
        </form>
    )
};


export default ContactForm;
