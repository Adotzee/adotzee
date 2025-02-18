import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AdmissionModal from './contactModal';

function Message() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
      };
  return (
    <>

    <div onMouseEnter={() => setOpenContact(true)} onMouseLeave={() => setOpenContact(false)}>
        {openContact && (
          <div
            // onMouseLeave={() => setOpenContact(false)}
            className="z-50 hidden md:flex xs:hidden flex-col items-end fixed bottom-18 right-4 space-x-3 opacity-100 mt-4 transition-all duration-500 ease-in-out transform"
          >
            <a
              href="https://www.facebook.com/share/1WeqyuRjTd/?mibextid=wwXIfr"
              rel="noopener noreferrer"
              target="_blank"
              className="group decoration-none flex items-center content-center mb-2  bg-blue-600 rounded-full p-2   shadow-md hover:bg-blue-700 transition-all duration-800 overflow-hidden w-8 h-8 hover:w-28"
            >
              <i className="fab fa-facebook text-white text-2xl ml-1.5"></i>
              <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Connect
              </span>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/adotzee.inn"
              target="_blank"
              className="group flex items-center bg-blue-500 mb-2 decoration-none rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-800 overflow-hidden w-8 h-8 hover:w-28"
            >
              <i className="fab fa-instagram text-white text-2xl ml-1.5"></i>
              <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Connect
              </span>
            </a>

            <a
              href="https://wa.me/918281060462?text=I%20want%20admission%20assistance"
              rel="noopener noreferrer"
              target="_blank"
              className="group decoration-none flex items-center bg-blue-600 mb-2 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-800 overflow-hidden w-8 h-8 hover:w-28"
            >
              <i className="fa-brands fa-whatsapp text-white text-2xl ml-1.5"></i>
              <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Connect
              </span>
            </a>
          </div>
        )}
        <a
          onClick={() => setIsModalOpen(true)}
          
          className="md:z-49 z-40 animate-bounce fixed bottom-4 right-4 bg-secondary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          <i className="fa-solid fa-message text-white text-2xl"></i>
        </a>
      </div>
      <AdmissionModal isOpen={isModalOpen} closeModal={closeModal} />
      </>
  )
}

export default Message