import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.success) {
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
