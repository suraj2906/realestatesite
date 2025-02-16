'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import PropertyList from "@/components/PropertyList";
export default function Listings() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <motion.h1 
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Available Properties
        </motion.h1>
        <PropertyList />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your listings here */}
          {/* You can map through your actual property data */}
        </div>
      </div>
    </div>
  );
}
