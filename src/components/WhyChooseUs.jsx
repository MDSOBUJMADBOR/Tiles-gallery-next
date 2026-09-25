
"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description:
      "Carefully selected tile collections made for beauty, durability, and long-lasting performance.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Get your selected tiles delivered safely and conveniently to your location.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Products",
    description:
      "Shop with confidence from a curated collection of reliable and stylish products.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Our support team is ready to help you choose the right tiles for your project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Why TileGallery
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need
            <span className="block text-blue-600">
              For Your Perfect Space
            </span>
          </h2>

          <p className="mt-5 text-slate-600">
            We combine beautiful designs, quality products, and a
            smooth shopping experience.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="size-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

