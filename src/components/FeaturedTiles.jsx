
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import TilesCard from "@/components/TilesCard";

export default function FeaturedTiles() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const loadTiles = async () => {
      try {
        const res = await fetch(
          "https://tiles-gallery-next.vercel.app/data.json"
        );

        if (!res.ok) {
          throw new Error("Failed to load tiles");
        }

        const data = await res.json();

        setTiles(data.slice(0, 8));
      } catch (error) {
        console.error(error);
      }
    };

    loadTiles();
  }, []);


  
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto container">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="size-4" />
              Featured Collection
            </span>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Featured Tiles
            </h2>

            <p className="mt-3 max-w-xl text-slate-600">
              Discover some of our most beautiful and popular tile
              collections.
            </p>
          </div>

          <Link
            href="/all-tiles"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600"
          >
            Explore All
            <ArrowRight className="size-5 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {tiles.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tiles.map((tile, index) => (
              <motion.div
                key={tile.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <TilesCard tiles={tile} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

