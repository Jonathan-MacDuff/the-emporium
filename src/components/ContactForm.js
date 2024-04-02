import { useState } from "react";

function ContactForm({ contacts, setContacts }) {

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

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:4000/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactInfo),
        })
        .then((r) => r.json())
        .then((newContact) => setContacts([...contacts, newContact]))
        .catch((e) => console.error(e));

        setContactInfo({
            "firstName": "",
            "lastName": "",
            "phone": "",
            "email": "",
            "message": ""
        });
    };

    return (
        <form id="contactForm" onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
            <label htmlFor="firstName">First Name: </label>
            <input 
                className="formInput"
                id="firstName" 
                value={contactInfo.firstName} 
                onChange={onFieldChange}>
            </input>
            <label htmlFor="lastName">Last Name: </label>
            <input 
                className="formInput"
                id="lastName" 
                value={contactInfo.lastName} 
                onChange={onFieldChange}
            ></input>
            <label htmlFor="phone">Phone: </label>
            <input 
                className="formInput"
                id="phone" 
                value={contactInfo.phone} 
                onChange={onFieldChange}
            ></input>
            <label htmlFor="email">Email: </label>
            <input 
                className="formInput"
                id="email" 
                value={contactInfo.email} 
                onChange={onFieldChange}
            ></input>
            <label htmlFor="message">Message: </label>
            <textarea 
                className="formInput"
                id="message" 
                rows={5}
                value={contactInfo.message} 
                onChange={onFieldChange}
            ></textarea>
            <br/>
            <button className="formInput" id="submit" type="submit">Submit</button>
        </form>
    )
};


export default ContactForm;
