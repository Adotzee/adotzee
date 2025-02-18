import { useParams } from "react-router-dom";
import { useCourse } from "../../components/Context/courseData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CollegeList() {
  const { addonName } = useParams(); // Get addon name from URL
  const { commerceCourses } = useCourse();

  // Find colleges for the selected addon course
  const selectedColleges =
    commerceCourses
      .flatMap((course) => course.addons)
      .find((addon) => addon.name === addonName)?.colleges || [];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] flex flex-col items-center pt-30">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold text-center">
           Colleges Offering {addonName}
        </h1>

        {/* <div className="bg-white p-6 rounded-lg shadow-xl w-full mx-50 md:w-[75%] mt-10"> */}
        <div className="mx-4 sm:mx-10 md:mx-40 bg-white backdrop-blur-lg p-2 mb-30 rounded-lg shadow-xs w-fit md:min-w-3xl mt-6">

          <ul className="p-0 m-0">
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
              <p className="text-center text-gray-600">No colleges found for this course.</p>
            )}
          </ul>
        </div>
      <Footer/>
      </div>
    </>
  );
}
