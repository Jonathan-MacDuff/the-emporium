import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Contact() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/contacts")
        .then((r) => r.json())
        .then((currentContacts) => setContacts(currentContacts))
        .catch((e) => console.error(e))
    }, []);

    return (
        <div>
            <ContactForm contacts={contacts} setContacts={setContacts} />
        </div>
    )
}

export default Contact;
