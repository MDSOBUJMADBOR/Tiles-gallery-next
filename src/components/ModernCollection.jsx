
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const benefits = [
  "Modern premium designs",
  "Durable and long-lasting",
  "Perfect for contemporary interiors",
];

export default function ModernCollection() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[420px] overflow-hidden rounded-3xl sm:h-[520px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
              alt="Modern tile interior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
              <p className="text-sm text-white/70">
                Featured Collection
              </p>

              <p className="mt-1 font-bold">
                Modern Luxury Series
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
              <Sparkles className="size-4" />
              Modern Collection
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Create A Space
              <span className="block text-blue-400">
                You Love Coming Home To
              </span>
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              Discover sophisticated tile designs created to
              transform ordinary spaces into beautiful, modern
              environments.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-slate-200"
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                    <Check className="size-4" />
                  </span>

                  {benefit}
                </div>
              ))}
            </div>

            <Link
              href="/all-tiles"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Explore Collection
              <ArrowRight className="size-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

