import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChevronDown, 
  faChevronUp, 
  faArrowRight, 
  faBookOpen, 
  faGraduationCap,
  faSearch,
  faStar,
  faUniversity,
  faCertificate,
  faGlobe,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/common/Navbar";
import Counts from "../../components/Stat/Counts";
import Footer from "../../components/common/Footer";
import { useCourse } from "../../Context/courseData";
import Back from "../../components/common/Back";

export default function Commerce() {
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || ""
  );
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { commerceCourses } = useCourse();

  // Filter courses based on search term
  const filteredCourses = commerceCourses.map(courseCategory => ({
    ...courseCategory,
    addons: courseCategory.addons.filter(addon => 
      addon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(courseCategory => 
    courseCategory.category.toLowerCase().includes(searchTerm.toLowerCase()) || 
    courseCategory.addons.length > 0
  );


  // Store selected category in localStorage
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Back />
      <Navbar />

      {/* Main container with light theme */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pb-16">
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="flex flex-col items-center">
            <div className="relative mb-8 animate-fadeIn">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight">
                Professional Commerce Degrees
              </h1>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-blue-600 rounded-full"></div>
            </div>

            <div className="bg-white shadow-lg rounded-full py-3 px-6 mb-12 transform hover:scale-105 transition-transform duration-300">
              <p className="text-gray-700 text-center flex items-center text-base sm:text-lg">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-blue-600" />
                Over <span className="text-blue-600 font-bold mx-2">24,000+</span>
                students have earned global qualifications with us
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for specialized programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white  border-0 rounded-full py-4 pl-14 pr-6 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md text-lg"
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" 
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
            {/* Header */}
            <div className="bg-gray-800 py-7">
              <div className="flex items-center justify-center space-x-3">
                <FontAwesomeIcon icon={faGlobe} className="text-blue-400 text-2xl sm:text-3xl" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Commerce Programs
                </h2>
              </div>
            </div>

            {/* Course Categories */}
            <div className="p-5 sm:p-8">
              {filteredCourses.length > 0 ? (
                <div className="grid gap-8">
                  {filteredCourses.map((course, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
                      {/* Category Header */}
                      <div
                        className={`cursor-pointer p-5 sm:p-6 rounded-xl
                          transition-all duration-300 flex items-center justify-between
                          ${selectedCategory === course.category
                            ? "bg-blue-50 shadow-md"
                            : "bg-gray-50 hover:bg-gray-100"
                          }`}
                        onClick={() =>
                          setSelectedCategory((prev) =>
                            prev === course.category ? "" : course.category
                          )
                        }
                      >
                        <div className="flex items-center">
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 
                            ${selectedCategory === course.category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}
                            transition-all duration-300`}>
                            <FontAwesomeIcon icon={faUniversity} className="text-lg" />
                          </div>
                          <div>
                            <span className={`font-semibold text-lg sm:text-xl ${selectedCategory === course.category ? "text-blue-700" : "text-gray-800"}`}>
                              {course.category}
                            </span>
                            <div className="mt-1">
                              <span className="text-sm bg-blue-100 text-blue-700 float-left px-2 py-0.5 rounded-full">
                                {course.addons.length} programs
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className={`flex items-center justify-center w-10 h-10 rounded-full 
                          ${selectedCategory === course.category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}
                          transition-all duration-300`}>
                          <FontAwesomeIcon
                            icon={selectedCategory === course.category ? faChevronUp : faChevronDown}
                            className="transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Addon Courses */}
                      {selectedCategory === course.category && (
                        <div className="mt-3 p-5 sm:p-6 bg-gray-50 rounded-xl border border-gray-200 animate-fadeIn">
                          <div className="bg-blue-100 rounded-lg p-4 mb-6 flex items-center justify-center">
                            <span className="text-gray-800 text-base sm:text-lg font-medium flex items-center">
                              <FontAwesomeIcon icon={faStar} className="mr-2 text-blue-600" />
                              Programs
                            </span>
                          </div>

                          <div className="grid grid-cols-1 gap-5">
                            {course.addons.map((addon, idx) => {
                              
                              return (
                                <div
                                  key={idx}
                                  className="bg-white rounded-xl overflow-hidden
                                  transition-all duration-300 hover:shadow-lg border border-gray-200
                                  transform hover:-translate-y-1"
                                  onClick={() => navigate(`/college/${addon.name}`)}
                                  tabIndex="0"
                                  role="button"
                                  aria-label={`View colleges for ${addon.name}`}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      navigate(`/college/${addon.name}`);
                                    }
                                  }}
                                >
                                  {/* Card Header */}
                                  <div className="bg-gray-800 p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                      <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3 shrink-0">
                                        <FontAwesomeIcon icon={faBookOpen} className="text-white" />
                                      </div>
                                      <h3 className="text-white font-semibold text-lg leading-tight">
                                        {addon.name}
                                      </h3>
                                      </div>
                                      <div className="bg-blue-700/40 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 group-hover:bg-blue-700/70 transition-colors duration-300">
                                View Colleges
                                <faArrowRight
                                  size={14}
                                  className="group-hover:translate-x-1 transition-transform duration-300" 
                                />
                              </div>
                                    </div>
                                    {/* <div className="p-4"> */}
                                    
                                  {/* </div> */}
                                  </div>

                                  {/* Card Body */}
                                 
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                  <div className="text-gray-700 text-lg mb-4">No programs match your search criteria</div>
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-full transition-colors duration-200"
                  >
                    Reset Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <Counts />
        <Footer />
      </div>
    </>
  );
}