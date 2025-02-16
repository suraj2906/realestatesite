'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ClientButton from "@/components/ClientButton";

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
      {/* Hero Section */}
      <header className="relative h-[90vh] w-full">
        <Image
          src="/skyline.jpg" // You'll need to add this image
          alt="Luxury Real Estate"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Sandhya Shah
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Your Trusted Real Estate Professional
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Link href="/listings">
              <ClientButton 
                className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
              >
                View Listings
              </ClientButton>
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          {...fadeIn}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {['Residential Sales', 'Property Management', 'Investment Advisory'].map((service, index) => (
            <motion.div 
              key={service}
              className="p-6 rounded-lg shadow-lg bg-white"
              variants={fadeIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{service}</h3>
              <p className="text-gray-700">Expert guidance in real estate services.</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Listings */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-800"
            {...fadeIn}
          >
            Featured Listings
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative h-64">
                  <Image
                    src={`/property-${item}.jpg`} // You'll need to add these images
                    alt={`Featured Property ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Luxury Home opposite Marine Drive</h3>
                  <p className="text-gray-700 mb-4">4 Bed • 3 Bath • 2,500 sqft</p>
                  <p className="text-xl font-bold text-blue-700">18 crore</p>
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
            <p className="text-gray-700 mb-8">
              Ready to find your dream home? Contact Sandhya Shah today for a consultation.
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold text-gray-800">Email:</span> sandhyapavan988@gmail.com
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold text-gray-800">Phone:</span> +91 9833848945
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold text-gray-800">Office:</span> 123 Real Estate Ave, City, State
              </p>
            </div>
          </div>
          <form className="flex-1 w-full space-y-4 text-black">
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
            ></textarea>
            <ClientButton 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
