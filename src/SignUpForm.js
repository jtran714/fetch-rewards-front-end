import React from "react";

export default function SignUpForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [occupation, setOccupation] = React.useState([]);
    const [state, setState] = React.useState([]);
    const [selectedOccupation, setSelectedOccupation] = React.useState("");
    const [selectedState, setSelectedState] = React.useState("");
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            const url = "https://frontend-take-home.fetchrewards.com/form";
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setOccupation(data.occupations);
                setState(data.states);
            }
        };
        fetchData();
    }, []);

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
            <div className="form-group">
                <label htmlFor="occupation">
                    Occupation
                </label>
                <select 
                    className="form-control" 
                    id="occupation" 
                    value={selectedOccupation} 
                    onChange={(event) => setSelectedOccupation(event.target.value)}>
                <option value="">
                    Select your occupation
                </option>
                    {occupation.map((occupation) => (
                    <option key={occupation} value={occupation}>
                        {occupation}
                    </option>
                ))}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="state">
                    State
                </label>
                <select 
                    className="form-control" 
                    id="state" 
                    value={selectedState} 
                    onChange={(event) => setSelectedState(event.target.value)}>
                <option value="">
                    Select a state
                </option>
                    {state.map((state) => (
                    <option key={state.abbreviation} value={state.name}>
                        {state.name}
                    </option>
                ))}
                </select>
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