// src/components/UserDashboard.js
import React from 'react';
import LogoutButton from './LogoutButton';

const UserDashboard = () => {
    return (
        <div>
            <h2>User Dashboard</h2>
            <p>Your token: {localStorage.getItem('token')}</p>
            <LogoutButton /> {/* Use LogoutButton component */}
        </div>
    );
};

export default UserDashboard;
