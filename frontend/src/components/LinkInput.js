// src/components/LinkInput.js
import React, { useState } from 'react';

const LinkInput = ({ fetchData }) => {
    const [link, setLink] = useState('');

    const handleFetchData = () => {
        // Simulate fetching data
        const dummyData = [
            ['Name', 'Email', 'Event'],
            ['John Doe', 'john@example.com', 'Tech Conference'],
            ['Jane Smith', 'jane@example.com', 'Art Exhibition'],
        ];
        fetchData(dummyData);
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter Google Sheets Link"
                className="border p-2 mb-2 w-1/2"
            />
            <button
                onClick={handleFetchData}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Fetch Data
            </button>
        </div>
    );
};

export default LinkInput;
