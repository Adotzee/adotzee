import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
import Counts from "../../components/Stat/Counts";
import Footer from "../../components/Footer";
import { useCourse } from "../../Context/courseData";
import Back from "../../components/Back/Back";

export default function Science() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate(); // Initialize navigation
  const { scienceCourses } = useCourse(); // Get scienceCourses from the context

  return (
    <>
      <Back />
      <Navbar />
      <div className="flex flex-col items-center min-h-screen min-w-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] w-full pt-10">
        <h1 className="pt-10 md:pt15 mt-0 text-white text-2xl md:text-4xl font-extrabold text-center">
          Find Your Path in Science
        </h1>

        <p className="text-white text-lg p-3">
          🎓 Over <span className="text-yellow-400 font-bold">24+</span> students have started their careers with us!
        </p>

        <div className="mx-4 sm:mx-10 md:mx-40 bg-primary/50 backdrop-blur-lg p-10 mb-30 rounded-2xl shadow-2xl w-fit md:min-w-5xl mt-10">
          <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
            Science Degree Courses
          </h1>

          {/* Category List */}
          <div className="flex flex-col gap-6">
            {scienceCourses.map((course, index) => (
              <div key={index} className="w-full">
                <div
                  className={`cursor-pointer p-4 border border-white/40 rounded-lg shadow-md text-lg font-semibold 
                  transition-all duration-300 ease-in-out flex items-center justify-between gap-3
                  ${selectedCategory === course.category ? "bg-white text-black font-bold" : "bg-transparent text-white hover:bg-white/20"}`}
                  onClick={() => setSelectedCategory((prev) => (prev === course.category ? "" : course.category))}
                >
                  📚 {course.category}
                  <FontAwesomeIcon
                    icon={selectedCategory === course.category ? faChevronUp : faChevronDown}
                    className="transition-transform duration-300"
                  />
                </div>

                {/* Show Addon Courses Under Selected Category */}
                {selectedCategory === course.category && (
                  <div className="mt-3 bg-white/20 p-4 rounded-lg">
                    <h3 className="text-white text-lg font-semibold text-center mb-2">
                      🎯 Click an Addon Course to See Colleges
                    </h3>
                    <ul className="list-none flex flex-col gap-3 m-0 p-0">
                      {course.addons.map((addon, idx) => (
                        <li
                          key={idx}
                          className="p-3 bg-white/30 text-white rounded-lg shadow-md 
                          transition-transform hover:scale-101 cursor-pointer flex justify-between items-center"
                          onClick={() => navigate(`/college/${addon.name}`)} // Navigate to CollegeList page
                        >
                          <span className="md:text-lg text-size-sm font-medium text-left">
                            📖 {addon.name}
                          </span>
                          <span className="text-sm text-white/80 text-right">
                            🔍 Click for Colleges
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Counts />
        <Footer />
      </div>
    </>
  );
}
