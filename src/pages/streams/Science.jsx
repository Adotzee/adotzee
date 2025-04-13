import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faGraduationCap,
  faUniversity,
  faBookOpen,
  faSearch,
  faTimes,
  faExternalLinkAlt,
  faInfoCircle,
  faFilter
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/common/Navbar";
import Counts from "../../components/Stat/Counts";
import Footer from "../../components/common/Footer";
import { useCourse } from "../../Context/courseData";
import Back from "../../components/common/Back";

export default function Science() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { scienceCourses } = useCourse();
  const inputRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const filteredCourses = searchTerm.trim()
    ? scienceCourses
        .map((c) => ({
          ...c,
          addons: c.addons.filter((a) =>
            a.name && a.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          
        }))
        .filter((c) => c.addons.length)
    : scienceCourses;

  const toggleCategory = (category) => {
    setSelectedCategory((prev) => (prev === category ? "" : category));
  };

  const highlightText = (text, keyword) => {
    const parts = text.split(new RegExp(`(${keyword})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <span key={i} className="bg-yellow-300/30 text-white font-bold px-1 rounded">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <Back />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] pt-10 px-4 pb-10">
        {/* Hero */}
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl md:text-4xl md:mt-15 font-bold">Explore Science Career Options</h1>
          <p className="mt-2 text-lg flex justify-center items-center">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            Over <span className="text-yellow-400 font-bold mx-1">24+</span> students started careers with us!
          </p>
        </div>

        {/* Search Bar & Header */}
        <div className="max-w-4xl mx-auto bg-primary/50 backdrop-blur-lg p-6 rounded-xl shadow-xl mb-10">
          <div className="flex justify-between items-center flex-wrap gap-4 mb-4 w-full">
            <h2 className="text-2xl font-bold text-white text-center w-full md:w-auto flex-1">
              Science Degree Courses
            </h2>
            <div className="relative">
              <div
                className={`flex items-center bg-white/30 p-2 rounded-full transition-all duration-300 ${showSearch ? "w-64" : "w-4"}`}
              >
                <FontAwesomeIcon
                  icon={showSearch ? faTimes : faSearch}
                  className="text-white cursor-pointer"
                  onClick={() => {
                    if (showSearch) setSearchTerm("");
                    setShowSearch(!showSearch);
                  }}
                />
                {showSearch && (
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search courses..."
                    className="ml-2 bg-transparent border-none outline-none text-white placeholder-white/70 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                )}
              </div>
            </div>
          </div>

          {searchTerm && (
            <div className="mb-4 flex justify-between items-center bg-white/20 p-3 rounded-md">
              <div className="text-white">
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filtering: <span className="font-bold">"{searchTerm}"</span>
              </div>
              <button onClick={() => setSearchTerm("")} className="text-white hover:text-gray-600 bg-black/10 rounded-md">
                <FontAwesomeIcon icon={faTimes} className="mr-1" />
                Clear
              </button>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <div className="text-white text-center p-6 bg-white/20 rounded-md">
              <FontAwesomeIcon icon={faSearch} className="text-2xl mb-2" />
              <p>No courses found for "{searchTerm}"</p>
            </div>
          )}

          {/* Course Categories */}
          {filteredCourses.map((course, index) => (
            <div key={index} className="mb-4">
              <div
                className={`cursor-pointer p-4 rounded-md flex justify-between items-center ${selectedCategory === course.category
                  ? "bg-white text-primary font-bold"
                  : "bg-white/20 text-white hover:bg-white/30"}`}
                onClick={() => toggleCategory(course.category)}
              >
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faUniversity} />
                  {course.category}
                  <span className="bg-white/20 px-2 rounded-full text-sm whitespace-nowrap overflow-hidden text-ellipsis">{course.addons.length} courses</span>
                </div>
                <FontAwesomeIcon
                  icon={selectedCategory === course.category ? faChevronUp : faChevronDown}
                />
              </div>

              {selectedCategory === course.category && (
                <div className="mt-3 bg-white/20 p-4 rounded-md">
                  <h3 className="text-white mb-3 flex items-center justify-center">
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    Click a course to view colleges
                  </h3>
                  <ul className="grid grid-cols-1 p-0 md:grid-cols-2 gap-3">
                    {course.addons.map((addon, idx) => (
                      <li
                        key={idx}
                        className="bg-white/30 text-white p-3 rounded-md flex justify-between items-center hover:bg-white/40 cursor-pointer"
                        onClick={() => navigate(`/college/${addon.name}`)}
                      >
                        <span className="flex items-center">
                          <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                          <p className="font-semibold text-sm md:text-md" >
                          {searchTerm ? highlightText(addon.name, searchTerm) : addon.name}

                          </p>                        </span>
                        <div className="flex underline items-center gap-1 text-xs whitespace-nowrap">
                          <p>click for colleges</p>
                          <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </div>
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
    </>
  );
}