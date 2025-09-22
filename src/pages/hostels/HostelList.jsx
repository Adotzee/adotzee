import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  faSearch,
  faFilter
} from '@fortawesome/free-solid-svg-icons';
import { useHostel } from '../../Context/HostelContext';
import { Building, Filter, Search, TrendingUp } from 'lucide-react';
import PropertyCard from './components/PropertyCard';

const HostelList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getCollegeById, getPropertiesByCollegeId, colleges } = useHostel();
  
  const collegeId = searchParams.get('collegeId') || '1';
  const [selectedCollege, setSelectedCollege] = useState(collegeId);
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [collegeSearch, setCollegeSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const college = getCollegeById(selectedCollege);
  const allProperties = getPropertiesByCollegeId(selectedCollege);
  
  const cities = [...new Set(colleges.map(c => c.city))];
  const filteredColleges = colleges.filter(c => 
    c.name.toLowerCase().includes(collegeSearch.toLowerCase()) &&
    (selectedCity === '' || c.city === selectedCity)
  );

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = allProperties.filter(property => {
      const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPrice = priceFilter === 'all' || 
                          (priceFilter === 'low' && property.price <= 3500) ||
                          (priceFilter === 'medium' && property.price > 3500 && property.price <= 4500) ||
                          (priceFilter === 'high' && property.price > 4500);
      
      const matchesType = typeFilter === 'all' || property.type.toLowerCase() === typeFilter.toLowerCase();
      
      return matchesSearch && matchesPrice && matchesType;
    });

    // Sort properties
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        default:
          return b.rating - a.rating;
      }
    });

    return filtered;
  }, [allProperties, searchTerm, priceFilter, typeFilter, sortBy]);

  const handleCollegeChange = (newCollegeId) => {
    setSelectedCollege(newCollegeId);
    navigate(`/hostels?collegeId=${newCollegeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Accommodation
            </h1>
            <p className="text-lg text-gray-600">
              Discover comfortable PGs and Hostels near your college
            </p>
          </div>

          {/* Enhanced College Selector */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Your College</h2>
            
            {/* College Search */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search colleges..."
                  value={collegeSearch}
                  onChange={(e) => setCollegeSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <div className="text-sm text-gray-600 flex items-center">
                <Building className="w-4 h-4 mr-1" />
                {filteredColleges.length} colleges found
              </div>
            </div>

            {/* College Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {filteredColleges.map(college => (
                <button
                  key={college.id}
                  onClick={() => handleCollegeChange(college.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedCollege == college.id
                      ? 'border-blue-500  bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <h3 className="font-semibold text-sm mb-1">{college.name}</h3>
                  <p className="text-xs text-gray-600">{college.location} • {college.type}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search properties..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under ₹3,500</option>
                  <option value="medium">₹3,500 - ₹4,500</option>
                  <option value="high">Above ₹4,500</option>
                </select>

                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Types</option>
                  <option value="pg">PG</option>
                  <option value="hostel">Hostel</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="distance">Distance</option>
                </select>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Results Header */}
          {college && (
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Accommodations near {college.name}
                </h2>
                <p className="text-gray-600">
                  {filteredProperties.length} properties found in {college.location}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                Updated recently
              </div>
            </div>
          )}

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* No Results */}
          {filteredProperties.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters or search terms</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setPriceFilter('all');
                  setTypeFilter('all');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HostelList;