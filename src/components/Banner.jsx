import Image from 'next/image';
import React from 'react';

const Banner = () => {
          return (
                    <div className="relative w-full h-[400px] md:h-[500px]">
      {/* Background Image */}
      <Image
  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1974&auto=format&fit=crop"
  alt="Bathroom"
  fill
  className="object-cover"
  priority
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-2xl px-6 md:px-16 text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Discover Your <br /> Perfect Aesthetic
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-200">
            Explore our curated collection of premium tiles designed to bring
            your vision to life.
          </p>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-sm md:text-base font-medium transition">
            Browse Now
          </button>
        </div>
      </div>
    </div>
          );
};

export default Banner;