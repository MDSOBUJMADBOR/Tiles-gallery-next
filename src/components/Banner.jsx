
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    badge: "Premium Tile Collection",
    title: "Transform Your Space",
    highlight: "With Perfect Tiles",
    description:
      "Discover premium tile designs crafted to bring elegance, durability, and timeless beauty to your home, office, and interior spaces.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    badge: "Modern Interior Collection",
    title: "Design Your Dream",
    highlight: "Living Space",
    description:
      "Create sophisticated interiors with modern tile designs that combine beautiful aesthetics with exceptional quality.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    badge: "Elegant Home Collection",
    title: "Beauty That Lasts",
    highlight: "For Every Space",
    description:
      "Explore timeless patterns and premium finishes designed to make every room feel elegant, comfortable, and unique.",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ================= AUTO CHANGE =================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <section className="relative isolate min-h-[560px] w-full overflow-hidden bg-[#0f172a] sm:min-h-[600px] lg:min-h-[650px]">

      {/* ================= BACKGROUND SLIDES ================= */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentBanner.id}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            opacity: {
              duration: 1.5,
              ease: "easeInOut",
            },
            scale: {
              duration: 6,
              ease: "linear",
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src={currentBanner.image}
            alt={currentBanner.title}
            fill
            priority={currentIndex === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/35" />

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* ================= DECORATIVE GLOW ================= */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl"
      />

      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-[560px] items-center sm:min-h-[600px] lg:min-h-[650px]">
        <div className="mx-auto container px-5 py-16 sm:px-6 lg:px-8">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="max-w-3xl"
            >

              {/* ================= BADGE ================= */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-md sm:text-sm">
                <Sparkles
                  size={16}
                  className="text-cyan-300"
                />

                {currentBanner.badge}

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* ================= HEADING ================= */}
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {currentBanner.title}

                <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                  {currentBanner.highlight}
                </span>
              </h1>

              {/* ================= DESCRIPTION ================= */}
              <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg">
                {currentBanner.description}
              </p>

              {/* ================= CTA ================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link href="/all-tiles">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      inline-flex
                      h-12
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-white
                      px-6
                      text-sm
                      font-bold
                      text-[#0f172a]
                      shadow-xl
                      shadow-black/20
                      transition-all
                      duration-300
                      hover:bg-gray-100
                      sm:w-auto
                    "
                  >
                    Browse Tiles
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>

                <Link href="/all-tiles">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      inline-flex
                      h-12
                      w-full
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/30
                      bg-white/10
                      px-6
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:border-white/50
                      hover:bg-white/20
                      sm:w-auto
                    "
                  >
                    Explore Collection
                    <Layers3 size={18} />
                  </motion.div>
                </Link>

              </div>

              {/* ================= TRUST ITEMS ================= */}
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">

                <div className="flex items-center gap-2 text-xs text-gray-200 sm:text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <ShieldCheck
                      size={15}
                      className="text-emerald-300"
                    />
                  </span>

                  Premium Quality
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-200 sm:text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <Sparkles
                      size={15}
                      className="text-cyan-300"
                    />
                  </span>

                  Modern Designs
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-200 sm:text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <Layers3
                      size={15}
                      className="text-blue-300"
                    />
                  </span>

                  Built to Last
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ================= SLIDE INDICATORS ================= */}
      <div className="absolute bottom-7 right-5 z-20 flex items-center gap-2 sm:right-8 lg:right-12">

        {banners.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group flex h-8 items-center"
          >
            <span
              className={`
                block h-1 rounded-full transition-all duration-500
                ${
                  currentIndex === index
                    ? "w-10 bg-white"
                    : "w-5 bg-white/40 group-hover:bg-white/70"
                }
              `}
            />
          </button>
        ))}

      </div>

      {/* ================= SLIDE NUMBER ================= */}
      <div className="absolute bottom-7 left-5 z-20 text-xs font-medium tracking-widest text-white/60 sm:left-8 lg:left-12">
        0{currentIndex + 1} / 0{banners.length}
      </div>

    </section>
  );
};

export default Banner;

