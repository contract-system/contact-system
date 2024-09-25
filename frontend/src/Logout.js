// src/components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      localStorage.removeItem('token');
      alert('Logged out successfully');
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.log(err);
      alert('Failed to log out');
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
