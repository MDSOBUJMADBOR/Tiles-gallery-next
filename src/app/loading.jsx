
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers3, Sparkles } from "lucide-react";

const LoadingPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      {/* Loading Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex w-full max-w-md flex-col items-center text-center"
      >
        {/* Logo / Icon */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-7 flex size-20 items-center justify-center rounded-3xl bg-[#0f4ea6] shadow-xl shadow-blue-200"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-blue-500 opacity-30 blur-xl" />

          <Layers3 className="relative z-10 size-10 text-white" />
        </motion.div>

        {/* Small Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-[#0f4ea6]"
        >
          <Sparkles className="size-3.5" />
          Preparing your collection
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Loading
          <span className="text-[#0f4ea6]">...</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 max-w-sm text-sm leading-6 text-slate-500 sm:text-base"
        >
          Please wait while we prepare your beautiful tile collection.
        </motion.p>

        {/* Progress Bar */}
        <div className="mt-7 h-1.5 w-56 overflow-hidden rounded-full bg-blue-100">
          <motion.div
            className="h-full rounded-full bg-[#0f4ea6]"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Animated Dots */}
        <div className="mt-5 flex items-center gap-1.5">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              className="size-2 rounded-full bg-[#0f4ea6]"
              animate={{
                y: [0, -5, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: item * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Brand */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-xs font-medium tracking-widest text-slate-400"
        >
          TILEGALLERY
        </motion.p>
      </motion.div>
    </main>
  );
};

export default LoadingPage;

