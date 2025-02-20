import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Counts from '../components/Stat/Counts';
 // Assuming you have a Footer component

function Admission() {
  const navigate = useNavigate();

  // Function to navigate to different pages
  const handleNavigation = (stream) => {
    navigate(`/${stream}`);  
  };

  return (
    <div className=' bg-gradient-to-br from-[#6a85b6] to-[#bac8e0]'>
       <Helmet>
                <title>Degree Admissions - Apply Now | Adotzee</title>
                <meta name="description" content="Apply for degree courses easily through Adotzee. Find the best colleges and courses in Kerala." />
                <link rel="canonical" href="https://www.adotzee.in/admissions" />
            </Helmet>
      <Navbar />  
      
      <div className=" bg-gradient-to-br from-[#6a85b6] to-[#bac8e0] flex flex-col items-center pt-20">
        <h1 className="text-white text-3xl md:text-4xl font-extrabold text-center mt-10">Choose Your Path</h1>
        
        <p className="text-white text-lg mt-6 mb-10">Pick a stream to explore more options and courses!</p>

        {/* Stream selection buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 w-1/2">
          <button
            onClick={() => handleNavigation('humanities')}
            className="bg-[#4f87b5] text-white text-lg font-bold p-4 rounded-lg shadow-lg hover:bg-[#365c8c] transition duration-300"
          >
            Humanities
          </button>
          
          <button
            onClick={() => handleNavigation('commerce')}
            className="bg-[#4f87b5] text-white  text-lg font-bold p-4 rounded-lg shadow-lg hover:bg-[#365c8c] transition duration-300"
          >
            Commerce
          </button>
          
          <button
            onClick={() => handleNavigation('science')}
            className="bg-[#4f87b5] text-white text-lg font-bold p-4 rounded-lg shadow-lg hover:bg-[#365c8c] transition duration-300"
          >
            Science
          </button>
        </div>
        
        {/* Additional content or description */}
        <p className="text-white text-lg text-center">Explore courses in various streams to begin your academic journey!</p>
        
      </div>
    <Counts/>
      <Footer />  {/* Include Footer at the bottom */}
    </div>
  );
}

export default Admission;
