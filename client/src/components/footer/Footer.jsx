import React from 'react';
import './footer.css';
import logo from "../../assets/logo.png";

function UniqueFooter() {
  return (
    <footer className="unique-footer">
      <div className="unique-footer-content">
        <div className="unique-app-info">
          <div className="unique-footer-logo">
            <a href="/">
              <img src={logo} alt="company logo" />
            </a>
          </div>
          <p>
            We specialize in delivering an enriching learning experience through
            a combination of study books, scholarships, customized quizzes,video calls among peers and
            videos to immerse learners in real-world scenarios, fostering a
            dynamic and engaging educational journey.
          </p>
        </div>

        <div className="unique-useful-links">
          <div className="unique-links-title">
            <span className="unique-links-title-span">Useful Links</span>
          </div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/study">Study Materials</a></li>
            <li><a href="/scholarship">Scholarships</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="">Doubt Engine</a></li>
            <li><a href="./video">Videos</a></li>
          </ul>
        </div>
      </div>
      <div className="unique-copyright">
        <h3>
          Copyright &copy; 2024 Mystique Matrix | All rights reserved | Developed
          By <a href="https://github.com/CyberMage7/Ride-Hack-24">Mystique Matrix</a>
        </h3>
      </div>
    </footer>
  );
}

export default UniqueFooter;
