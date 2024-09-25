import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <div className="stats">
                <h2>Statistics</h2>
                <ul>
                    <li>Total Users: 150</li>
                    <li>Total Contacts: 300</li>
                    <li>Messages Sent: 50</li>
                </ul>
            </div>
            <div className="recent-activities">
                <h2>Recent Activities</h2>
                <ul>
                    <li>User John Doe added a new contact.</li>
                    <li>User Jane Smith sent a message.</li>
                    <li>User Alex Johnson logged in.</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
