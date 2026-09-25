"use client";

import TilesCard from "@/components/TilesCard";
import { Label, SearchField } from "@heroui/react";
import {
ChevronLeft,
ChevronRight,
Search,
Sparkles,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

const ITEMS_PER_PAGE = 8;

const AllTilesPage = () => {
const [tiles, setTiles] = useState([]);
const [search, setSearch] = useState("");
const [loading, setLoading] = useState(true);
const [currentPage, setCurrentPage] = useState(1);

// ================= FETCH TILES =================
useEffect(() => {
const fetchTiles = async () => {
try {
const res = await fetch(
"https://tiles-gallery-next.vercel.app/data.json"
);


    if (!res.ok) {
      throw new Error("Failed to fetch tiles");
    }

    const data = await res.json();
    setTiles(data);
  } catch (error) {
    console.error("Tiles fetch error:", error);
  } finally {
    setLoading(false);
  }
};

fetchTiles();


}, []);

// ================= SEARCH =================
const handleSearch = (value) => {
setSearch(value);
setCurrentPage(1);
};

// ================= FILTER BY TITLE =================
const filteredTiles = useMemo(() => {
const searchValue = search.trim().toLowerCase();


if (!searchValue) {
  return tiles;
}

return tiles.filter((tile) =>
  tile.title?.toLowerCase().includes(searchValue)
);


}, [tiles, search]);

// ================= TOTAL PAGES =================
const totalPages = Math.ceil(
filteredTiles.length / ITEMS_PER_PAGE
);

// ================= CURRENT PAGE DATA =================
const currentTiles = useMemo(() => {
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = startIndex + ITEMS_PER_PAGE;


return filteredTiles.slice(startIndex, endIndex);


}, [filteredTiles, currentPage]);

// ================= PAGE CHANGE =================
const goToPage = (page) => {
if (page < 1 || page > totalPages) return;


setCurrentPage(page);

window.scrollTo({
  top: 0,
  behavior: "smooth",
});


};

return ( <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50"> <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">


    {/* ================= HEADER ================= */}
    <div className="mb-10">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        <Sparkles size={16} />
        Explore Our Collection
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        All Tiles
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
        Discover premium tiles for your home, office, and interior
        projects. Search by tile name to quickly find what you need.
      </p>
    </div>

    {/* ================= SEARCH SECTION ================= */}
    <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

        {/* SEARCH */}
        <div className="w-full md:max-w-xl">
          <SearchField
            name="search"
            value={search}
            onChange={handleSearch}
          >
            <Label className="mb-2 block text-sm font-semibold text-gray-700">
              Search Tiles
            </Label>

            <SearchField.Group
              className="
                h-12
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                px-3
                transition-all
                duration-200
                hover:border-blue-300
                focus-within:border-blue-500
                focus-within:bg-white
                focus-within:ring-4
                focus-within:ring-blue-100
              "
            >
              <SearchField.SearchIcon className="text-gray-400" />

              <SearchField.Input
                placeholder="Search tiles by title..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
        </div>

        {/* RESULT COUNT */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Search size={17} />

          <span>
            {filteredTiles.length}{" "}
            {filteredTiles.length === 1 ? "tile" : "tiles"} found
          </span>
        </div>
      </div>

      {/* SEARCH STATUS */}
      {search.trim() && (
        <div className="mt-4 border-t border-gray-100 pt-4 text-sm text-gray-500">
          Showing results for{" "}
          <span className="font-semibold text-gray-900">
            &quot;{search}&quot;
          </span>
        </div>
      )}
    </div>

    {/* ================= TILES ================= */}
    {loading ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="aspect-square animate-pulse bg-gray-200" />

            <div className="space-y-3 p-5">
              <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />

              <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    ) : currentTiles.length > 0 ? (
      <>
        {/* TILE GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentTiles.map((tile) => (
            <TilesCard key={tile.id} tiles={tile} />
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-4">

            {/* PAGE INFO */}
            <p className="text-sm text-gray-500">
              Page{" "}
              <span className="font-semibold text-gray-900">
                {currentPage}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900">
                {totalPages}
              </span>
            </p>

            {/* PAGINATION */}
            <div className="flex items-center gap-2">

              {/* PREVIOUS */}
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  text-gray-600
                  shadow-sm
                  transition
                  hover:border-blue-400
                  hover:bg-blue-50
                  hover:text-blue-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Previous page"
              >
                <ChevronLeft size={18} />
              </button>

              {/* PAGE NUMBERS */}
              <div className="flex items-center gap-2">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`
                      flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-lg
                      px-3
                      text-sm
                      font-semibold
                      transition-all
                      duration-200
                      ${
                        currentPage === page
                          ? "bg-[#0f4ea6] text-white shadow-md shadow-blue-200"
                          : "border border-gray-200 bg-white text-gray-600 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
                      }
                    `}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* NEXT */}
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  text-gray-600
                  shadow-sm
                  transition
                  hover:border-blue-400
                  hover:bg-blue-50
                  hover:text-blue-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
                aria-label="Next page"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </>
    ) : (
      /* ================= EMPTY STATE ================= */
      <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
          <Search className="text-blue-600" size={28} />
        </div>

        <h2 className="text-xl font-bold text-gray-900">
          No tiles found
        </h2>

        <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
          We couldn&apos;t find any tile matching{" "}
          <span className="font-semibold text-gray-800">
            &quot;{search}&quot;
          </span>
          . Try searching with another tile name.
        </p>

        <button
          type="button"
          onClick={() => handleSearch("")}
          className="mt-5 rounded-lg bg-[#0f4ea6] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0c3e85]"
        >
          Clear Search
        </button>
      </div>
    )}
  </div>
</main>


);
};

export default AllTilesPage;
