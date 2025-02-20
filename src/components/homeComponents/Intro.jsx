import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesBackground from "../../particles/particle";

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative w-full flex items-center justify-center min-h-screen text-gray-800 text-center bg-gray-100 overflow-hidden pt-3 pb-3"
      >
        <div className="absolute top-0 left-0 w-full h-full z-5 pointer-events-none">
          <ParticlesBackground />
        </div>

        <div
          className="w-full md:mt-10 max-w-4xl bg-white shadow-xl mx-10 rounded-3xl p-6 sm:p-8 md:p-10 relative z-10"
          data-aos="fade-up"
        >
          <h1 className="text-2xl sm:text-2xl md:text-5xl font-extrabold leading-tight mb-4">
            Are You Looking{" "}
            <span className="text-blue-600">for College Admission</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">
            Join a network of degree students guiding new learners in securing
            admissions for
            <span className="text-blue-500">
              {" "}
              Science, Humanities, and Commerce
            </span>
            .
          </p>
          <h1 className="text-md sm:text-lg md:text-xl text-gray-500 mb-6">
            Choose the Stream for Future{" "}
            <span className="animate-bounce">↓</span>
          </h1>
          <div
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            data-aos="zoom-in"
          >
            <button
              onClick={() => navigate("/science")}
              className="bg-blue-700 hover:bg-blue-500 hover:text-gray-200 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Do Degree in Science
            </button>

            <button
              onClick={() => navigate("/commerce")}
              className="bg-primary hover:bg-blue-700 hover:text-gray-200 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Do Degree in Commerce
            </button>

            <button
              onClick={() => navigate("/humanities")}
              className="bg-blue-700 hover:bg-blue-500 hover:text-gray-200 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Do Degree in Humanities
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
