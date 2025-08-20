import { Skeleton } from '@mui/material';
import React, { lazy, Suspense } from 'react'
const FooterLogo = lazy(() => import("../LazyImages/FooterLogo"));

function Footer() {
  return (
    <>
      <div className="w-full mt-8 text-center text-gray-700">
        <Suspense fallback={
          <div className="flex items-center">
            <Skeleton height={40} width={40} />
          </div>
        } >
          <FooterLogo />
        </Suspense>

        <p className='mt-0 mb-0'>&copy; All Rights Reserved. ADOTZEE</p>
        {/* bottom-left version info */}
      </div>

      <div className="flex  space-x-3 mt-2 md:pb-10 pb-2 items-center justify-center">
        <a
          href="https://www.facebook.com/share/1WeqyuRjTd/?mibextid=wwXIfr"
          rel="noopener noreferrer"
          target="_blank"
          className="group flex decoration-none  bg-blue-600 rounded-full p-2 items-center  shadow-md hover:bg-blue-700 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32"
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
          className="group flex items-center decoration-none bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32"
        >
          <i className="fab fa-instagram text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </a>

        <a
          href={`https://wa.me/918281060462?text=${encodeURIComponent(
            "Hello! I Need Admission"
          )}`}
          rel="noopener noreferrer"
          target="_blank"
          className="group decoration-none flex items-center bg-blue-600 rounded-full p-2 shadow-md hover:bg-blue-600 transition-all duration-300 overflow-hidden w-8 h-8 hover:w-32"
        >
          <i className="fa-brands fa-whatsapp text-white text-2xl ml-1.5"></i>
          <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Connect
          </span>
        </a>
      </div>
      <div className="relative bottom-0 left-5 pb-2 text-xs text-gray-500">
        
        <div className="flex items-center space-x-1">
          <span>v1.2.5</span>
          <span>•</span>
          <span>
            Powered by{" "}
            <a
              href="https://webzio-info.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 hover:scale-110"
            >
              Webzio
            </a>
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer