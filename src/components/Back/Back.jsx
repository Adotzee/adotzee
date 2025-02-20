import React from 'react'
import { useNavigate } from 'react-router-dom';

function Back() {
    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate(-1); // This navigates to the previous page in history
    };
  return (
    <div
  onClick={handleBackClick}
  className="cursor-pointer fixed top-8 left-10 text-white rounded-full h-10 w-10 shadow-lg hover:text-black focus:outline-none flex items-center justify-center"
>
  <i className="fa-solid fa-chevron-left"></i>
</div>

)
}

export default Back