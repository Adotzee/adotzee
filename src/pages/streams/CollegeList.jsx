import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCourse } from "../../Context/courseData";
import { useEffect, useState } from "react";
import Back from "../../components/Back/Back";

export default function CollegeList() {
  const { addonName } = useParams(); // Get the addonName from the URL
  const { commerceCourses, scienceCourses, humanitiesCourses, collegeLocations } = useCourse(); // Get all courses from context

  const [selectedColleges, setSelectedColleges] = useState([]);

  useEffect(() => {
    const allCourses = [
      ...commerceCourses,
      ...scienceCourses,
      ...humanitiesCourses,
    ];

    const foundAddon = allCourses
      .flatMap((course) => course.addons)
      .find((addon) => addon.name === addonName);

    if (foundAddon) {
      setSelectedColleges(foundAddon.colleges);
    }
  }, [addonName, commerceCourses, scienceCourses, humanitiesCourses]);

  return (
    <>
      <Back />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] flex flex-col items-center pt-20 px-4">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold text-center">
          Colleges Offering {addonName}
        </h1>

        <div className="mx-4 sm:mx-10 md:mx-40 bg-white/80 backdrop-blur-lg p-6 mb-10 rounded-xl shadow-lg w-full max-w-4xl mt-12">
          <p className="text-lg text-gray-700 font-medium mt-2 mb-6 text-center">
            🎓 Choose the college that aligns with your interests.
          </p>

          <ul className="p-0 space-y-4">
            {selectedColleges.length > 0 ? (
              selectedColleges.map((college, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg flex justify-between items-center bg-white shadow-md transition-all duration-300 
                  hover:bg-blue-100 hover:shadow-lg transform hover:scale-101"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🎓</span>
                    <span className="text-[#041C32] text-lg font-semibold">
                      {college}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
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
