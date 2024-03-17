import { useTypewriter} from 'react-simple-typewriter'
import "./body.css";
import homeimg from "../../../assets/homeimg.png";
import studyimg from "../../../assets/book.png";
import scholarimg from "../../../assets/scholarship1.png";
import quizimg from "../../../assets/asset 14.svg";
import videoimg from "../../../assets/asset 15.svg";
import donateimg from "../../../assets/video-call.png";
import doubtimg from "../../../assets/asset 16.svg";

function Body() {
  const [typeEffect] = useTypewriter({
    words: [' Fun', ' Love', ' Future', ' Power'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div className="App body-home">
      <section id="hero">
        <div className="text-content">
          <h2>Welcome to <span>LearnHub</span></h2>
          {/* <h4>where</h4> */}
          <h1>Learning is
            <span>{typeEffect}</span></h1>
        </div>
        <div className="image-container">
          <img src={homeimg} alt="Background Image" />
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="container-feature">
          <div className="features-header">
            <h2 className="features-heading-text underline1-b op">Our Features</h2>
          </div>
          <div className="features-area flex">
            <div className="features-card flex">
              <img src={studyimg} alt="s1" id="sc-img" />
              <h3>Study Materials</h3>
              <p>
                Study at your own pace with the Guide Books by NCERT all at one place.
              </p>
              <a href="/study" className="secondary-button lea">Learn More <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src={scholarimg} alt="s2" id="sc-img" />
              <h3>ScholarShips</h3>
              <p>
                Get To Know About Various Government ScholarShips.
              </p>
              <a href="scholarship" className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src={quizimg} alt="s3" />
              <h3>Quizzes</h3>
              <p>
                Pinpoint knowledge gaps and improve understanding with personalized quiz feedback.
              </p>
              <a className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src={videoimg} alt="s4" />
              <h3>Videos</h3>
              <p>
                Explore key concepts through engaging, informative videos with expert instruction.
              </p>
              <a href='/video' className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src={donateimg} alt="s5" id="sc-img" style={{ height: '71px' }} />
              <h3>Video-Calling</h3>
              <p>
              Elevate your learning experience through face-to-face video calls with peers.
              </p>
              <a href="/lobby" className="secondary-button" style={{ marginBottom: '8px' }}>Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
            <div className="features-card flex">
              <img src={doubtimg} alt="s6" />
              <h3>Doubt Engine</h3>
              <p>Complex doubts made simple with our powerful doubt engine.</p>
              <a className="secondary-button">Learn more <i className="fa-solid fa-right-long"></i></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;