
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bath,
  ChefHat,
  Home,
  Layers3,
  Mountain,
} from "lucide-react";

const categories = [
  {
    title: "Floor Tiles",
    description: "Durable designs for beautiful floors",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
  {
    title: "Wall Tiles",
    description: "Elegant finishes for modern walls",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
  {
    title: "Bathroom Tiles",
    description: "Fresh and stylish bathroom designs",
    icon: Bath,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  },
  {
    title: "Kitchen Tiles",
    description: "Beautiful tiles for modern kitchens",
    icon: ChefHat,
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf",
  },
  {
    title: "Outdoor Tiles",
    description: "Strong surfaces for outdoor spaces",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Layers3 className="size-4" />
              Explore Categories
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Find Tiles For
              <span className="block text-blue-600">
                Every Space
              </span>
            </h2>
          </div>

          <Link
            href="/all-tiles"
            className="group inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-blue-600"
          >
            View All Tiles
            <ArrowUpRight className="size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href="/all-tiles"
                  className="group relative block h-[300px] overflow-hidden rounded-3xl"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md">
                      <Icon className="size-5" />
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold">
                          {category.title}
                        </h3>

                        <p className="mt-1 text-sm text-white/75">
                          {category.description}
                        </p>
                      </div>

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 transition group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowUpRight className="size-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

