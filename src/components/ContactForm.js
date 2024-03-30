


function ContactForm() {
    return (
        <form>
            <label for="first-name">First Name: </label>
            <br/>
            <input id="first-name"></input>
            <br/>
            <label for="last-name">Last Name: </label>
            <br/>
            <input id="last-name"></input>
            <br/>
            <label for="phone">Phone: </label>
            <br/>
            <input id="phone"></input>
            <br/>
            <label for="email">Email: </label>
            <br/>
            <input id="email"></input>
            <br/>
            <label for="message">Message: </label>
            <br/>
            <input id="message"></input>
            <br/>
            <button>Submit</button>
        </form>
    )
};


export default ContactForm