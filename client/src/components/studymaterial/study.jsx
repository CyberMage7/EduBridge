import React from 'react';
import './study.css';
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer";
function Study() {
  return (
   <>
   <Navbar />
   <div className='body-study'>
      <section id="st-header-study">
        <div className="heading">
          <h1 className="underline1 h1-s">Study Material</h1>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="card">
            <div className="cover item-a">
              <h1 className='h1-s h2-s'>Class 6</h1>
              <div className="card-back">
                <a href="https://ncert.nic.in/textbook/pdf/fhvs1dd.zip">Hindi</a>
                <a href="https://ncert.nic.in/textbook/pdf/fehl1dd.zip">English</a>
                <a href="https://ncert.nic.in/textbook/pdf/femh1dd.zip">Maths</a>
                <a href="https://ncert.nic.in/textbook/pdf/fess3dd.zip">Social Science</a>
                <a href="https://ncert.nic.in/textbook/pdf/fhsk1dd.zip">Sanskrit</a>
                <a href="https://ncert.nic.in/textbook/pdf/fesc1dd.zip">Science</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cover item-b">
              <h1 className='h1-s h2-s'>Class 7</h1>
              <div className="card-back">
                <a href="https://ncert.nic.in/textbook/pdf/ghdv1dd.zip">Hindi</a>
                <a href="https://ncert.nic.in/textbook/pdf/gehc1dd.zip">English</a>
                <a href="https://ncert.nic.in/textbook/pdf/gemh1dd.zip">Maths</a>
                <a href="https://ncert.nic.in/textbook/pdf/gess3dd.zip">Social Science</a>
                <a href="https://ncert.nic.in/textbook/pdf/ghsk1dd.zip">Sanskrit</a>
                <a href="https://ncert.nic.in/textbook/pdf/gesc1dd.zip">Science</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cover item-c">
              <h1 className='h1-s h2-s'>Class 8</h1>
              <div className="card-back">
                <a href="https://ncert.nic.in/textbook/pdf/hhvs1dd.zip">Hindi</a>
                <a href="https://ncert.nic.in/textbook/pdf/hehd1dd.zip">English</a>
                <a href="https://ncert.nic.in/textbook/pdf/hemh1dd.zip">Maths</a>
                <a href="https://ncert.nic.in/textbook/pdf/hess3dd.zip">Social Science</a>
                <a href="https://ncert.nic.in/textbook/pdf/ghsk1dd.zip">Sanskrit</a>
                <a href="https://ncert.nic.in/textbook/pdf/hhsk1dd.zip">Science</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <div className="cover item-d">
              <h1 className='h1-s h2-s'>Class 9</h1>
              <div className="card-back">
                <a href="https://ncert.nic.in/textbook/pdf/ihks1dd.zip">Hindi</a>
                <a href="https://ncert.nic.in/textbook/pdf/iebe1dd.zip">English</a>
                <a href="https://ncert.nic.in/textbook/pdf/iemh1dd.zip">Maths</a>
                <a href="https://ncert.nic.in/textbook/pdf/iess4dd.zip">Political Science</a>
                <a href="https://ncert.nic.in/textbook/pdf/iess3dd.zip">History</a>
                <a href="https://ncert.nic.in/textbook/pdf/iess2dd.zip">Economics</a>
                <a href="https://ncert.nic.in/textbook/pdf/ihsh1dd.zip">Sanskrit</a>
                <a href="https://ncert.nic.in/textbook/pdf/iesc1dd.zip">Science</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="cover item-e">
              <h1 className='h1-s h2-s'>Class 10</h1>
              <div className="card-back">
                <a href="https://ncert.nic.in/textbook/pdf/jhks1dd.zip">Hindi</a>
                <a href="https://ncert.nic.in/textbook/pdf/jeff1dd.zip">English</a>
                <a href="https://ncert.nic.in/textbook/pdf/jemh1dd.zip">Maths</a>
                <a href="https://ncert.nic.in/textbook/pdf/jess4dd.zip">Political Science</a>
                <a href="https://ncert.nic.in/textbook/pdf/jess3dd.zip">History</a>
                <a href="https://ncert.nic.in/textbook/pdf/jess2dd.zip">Economics</a>
                <a href="https://ncert.nic.in/textbook/pdf/jhsk1dd.zip">Sanskrit</a>
                <a href="https://ncert.nic.in/textbook/pdf/jesc1dd.zip">Science</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
   </>
  );
}

export default Study;
