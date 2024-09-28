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
        // Here you might want to actually log the user out, e.g., clear tokens
        // and navigate to a different page after logout
        // navigate('/login'); // Uncomment if you want to navigate to login
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
      </div>
    </>
  );
};

export default Sidebar;
