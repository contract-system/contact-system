import React from 'react';
import LogoutButton from './LogoutButton';
const AdminDashboard = () => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('token');

    return (
        <div>
            <h2>Admin Dashboard</h2>
            {/* Display the token */}
            <p>Your token: {token}</p>
            <LogoutButton />
        </div>
    );
};

export default AdminDashboard;
