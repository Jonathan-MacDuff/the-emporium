import { useState, useEffect } from "react";

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
        <h1>Contacts</h1>
        {/* {contacts.map((contact) => (

        ))} */}
    </div>    
    )
};

export default Contacts;
