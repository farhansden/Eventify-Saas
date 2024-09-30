// src/components/CreateEvent.js
import React, { useState } from 'react';

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        eventName: '',
        date: '',
        description: '',
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle event creation logic here
        console.log('Event Data:', eventData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-6">Create Event</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <input
                    type="text"
                    name="eventName"
                    placeholder="Event Name"
                    value={eventData.eventName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded mb-4 p-2 w-full"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded mb-4 p-2 w-full"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    value={eventData.description}
                    onChange={handleChange}
                    className="border border-gray-300 rounded mb-4 p-2 w-full"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
