import React from "react";
import Body from "./Body/Body";
import Navbar from "../navbar/Navbar";
import Timeline from "./Timeline/Timeline";
import Footer from "../footer/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Body />
      <Timeline />
      <Footer/>
    </>
  );
}

export default Homepage;
