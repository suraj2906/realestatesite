import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'for sale':
        return 'bg-blue-600';
      case 'for rent':
        return 'bg-green-600';
      case 'sold':
        return 'bg-red-600';
      case 'rented':
        return 'bg-purple-600';
      case 'pending':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {properties.map(property => (
            <motion.div 
              key={property._id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <div className="h-48 overflow-hidden">
                  <img
                    src={property.imageUrl || '/property-placeholder.jpg'} 
                    alt={property.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{property.title}</h3>
                <p className="text-gray-700 mb-4">{property.description}</p>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-blue-700">₹{property.price}</p>
                  <p className="text-gray-700"><span className="font-semibold">Location:</span> {property.location}</p>
                  <p className="text-gray-700">{property.bedrooms} Bed • {property.bathrooms} Bath</p>
                  <p className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${getStatusColor(property.status)}`}>
                    {property.status}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyList; 