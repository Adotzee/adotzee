import React, { useState, useEffect } from "react";
import hat from "../assets/hat.png";
import text from "../assets/textlogo.png";
import logo from "../assets/logo-removebg.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const navigate=useNavigate()

  useEffect(() => {
    let lastScrollTop = 0;
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollTop = currentScrollPos <= 0 ? 0 : currentScrollPos; 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-[85%] align-middle top-0 fixed z-49 mx-[7.5%] mt-6">
      <header
        id="navbar"
        className={`bg-gray-500 bg-opacity-75 flex justify-between rounded-md items-center shadow-lg px-5 py-0 transition-all duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
      >
        {/* Logo Section */}
        <div onClick={()=>navigate("/")} className="flex cursor-pointer items-center">
          <img
            src={hat}
            alt="Logo"
            className="w-18 h-18 -m-2 hidden md:block"
          />
          <img
            src={text}
            alt="Logo Text"
            className="h-9 ml-[-16px] mt-1 object-contain hidden md:block"
          />
          <img src={logo} className="w-22 h-22 -m-5 md:hidden" />
        </div>

        <a
          onClick={toggleMenu}
          className="cursor-pointer md:hidden p-1 text-gray-700 focus:outline-none"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 me-20">
  {["About", "Admission", "Contact"].map((item) => (
    <a
      key={item}
      href={item === "Admission" ? "/admission" : `/#${item.toLowerCase()}`}
      className="text-gray-50 hover:text-gray-900 relative 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 
        after:w-0 after:h-[3px] after:bg-primary
        after:transition-all after:duration-300 hover:after:w-full"
    >
      {item}
    </a>
  ))}
</nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-2/5 bg-gray-900 text-white shadow-lg z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end text-white text-xs"
          >
            ✖
          </button>

          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="block py-4 px-6 hover:bg-gray-700 text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <div className="flex fixed bottom-10 left-1/2 transform -translate-x-1/2 space-x-4 justify-center items-center">
            {[ 
              { href: "https://www.facebook.com/share/1WeqyuRjTd/?mibextid=wwXIfr", icon: "fab fa-facebook" },
              { href: "https://www.instagram.com/adotzee.inn", icon: "fab fa-instagram" },
              { href: "https://wa.me/918281060462?text=Hello I need Admission for Degree!, Can you Guide me", icon: "fab fa-whatsapp" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex bg-blue-600 w-10 h-10 rounded-full items-center justify-center text-white shadow-md hover:bg-blue-700 transition"
              >
                <i className={`${social.icon} text-2xl p-2`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
