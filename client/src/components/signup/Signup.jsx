import React, { useState } from "react";
import "./signup.css";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate=useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/signup",{
        fname,
        lname,
        email,
        password,
      });

      if (response.data.success) {
        navigate("/login");
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
    <div className="body-signup">
      <div className="wrapper-signup">
        <div className="signup-box">
          <div className="login-header">
            <span>Signup</span>
          </div>
          <form action="/signup" method="post">
            <div className="input-box">
            <div className="input-icon">
                <FaUser />
              </div>
              <input
                type="text"
                className="input-field"
                name="fname"
                id="fname"
                autoComplete="off"
                required
                onChange={(e) => setFname(e.target.value)}
              />

              <label htmlFor="user" className="label-signup">
                First Name
              </label>
            </div>
            <div className="input-box">
            <div className="input-icon">
                <FaUser />
              </div>
              <input
                type="text"
                className="input-field"
                name="lname"
                id="lname"
                autoComplete="off"
                required
                onChange={(e) => setLname(e.target.value)}
              />
              <label htmlFor="user" className="label-signup">
                Last Name
              </label>
            </div>

            <div className="input-box">
            <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="text"
                name="email"
                id="email"
                className="input-field"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="user" className="label-signup">
                E-Mail
              </label>
            </div>

            <div className="input-box">
            <div className="input-icon">
                <FaLock />
              </div>
              <input
                type="password"
                className="input-field"
                name="password"
                id="pass"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="pass" className="label-signup">
                Password
              </label>
            </div>

            <div className="input-box">
              <button
                className="input-submit"
                type="submit"
                onClick={handleSubmit}
              >
                SignUp
              </button>
            </div>
            <div className="register">
              <span>
                Already have an account? <Link to="/Login" style={linkStyle}>Login</Link>
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

export default Signup;
