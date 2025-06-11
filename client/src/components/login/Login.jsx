import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,      });      if (response.data.success) {
        // Extract user data from response
        const userData = response.data.user || {};
        
        // Get first and last name from response
        const firstName = userData.first_name || '';
        const lastName = userData.last_name || '';
        
        // Create full name (or use first name only if preferred)
        const fullName = firstName && lastName ? `${firstName} ${lastName}` : firstName || 'User';
        
        console.log("Login successful for:", fullName);
        
        // Use the context's login function with name
        login(email, fullName);
        navigate("/");
      }
      else {
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="body-login">
      <div className="wrapper-login">
        <div className="login-box">
          <div className="login-header">
            <span>Login</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                id="user"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="user" className="label-login">
                E-mail
              </label>
            </div>
            <div className="input-box">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                name="password"
                type="password"
                id="pass"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="pass" className="label-login">
                Password
              </label>
            </div>

            <div className="input-box">
              <button className="input-submit" type="submit">Login</button>
            </div>
            <div className="register">
              <span>
                Don't have an account? <Link to="/signup" style={linkStyle}>Register</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

const linkStyle = {
  textDecoration: 'underline',
  color: 'white',
  marginLeft: '5px'
};

export default Login;
