import React from 'react';
import "./about.css";
import Navbar from '../navbar/Navbar';
import studentimg from "../../assets/student.png";
import Anshulimg from "../../assets/devloper1.jpeg";
import Vishwasimg from "../../assets/devloper2.jpg";
import Satwikimg from "../../assets/devloper3.jpg";
import Sumitimg from "../../assets/devloper4.jpg";
import Footer from "../footer/Footer";
import { FaGithub,FaLinkedin } from "react-icons/fa";


const About = () => {
    return (
        <>
        <Navbar />
        <div className='body-about'>
            <section id="about-head" className="section-p1">
                <img src={studentimg} alt="About Us" />
                <div>
                    <h2>Who We Are</h2>
                    <p>Welcome to 'Learn Hub' , where you can learn at your own pace. We Provide The Guide Book by NCERT, doubt engine to solve 
                        their doubts, videos they can search according to their own topic required. Our mission is to help students learn while the distractions stay away from them.
                    </p>
                    <abbr title="">Empowering students through a user-friendly web platform platform which will help them 
                        in achieving their dreams.
                    </abbr>
                    <br /><br />
                    <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Empowering students through a user-friendly web platform platform which will help them 
                        in achieving their dreams.
                    </marquee>
                </div>
            </section>

            <section id="develop">
            <div className="features-header">
            <h2 className="features-heading-text underline1 op">Meet Our Developers</h2>
          </div>
    
                <div className="dev-container">
                    <div className="pro">
                        <img src={Vishwasimg} alt="" />
                        <div className="des">
                            <span>Vishwas Mishra</span>
                            <h4>Full-Stack Developer</h4>
                            <a href="https://github.com/CyberMage7">
                                {/* <i className="fab fa-github"></i> */}
                                <FaGithub/>
                                </a>
                            <a href="https://www.linkedin.com/in/vishwas-mishra-4b6315257/"><FaLinkedin/></a>
                        </div>
                    </div>

                    <div className="pro">
                        <img src={Anshulimg} alt="" />
                        <div className="des">
                            <span>Anshul Kansal</span>
                            <h4>Full-Stack Developer</h4>
                            <a href="https://github.com/anshulkansal04/"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/anshul-kansal-5740a2254/"><FaLinkedin/></a>
                        </div>
                    </div>

                    <div className="pro">
                        <img src={Satwikimg} alt="" />
                        <div className="des">
                            <span>Satwik Pandey</span>
                            <h4>Front-End Developer</h4>
                            <a href="https://github.com/worldisconfusion"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/satwik-p-770516251/"><FaLinkedin/></a>
                        </div>
                    </div>

                    <div className="pro">
                        <img src={Sumitimg} alt="" />
                        <div className="des">
                            <span>Sumit Khemka</span>
                            <h4>Front-End Developer</h4>
                            <a href="https://github.com/SumitKhemka123"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/sumit-khemka/"><FaLinkedin/></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
};

export default About;
