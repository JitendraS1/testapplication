import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'; // Import the initialized app

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(
                app.auth(),
                email,
                password
            );
            console.log('User created:', userCredential.user);
            // Handle successful signup (e.g., redirect)
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="signup-form">
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Signup;
