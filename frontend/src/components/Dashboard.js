// src/components/Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkInput from './LinkInput'; // Import LinkInput component

const Dashboard = () => {
    const [data, setData] = useState([]);

    const fetchData = (fetchedData) => {
        setData(fetchedData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold">Total Events</h2>
                    <p className="text-2xl">10</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold">Total Attendees</h2>
                    <p className="text-2xl">200</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="font-bold">Recent Feedback</h2>
                    <p className="text-2xl">4.5/5</p>
                </div>
            </div>

            {/* Link Input Section */}
            <div className="mb-6">
                <LinkInput fetchData={fetchData} />
            </div>

            {/* Navigation to other functionalities */}
            <div className="flex space-x-4">
                <Link to="/create-event" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Create Event
                </Link>
                <Link to="/analytics" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    View Analytics
                </Link>
                <Link to="/feedback-forms" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Feedback Forms
                </Link>
            </div>

            {/* Display Fetched Data (if any) */}
            {data.length > 0 && (
                <div className="mt-6 w-full overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                {data[0].map((header, index) => (
                                    <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
