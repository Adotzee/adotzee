import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useCourse } from "../../Context/courseData";
import { useEffect, useState } from "react";
import Back from "../../components/Back/Back";

export default function CollegeList() {
  const { addonName } = useParams(); // Get the addonName from the URL
  const { commerceCourses, scienceCourses, humanitiesCourses } = useCourse(); // Get all courses from context

  const [selectedColleges, setSelectedColleges] = useState([]);

  useEffect(() => {
    // Find the addon course by name in the selected category (Commerce, Science, Humanities)
    const allCourses = [
      ...commerceCourses,
      ...scienceCourses,
      ...humanitiesCourses,
    ];

    const foundAddon = allCourses
      .flatMap((course) => course.addons) // Flatten the array to search through all addons
      .find((addon) => addon.name === addonName); // Find the addon by its name

    if (foundAddon) {
      setSelectedColleges(foundAddon.colleges); // Set the colleges for the selected addon
    }
  }, [addonName, commerceCourses, scienceCourses, humanitiesCourses]); // Trigger when addonName or course data changes

  return (
    <>
      <Back />

      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] flex flex-col items-center pt-30">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold text-center">
          Colleges Offering {addonName}
        </h1>

        <div className="mx-4 sm:mx-10 md:mx-40 bg-white backdrop-blur-lg p-2 mb-10 rounded-lg shadow-xs w-fit md:min-w-3xl mt-12">
        <p class="text-lg text-gray-700 font-medium mt-4 mb-6 text-center">Choose the college that aligns with your interests.</p>

          <ul className="p-5 m-0">
            {selectedColleges.length > 0 ? (
              selectedColleges.map((college, index) => (
                <li
                  key={index}
                  className="p-2 mb-5 border-b text-left text-lg last:border-none text-[#041C32] flex justify-between items-center"
                >
                  🎓 {college}
                  <a
                    href={`https://wa.me/918281060462?text=${encodeURIComponent(
                      `I need to know about ${addonName} in ${college}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:text-sm text-xs text-blue-600 whitespace-nowrap hover:underline text-right"
                  >
                    📩 Fees & details
                  </a>
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
