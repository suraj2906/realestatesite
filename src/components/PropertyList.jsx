import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await axios.get('/api/properties');
      setProperties(response.data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'for sale':
        return 'bg-gold-500';
      case 'for rent':
        return 'bg-emerald-600';
      case 'sold':
        return 'bg-red-600';
      case 'rented':
        return 'bg-purple-600';
      default:
        return 'bg-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gold-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 0.2 }}
    >
      {properties.map(property => (
        <Link href={`/listings/${property._id}`} key={property._id}>
          <motion.div 
            className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="h-64 overflow-hidden">
                <Image
                  src={property.imageUrl[0] || '/property-placeholder.jpg'} 
                  alt={property.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <div className={`absolute top-4 right-4 ${getStatusColor(property.status)} px-4 py-1 text-sm font-semibold text-white rounded-full`}>
                {property.status}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{property.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">{property.description}</p>
              <div className="space-y-4">
                <p className="text-2xl font-bold text-gold-500">₹{property.price.toLocaleString('en-IN')}</p>
                <div className="flex items-center gap-6 text-gray-600">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-bed"></i> {/* Add Font Awesome icons */}
                    {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fas fa-bath"></i>
                    {property.bathrooms} Baths
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{property.location}</p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default PropertyList; 