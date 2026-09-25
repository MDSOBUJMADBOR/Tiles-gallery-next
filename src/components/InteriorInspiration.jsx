
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  {
    title: "Living Room",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
  {
    title: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf",
  },
  {
    title: "Bathroom",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101",
  },
  {
    title: "Outdoor",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
  },
];

export default function InteriorInspiration() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Interior Inspiration
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            See Tiles In Real Spaces
          </h2>

          <p className="mt-4 text-slate-600">
            Get inspired by beautiful spaces and discover your next
            interior idea.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {images.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative h-64 overflow-hidden rounded-2xl sm:h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-lg font-bold text-white">
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

