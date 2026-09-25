
"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The tile collection is beautiful and the quality is excellent. I found exactly what I wanted for my living room.",
  },
  {
    name: "Rahim Hasan",
    role: "Interior Designer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "TileGallery makes it easy to discover modern tile designs. The collection is perfect for contemporary projects.",
  },
  {
    name: "Nusrat Jahan",
    role: "Homeowner",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "I loved the design options. The website is simple to use and finding the right tiles was very easy.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700">
            <Star className="size-4 fill-current" />
            Customer Reviews
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <Quote className="size-8 text-blue-600" />

              <p className="mt-5 leading-7 text-slate-600">
                “{item.review}”
              </p>

              <div className="mt-7 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={44}
                  width={44}
                  sizes="44px"
                  className="size-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-slate-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

