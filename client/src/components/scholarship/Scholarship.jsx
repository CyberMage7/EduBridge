import React from 'react';
import './scholarship.css';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Scholarship() {
  return (
    <>
    <Navbar/ >
     <div className="cont-sc">
     <section id="st-header-sc">
        <div className="heading-sc">
          <h1 className="underline1-sc">Scholarships</h1>
        </div>
      </section>

      <div className="cards-sc">
        <div className="card-sc card-sc-1">
          <h2>Pre-Matric Scholarship Scheme for SC/ST Students (Class 6-10)</h2>
          <div className="card-desc">
            <ul>
              <li>
                <h3>Description</h3>
                <ul>
                  <li>
                    Covers tuition fees, examination fees, and maintenance allowance.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Minimum Requirements</h3>
                <ul>
                  <li>SC student</li>
                  <li>Class 6-10</li>
                  <li>For ST, Class 9-10</li>
                  <li>Family income below prescribed limit</li>
                </ul>
              </li>
              <li>
                <h3>Documents Required</h3>
                <ul>
                  <li>Aadhaar Card</li>
                  <li>Income Certificate</li>
                  <li>Caste Certificate</li>
                  <li>Marksheet</li>
                </ul>
              </li>
              <li>
                <h3>Official Website Link</h3>
                For more information and application process, please visit the
                <a href="https://scholarships.gov.in/">Official Website</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-sc card-sc-2">
          <h2>Merit-Cum-Means Scholarship (Beedi/Mine Workers)</h2>
          <div className="card-desc">
            <ul>
              <li>
                <h3>Description</h3>
                <ul>
                  <li>
                    Covers tuition fees, examination fees, and maintenance allowance.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Minimum Requirements</h3>
                <ul>
                  <li>Passed class 10 or equivalent examination.</li>
                  <li>Student should be the ward of a beedi or a mine worker.</li>
                  <li>Annual income of the parents should not exceed Rs. 1 lakh.</li>
                </ul>
              </li>
              <li>
                <h3>Documents Required</h3>
                <ul>
                  <li>Class 10 mark sheet or equivalent.</li>
                  <li>Income certificate.</li>
                  <li>Work certificate of the parents.</li>
                  <li>
                    Ration card/EPIC/any other valid identity proof of the student and parents.
                  </li>
                  <li>Domicile certificate of the student.</li>
                  <li>Bank account details of the student.</li>
                  <li>Caste certificate (if applicable).</li>
                  <li>Disability certificate (if applicable).</li>
                </ul>
              </li>
              <li>
                <h3>Official Site Link</h3>
                For more information and application process, please visit the
                <a href="https://scholarships.gov.in/">Official Website</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-sc card-sc-3">
          <h2>
            PM YASASVI Pre-Matric Scholarship Scheme for OBC, EBC, and DNT Students (Class 9-10)
          </h2>
          <div className="card-desc">
            <ul>
              <li>
                <h3>Description</h3>
                <ul>
                  <li>
                    Covers tuition fees, examination fees, and maintenance allowance.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Minimum Requirements</h3>
                <ul>
                  <li>OBC, EBC, or DNT student</li>
                  <li>Class 9-10</li>
                  <li>Family income below prescribed limit</li>
                </ul>
              </li>
              <li>
                <h3>Documents Required</h3>
                <ul>
                  <li>Aadhaar Card</li>
                  <li>Income Certificate</li>
                  <li>Caste Certificate (if applicable)</li>
                  <li>Marksheet</li>
                </ul>
              </li>
              <li>
                <h3>Official Site Link</h3>
                For more information and application process, please visit the
                <a href="https://scholarships.gov.in/">Official Website</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-sc card-sc-4">
          <h2>Gujarat Tribal Development Department Scholarships</h2>
          <div className="card-desc">
            <ul>
              <li>
                <h3>Minimum Requirements</h3>
              </li>
              <ul>
                <li>Belong to a Scheduled Tribe (ST) community in Gujarat.</li>
                <li>
                  Meet the specific eligibility criteria for the chosen scholarship scheme (may vary based on level of education, academic performance, etc.).
                </li>
                <li>Domicile certificate of Gujarat.</li>
              </ul>

              <li>
                <h3>Documents Required</h3>
              </li>
              <ul>
                <li>Caste certificate.</li>
                <li>Domicile certificate of Gujarat.</li>
                <li>Previous year's mark sheet/s.</li>
                <li>Income certificate.</li>
                <li>Admission fee receipt (if applicable).</li>
                <li>Bank account details (preferably Aadhaar linked).</li>
              </ul>

              <li>
                <h3>Official Site Link</h3>
                For more information and application process, please visit the
                <a href="https://tribal.gujarat.gov.in/">Official Website</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-sc card-sc-5">
          <h2>
            National Scholarship for Children of Workers Engaged in Unclean Occupations (Class 1-10)
          </h2>
          <div className="card-desc">
            <ul>
              <li>
                <h3>Description</h3>
                <ul>
                  <li>
                    Covers tuition fees, examination fees, and maintenance allowance.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Minimum Requirements</h3>
                <ul>
                  <li>Parent/Guardian engaged in unclean occupation</li>
                  <li>Class 1-10</li>
                </ul>
              </li>
              <li>
                <h3>Documents Required</h3>
                <ul>
                  <li>Aadhaar Card</li>
                  <li>Income Certificate</li>
                  <li>Parental Occupation Certificate</li>
                  <li>Marksheet</li>
                </ul>
              </li>
              <li>
                <h3>Official Site Link</h3>
                For more information and application process, please visit the
                <a href="https://haryanascbc.gov.in/pre-matric-scholarships-for-the-children-of-those-engaged-in-unclean-occupations">
                  Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-sc card-sc-6">
          <h2>National Talent Search Examination (NTSE)</h2>
          <div className="card-desc">
            <ul>
              <li>
                <h3>Description</h3>
                <ul>
                  <li>Covers maintenance allowance and book grant</li>
                </ul>
              </li>
              <li>
                <h3>Minimum Requirements</h3>
                <ul>
                  <li>Class 10 student</li>
                  <li>Top 1% in Class 10 exam</li>
                </ul>
              </li>
              <li>
                <h3>Documents Required</h3>
                <ul>
                  <li>Aadhaar Card</li>
                  <li>Marksheet</li>
                  <li>Caste Certificate (if applicable)</li>
                </ul>
              </li>
              <li>
                <h3>Official Site Link</h3>
                For more information and application process, please visit the
                <a href="https://ncert.nic.in/national-talent-examination.php">
                  Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  );
}

export default Scholarship;
