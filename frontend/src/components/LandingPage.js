// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4 transition-transform transform hover:scale-105">
                Welcome to Eventify!
            </h1>
            <p className="text-lg text-center mb-6">
                Our platform simplifies event planning and management, allowing you to create, manage, and promote events effortlessly.
            </p>
            <div className="flex space-x-4">  
                <Link to="/signup">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Sign Up
                    </button>
                </Link>
                <Link to="/login">
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 transform hover:scale-105">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
