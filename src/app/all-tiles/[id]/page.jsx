
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  Check,
  Heart,
  Layers3,
  Ruler,
  ShoppingCart,
  Sparkles,
  Tag,
  Box,
} from "lucide-react";
import React from "react";

const TilesDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://tiles-gallery-next.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tile data");
  }

  const tiles = await res.json();

  const tile = tiles.find((p) => p.id == id);

  // ================= NOT FOUND =================
  if (!tile) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
            <Box className="text-red-500" size={30} />
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            Tile Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sorry, we could not  find the tile you are looking for.
          </p>

          <Link href="/all-tiles">
            <Button
              className="mt-6 rounded-xl bg-[#0f4ea6] px-6 font-semibold text-white"
              startContent={<ArrowLeft size={17} />}
            >
              Back to Gallery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">

        {/* ================= BREADCRUMB ================= */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link
            href="/all-tiles"
            className="group flex items-center gap-2 font-medium text-gray-500 transition-colors hover:text-[#0f4ea6]"
          >
            <ArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Gallery
          </Link>

          <span className="text-gray-300">/</span>

          <span className="max-w-[180px] truncate text-gray-400">
            {tile.title}
          </span>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/50">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

            {/* ================================================= */}
            {/* IMAGE SECTION */}
            {/* ================================================= */}
            <div className="relative bg-gray-100 p-3 sm:p-5 lg:p-6">
              <div className="group relative h-[360px] overflow-hidden rounded-2xl bg-gray-200 sm:h-[500px] lg:h-[620px]">

                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    55vw
                  "
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Premium Badge */}
                <div className="absolute left-4 top-4">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-xs font-bold text-gray-800 shadow-lg backdrop-blur-md">
                    <Sparkles
                      size={14}
                      className="text-[#0f4ea6]"
                    />

                    Premium Collection
                  </div>
                </div>

                {/* Category */}
                <div className="absolute bottom-5 left-5">
                  <div className="flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    <Layers3 size={15} />

                    {tile.category}
                  </div>
                </div>

                {/* Floating Action */}
                <button
                  type="button"
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/90
                    text-gray-700
                    shadow-lg
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:bg-white
                    hover:text-red-500
                  "
                  aria-label="Save tile"
                >
                  <Heart size={19} />
                </button>
              </div>
            </div>

            {/* ================================================= */}
            {/* DETAILS SECTION */}
            {/* ================================================= */}
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">

              {/* Small Label */}
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0f4ea6]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0f4ea6]" />
                Tile Collection
              </div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
                {tile.title}
              </h1>

              {/* Studio */}
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="text-gray-400">
                  Designed by
                </span>

                <span className="font-bold text-[#0f4ea6]">
                  TileGallery Studio
                </span>

                <Check
                  size={15}
                  className="rounded-full bg-blue-600 p-0.5 text-white"
                />
              </div>

              {/* Description */}
              <p className="mt-6 text-[15px] leading-7 text-gray-500">
                {tile.description}
              </p>

              {/* ================= PRICE ================= */}
              <div className="mt-7 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Price
                </p>

                <div className="mt-1 flex items-end gap-2">
                  <span className="text-3xl font-extrabold text-gray-950">
                    {tile.price}
                  </span>

                  <span className="mb-1 text-sm font-semibold text-gray-500">
                    {tile.currency}
                  </span>
                </div>
              </div>

              {/* ================= SPECIFICATIONS ================= */}
              <div className="mt-7">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">
                    Product Specifications
                  </h2>

                  <Tag
                    size={18}
                    className="text-gray-400"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* Dimensions */}
                  <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0f4ea6] shadow-sm">
                        <Ruler size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                          Dimensions
                        </p>

                        <p className="mt-0.5 truncate font-bold text-gray-800">
                          {tile.dimensions}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Material */}
                  <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0f4ea6] shadow-sm">
                        <Layers3 size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                          Material
                        </p>

                        <p className="mt-0.5 truncate font-bold text-gray-800">
                          {tile.material}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0f4ea6] shadow-sm">
                        <Tag size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-gray-400">
                          Category
                        </p>

                        <p className="mt-0.5 truncate font-bold text-gray-800">
                          {tile.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stock */}
                  <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                        <Box size={19} />
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">
                          Availability
                        </p>

                        <div className="mt-0.5 flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              tile.inStock
                                ? "bg-emerald-500"
                                : "bg-red-500"
                            }`}
                          />

                          <p
                            className={`font-bold ${
                              tile.inStock
                                ? "text-emerald-600"
                                : "text-red-500"
                            }`}
                          >
                            {tile.inStock
                              ? "In Stock"
                              : "Out of Stock"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* ================= ACTIONS ================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Button
                  className="
                    h-12
                    p-3
                    flex-1
                    rounded-xl
                    bg-[#0f4ea6]
                    font-bold
                    text-white
                    shadow-lg
                    shadow-blue-900/20
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#0b3c82]
                    hover:shadow-xl
                  "
                  startContent={<ShoppingCart size={19} />}
                  endContent={<ArrowUpRight size={17} />}
                  isDisabled={!tile.inStock}
                >
                  {tile.inStock
                    ? "Add to Cart"
                    : "Out of Stock"}
                </Button>

                <Button
                  variant="outline"
                  className="
                    h-12
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-6
                    font-semibold
                    text-gray-800
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#0f4ea6]
                    hover:bg-blue-50
                    hover:text-[#0f4ea6]
                  "
                  startContent={<Bookmark size={18} />}
                >
                  Save
                </Button>

              </div>

              {/* ================= TRUST INFO ================= */}
              <div className="mt-7 grid grid-cols-3 gap-2 border-t border-gray-100 pt-6">

                <div className="text-center">
                  <p className="text-xs font-bold text-gray-800">
                    Premium
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Quality
                  </p>
                </div>

                <div className="border-x border-gray-100 text-center">
                  <p className="text-xs font-bold text-gray-800">
                    Durable
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Material
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs font-bold text-gray-800">
                    Trusted
                  </p>

                  <p className="mt-1 text-[10px] text-gray-400">
                    Collection
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TilesDetailsPage;

