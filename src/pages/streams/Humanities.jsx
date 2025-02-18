import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useCourse } from "../../components/Context/courseData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Humanities() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAddon, setSelectedAddon] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { humanitiesCourses } = useCourse();

  const selectedColleges =
    humanitiesCourses
      .find((course) => course.category === selectedCategory)
      ?.addons.find((addon) => addon.name === selectedAddon)?.colleges || [];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen min-w-screen bg-gradient-to-br from-[#041C32] to-[#04293A] w-full pt-10">
        <h1 className="mt-10 text-white text-4xl font-extrabold text-center">
          📜 Explore Humanities Degrees
        </h1>

        <div className="mx-4 sm:mx-15 md:mx-40 bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-fit md:min-w-5xl mt-10">
          <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
            🎭 Humanities Degree Courses
          </h1>

          {/* Category List */}
          <div className="flex flex-col gap-6 w-full">
            {humanitiesCourses.map((course, index) => (
              <div key={index} className="w-full">
                <div
                  className={`cursor-pointer p-4 border border-white/40 rounded-lg shadow-md text-lg font-semibold 
                    transition-all duration-300 ease-in-out flex items-center justify-between gap-3
                    ${
                      selectedCategory === course.category
                        ? "bg-white text-black font-bold"
                        : "bg-transparent text-white hover:bg-white/20"
                    }`}
                  onClick={() => {
                    setSelectedCategory((prev) =>
                      prev === course.category ? "" : course.category
                    );
                    setSelectedAddon("");
                  }}
                >
                  📖 {course.category}
                  <FontAwesomeIcon
                    icon={
                      selectedCategory === course.category
                        ? faChevronUp
                        : faChevronDown
                    }
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
                          onClick={() => {
                            setSelectedAddon(addon.name);
                            setIsModalOpen(true);
                          }}
                        >
                          <span className="md:text-lg text-size-sm font-medium text-left">
                            🏺 {addon.name}
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
      </div>

      {/* Modal for College List */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold text-[#041C32] mb-4 text-center">
              🏛️ Colleges Offering {selectedAddon}
            </h2>
            <ul>
              {selectedColleges.map((college, index) => (
                <li
                  key={index}
                  className="p-2 border-b last:border-none text-[#041C32] flex justify-between items-center"
                >
                  🎓 {college}
                  <a
                    href={`https://wa.me/918281060462?text=${encodeURIComponent(
                      `I need to Know about ${selectedAddon} in ${college}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    📩 More Info
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
