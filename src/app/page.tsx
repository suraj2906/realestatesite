'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ClientButton from "@/components/ClientButton";
import { Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'
import { kugile, wastedVindey, brillant } from "./fonts";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <header className="relative h-screen w-full">
        <Image
          src="/skyline.jpg"
          alt="Luxury Real Estate"
          fill
          className="object-cover brightness-50" // Darkened for more contrast
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" /> {/* Gradient overlay */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <motion.h1 
              className={`${brillant.className} text-6xl md:text-8xl text-center tracking-[0px] pb-4`}
            >
              Sandhya Shah
            </motion.h1>
            <motion.p 
              className={`${montserrat.className} text-lg md:text-xl text-gray-200 tracking-widest uppercase`}
            >
              Serving the best properties in Mumbai since 2017
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="w-24 h-[2px] bg-gold-500 my-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          />
          
          <motion.p 
            className={`${montserrat.className} text-xl md:text-2xl text-center mb-12 font-light tracking-wide`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Elevating Luxury Real Estate
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Link href="/listings">
              <ClientButton 
                className={`${montserrat.className} bg-transparent border-2 border-white text-white px-12 py-4 rounded-none 
                  hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-[0.2em] uppercase`}
              >
                Explore Properties
              </ClientButton>
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* Services Section - Enhanced */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          {...fadeIn}
        >
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold">Our Expertise</span>
          <h2 className="text-4xl font-bold mt-4 text-gray-800">Premium Services</h2>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { title: 'Luxury Sales', desc: 'Exclusive high-end properties curated for discerning buyers' },
            { title: 'Highly Experienced', desc: 'Have 8 years of experience in the real estate industry' },
            { title: 'Scope of Work', desc: 'Working within Mumbai, specifically Andheri to Colaba' }
          ].map((service) => (
            <motion.div 
              key={service.title}
              className="p-8 bg-white border border-gray-100 hover:border-gold-500 transition-all duration-300"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Listings - Enhanced */}
      <section className="bg-gray-50 py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            {...fadeIn}
          >
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold">Featured Properties</span>
            <h2 className="text-4xl font-bold mt-4 text-gray-800">Exceptional Homes</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="group bg-white overflow-hidden"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-80">
                  <Image
                    src={`/property-${item}.jpg`}
                    alt={`Featured Property ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">Luxury Home at Marine Drive</h3>
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <span>4 Beds</span>
                    <span>•</span>
                    <span>3 Baths</span>
                    <span>•</span>
                    <span>2,500 sqft</span>
                  </div>
                  <p className="text-2xl font-bold text-gold-500">₹18 Crore</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <div className="text-gray-700 mb-8">
              Ready to find your dream home? Contact Sandhya Shah today for a consultation.
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold text-gray-800">Email:</span> 
                <span>sandhyapavan988@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold text-gray-800">Phone:</span> 
                <span>+91 9833848945</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold text-gray-800">Office:</span> 
                <span>123 Real Estate Ave, City, State</span>
              </div>
            </div>
          </div>

          <form className="flex-1 w-full space-y-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <ClientButton 
              type="submit"
              className={`${montserrat.className} w-full bg-gray-400 text-white py-3 rounded-lg 
                hover:bg-gold-500 transition-colors text-lg tracking-wider uppercase`}
            >
              Send Message
            </ClientButton>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Sandhya Shah Real Estate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
