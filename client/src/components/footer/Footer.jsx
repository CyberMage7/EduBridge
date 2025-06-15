import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from "../../assets/logo.png";

function UniqueFooter() {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Company Info Section */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src={logo} alt="EduBridge Logo" />
              <span className="company-name">EduBridge</span>
            </div>
            <p className="company-description">
              Empowering learners through comprehensive study materials, scholarships, 
              interactive quizzes, peer video calls, and educational videos. Your journey 
              to academic excellence starts here.
            </p>
            <div className="social-links">
              <span className="social-text">Follow us:</span>
              <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/study">Study Materials</a></li>
              <li><a href="/scholarship">Scholarships</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footer-section">
            <h3 className="section-title">Services</h3>
            <ul className="footer-links">
              <li><a href="/quiz">Interactive Quizzes</a></li>
              <li><a href="/lobby">Video Calls</a></li>
              <li><a href="/video">Educational Videos</a></li>
              <li><a href="/donate">Support Education</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section contact-info">
            <h3 className="section-title">Get in Touch</h3>
            <div className="contact-item">
              <FaEnvelope className='contact-icon'/>
              <span>contact@edubridge.com</span>
            </div>
            <div className="contact-item">
              <FaPhone className='contact-icon'/>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className='contact-icon'/>
              <span>Education District, Learning City</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 EduBridge. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default UniqueFooter;
