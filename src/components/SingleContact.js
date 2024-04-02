function SingleContact({contact}) {
    return (
        <div className="single-contact">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
        </div>
    )
}

export default SingleContact;
