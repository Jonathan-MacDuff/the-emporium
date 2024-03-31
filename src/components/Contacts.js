import SingleContact from "./SingleContact";

function Contacts({contacts}) {
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
