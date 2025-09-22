import { Skeleton } from "@mui/material";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const HatImage = lazy(() => import("../LazyImages/HatImage"));
const TextImage = lazy(() => import("../LazyImages/TextImage"));
const LogoImage = lazy(() => import("../LazyImages/LogoImage"));

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(currentScrollPos < lastScrollTop);
      lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-[85%] align-middle top-0 fixed z-49 mx-[7.5%] mt-6">
      <header
        className={`bg-gray-500 bg-opacity-75 flex justify-between rounded-md items-center shadow-lg px-5 py-0 transition-all duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-28"
        }`}
      >
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center"
        >
          <Suspense
            fallback={
              <div className="flex items-center space-x-2">
                <Skeleton height={40} width={40} />
                <Skeleton height={20} width={120} />
                <Skeleton height={50} width={50} />
              </div>
            }
          >
            <HatImage />
            <TextImage />
            <LogoImage />
          </Suspense>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 me-20">
          {["About", "Admission", "Contact"].map((item) => (
            <a
              key={item}
              href={
                item === "Admission" ? "/admission" : `/#${item.toLowerCase()}`
              }
              className="text-gray-50 hover:text-gray-900 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          onClick={toggleMenu}
          className="cursor-pointer md:hidden p-1 text-gray-700"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </a>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            <div className="absolute overflow-auto -m-10 top-0 right-0 opacity-95 min-w-3/5 h-screen bg-blue-200 text-white p-5 flex flex-col items-center transition-transform transform md:hidden z-50 shadow-xl ease-in-out duration-500">
              <button onClick={toggleMenu} className="self-end text-2xl mb-5 bg-transparent">
              <i className="fa-solid fa-xmark"></i>
              </button>
              {["Home", "About", "Admission", "Contact"].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Admission"
                      ? "/admission"
                      : `/#${item.toLowerCase()}`
                  }
                  className="text-gray-600 hover:text-white py-3 text-lg w-full text-center rounded-md bg-opacity-20 hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg mb-2"                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            
            <div className="flex space-x-3 mt-auto pb-2 justify-center">
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
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Navbar;
