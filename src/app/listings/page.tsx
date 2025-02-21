'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import PropertyList from "@/components/PropertyList";
import { Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'


const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function Listings() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Add a luxury interior image
          alt="Luxury Properties"
          fill
          className="object-cover brightness-[40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <motion.div 
          className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={`${montserrat.className} text-gold-500 uppercase tracking-widest text-sm font-semibold mb-4`}>
            Our Collection
          </span>
          <h1 className={`${montserrat.className} uppercase text-4xl md:text-5xl text-white mb-4 tracking-widest font-thin`}>
            Exclusive Properties
          </h1>
          <div className="w-24 h-1 bg-gold-500" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8">
        <motion.div 
          className="mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className={`${montserrat.className} text-3xl font-bold text-gray-800 tracking-[0px]`}>
            Available Properties
          </h2>
          <p className={`${montserrat.className} text-gray-600 max-w-2xl`}>
            Discover our carefully curated selection of premium properties, each chosen to meet the highest standards of luxury living.
          </p>
        </motion.div>
        <PropertyList />
      </div>
    </div>
  );
}
