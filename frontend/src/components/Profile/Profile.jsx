import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar";
import "./Profile.css";
import Header_pricing from "../Header/Header_pricing";

const Profile = () => {
  const [profile, setProfile] = useState({
    id: "",
    full_name: "",
    email: "",
    password: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const URL = "http://127.0.0.1:8000/api";

  const handleSave = async () => {
    try {
      const updatedProfile = {
        ...profile,
        password: profile.password ? profile.password : undefined,
      };

      await axios.put(`${URL}/users/${profile.id}`, updatedProfile);

      Swal.fire({
        icon: "success",
        title: "Profile updated successfully!",
        confirmButtonText: "OK",
      });

      setIsEditing(false);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to update profile.",
        text: "Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("user"));
    console.log(userData);
    const userId = userData.id;
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${URL}/users/${userId}`);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  // Handlers for sidebar actions
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleViewSubscription = () => {
    Swal.fire({
      title: "Subscription Details",
      text: "Your current subscription plan: Premium",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <Header_pricing />
      <div className="profile-page">
        <Sidebar
          onEditProfile={handleEditProfile}
          onViewSubscription={handleViewSubscription}
        />
        <div className="profile-content">
          <div className="profile-header">
            <h2>Profile Information</h2>
            {!isEditing && (
              <button onClick={() => setIsEditing(true)} className="edit-btn">
                Edit Profile
              </button>
            )}
          </div>
          <div className="profile-info">
            <div className="profile-field">
              <label>Employee Number:</label>
              <p>{profile.id}</p>
            </div>
            <div className="profile-field">
              <label>Full Name:</label>
              {isEditing ? (
                <input
                  type="text"
                  name="full_name"
                  value={profile.full_name}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.full_name}</p>
              )}
            </div>
            <div className="profile-field">
              <label>Email:</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{profile.email}</p>
              )}
            </div>
            <div className="profile-field">
              <label>Password:</label>
              {isEditing ? (
                <>
                  <h6>
                    If you do not want to change the password, leave the field
                    blank.
                  </h6>
                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <p>*******</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="profile-actions">
              <button onClick={handleSave} className="save-btn">
                Save Changes
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
