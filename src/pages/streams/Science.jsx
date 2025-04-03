import { useEffect, useState, Suspense, lazy, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGraduationCap,
  faSearch,
  faGlobe,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { 
  Skeleton, 
  CircularProgress, 
  Fade, 
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCourse } from "../../Context/courseData";
import LinearLoading from "../../components/common/LinearLoading";
import CategoryItem from "../../components/College/stream/CategoryItem";

// Create Material UI theme to match your application's style
const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // blue-600
    },
    secondary: {
      main: '#1f2937', // gray-800
    },
  },
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#2563eb',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(226, 232, 240, 0.6)',
        },
      },
    },
  },
});

// Lazy load components with prefetching
const Navbar = lazy(() => {
  // Simulate prefetching
  import("../../components/common/Navbar");
  return import("../../components/common/Navbar");
});

const Back = lazy(() => import("../../components/common/Back"));
const Counts = lazy(() => import("../../components/Stat/Counts"));
const Footer = lazy(() => import("../../components/common/Footer"));

// Loading fallback components
const LoadingFallback = () => (
  <div className="flex justify-center items-center py-12">
    <CircularProgress color="primary" size={36} />
  </div>
);

// More detailed skeleton loader for courses
const CourseSkeletonLoader = () => (
  <div className="rounded-xl overflow-hidden shadow-lg mb-8">
    <div className="p-5 sm:p-6 rounded-xl bg-gray-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Skeleton variant="circular" width={48} height={48} animation="wave" />
          <div className="ml-4">
            <Skeleton variant="text" width={180} height={30} animation="wave" />
            <Skeleton variant="text" width={100} height={20} animation="wave" />
          </div>
        </div>
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
      </div>
    </div>
  </div>
);






export default function Science() {
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || "" );
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { scienceCourses } = useCourse();
  
  // Media query for responsive design
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Prevent unnecessary recalculations with useMemo
  const filteredCourses = useMemo(() => {
    const searchTermLower = searchTerm.toLowerCase();
    return scienceCourses
      .map(courseCategory => ({
        ...courseCategory,
        addons: (courseCategory.addons || []).filter(addon => 
          addon?.name?.toLowerCase()?.includes(searchTermLower)
        )
      }))
      .filter(courseCategory => 
        courseCategory.category?.toLowerCase()?.includes(searchTermLower) || 
        courseCategory.addons.length > 0
      );
  }, [scienceCourses, searchTerm]);

  // Handle category selection with useCallback
  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(prev => prev === category ? "" : category);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  // Store selected category in localStorage
  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  // Initial data loading with abort controller for cleanup
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const controller = new AbortController();
    
    // Simulate data loading
    const timer = setTimeout(() => {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }, 800);
    
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  // Intersection Observer for lazy loading images
  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.setAttribute('src', src);
            img.removeAttribute('data-src');
            imgObserver.unobserve(img);
          }
        }
      });
    }, { rootMargin: '50px' });
  }, [loading, filteredCourses]);

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LinearLoading />}>
        <Back />
      </Suspense>
      
      <Suspense fallback={<LinearLoading />}>
        <Navbar />
      </Suspense>

      {/* Main container with light theme */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 pb-16">
        {/* Hero Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="flex flex-col items-center">
            <Fade in={true} timeout={800}>
              <div className="relative mb-8 animate-fadeIn">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 text-center leading-tight">
                  Professional Commerce Degrees
                </h1>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-40 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
            </Fade>

              <div className="bg-white shadow-lg rounded-full md:py-3 px-6 mb-12 transform hover:scale-105 transition-transform duration-1000">
                <p className="text-gray-700 text-center flex items-center text-base sm:text-lg">
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-3 text-blue-600" />
                  Over <span className="text-blue-600 font-bold mx-2 ">24+</span>
                  students have Joined with us
                </p>
              </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto  px-4 sm:px-4 lg:px-8 mb-10">
                  <div className="relative flex justfy-between">
                    <input
                      type="text"
                      placeholder="Search for specialized programs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white  border-0 rounded-full py-2.5 md:py-4 pl-14 pr-6 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md text-lg"
                    />
                    <FontAwesomeIcon 
                      icon={faSearch} 
                      className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" 
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm("")}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 bg-white "
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    )}
                  </div>
                </div>

        {/* Main Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mx-4 sm:mx-5 md:mx-18 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl">
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
              {loading ? (
                // Skeleton loaders while content is loading
                <div className="grid gap-8">
                  {Array.from({ length: isMobile ? 3 : 5 }).map((_, idx) => (
                    <CourseSkeletonLoader key={idx} />
                  ))}
                </div>
              ) : filteredCourses.length > 0 ? (
                <div className="grid gap-8">
                  {filteredCourses.map((course, index) => (
                    <CategoryItem 
                      key={`${course.category}-${index}`}
                      course={course}
                      selectedCategory={selectedCategory}
                      onCategorySelect={handleCategorySelect}
                    />
                  ))}
                </div>
              ) : (
                <Fade in={true}>
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="text-gray-700 text-lg mb-4">No programs match your search criteria</div>
                    <button 
                      onClick={clearSearch}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-8 rounded-full transition-colors duration-200"
                    >
                      Reset Search
                    </button>
                  </div>
                </Fade>
              )}
            </div>
          </div>
        </div>
        
        {/* Intersection Observer based lazy loading for components at the bottom */}
        <div>
          <Suspense fallback={<LinearLoading />}>
            <Counts />
          </Suspense>
        </div>
        
        
        <div>
          <Suspense fallback={<LinearLoading/>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}