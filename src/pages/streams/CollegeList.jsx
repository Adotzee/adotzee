import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import { useCourse } from "../../Context/courseData";
import { useEffect, useState } from "react";
import Back from "../../components/common/Back";
import Footer from "../../components/common/Footer";
import CollegeCard from "../../components/College/CollegeCard";
import { Skeleton } from "@mui/material";
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';

// Lazy loaded college card with skeleton fallback
const LazyCollegeCard = ({ college, location, isAdotzeeChoice, addonName, scrollPosition }) => {
  return (
    <LazyLoadComponent
      scrollPosition={scrollPosition}
      threshold={400}
      placeholder={
        <Skeleton 
          variant="rounded" 
          width="100%" 
          height={200} 
          animation="wave"
          sx={{ bgcolor: 'rgba(200, 200, 200, 0.2)' }}
        />
      }
    >
      <CollegeCard
        college={college}
        location={location}
        isAdotzeeChoice={isAdotzeeChoice}
        addonName={addonName}
      />
    </LazyLoadComponent>
  );
};

const CollegeListWithLazyLoading = ({ scrollPosition }) => {
  const { addonName } = useParams();
  const { 
    commerceCourses, 
    scienceCourses, 
    humanitiesCourses, 
    collegeLocations, 
    dotzeeChoiceColleges, 
    paraAdotzeeChoiceColleges 
  } = useCourse();

  const [selectedColleges, setSelectedColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleColleges, setVisibleColleges] = useState(8);
  
  useEffect(() => {
    setLoading(true);

    const loadColleges = async () => {
      await new Promise(resolve => setTimeout(resolve, 500)); // short delay for smoother transition
      
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

      setLoading(false);
    };
    
    loadColleges();
  }, [addonName, commerceCourses, scienceCourses, humanitiesCourses]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const loadMoreColleges = () => {
    setVisibleColleges(prev => prev + 8);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= 
        document.documentElement.offsetHeight - 200 &&
        !loading &&
        visibleColleges < selectedColleges.length
      ) {
        loadMoreColleges();
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, visibleColleges, selectedColleges.length]);

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

          {loading ? (
            <div className="space-y-4">
              {[...Array(6)].map((_, index) => (
                <Skeleton 
                  key={index}
                  variant="rounded" 
                  width="100%" 
                  height={200} 
                  animation="wave"
                  sx={{ bgcolor: 'rgba(200, 200, 200, 0.3)' }}
                />
              ))}
            </div>
          ) : (
            <>
              {selectedColleges.length > 0 ? (
                <ul className="p-0 space-y-4">
                  {selectedColleges.slice(0, visibleColleges).map((college, index) => (
                    <LazyCollegeCard
                      key={index}
                      college={college}
                      location={collegeLocations[college] || "Location not specified"}
                      isAdotzeeChoice={
                        addonName.toUpperCase().includes("NURSING") && paraAdotzeeChoiceColleges.includes(college.toUpperCase()) ||
                        !addonName.toUpperCase().includes("NURSING") && !addonName.toUpperCase().includes("Paramedical") && dotzeeChoiceColleges.includes(college.toUpperCase())
                      }
                      addonName={addonName}
                      scrollPosition={scrollPosition}
                    />
                  ))}
                </ul>
              ) : (
                <div className="text-center p-10 bg-white/40 rounded-lg">
                  <p className="text-gray-600 text-xl">
                    No colleges found for this course.
                  </p>
                </div>
              )}

              {visibleColleges < selectedColleges.length && (
                <div className="text-center mt-6 p-4">
                  <Skeleton 
                    variant="rounded" 
                    width={200} 
                    height={20} 
                    animation="wave"
                    sx={{ bgcolor: 'rgba(200, 200, 200, 0.4)', margin: 'auto' }}
                  />
                  <p className="text-gray-500 mt-2 text-sm">Loading more colleges...</p>
                </div>
              )}
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default trackWindowScroll(CollegeListWithLazyLoading);
