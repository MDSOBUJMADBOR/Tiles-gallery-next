
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Tiles",
    description:
      "Explore our collection and discover designs that match your style.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Choose Your Design",
    description:
      "Select your favorite tiles and check all product details.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Get It Delivered",
    description:
      "Order your tiles and enjoy a simple, convenient delivery experience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            How TileGallery Works
          </h2>

          <p className="mt-4 text-slate-600">
            Finding your perfect tiles is easier than ever.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative text-center"
              >
                <div className="relative mx-auto flex size-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                  <Icon className="size-8" />

                  <span className="absolute -right-2 -top-2 flex size-8 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-600 shadow">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight className="absolute right-0 top-8 hidden size-6 text-slate-300 md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

