
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  Layers3,
  Palette,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Beautiful Designs",
    description:
      "Explore a carefully selected collection of modern, elegant, and timeless tile designs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    description:
      "We focus on showcasing tile options that combine style, durability, and lasting quality.",
  },
  {
    icon: Search,
    title: "Easy Discovery",
    description:
      "Find the right tile quickly with simple search, organized collections, and detailed information.",
  },
  {
    icon: Users,
    title: "Made for Everyone",
    description:
      "Whether you are a homeowner, designer, architect, or builder, TileGallery is built for you.",
  },
];

const stats = [
  {
    value: "32+",
    label: "Tile Designs",
    icon: Layers3,
  },
  {
    value: "100%",
    label: "Responsive",
    icon: ShieldCheck,
  },
  {
    value: "4+",
    label: "Tile Categories",
    icon: Palette,
  },
  {
    value: "24/7",
    label: "Explore Anytime",
    icon: Star,
  },
];

const steps = [
  {
    number: "01",
    title: "Explore",
    description:
      "Browse our collection and discover tile designs that match your style.",
  },
  {
    number: "02",
    title: "Compare",
    description:
      "Check tile details, materials, dimensions, prices, and availability.",
  },
  {
    number: "03",
    title: "Choose",
    description:
      "Select the design that fits your space and your interior vision.",
  },
];

const AboutUsPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Background decorations */}
        <div className="pointer-events-none absolute left-[-140px] top-[-120px] size-96 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="pointer-events-none absolute right-[-120px] top-20 size-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-150px] left-1/2 size-80 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="relative z-10 mx-auto container text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f4ea6]"
          >
            <Sparkles className="size-4" />
            About TileGallery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-7xl"
          >
            Beautiful Spaces Begin
            <br />
            <span className="bg-gradient-to-r from-[#0f4ea6] via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              With the Right Tile
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg"
          >
            TileGallery is a modern tile discovery platform designed to help
            homeowners, interior designers, architects, and builders discover
            beautiful tiles for every kind of space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/all-tiles"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0f4ea6] px-6 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0c3e85] hover:shadow-xl"
            >
              Explore Our Tiles
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#0f4ea6] hover:shadow-md"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="border-y border-slate-100 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-blue-50/50"
              >
                <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-white text-[#0f4ea6] shadow-sm">
                  <Icon className="size-5" />
                </div>

                <p className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-5 shadow-xl shadow-blue-100/40 sm:p-7">
              {/* Main tile visual */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-100">
                    <Layers3 className="size-20 text-[#0f4ea6]/30 sm:size-28" />
                  </div>
                </div>

                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100">
                    <Palette className="size-20 text-blue-500/40 sm:size-28" />
                  </div>
                </div>

                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-cyan-100 via-white to-slate-100">
                    <Sparkles className="size-20 text-cyan-500/40 sm:size-28" />
                  </div>
                </div>

                <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-100">
                    <Star className="size-20 text-blue-500/40 sm:size-28" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-6 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm sm:bottom-8 sm:left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-blue-50 text-[#0f4ea6]">
                    <Heart className="size-4 fill-current" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Designed with care
                    </p>
                    <p className="text-xs text-slate-500">
                      For beautiful spaces
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f4ea6]">
              <Target className="size-4" />
              Our Story
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Making tile discovery
              <span className="text-[#0f4ea6]"> simple & inspiring.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Choosing the right tile can completely change the feeling of a
              space. But with so many styles, colors, materials, and patterns
              available, finding the perfect option can sometimes feel
              overwhelming.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              That&apos;s why we created TileGallery — a clean and modern
              platform where you can explore tile designs, discover new
              styles, and make your next interior project easier.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Modern and carefully organized tile collections",
                "Simple browsing and powerful search",
                "Detailed information for every tile",
                "Designed for homeowners and professionals",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#0f4ea6]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MISSION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0f4ea6] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute left-[-100px] top-[-100px] size-80 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] size-96 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20"
          >
            <Target className="size-7 text-cyan-200" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl font-black sm:text-4xl lg:text-5xl"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base lg:text-lg"
          >
            Our mission is simple: to make discovering beautiful tiles easier,
            faster, and more enjoyable — helping people turn their ideas into
            spaces they love.
          </motion.p>
        </div>
      </section>

      {/* =========================================================
          WHY TILEGALLERY
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f4ea6]">
              <Sparkles className="size-4" />
              Why TileGallery
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Everything you need to
              <span className="text-[#0f4ea6]"> find your style.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              We combine beautiful design, simple technology, and useful
              information to create a better tile discovery experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -7 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-[#0f4ea6] transition-all duration-300 group-hover:bg-[#0f4ea6] group-hover:text-white">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-[#0f4ea6]">
              <Layers3 className="size-4" />
              Simple Experience
            </span>

            <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
              Find the right tile in
              <span className="text-[#0f4ea6]"> three simple steps.</span>
            </h2>
          </div>

          <div className="relative mt-14 grid gap-8 md:grid-cols-3">
            {/* Connector line */}
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-blue-100 md:block" />

            {steps.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto flex size-20 items-center justify-center rounded-2xl border-4 border-white bg-[#0f4ea6] text-xl font-black text-white shadow-lg shadow-blue-200">
                  {item.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f4ea6] to-blue-600 px-6 py-12 text-center text-white shadow-2xl shadow-blue-200 sm:px-10 lg:py-16"
        >
          <div className="pointer-events-none absolute left-[-100px] top-[-120px] size-72 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] size-80 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
              <Sparkles className="size-5 text-cyan-200" />
            </div>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              Ready to transform your space?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
              Explore our tile collection and discover designs that bring your
              vision to life.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/all-tiles"
                className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-[#0f4ea6] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore All Tiles
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutUsPage;

