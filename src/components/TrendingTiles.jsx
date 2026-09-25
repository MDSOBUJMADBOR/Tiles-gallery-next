
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import Image from "next/image";

const trending = [
  {
    title: "Luxury Marble",
    subtitle: "Elegant & timeless",
    image:
      "https://images.unsplash.com/photo-1600566753051-8c7c2f7a5c72",
  },
  {
    title: "Modern Grey",
    subtitle: "Minimal & sophisticated",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
  },
  {
    title: "Natural Stone",
    subtitle: "Organic & beautiful",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  },
];

export default function TrendingTiles() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              <Flame className="size-4" />
              Trending Now
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Designs Everyone Loves
            </h2>
          </div>

          <Link
            href="/all-tiles"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600"
          >
            See More
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trending.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative h-[430px] overflow-hidden rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={44}
                height={44}
                sizes="44px"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-7 text-white">
                <p className="text-sm text-white/70">
                  {item.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

