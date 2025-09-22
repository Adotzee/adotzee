import { createContext, useContext, useState } from "react";

const HostelContext = createContext();

export const useHostel = () => {
  const context = useContext(HostelContext);
  if (!context) {
    throw new Error('useHostel must be used within a HostelProvider');
  }
  return context;
};

export const HostelProvider = ({ children }) => {
  // Generate 100+ colleges across different cities
  const colleges = [
    // Bangalore
    { id: 1, name: "ABC Engineering College", location: "Bangalore", city: "Bangalore", type: "Engineering" },
    { id: 2, name: "XYZ Arts & Science College", location: "Bangalore", city: "Bangalore", type: "Arts & Science" },
    { id: 3, name: "PQR Commerce College", location: "Bangalore", city: "Bangalore", type: "Commerce" },
    { id: 4, name: "Bangalore Institute of Technology", location: "Bangalore", city: "Bangalore", type: "Engineering" },
    { id: 5, name: "St. Joseph's College", location: "Bangalore", city: "Bangalore", type: "Arts & Science" },
    { id: 6, name: "Christ University", location: "Bangalore", city: "Bangalore", type: "University" },
    { id: 7, name: "PES University", location: "Bangalore", city: "Bangalore", type: "Engineering" },
    { id: 8, name: "Mount Carmel College", location: "Bangalore", city: "Bangalore", type: "Arts & Science" },
    
    // Mumbai
    { id: 9, name: "Mumbai University", location: "Mumbai", city: "Mumbai", type: "University" },
    { id: 10, name: "IIT Bombay", location: "Mumbai", city: "Mumbai", type: "Engineering" },
    { id: 11, name: "VJTI Mumbai", location: "Mumbai", city: "Mumbai", type: "Engineering" },
    { id: 12, name: "Jai Hind College", location: "Mumbai", city: "Mumbai", type: "Arts & Science" },
    { id: 13, name: "HR College of Commerce", location: "Mumbai", city: "Mumbai", type: "Commerce" },
    { id: 14, name: "Wilson College", location: "Mumbai", city: "Mumbai", type: "Arts & Science" },
    { id: 15, name: "Mithibai College", location: "Mumbai", city: "Mumbai", type: "Arts & Science" },
    { id: 16, name: "Ramnarain Ruia College", location: "Mumbai", city: "Mumbai", type: "Arts & Science" },

    // Delhi
    { id: 17, name: "Delhi University", location: "Delhi", city: "Delhi", type: "University" },
    { id: 18, name: "IIT Delhi", location: "Delhi", city: "Delhi", type: "Engineering" },
    { id: 19, name: "Jamia Millia Islamia", location: "Delhi", city: "Delhi", type: "University" },
    { id: 20, name: "Lady Shri Ram College", location: "Delhi", city: "Delhi", type: "Arts & Science" },
    { id: 21, name: "Hindu College", location: "Delhi", city: "Delhi", type: "Arts & Science" },
    { id: 22, name: "St. Stephen's College", location: "Delhi", city: "Delhi", type: "Arts & Science" },
    { id: 23, name: "Miranda House", location: "Delhi", city: "Delhi", type: "Arts & Science" },
    { id: 24, name: "Hansraj College", location: "Delhi", city: "Delhi", type: "Arts & Science" },

    // Chennai
    { id: 25, name: "Anna University", location: "Chennai", city: "Chennai", type: "Engineering" },
    { id: 26, name: "IIT Madras", location: "Chennai", city: "Chennai", type: "Engineering" },
    { id: 27, name: "Loyola College", location: "Chennai", city: "Chennai", type: "Arts & Science" },
    { id: 28, name: "Madras Christian College", location: "Chennai", city: "Chennai", type: "Arts & Science" },
    { id: 29, name: "Presidency College", location: "Chennai", city: "Chennai", type: "Arts & Science" },
    { id: 30, name: "Stella Maris College", location: "Chennai", city: "Chennai", type: "Arts & Science" },

    // Hyderabad
    { id: 31, name: "BITS Pilani Hyderabad", location: "Hyderabad", city: "Hyderabad", type: "Engineering" },
    { id: 32, name: "University of Hyderabad", location: "Hyderabad", city: "Hyderabad", type: "University" },
    { id: 33, name: "IIIT Hyderabad", location: "Hyderabad", city: "Hyderabad", type: "Engineering" },
    { id: 34, name: "Osmania University", location: "Hyderabad", city: "Hyderabad", type: "University" },
    { id: 35, name: "Nizam College", location: "Hyderabad", city: "Hyderabad", type: "Arts & Science" },

    // Pune
    { id: 36, name: "University of Pune", location: "Pune", city: "Pune", type: "University" },
    { id: 37, name: "College of Engineering Pune", location: "Pune", city: "Pune", type: "Engineering" },
    { id: 38, name: "Fergusson College", location: "Pune", city: "Pune", type: "Arts & Science" },
    { id: 39, name: "Symbiosis International University", location: "Pune", city: "Pune", type: "University" },
    { id: 40, name: "MIT Pune", location: "Pune", city: "Pune", type: "Engineering" },

    // Kolkata
    { id: 41, name: "University of Calcutta", location: "Kolkata", city: "Kolkata", type: "University" },
    { id: 42, name: "Jadavpur University", location: "Kolkata", city: "Kolkata", type: "Engineering" },
    { id: 43, name: "Presidency University", location: "Kolkata", city: "Kolkata", type: "Arts & Science" },
    { id: 44, name: "St. Xavier's College", location: "Kolkata", city: "Kolkata", type: "Arts & Science" },
    { id: 45, name: "Lady Brabourne College", location: "Kolkata", city: "Kolkata", type: "Arts & Science" },

    // Continue generating more colleges...
    ...Array.from({ length: 60 }, (_, i) => ({
      id: 46 + i,
      name: `${['Rajiv Gandhi', 'APJ Abdul Kalam', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Indira Gandhi', 'Sardar Patel', 'Dr. BR Ambedkar', 'Subhash Chandra Bose'][i % 8]} ${['Institute of Technology', 'College of Engineering', 'University', 'College of Arts & Science', 'Medical College', 'Business School'][i % 6]}`,
      location: ['Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Bhopal', 'Thiruvananthapuram', 'Guwahati', 'Bhubaneswar', 'Patna', 'Ranchi'][i % 10],
      city: ['Ahmedabad', 'Jaipur', 'Lucknow', 'Chandigarh', 'Bhopal', 'Thiruvananthapuram', 'Guwahati', 'Bhubaneswar', 'Patna', 'Ranchi'][i % 10],
      type: ['Engineering', 'Arts & Science', 'Commerce', 'Medical', 'Business', 'University'][i % 6]
    }))
  ];

  // Generate properties for multiple colleges
  const generatePropertiesForCollege = (collegeId, collegeName, collegeLocation) => {
    const propertyTypes = ['PG', 'Hostel'];
    const propertyNames = [
      'Sunrise', 'Green Valley', 'Royal', 'Elite', 'Paradise', 'Golden', 'Silver', 'Diamond',
      'Pearl', 'Emerald', 'Ruby', 'Sapphire', 'Crystal', 'Opal', 'Amber', 'Coral'
    ];
    const suffixes = ['PG', 'Hostel', 'Residency', 'Lodge', 'Inn', 'Manor', 'Villa'];
    
    return Array.from({ length: Math.floor(Math.random() * 8) + 3 }, (_, i) => {
      const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];
      const baseName = propertyNames[Math.floor(Math.random() * propertyNames.length)];
      const suffix = type === 'PG' ? 'PG' : suffixes[Math.floor(Math.random() * suffixes.length)];
      
      return {
        id: collegeId * 1000 + i + 1,
        collegeId: collegeId,
        name: `${baseName} ${suffix}`,
        type: type,
        price: Math.floor(Math.random() * 4000) + 2500,
        location: `Near ${collegeName}`,
        distance: `${(Math.random() * 2 + 0.1).toFixed(1)} km from college`,
        amenities: shuffleArray([
          "WiFi", "Food", "Laundry", "AC", "Security", "Parking", 
          "Gym", "Study Room", "Library", "Common Room", "Recreation Room"
        ]).slice(0, Math.floor(Math.random() * 6) + 4),
        images: [
          "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
          "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800"
        ],
        description: `${type === 'PG' ? 'Comfortable PG accommodation' : 'Premium hostel facility'} with modern amenities. Perfect for students seeking quality accommodation.`,
        rating: (Math.random() * 2 + 3).toFixed(1),
        totalRooms: Math.floor(Math.random() * 30) + 10,
        availableRooms: Math.floor(Math.random() * 15),
        contactNumber: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        ownerName: ['Mr. Rajesh Kumar', 'Mrs. Priya Sharma', 'Mr. Suresh Patel', 'Dr. Anita Reddy', 'Mr. Vikram Singh'][Math.floor(Math.random() * 5)],
        featured: Math.random() < 0.3,
        verified: Math.random() < 0.8
      };
    });
  };

  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // Generate all properties
  const properties = colleges.flatMap(college => 
    generatePropertiesForCollege(college.id, college.name, college.location)
  );

  const [bookings, setBookings] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const getCollegeById = (collegeId) => {
    return colleges.find(college => college.id === parseInt(collegeId));
  };

  const getPropertiesByCollegeId = (collegeId) => {
    return properties.filter(property => property.collegeId === parseInt(collegeId));
  };

  const getPropertyById = (propertyId) => {
    return properties.find(property => property.id === parseInt(propertyId));
  };

  const createBooking = (bookingData) => {
    const newBooking = {
      id: Date.now(),
      ...bookingData,
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    setBookings(prev => [...prev, newBooking]);
    return newBooking;
  };

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const value = {
    colleges,
    properties,
    bookings,
    favorites,
    getCollegeById,
    getPropertiesByCollegeId,
    getPropertyById,
    createBooking,
    toggleFavorite
  };

  return (
    <HostelContext.Provider value={value}>
      {children}
    </HostelContext.Provider>
  );
};