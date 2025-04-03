import { faArrowRight, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProgramCard = ({ addon, navigate }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden border border-gray-200
      transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
      onClick={() => navigate(`/college/${addon.name}`)}
      tabIndex="0"
      role="button"
      aria-label={`View colleges for ${addon.name}`}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && navigate(`/college/${addon.name}`)}
    >
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faBookOpen} className="text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg">{addon.name}</h3>
          </div>
          <div className="bg-blue-400/40 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 
            transition-all duration-300 hover:bg-blue-700/70">
            View Colleges
            <FontAwesomeIcon icon={faArrowRight} size="lg" className="transition-transform duration-300 hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
