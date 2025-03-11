import React, { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import LinearLoading from "../components/Loader/LinearLoading";

const Intro = lazy(() => import("../components/homeComponents/Intro"));
const About = lazy(() => import("../components/homeComponents/About"));
const Services = lazy(() => import("../components/homeComponents/Services"));
const Contact = lazy(() => import("../components/homeComponents/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const Message = lazy(() => import("../components/homeComponents/Message"));

function Home() {
  return (
    <>
      <Helmet>
        <title>Adotzee - Your Degree Admission Guide</title>
        <meta
          name="description"
          content="Find the best degree courses and college admissions in Bengaluru. Join the student community."
        />
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
