import { Skeleton } from "@mui/material";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";

// Lazy load images
const HatImage = lazy(() => import("../components/LazyImages/HatImage"));
const TextImage = lazy(() => import("../components/LazyImages/TextImage"));
const LogoImage = lazy(() => import("../components/LazyImages/LogoImage"));

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
        {/* Logo Section with Lazy Loaded Images */}
        <div onClick={() => navigate("/")} className="flex cursor-pointer items-center">
        <Suspense
            fallback={
              <div className="flex items-center space-x-2">
                <Skeleton  height={40} width={40} />
                <Skeleton height={20} width={120} />
                <Skeleton  height={50} width={50} />
              </div>
            }
          >            <HatImage />
            <TextImage />
            <LogoImage />
          </Suspense>
        </div>

        <a onClick={toggleMenu} className="cursor-pointer md:hidden p-1 text-gray-700">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 me-20">
          {["About", "Admission", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Admission" ? "/admission" : `/#${item.toLowerCase()}`}
              className="text-gray-50 hover:text-gray-900 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
