import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaUserCheck, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";


function Navbar() {  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, userName, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="containers-n">
      <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <ul className="ul-navbar">
          <Link to="/">
            <li className="li-navbar">Home</li>
          </Link>
          <Link to="/donate">
            <li className="li-navbar">Donate</li>
          </Link>
          <Link to="/">
            <li className="li-navbar dropdown" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              Contact Us
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <p>Phone: <br />+91 9996103246</p>
                  <p>Email: edubridge@gmail.com</p>
                  <p>Address: Jaypee Institute Of Information Tecgnology,Noida,Uttar Pradesh</p>
                </div>
              )}
            </li>
          </Link>          <Link to="/about">
            <li className="li-navbar">About</li>
          </Link>        </ul>
        <div className="button-nav">          {isLoggedIn ? (
            <>
              <div className="user-info">
                <span className="user-name">{userName || 'User'}</span>
              </div>
              <button onClick={handleLogout} className="bn632-hover bn26 logout-btn">
                Logout <FaSignOutAlt />
              </button>
            </>
          ) : (
            <>
              <Link to="./login">
                <button className="bn632-hover bn26">Login <FaUser /></button>
              </Link>
              <Link to="./signup">
                <button className="bn632-hover bn26">SignUp <FaUserCheck /></button>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="button-nav"></div>
    </div>
  );
}

export default Navbar;
