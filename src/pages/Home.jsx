import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/homeComponents/Intro";
import About from "../components/homeComponents/About";
import Services from "../components/homeComponents/Services";
import Contact from "../components/homeComponents/Contact";
import { useNavigate } from "react-router-dom";
import AdmissionModal from "../components/homeComponents/contactModal";
import Footer from "../components/Footer";
import Message from "../components/homeComponents/Message";

function Home() {
 

 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      {/* <Navbar /> */}
      <Intro />
      <About />
      <Services />
      <Contact />
      <Footer/>
      <Message/>
    </div>
  );
}

export default Home;
