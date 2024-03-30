import ContactForm from "../components/ContactForm";
import Contacts from "../components/Contacts";
import { useState, useEffect } from "react";


function Contact() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then((r) => r.json())
        .then((currentContacts) => setContacts(currentContacts))
    }, []);

    return (
        <div>
            <ContactForm contacts={contacts} setContacts={setContacts} />
            <Contacts contacts={contacts}/>
        </div>
    )
}

export default Contact;
