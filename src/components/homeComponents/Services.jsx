import React, { useEffect, useState } from "react";
import AdmissionModal from "./contactModal";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true, // Animation happens only once
    });
  }, []);

  function ServiceCard({ title, description }) {
    return (
      <div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:scale-101 duration-300 transition transform shadow-xl hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600"
        data-aos="fade-up" // AOS animation for fade-up effect
      >
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    );
  }

  return (
    <>
      <section
        id="services"
        className="bg-gradient-to-r from-blue-100 to-blue-300 text-white py-16 px-8 flex flex-col items-center"
        data-aos="fade-up" // AOS animation for section fade-in
      >
        <h2
          className="text-4xl text-gray-700 font-bold mb-2"
          data-aos="fade-down" // AOS animation for header fade-down
        >
          Our Services
        </h2>

        <p
          className="text-md mb-8 text-gray-500"
          data-aos="fade-up" // AOS animation for paragraph fade-in
        >
          Tailored services to enhance your admission experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          <ServiceCard
            title="Personal Consultation"
            description="One-on-one guidance from experienced advisors."
          />
          <ServiceCard
            title="Application Assistance"
            description="Support throughout the application process."
          />
          <ServiceCard
            title="Program Selection"
            description="Expert advice to choose the right degree path."
          />
          <ServiceCard
            title="Scholarship Guidance"
            description="Help in identifying and applying for scholarships."
          />
        </div>

        <AdmissionModal isOpen={isModalOpen} closeModal={closeModal} />
      </section>

      <div
        className="flex flex-col items-center text-white p-10 text-center pt-20 shadow-2xl"
        data-aos="fade-up" // AOS animation for this div fade-up
      >
        <h2 className="text-3xl font-bold text-white">
          Not sure what you need to apply?
        </h2>
        <p className="mt-2 text-md md:text-left text-white">
          Get in touch to talk through your options with one of our friendly
          education advisors.
        </p>

        <a
          href="https://wa.me/918281060462?text=I%20want%20admission%20assistance"
          target="_blank"
          className="mt-4 bg-blue-600 hover:bg-white hover:text-blue-600 text-white font-semibold py-2 px-4 rounded-md block text-center transition-all duration-300"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}

export default Services;
