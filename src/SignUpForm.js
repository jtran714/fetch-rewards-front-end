import React from "react";

export default function SignUpForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [occupation, setOccupation] = React.useState("");
    const [state, setState] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const signUp = { name, email, password, occupation, state, submitted };
        const signUpUrl = "https://frontend-take-home.fetchrewards.com/form";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(signUp),
            headers: {
                "Content-Type": "application/json",
            },
        };
        
        const response = await fetch(signUpUrl, fetchConfig);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setName("");
                setEmail("");
                setPassword("");
                setOccupation("");
                setState("");
                setSubmitted(true);
            }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Full Name
                </label>
                <input
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full Name"
                />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div>
                <label htmlFor="password" className="form-label">
                    Password
                </label>
                <input
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <label htmlFor="occupation" className="form-label">
                    Occupation
                </label>
                <input
                    required
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                    type="text"
                    className="form-control"
                    id="occupation"
                    placeholder="Occupation"
                />
            </div>
            <div>
                <label htmlFor="state" className="form-label">
                    State
                </label>
                <input
                    required
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                    type="text"
                    className="form-control"
                    id="state"
                    placeholder="State"
                />
            </div>
            <button className="btn btn-primary">Create</button>
            {submitted && (
                <div className="success-message">
                    Success! Thank you for signing up!!
                </div>
            )}
        </form>
    );
};