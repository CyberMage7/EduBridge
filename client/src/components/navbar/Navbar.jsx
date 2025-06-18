import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaUserCheck, FaSignOutAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, userName, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="EduBridge Logo" className="logo" />
          <span className="brand-text">EduBridge</span>
        </div>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className="nav-link">Donate</Link>
          </li>
          <li 
            className="nav-item dropdown" 
            onMouseEnter={() => setIsDropdownOpen(true)} 
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="nav-link">Contact Us</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <FaPhone className="dropdown-icon" />
                  <div>
                    <span className="dropdown-label">Phone</span>
                    <span className="dropdown-value">+91 9996103246</span>
                  </div>
                </div>
                <div className="dropdown-item">
                  <FaEnvelope className="dropdown-icon" />
                  <div>
                    <span className="dropdown-label">Email</span>
                    <span className="dropdown-value">edubridge@gmail.com</span>
                  </div>
                </div>
                <div className="dropdown-item">
                  <FaMapMarkerAlt className="dropdown-icon" />
                  <div>
                    <span className="dropdown-label">Address</span>
                    <span className="dropdown-value">JIIT, Noida, Uttar Pradesh</span>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
        
        <div className="navbar-actions">
          {isLoggedIn ? (
            <div className="user-section">
              <div className="user-info" data-username={`Welcome, ${userName || 'User'}`}>
                <span className="user-name">Welcome, {userName || 'User'}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-logout">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="./login">
                <button className="btn btn-login">
                  <FaUser />
                  <span>Login</span>
                </button>
              </Link>
              <Link to="./signup">
                <button className="btn btn-signup">
                  <FaUserCheck />
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
