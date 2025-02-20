import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/homeComponents/Intro";
import About from "../components/homeComponents/About";
import Services from "../components/homeComponents/Services";
import Contact from "../components/homeComponents/Contact";
import Footer from "../components/Footer";
import Message from "../components/homeComponents/Message";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
    <Helmet>
                <title>Adotzee - Your Degree Admission Guide</title>
                <meta name="description" content="Find the best degree courses and college admissions in Kerala. Join the student community." />
                <link rel="canonical" href="https://www.adotzee.in/" />
            </Helmet>
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Message />
    </div>
    </>
  );
}

export default Home;
