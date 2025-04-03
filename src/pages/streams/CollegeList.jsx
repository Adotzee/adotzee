import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { useCourse } from "../../Context/courseData";
import { useEffect, useState } from "react";
import Back from "../../components/common/Back";
import Footer from "../../components/common/Footer";
import CollegeCard from "../../components/College/CollegeCard";

export default function CollegeList() {
  const { addonName } = useParams();
  const { commerceCourses, scienceCourses, humanitiesCourses, collegeLocations, dotzeeChoiceColleges, paraAdotzeeChoiceColleges } = useCourse(); // Get all courses from context

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Back />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#f4f7fa] to-[#e4e9f2] flex flex-col items-center pt-20 px-4">
        <h1 className="text-gray-900 text-2xl md:text-4xl font-extrabold text-center">
          Colleges Offering {addonName}
        </h1>

        <div className="mx-4 sm:mx-5 md:mx-40 bg-white/80 backdrop-blur-lg p-6 mb-10 rounded-xl shadow-lg w-fit md:min-w-4xl max-w-5/6 min-w-5/6 md:max-w-4xl mt-10">
          <p className="text-lg text-gray-700 font-medium mt-2 mb-6 text-center">
            Choose the college that aligns with your interests.
          </p>

          <ul className="p-0 space-y-4">
            {selectedColleges.length > 0 ? (
              selectedColleges.map((college, index) => (
                <CollegeCard
                  key={index}
                  college={college}
                  location={collegeLocations[college] || "Location not specified"}
                  isAdotzeeChoice={
                    addonName.toUpperCase().includes("NURSING") && paraAdotzeeChoiceColleges.includes(college.toUpperCase()) ||
                    !addonName.toUpperCase().includes("NURSING") && !addonName.toUpperCase().includes("Paramedical") && dotzeeChoiceColleges.includes(college.toUpperCase())
                  }
                  // onDetailsClick={()=>DetailsClick(addonName, college)}
                  addonName={addonName}
                />
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


