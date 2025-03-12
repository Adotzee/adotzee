import React from "react";
import { useNavigate } from "react-router-dom";

function Back() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div
      onClick={handleBackClick}
      className="z-50 cursor-pointer fixed md:top-8 top-19 md:left-10 left-5 bg-gray-600/25 text-white rounded-full h-10 w-10 shadow-lg hover:text-black focus:outline-none flex items-center justify-center"
    >
      <i className="fa-solid fa-chevron-left opacity-100"></i>
    </div>
  );
}

export default Back;
