import React, { lazy, Suspense } from "react";
import Navbar from "../components/common/Navbar";
import { Helmet } from "react-helmet-async";
import LinearLoading from "../components/common/LinearLoading";

const Intro = lazy(() => import("../components/home/Intro"));
const About = lazy(() => import("../components/home/About"));
const Services = lazy(() => import("../components/home/Services"));
const Contact = lazy(() => import("../components/contact/Contact"));
const Footer = lazy(() => import("../components/common/Footer"));
const Message = lazy(() => import("../components/home/Message"));

function Home() {
  return (
    <>
      <Helmet>
        <title>Adotzee - Your Degree Admission Guide</title>
        <meta
          name="description"
          content="Find the best degree courses and college admissions in Bengaluru. Join the student community."/>
        <link rel="canonical" href="https://www.adotzee.in/" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
        <Navbar />
        <Suspense fallback={<LinearLoading />}>
          <Intro />
          <About />
          <Services />
          <Contact />
          <Footer />
          <Message />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
