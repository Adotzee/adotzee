import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { useCourse } from "../../Context/courseData";
import { useEffect, useState } from "react";
import Back from "../../components/common/Back";
import Footer from "../../components/common/Footer";

export default function CollegeList() {
  const { addonName } = useParams();
  const { commerceCourses, scienceCourses, humanitiesCourses, collegeLocations , dotzeeChoiceColleges } = useCourse(); // Get all courses from context

  const [selectedColleges, setSelectedColleges] = useState([]);

  useEffect(() => {
    const allCourses = [
      ...commerceCourses,
      ...scienceCourses,
      ...humanitiesCourses,
    ];

    const foundAddon = allCourses
    .flatMap((course) => course.addons)
    .find((addon) => addon.name.trim().toLowerCase() === addonName.trim().toLowerCase());
    if (foundAddon) {
      setSelectedColleges(foundAddon.colleges);
    }
  }, [addonName, commerceCourses, scienceCourses, humanitiesCourses ]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Back />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] flex flex-col items-center pt-20 px-4">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold text-center">
          Colleges Offering {addonName}
        </h1>

        <div className="mx-4 sm:mx-10 md:mx-40 bg-white/80 backdrop-blur-lg p-6 mb-10 rounded-xl shadow-lg w-fit md:min-w-4xl max-w-4xl mt-12">
          <p className="text-lg text-gray-700 font-medium mt-2 mb-6 text-center">
            🎓 Choose the college that aligns with your interests.
          </p>

          <ul className="p-0 space-y-4">
            {selectedColleges.length > 0 ? (
              selectedColleges.map((college, index) => (
                <li
                key={index}
                className="p-4 pt-5 md:pt-4 border border-gray-300 rounded-lg flex justify-between items-center bg-white overflow-hidden shadow-md transition-all duration-300 
                hover:bg-blue-100 hover:shadow-lg transform hover:scale-101 relative"
              >
                {!addonName.toUpperCase().includes("NURSING") && !addonName.toUpperCase().includes("Paramedical") && dotzeeChoiceColleges.includes(college.toUpperCase()) &&  (
                  <p className="absolute top-0 left-0 m-0 px-2 py-0.5 bg-yellow-500 text-white text-xs font-semibold rounded-br-lg">
                    ⭐ Adotzee's Choice
                  </p>
                )}
              
                <div className="flex items-center space-x-2 md:space-x-4">
                  <span className="text-xl">🎓</span>
                  <span className="text-[#041C32] font-semibold   md:text-lg text-size-sm font-medium text-left">
                    {college}
                  </span>
                  <span className="text-gray-500 text-xs md:text-sm flex items-center">
                    <i className="fa-solid fa-location-dot mr-1"></i> {collegeLocations[college] || "Unknown"}
                  </span>
                </div>
              
                <div className="flex items-center space-x-5">
                  <a
                    href={`https://wa.me/918281060462?text=${encodeURIComponent(
                      `I need to know about ${addonName} in ${college}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 font-semibold transition-all duration-300 hover:text-blue-800 hover:underline"
                  >
                    📩 Fees & details
                  </a>
                </div>
              </li>
              
              ))
            ) : (
              <p className="text-center text-gray-600">
                No colleges found for this course.
              </p>
            )}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}
