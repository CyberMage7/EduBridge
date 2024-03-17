import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import { FaGraduationCap as SchoolIcon } from "react-icons/fa";

function Timeline() {
  return (
    <>
    <div className="features-header">
            <h2 className="features-heading-text underline1 op">Exam Timeline</h2>
          </div>
    <VerticalTimeline className="Vertical-timeline">
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="4th December 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">NSTSE</h3>
        <h4 className="vertical-timeline-element-subtitle">
          National Level Science Talent Search Examination
        </h4>
        <p>
          For more details{" "}
          <a className="a-time" href="https://www.unifiedcouncil.com/about-nstse.html">
            Click Here
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="3rd December 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">ZIO</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Zonal Informatics Olympiad
        </h4>
        <p>
          For more details <a className="a-time" href="https://www.iarcs.org.in/">Click Here</a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="3 September 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">PRMO</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Pre Regional Mathematics Olympiad
        </h4>
        <p>
          For more details{" "}
          <a className="a-time" href="https://olympiads.hbcse.tifr.res.in/mathematical/prmo/">
            Click Here
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="26th November 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">NSEJS</h3>
        <h4 className="vertical-timeline-element-subtitle">
          National Science Examination in Junior Science
        </h4>
        <p>
          For more details{" "}
          <a className="a-time" href="https://iapt.org.in/88-activities/2432-schedule-for-nses-inos-ios.html">
            Click Here
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="21 April 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">NTSE</h3>
        <h4 className="vertical-timeline-element-subtitle">
          National Talent Search Examination
        </h4>
        <p>
          For more details{" "}
          <a className="a-time" href="https://ntsescholars.com/ntse_official_link.php">
            Click Here
          </a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="21 April 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">NDA</h3>
        <h4 className="vertical-timeline-element-subtitle">
          National Defence Academy
        </h4>
        <p>
          For more details{" "}
          <a className="a-time" href="https://www.shiksha.com/exams/nda-exam">Click Here</a>
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentArrowStyle={{ borderRight: "30px solid  rgb(33, 150, 243)" }}
        date="7 November 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">KVPY</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Kishore Vaigyanik Protsahan Yojana
        </h4>
        <p>
          For more details <a className="a-time" href="https://www.iarcs.org.in/">Click Here</a>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </>
  );
}

export default Timeline;
