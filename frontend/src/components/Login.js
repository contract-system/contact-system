import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate import
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {
                email,
                password,
            });

            // Extract user info
            const { token, user, message: successMessage } = response.data;

            // Store the token in local storage
            localStorage.setItem('token', token);

            console.log('Login successful:', user);
            setMessage(successMessage || 'Login successful!');

            // Redirect to the appropriate dashboard based on user role
            if (user.role_id === 1) {
                navigate('/admin'); // Redirect to Admin Dashboard
            } else {
                navigate('/user'); // Redirect to User Dashboard
            }
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            setMessage('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link></p> {/* Registration link */}
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
