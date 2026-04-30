"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-[500px]  overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea"
        alt="Tiles Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Discover Your Perfect Aesthetic
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-sm md:text-lg mb-6">
            Explore our premium collection of tiles to transform your space beautifully.
          </p>

          {/* Button */}
          <Link href="/all-tiles">
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300 hover:scale-110 cursor-pointer">
              Browse Now
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;