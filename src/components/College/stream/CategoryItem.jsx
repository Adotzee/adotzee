import { faChevronDown, faChevronUp, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgramList from "./ProgramList";

// Category Component - Memoized for performance
const CategoryItem = ({ course, selectedCategory, onCategorySelect }) => {
    const isSelected = selectedCategory === course.category;
    
    return (
      <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
        {/* Category Header */}
        <div
          className={`cursor-pointer p-5 sm:p-6 rounded-xl
            transition-all duration-300 flex items-center justify-between
            ${isSelected
              ? "bg-blue-50 shadow-md"
              : "bg-gray-50 hover:bg-gray-100"
            }`}
          onClick={() => onCategorySelect(course.category)}
        >
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 
              ${isSelected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}
              transition-all duration-300`}>
              <FontAwesomeIcon icon={faUniversity} className="text-lg" />
            </div>
            <div>
              <span className={`font-semibold text-lg sm:text-xl ${isSelected ? "text-blue-700" : "text-gray-800"}`}>
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
            ${isSelected ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}
            transition-all duration-300`}>
            <FontAwesomeIcon
              icon={isSelected ? faChevronUp : faChevronDown}
              className="transition-transform duration-300"
            />
          </div>
        </div>
  
        {/* Program List - Only load when selected */}
        {isSelected && (
          <ProgramList addons={course.addons} />
        )}
      </div>
    );
  }
  export default CategoryItem;