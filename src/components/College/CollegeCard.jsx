import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLocationDot, faStar, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const CollegeCard = ({ 
  college, 
  location, 
  isAdotzeeChoice, 
  addonName 
}) => {
  return (
    <div className="relative w-full transition-all duration-300 transform hover:scale-101">
      {isAdotzeeChoice && (
        <div className="absolute -top-2 -left-2 z-10">
          <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold rounded-lg shadow-md">
            <FontAwesomeIcon icon={faStar} className="text-white" />
            <span>Adotzee's Choice</span>
          </div>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row items-stretch border border-blue-100 p-4 bg-white rounded-xl shadow-md hover:shadow-lg">
        {/* College icon and info */}
        <div className="flex items-center flex-1">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow text-white">
              <FontAwesomeIcon 
                icon={faGraduationCap}
                className="text-lg"
              />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-blue-900 font-bold text-lg md:text-xl mb-1 truncate">
              {college}
            </h3>
            <div className="flex justify-center md:justify-start  items-center text-gray-600 text-sm">
              <FontAwesomeIcon 
                icon={faLocationDot} 
                className="mr-2 text-blue-500"
              />
              <span className="truncate">
                {location || "Location not specified"}
              </span>
            </div>
            
            {addonName && (
              <div>
                <span className="inline-flex items-center m-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {addonName}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  flexible duration
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Action button */}
        <div className="mt-4 md:mt-0 md:ml-4 flex items-center justify-end">
          <a
             href={`https://wa.me/918281060462?text=${encodeURIComponent(
              `I need to know about ${addonName} in ${college}`
            )}`}
            target='_blank'
              rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Fees & Details
          </a>
        </div>
      </div>
    </div>
  );
}
export default CollegeCard;

