import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Aboutimg from "../../src/Assets/night.jpg";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
const About = () => {
  return (
    <div>
      <Navbar />
      <Hero heroimg={Aboutimg} title="ABOUT " 
      cName = "hero-abt"

        
      />
      <Aboutus/>
      <Footer/>
    </div>
  );
};

export default About;
