import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdmissionModal from "./contactModal";

function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsModalOpen(false);
  };
  function ServiceCard({ title, description }) {
    return (
      <div
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="cursor-pointer p-6 bg-blue-500 text-white rounded-xl hover:scale-95 duration-700 transition shadow-md hover:shadow-lg "
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
        className="bg-blue-100 text-white py-16 px-8 flex flex-col items-center"
      >
        <h2 className="text-4xl text-gray-700 ___ font-bold mb-2">
          Our Services
        </h2>
        <p className="text-md mb-8 text-gray-500">
          Tailored services to enhance your admission experience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
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
      <div className="flex flex-col items-start my-20  text-white p-10 text-center max-w-screen">
      <h2 className="text-2xl font-bold">Not sure what you need to apply?</h2>
      <p className="mt-2 text-md md:text-left">
        Just get in touch to talk through your options with one of our friendly
        education advisors.
      </p>
      <a
  href="https://wa.me/918281060462?text=I%20want%20admission%20assistance"
  target="_blank" 
  className="mt-4 bg-blue-600 hover:bg-white hover:text-primary text-white font-semibold py-2 px-4 rounded mx-auto md:mx-0 block text-center"
>
  Get in touch
</a>


    </div>
    </>
  );
}

export default Services;
