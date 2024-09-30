// src/components/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // {{ edit_1 }}

const LoginPage = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login Credentials:', credentials);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50" style={{ fontFamily: 'Roboto, sans-serif' }}> 
            <h1 className="text-4xl font-bold mb-4">Login</h1> 
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105"> 
                <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2> 
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded mb-4 p-2 w-full hover:border-blue-500" 
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="border border-gray-300 rounded mb-4 p-2 w-full hover:border-blue-500" 
                    required
                />
                <Link to="/dashboard">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Login
                    </button>
                </Link>
                <div className="mt-4">
                    <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
