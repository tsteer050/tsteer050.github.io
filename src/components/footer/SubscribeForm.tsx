import React, { useState } from "react";

const SubscribeForm = ({ status, message, onValidated }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && firstName && lastName && email.indexOf("@") > -1) {
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
    
            setFirstName("");
            setLastName("");
            setEmail("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {status === "success" ? (
                <div>
                    <p>
                        {message}
                    </p>
                </div>
            ) : (
                <>
                    <input 
                        value={firstName}
                        type="text"
                        placeholder="First Name"
                        required={true}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        value={lastName}
                        type="text"
                        placeholder="Last Name"
                        required={true}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input
                        value={email}
                        type="email"
                        placeholder="Email Address"
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="submit" value="SUBMIT" />
                </>
            )}
        </form>
    );
};

export default SubscribeForm;
