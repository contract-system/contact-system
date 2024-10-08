import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/main.css';

const Register = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
              "http://127.0.0.1:8000/api/register",
              {
                full_name: fullName,
                email,
                password,
                role_id: 2,
              }
            );

            console.log('Registration successful:', response.data);
            setMessage('Registration successful! You can now log in.');
            navigate('/login'); // Redirect to login
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            setMessage(error.response ? error.response.data.message : 'Registration failed. Please try again.');
        }
    };
    const handleBackToHome = () => {
        navigate('/'); // Navigate back to the home page
      };
    

    return (
        <section className="hero-section hero-1 style-hero-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="hero-content text-center">
                <h1 className="text-red">Register</h1>
                <form onSubmit={handleRegister} className="login-form mt-4">
                  <div className="form-group mb-3">
                    <label htmlFor="fullName" className="text-red">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="text-red">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="text-red">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {/* Hidden role ID input */}
                  <input
                    type="hidden"
                    id="roleId"
                    value={1} // Set role ID to 1
                  />
                  <button type="submit" className="theme-btn theme-btn-2">
                    <span>Register <i className="fas fa-chevron-right"></i></span>
                  </button>
                </form>
                <div className="mt-3">
                  <p className="text-red">Already have an account? <a href="/Login" className="text-red">Login here</a></p>
                  {message && <p>{message}</p>}
                </div>
                <button onClick={handleBackToHome} className="btn btn-secondary mt-3">
                  Back to Home
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default Register;
