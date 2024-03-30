import { useState, useEffect } from "react";
import SingleContact from "./SingleContact";

function Contacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then((r) => r.json())
        .then((currentContacts) => setContacts(currentContacts))
    }, []);

    console.log(contacts)



    return (
    <div id="contacts">
        <h1>Current Contacts</h1>
        {contacts.map((contact) => (
            <SingleContact contact={contact} key={contact.id} />
        ))}
    </div>    
    )
};

export default Contacts;
