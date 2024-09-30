// src/components/EventChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const EventChart = () => {
    const data = {
        labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
        datasets: [
            {
                label: 'Attendees',
                data: [12, 19, 3, 5, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded shadow-md">
            <h2 className="font-bold text-xl mb-4">Event Attendance</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default EventChart;
