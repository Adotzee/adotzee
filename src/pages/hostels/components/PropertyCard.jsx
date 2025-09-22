import { useNavigate } from "react-router-dom";
import { useHostel } from "../../../Context/HostelContext";
import { BookOpen, Car, CheckCircle, Dumbbell, Eye, Heart, IndianRupee, MapPin, Shield, Snowflake, Sparkles, Star, Users, UtensilsCrossed, Wifi } from "lucide-react";

const PropertyCard = ({ property, featured = false }) => {
  const navigate = useNavigate();
  const { toggleFavorite, favorites } = useHostel();
  const isFavorite = favorites.includes(property.id);

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

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${featured ? 'ring-2 ring-blue-200' : ''}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onClick={() => navigate(`/hostels/${property.id}`)}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            property.type === 'PG' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {property.type}
          </span>
          {featured && (
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
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="bg-white rounded-full px-2 py-1">
            <div className="flex items-center">
              <Star className="text-yellow-400 w-4 h-4 mr-1" />
              <span className="text-sm font-semibold">{property.rating}</span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(property.id);
            }}
            className={`p-2 rounded-full transition-colors ${
              isFavorite ? 'bg-red-100 text-red-600' : 'bg-white text-gray-600'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6" onClick={() => navigate(`/hostels/${property.id}`)}>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{property.name}</h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{property.distance}</span>
        </div>

        <div className="flex items-center text-2xl font-bold text-blue-600 mb-4">
          <IndianRupee className="w-5 h-5 mr-1" />
          {property.price.toLocaleString()}
          <span className="text-sm text-gray-500 ml-1">/month</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 4).map((amenity, index) => {
            const IconComponent = getAmenityIcon(amenity);
            return (
              <div key={index} className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
                <IconComponent className="w-3 h-3 text-gray-600 mr-1" />
                <span className="text-xs text-gray-700">{amenity}</span>
              </div>
            );
          })}
          {property.amenities.length > 4 && (
            <span className="text-xs text-gray-500 px-2 py-1">
              +{property.amenities.length - 4} more
            </span>
          )}
        </div>

        {/* Availability and CTA */}
        <div className="flex justify-between items-center">
          <span className={`text-sm font-semibold ${
            property.availableRooms > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            {property.availableRooms > 0 
              ? `${property.availableRooms} rooms available` 
              : 'No rooms available'
            }
          </span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard