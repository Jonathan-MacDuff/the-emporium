import { useState, useEffect } from "react";


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
        <form>
            <label htmlFor="firstName">First Name: </label>
            <br/>
            <input id="firstName" value={contactInfo.firstName} onChange={onFieldChange}></input>
            <br/>
            <label htmlFor="lastName">Last Name: </label>
            <br/>
            <input id="lastName"></input>
            <br/>
            <label htmlFor="phone">Phone: </label>
            <br/>
            <input id="phone"></input>
            <br/>
            <label htmlFor="email">Email: </label>
            <br/>
            <input id="email"></input>
            <br/>
            <label htmlFor="message">Message: </label>
            <br/>
            <input id="message"></input>
            <br/>
            <button>Submit</button>
        </form>
    )
};


export default ContactForm;
