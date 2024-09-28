import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/main.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });

      const { token, user, message: successMessage } = response.data;

      // Store the token and user details in session storage
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', JSON.stringify(user));

      console.log('Login successful:', user);
      setMessage(successMessage || 'Login successful!');

      // Redirect to the appropriate dashboard based on user role
      if (user.role_id === 1) {
        navigate('/'); // Redirect to Admin Dashboard
      } else {
        navigate('/'); // Redirect to User Dashboard
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <section className="hero-section hero-1 style-hero-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="hero-content text-center">
                <h1 className="text-red">Login</h1>
                <form onSubmit={handleLogin} className="login-form mt-4">
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
                  <button type="submit" className="theme-btn theme-btn-2">
                    <span>Login <i className="fas fa-chevron-right"></i></span>
                  </button>
                </form>
                <div className="mt-3">
                  <p className="text-red">Don't have an account? <Link to="/Register">Register here</Link></p>
                  {message && <p>{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
