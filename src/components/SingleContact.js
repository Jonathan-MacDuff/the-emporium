function SingleContact({contact}) {
    return (
        <div className="single-contact">
            <h2>{contact.firstName} {contact.lastName}</h2>
        </div>
    )
}

export default SingleContact;
