import React from 'react';
import './default_newsletter.scss';
const DefaultNewslatter = (props) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{props.text}</h1>
                <p>{props.petittext}</p>
                <input
                    aria-label="Your first name"
                    name="fields[first_name]"
                    placeholder="Your first name"
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                />
                <input
                    aria-label="Your email address"
                    name="email_address"
                    placeholder="Your email address"
                    required
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                />
                <button>SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default DefaultNewslatter;