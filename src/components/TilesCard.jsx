
"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const TilesCard = ({ tiles }) => {
  return (
    <Card
      className="
        group
        max-w-full
        
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-blue-900/10
      "
    >
      {/* ================= IMAGE ================= */}
      <Link
        href={`/all-tiles/${tiles.id}`}
        className="block"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            src={tiles.image}
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 50vw,
                   (max-width: 1200px) 33vw,
                   25vw"
            alt={tiles.title || "Tile"}
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-110
            "
          />

          {/* Dark Gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent
              opacity-60
              transition-opacity
              duration-500
              group-hover:opacity-80
            "
          />

          {/* Featured Badge */}
          <div
            className="
              absolute
              left-4
              top-4
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/20
              bg-white/90
              px-3
              py-1.5
              text-xs
              font-semibold
              text-gray-800
              shadow-lg
              backdrop-blur-md
            "
          >
            <Sparkles
              size={13}
              className="text-blue-600"
            />
            Premium
          </div>

          {/* View Icon */}
          <div
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              translate-y-2
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-gray-800
              opacity-0
              shadow-lg
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowUpRight size={18} />
          </div>

          {/* Image Bottom Text */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/80">
              Tile Collection
            </p>
          </div>
        </div>
      </Link>

      {/* ================= CONTENT ================= */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div>
          <h2
            className="
              line-clamp-1
              text-lg
              font-bold
              tracking-tight
              text-gray-900
              transition-colors
              duration-300
              group-hover:text-blue-700
            "
          >
            {tiles.title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Premium quality decorative tile
          </p>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">
          {/* Price */}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Starting from
            </p>

            <p className="mt-0.5 text-xl font-extrabold text-gray-900">
              ${tiles.price}
            </p>
          </div>

          {/* Button */}
          <Link href={`/all-tiles/${tiles.id}`}>
            <Button
              className="
                group/button
                h-10
                rounded-xl
                bg-[#0f4ea6]
                px-4
                font-semibold
                text-white
                shadow-md
                shadow-blue-900/20
                transition-all
                duration-300
                hover:bg-[#0b3c82]
                hover:shadow-lg
                hover:shadow-blue-900/30
              "
              endContent={
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-0.5
                    group-hover/button:-translate-y-0.5
                  "
                />
              }
            >
              View Details
            </Button>
          </Link>
        </div>

        {/* Bottom Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">
            Premium Collection
          </span>

          <span className="font-medium text-emerald-600">
            Available
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TilesCard;

