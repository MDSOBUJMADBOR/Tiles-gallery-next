
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto container overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center sm:px-12 lg:px-20"
      >
        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 size-64 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative">
          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Layers3 className="size-8" />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
            <Sparkles className="size-4" />
            Start Your Collection
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Transform
            <span className="block text-blue-400">
              Your Space?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Explore our premium tile collection and discover
            beautiful designs that bring your vision to life.
          </p>

          <Link
            href="/all-tiles"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-slate-900 transition hover:bg-blue-50"
          >
            Browse All Tiles
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

