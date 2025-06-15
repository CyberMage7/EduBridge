import React from 'react';
import "./about.css";
import Navbar from '../navbar/Navbar';
import studentimg from "../../assets/student.png";
import Footer from "../footer/Footer";
import { FaBookOpen, FaUsers, FaGraduationCap, FaHeart, FaLightbulb, FaHandsHelping } from "react-icons/fa";

const About = () => {
    return (
        <>
        <Navbar />
        <div className='body-about'>
            <section id="about-head" className="section-p1">
                <img src={studentimg} alt="About EduBridge" />
                <div>
                    <h2>About EduBridge</h2>
                    <p>
                        Welcome to <strong>EduBridge</strong> - where education meets opportunity. We are a comprehensive educational platform 
                        designed specifically for underprivileged students in grades 6-10, bridging the gap between potential and achievement.
                    </p>
                    <p>
                        Our mission is to democratize quality education by providing free access to study materials, interactive learning tools, 
                        peer collaboration features, and academic support systems - all in one unified platform.
                    </p>
                    <abbr title="Empowering Education for All">
                        <strong>Empowering students through accessible, technology-driven education that breaks barriers and builds futures.</strong>
                    </abbr>
                </div>
            </section>

            <section id="mission-vision" className="section-p1">
                <div className="mission-container">
                    <div className="mission-card">
                        <FaLightbulb className="mission-icon" />
                        <h3>Our Mission</h3>
                        <p>
                            To make quality education accessible to every student, regardless of their economic background, 
                            by providing comprehensive learning resources and fostering a collaborative educational environment.
                        </p>
                    </div>
                    <div className="mission-card">
                        <FaGraduationCap className="mission-icon" />
                        <h3>Our Vision</h3>
                        <p>
                            To create an educational ecosystem where every student has the tools, resources, and support 
                            they need to achieve their academic dreams and unlock their full potential.
                        </p>
                    </div>
                </div>
            </section>

            <section id="impact" className="section-p1">
                <div className="impact-container">
                    <h2 className="impact-title">Our Impact</h2>
                    <div className="impact-content">
                        <div className="impact-item">
                            <div className="impact-icon">
                                <FaBookOpen />
                            </div>
                            <div className="impact-text">
                                <h3>Comprehensive Resources</h3>
                                <p>Access to complete NCERT curriculum for grades 6-10, ensuring no student is left behind in their educational journey.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <div className="impact-icon">
                                <FaUsers />
                            </div>
                            <div className="impact-text">
                                <h3>Collaborative Learning</h3>
                                <p>Peer-to-peer learning through video calls and study groups, fostering a supportive community of learners.</p>
                            </div>
                        </div>
                        <div className="impact-item">
                            <div className="impact-icon">
                                <FaHeart />
                            </div>
                            <div className="impact-text">
                                <h3>Community Support</h3>
                                <p>Connecting students with donors and scholarship opportunities, creating pathways for continued education.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="why-choose">
                <div className="why-header">
                    <h2>Why Choose EduBridge?</h2>
                    <p>Discover what makes our platform the perfect choice for your educational journey</p>
                </div>
                
                <div className="benefits-grid">
                    <div className="benefit-item">
                        <div className="benefit-icon">💡</div>
                        <h4>Free & Accessible</h4>
                        <p>No hidden costs or subscription fees</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">📚</div>
                        <h4>Curriculum Aligned</h4>
                        <p>Content follows NCERT guidelines</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">🎯</div>
                        <h4>Interactive Learning</h4>
                        <p>Engaging quizzes and multimedia content</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">👥</div>
                        <h4>Peer Support</h4>
                        <p>Real-time collaboration with fellow students</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">🎓</div>
                        <h4>Scholarship Access</h4>
                        <p>Information about financial aid opportunities</p>
                    </div>
                    <div className="benefit-item">
                        <div className="benefit-icon">🤝</div>
                        <h4>Community Driven</h4>
                        <p>Book donation platform for resource sharing</p>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default About;
