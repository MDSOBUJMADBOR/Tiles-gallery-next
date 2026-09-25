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
{
name: "Tanvir Hossain",
role: "Architect",
image: "https://i.pravatar.cc/150?img=11",
review:
"The variety of tile designs is impressive. I found several beautiful options for my latest interior project.",
},
{
name: "Mim Akter",
role: "Homeowner",
image: "https://i.pravatar.cc/150?img=44",
review:
"The website looks clean and professional. I really enjoyed browsing the different collections and designs.",
},
{
name: "Arif Mahmud",
role: "Interior Designer",
image: "https://i.pravatar.cc/150?img=13",
review:
"TileGallery has a great selection of modern tiles. It makes finding suitable designs for clients much easier.",
},
{
name: "Faria Rahman",
role: "Homeowner",
image: "https://i.pravatar.cc/150?img=45",
review:
"I was looking for elegant tiles for my bedroom and found some amazing designs here. Highly enjoyable experience.",
},
{
name: "Sakib Khan",
role: "Builder",
image: "https://i.pravatar.cc/150?img=14",
review:
"The tile collection has many stylish options. It is very convenient to compare different designs in one place.",
},
];

export default function Testimonials() {
const marqueeItems = [...testimonials, ...testimonials];

return ( <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"> <div className="container mx-auto">
{/* Section Header */} <div className="mx-auto max-w-2xl text-center">
<motion.span
initial={{ opacity: 0, y: 15 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-semibold text-yellow-700"
> <Star className="size-4 fill-current" />
Customer Reviews
</motion.span>


      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl"
      >
        What Our Customers Say
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 text-sm leading-7 text-slate-600 sm:text-base"
      >
        Discover what homeowners, designers, architects, and builders
        think about TileGallery.
      </motion.p>
    </div>

    {/* Marquee */}
    <div className="relative mt-14 overflow-hidden">
      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent sm:w-28" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />

      {/* Marquee Track */}
      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="
              w-[340px]
              shrink-0
              rounded-3xl
              border border-slate-200
              bg-slate-50
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-blue-200
              hover:bg-white
              hover:shadow-xl

              sm:w-[460px]
              sm:p-7

              lg:w-[520px]
            "
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              {/* Quote */}
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-100">
                <Quote className="size-5 text-blue-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            {/* User */}
            <div className="mt-5 flex items-center gap-4 border-t border-slate-200 pt-4">
              <Image
                src={item.image}
                alt={item.name}
                width={44}
                height={44}
                sizes="44px"
                loading="lazy"
                className="size-11 rounded-full object-cover ring-2 ring-white shadow-sm"
              />

              <div className="min-w-0">
                <h3 className="truncate font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
            {/* Review */}
            <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              “{item.review}”
            </p>


          </div>
        ))}
      </motion.div>
    </div>

    {/* Bottom Text */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 text-center"
    >
      <p className="text-sm text-slate-500">
        Trusted by homeowners and professionals for beautiful tile
        collections.
      </p>
    </motion.div>
  </div>
</section>


);
}
