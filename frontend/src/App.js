// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Create this component
import SignupPage from './components/SignupPage'; // Create this component
import LoginPage from './components/LoginPage'; // Create this component
import Dashboard from './components/Dashboard'; // Create this component
import CreateEvent from './components/CreateEvent'; // Create this component

const App = () => {
    const [data, setData] = useState([]);

    const fetchData = async (link) => {
        try {
            const response = await fetch(link);
            const text = await response.text();
            const csvData = text.split('\n').map(row => row.split(','));
            setData(csvData);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Failed to fetch data. Please check the link.');
        }
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard data={data} fetchData={fetchData} />} />
                    <Route path="/create-event" element={<CreateEvent />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
