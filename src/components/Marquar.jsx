
"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import {
  ArrowUpRight,
  Sparkles,
  Star,
} from "lucide-react";

const news = [
  {
    id: "1",
    title: "Elevate Your Space with Luxury Tiles",
  },
  {
    id: "2",
    title: "Fresh & Modern Tile Designs Just Landed",
  },
  {
    id: "3",
    title: "Crafted for Modern Living",
  },
  {
    id: "4",
    title: "Discover Tiles That Define Your Style",
  },
  {
    id: "5",
    title: "Upgrade Your Space with Timeless Designs",
  },
  {
    id: "6",
    title: "Explore Our Latest Premium Collection",
  },
];

const MarqueePage = () => {
  return (
    <section className="relative overflow-hidden border-y border-blue-900/40 bg-[#0c0240] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-full w-40 bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-0 h-full w-40 bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[58px] items-center container">
        {/* Fixed Badge */}
        <div className="absolute left-0 top-0 z-20 flex h-full items-center bg-[#0c0240] pl-4 pr-5 sm:pl-6 sm:pr-7">
          <div className="flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 backdrop-blur-sm">
            <Sparkles className="size-3.5 text-cyan-300 sm:size-4" />

            <span className="whitespace-nowrap text-xs font-semibold tracking-wide text-blue-100 sm:text-sm">
              Latest Updates
            </span>
          </div>

          {/* Badge Shadow/Fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 translate-x-full bg-gradient-to-r from-[#0c0240] to-transparent" />
        </div>

        {/* Marquee */}
        <Marquee
          
          speed={55}
          gradient={false}
          className="w-full"
        >
          {news.map((item) => (
            <div
              key={item.id}
              className="flex items-center"
            >
              {/* News Item */}
              <div className="flex items-center gap-3 px-8 sm:px-10">
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                  <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
                </div>

                <span className="whitespace-nowrap text-sm font-medium tracking-wide text-blue-50 sm:text-[15px]">
                  {item.title}
                </span>

                <ArrowUpRight className="size-4 shrink-0 text-cyan-300" />
              </div>

              {/* Separator */}
              <div className="h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueePage;

