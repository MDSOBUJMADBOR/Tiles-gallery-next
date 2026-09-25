
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Home,
  SearchX,
} from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-100/40 blur-2xl" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            type: "spring",
            stiffness: 160,
          }}
          className="mx-auto mb-7 flex size-20 items-center justify-center rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-100/50"
        >
          <SearchX className="size-10 text-[#0f4ea6]" />
        </motion.div>

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f4ea6]"
        >
          <Compass className="size-4" />
          Lost in the collection?
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#0f4ea6] via-blue-600 to-cyan-500 bg-clip-text text-7xl font-black tracking-tight text-transparent sm:text-8xl md:text-9xl"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base"
        >
          The page you are looking for may have been moved, removed, or
          doesn&apos;t exist. Let&apos;s get you back to the TileGallery
          collection.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* Home */}
          <Link
            href="/"
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#0f4ea6]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-200
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0c3e85]
              hover:shadow-xl
              sm:w-auto
            "
          >
            <Home className="size-4" />

            Back to Home

            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* All Tiles */}
          <Link
            href="/all-tiles"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-6
              py-3.5
              text-sm
              font-semibold
              text-slate-700
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-[#0f4ea6]
              hover:shadow-md
              sm:w-auto
            "
          >
            <SearchX className="size-4" />

            Explore All Tiles
          </Link>
        </motion.div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-400"
        >
          <ArrowLeft className="size-3.5" />
          <span>Use the navigation above to continue exploring</span>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFound;

