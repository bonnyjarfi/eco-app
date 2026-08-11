"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Search,
  Trees,
  Waves,
  Palmtree,
  Landmark,
  Mountain,
  Leaf,
  Star,
  MapPin,
} from "lucide-react";
import { destinations } from "@/data/destinations";

const categories = [
  "Semua",
  "Hutan & Alam",
  "Bird Watching",
  "Pulau & Pantai",
  "Wisata Bahari",
  "Mangrove",
  "Kampung Wisata",
  "Budaya",
  "Trekking",
];

const categoryIcons: Record<string, React.ElementType> = {
  "Hutan & Alam": Trees,
  "Bird Watching": Bird,
  "Pulau & Pantai": Palmtree,
  "Wisata Bahari": Waves,
  Mangrove: Leaf,
  "Kampung Wisata": Landmark,
  Budaya: Landmark,
  Trekking: Mountain,
};

export default function DestinasiPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("Semua");
  };

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesCategory =
        activeCategory === "Semua" ||
        destination.category === activeCategory;

      const keyword = search.toLowerCase();

      const matchesSearch =
        destination.name.toLowerCase().includes(keyword) ||
        destination.location.toLowerCase().includes(keyword) ||
        destination.category.toLowerCase().includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-[#f7faf8]">

      {/* HEADER */}
      <section className="bg-emerald-950 px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-900/50 px-4 py-2 text-xs font-medium text-emerald-200">
              <Leaf size={14} />
              Eco Tourism • Sorong, Papua Barat Daya
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Explore
              <span className="block text-emerald-300">
                Destinations.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-50/75 sm:text-base">
              Temukan destinasi alam, budaya, dan pengalaman ekowisata
              terbaik di Sorong, Papua Barat Daya.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">

              <div className="flex flex-1 items-center gap-3 px-4">
                <Search
                  size={20}
                  className="shrink-0 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari destinasi, lokasi, atau kategori..."
                  className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Cari
                <ArrowRight size={16} />
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* CATEGORY FILTER */}
          <div className="mb-10">
            <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-2">

              {categories.map((category) => {
                const Icon =
                  categoryIcons[category];

                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-gray-200 bg-white text-gray-600 hover:border-emerald-300 hover:text-emerald-700"
                    }`}
                  >
                    {Icon && <Icon size={15} />}
                    {category}
                  </button>
                );
              })}

            </div>
          </div>

          {/* TITLE */}
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-sm font-semibold text-emerald-600">
                Explore Sorong
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                Destinasi Unggulan
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                {filteredDestinations.length} destinasi ditemukan
              </p>
            </div>

            {(search || activeCategory !== "Semua") && (
              <button
                type="button"
                onClick={resetFilters}
                className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Reset Filter
              </button>
            )}

          </div>

          {/* DESTINATION GRID */}
          {filteredDestinations.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {filteredDestinations.map(
                (destination) => (
                  <Link
                    key={destination.slug}
                    href={`/destinasi/${destination.slug}`}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    {/* IMAGE */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">

                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* CATEGORY */}
                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 shadow backdrop-blur">
                        {destination.category}
                      </div>

                    </div>

                    {/* INFO */}
                    <div className="p-5">

                      <div className="mb-2 flex items-start justify-between gap-3">

                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700">
                          {destination.name}
                        </h3>

                        <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
                          <Star
                            size={15}
                            fill="currentColor"
                            className="text-amber-400"
                          />
                          {destination.rating}
                        </div>

                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin size={14} />
                        {destination.location}
                      </div>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                        {destination.description}
                      </p>

                      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                        <span className="text-xs text-gray-400">
                        {destination.reviewCount} ulasan
                        </span>

                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-700">
                          Lihat Detail
                          <ArrowRight size={14} />
                        </span>

                      </div>

                    </div>

                  </Link>
                )
              )}

            </div>
          ) : (
            /* EMPTY STATE */
            <div className="rounded-3xl border border-dashed border-gray-200 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Destinasi tidak ditemukan
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Coba gunakan kata kunci atau kategori
                yang berbeda.
              </p>

            </div>
          )}

        </div>
      </section>

    </main>
  );
}