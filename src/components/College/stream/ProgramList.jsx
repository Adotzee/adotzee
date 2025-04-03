import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgramCard from "./ProgramCard";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Fade } from "@mui/material";

// ProgramList Component - Memoized
const ProgramList = ({ addons }) => {
  const navigate = useNavigate();
  
  return (
    <Fade in={true} timeout={400}>
      <div className="mt-3 p-5 sm:p-6 bg-gray-50 rounded-xl border border-gray-200">
        <div className="bg-blue-100 rounded-lg p-4 mb-6 flex items-center justify-center">
          <span className="text-gray-800 text-base sm:text-lg font-medium flex items-center">
            <FontAwesomeIcon icon={faStar} className="mr-2 text-blue-600" />
            Programs
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5">
  {addons.map((addon, idx) => (
    <div 
      key={idx} 
      className=" animate-fadeIn"
      style={{ animationDelay: `${idx * 300}ms` }} // 300ms delay per item
    >
      <ProgramCard addon={addon} navigate={navigate} />
    </div>
  ))}
</div>


      </div>
    </Fade>
  );
}
export default ProgramList;