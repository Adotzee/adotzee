import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHostel } from '../../Context/HostelContext';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faStar, 
  faRupeeSign, 
  faWifi, 
  faUtensils, 
  faCar, 
  faDumbbell,
  faShieldAlt,
  faBook,
  faSnowflake,
  faPhone,
  faUser,
  faArrowLeft,
  faCalendarAlt,
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { ArrowLeft, BookOpen, Camera, Car, CheckCircle, Dumbbell, Heart, IndianRupee, MapPin, Phone, Share2, Shield, Snowflake, Sparkles, Star, User, Users, UtensilsCrossed, Wifi, X, XCircle } from 'lucide-react';

const HostelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPropertyById, createBooking, toggleFavorite, favorites } = useHostel();
  
  const property = getPropertyById(id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [bookingData, setBookingData] = useState({
    studentName: '',
    email: '',
    phone: '',
    fromDate: '',
    toDate: '',
    roomType: 'single',
    specialRequests: ''
  });

  const isFavorite = favorites.includes(parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Property not found</h2>
          <button 
            onClick={() => navigate('/hostels')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Hostels
          </button>
        </div>
      </div>
    );
  }

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      'WiFi': Wifi,
      'Food': UtensilsCrossed,
      'Parking': Car,
      'Gym': Dumbbell,
      'Security': Shield,
      'Library': BookOpen,
      'Study Room': BookOpen,
      'AC': Snowflake,
      'Study Area': BookOpen,
      'Laundry': Shield,
      'Common Room': Users,
      'Recreation Room': Users
    };
    return iconMap[amenity] || Shield;
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    if (!bookingData.studentName || !bookingData.email || !bookingData.phone || 
        !bookingData.fromDate || !bookingData.toDate) {
      alert('Please fill in all required fields');
      return;
    }

    if (new Date(bookingData.fromDate) >= new Date(bookingData.toDate)) {
      alert('Check-out date must be after check-in date');
      return;
    }

    const booking = createBooking({
      propertyId: property.id,
      propertyName: property.name,
      ...bookingData,
      totalAmount: calculateTotalAmount()
    });

    alert('Booking request submitted successfully!');
    setShowBookingForm(false);
    
    setBookingData({
      studentName: '',
      email: '',
      phone: '',
      fromDate: '',
      toDate: '',
      roomType: 'single',
      specialRequests: ''
    });
  };

  const calculateTotalAmount = () => {
    if (!bookingData.fromDate || !bookingData.toDate) return 0;
    
    const fromDate = new Date(bookingData.fromDate);
    const toDate = new Date(bookingData.toDate);
    const diffTime = Math.abs(toDate - fromDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.ceil(diffDays / 30);
    
    return months * property.price;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen mt-10 bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button & Actions */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => navigate('/hostels')}
              className="flex items-center bg-transparent text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Hostels
            </button>
            
            <div className="flex gap-3">
              <button
                onClick={() => toggleFavorite(property.id)}
                className={`p-2 rounded-lg transition-colors ${
                  isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="relative h-96">
                  <img
                    src={property.images[selectedImageIndex]}
                    alt={property.name}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      property.type === 'PG' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {property.type}
                    </span>
                    {property.featured && (
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                    {property.verified && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 w-4 h-4 mr-1" />
                      <span className="font-semibold">{property.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={() => setShowImageModal(true)}
                      className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg flex items-center"
                    >
                      <Camera className="w-4 h-4 mr-1" />
                      View All Photos
                    </button>
                  </div>
                </div>
                
                {/* Thumbnail Images */}
                <div className="flex space-x-2 p-4">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 bg-transparent h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${property.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{property.name}</h1>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{property.location} • {property.distance}</span>
                </div>

                <div className="flex items-center text-3xl font-bold text-blue-600 mb-6">
                  <IndianRupee className="w-6 h-6 mr-2" />
                  {property.price.toLocaleString()}
                  <span className="text-lg text-gray-500 ml-2">/month</span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{property.description}</p>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {property.amenities.map((amenity, index) => {
                      const IconComponent = getAmenityIcon(amenity);
                      return (
                        <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                          <IconComponent className="text-blue-600 w-5 h-5 mr-3" />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Room Availability */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-800">{property.totalRooms}</div>
                      <div className="text-gray-600">Total Rooms</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{property.availableRooms}</div>
                      <div className="text-gray-600">Available Rooms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Book Your Stay</h3>
                
                {!showBookingForm ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Price per month</span>
                      <span className="text-xl font-bold text-blue-600">
                        ₹{property.price.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Availability</span>
                      <span className={`font-semibold flex items-center ${
                        property.availableRooms > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {property.availableRooms > 0 ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {property.availableRooms} rooms available
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4 mr-1" />
                            No rooms available
                          </>
                        )}
                      </span>
                    </div>

                    <button
                      onClick={() => setShowBookingForm(true)}
                      disabled={property.availableRooms === 0}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                        property.availableRooms > 0
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {property.availableRooms > 0 ? 'Book Now' : 'Not Available'}
                    </button>

                    {/* Contact Information */}
                    <div className="border-t pt-4 mt-6">
                      <h4 className="font-semibold text-gray-800 mb-3">Contact Owner</h4>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-600">
                          <User className="w-4 h-4 mr-2" />
                          <span>{property.ownerName}</span>
                        </div>
                        <a 
                          href={`tel:${property.contactNumber}`} 
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          {property.contactNumber}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        name="studentName"
                        value={bookingData.studentName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={bookingData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          From Date *
                        </label>
                        <input
                          type="date"
                          name="fromDate"
                          value={bookingData.fromDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          To Date *
                        </label>
                        <input
                          type="date"
                          name="toDate"
                          value={bookingData.toDate}
                          onChange={handleInputChange}
                          min={bookingData.fromDate || new Date().toISOString().split('T')[0]}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Room Type
                      </label>
                      <select
                        name="roomType"
                        value={bookingData.roomType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="single">Single Room</option>
                        <option value="double">Double Sharing</option>
                        <option value="triple">Triple Sharing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests
                      </label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Any special requirements..."
                      />
                    </div>

                    {/* Total Amount */}
                    {bookingData.fromDate && bookingData.toDate && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-700">Estimated Total:</span>
                          <span className="text-xl font-bold text-blue-600">
                            ₹{calculateTotalAmount().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowBookingForm(false)}
                        className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Submit Booking
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl max-h-full relative">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={property.images[selectedImageIndex]}
              alt={property.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    selectedImageIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HostelDetails;