import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  // Handle logout click
  const handleLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Logged out!",
          "You have successfully logged out.",
          "success"
        );
        // Clear tokens or perform other logout actions
        // navigate('/login'); // Uncomment to redirect to login
      }
    });
  };

  // Navigate to profile
  const onEditProfile = () => {
    navigate("/profile");
  };

  // Navigate to subscription
  const onViewSubscription = () => {
    navigate("/subscription");
  };

  return (
    <>
      <div className="sidebar">
<<<<<<< HEAD:frontend/src/components/Profile/Sidebar.js
        <a className="active" onClick={onEditProfile}>
          Edit Profile
        </a>
        <a onClick={onViewSubscription}>View Subscription</a>
        <a className="logout" onClick={handleLogout}>
          Logout
        </a>
=======
        <ul className="sidebar-menu">
          <li className="sidebar-item" onClick={onEditProfile}>
            {/* <Link to={"/userPro"}></Link> */}
            Edit Profile
          </li>
          <li className="sidebar-item" onClick={onViewSubscription}>
            View Subscription
          </li>
          <li className="sidebar-item logout" onClick={handleLogout}>
            Logout
          </li>
        </ul>
>>>>>>> 1edd1ac50d181a8d40458d1f8c168a9009f5e251:frontend/src/components/Profile/Sidebar.jsx
      </div>
    </>
  );
};

export default Sidebar;
