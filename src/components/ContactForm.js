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
            <br/>
            <input id="firstName" value={contactInfo.firstName} onChange={onFieldChange}></input>
            <br/>
            <label htmlFor="lastName">Last Name: </label>
            <br/>
            <input id="lastName" value={contactInfo.lastName} onChange={onFieldChange}></input>
            <br/>
            <label htmlFor="phone">Phone: </label>
            <br/>
            <input id="phone" value={contactInfo.phone} onChange={onFieldChange}></input>
            <br/>
            <label htmlFor="email">Email: </label>
            <br/>
            <input id="email" value={contactInfo.email} onChange={onFieldChange}></input>
            <br/>
            <label htmlFor="message">Message: </label>
            <br/>
            <input id="message" value={contactInfo.message} onChange={onFieldChange}></input>
            <br/>
            <button>Submit</button>
        </form>
    )
};


export default ContactForm;
