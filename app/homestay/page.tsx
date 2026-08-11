"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Search,
  MapPin,
  Star,
  UserRound,
  Leaf,
} from "lucide-react";

import { homestays } from "@/data/homestays";

export default function HomestayPage() {
  const [search, setSearch] = useState("");

  const filteredHomestays = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    if (!keyword) {
      return homestays;
    }

    return homestays.filter(
      (homestay) =>
        homestay.name.toLowerCase().includes(keyword) ||
        homestay.location.toLowerCase().includes(keyword) ||
        homestay.guide.toLowerCase().includes(keyword)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-[#f7faf8]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-emerald-950 px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-700/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-900/60 px-4 py-2 text-xs font-medium text-emerald-200">
              <Leaf size={14} />
              Local Stay • Papua Barat Daya
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Stay Local.
              <span className="block text-emerald-300">
                Experience More.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-50/75 sm:text-base">
              Temukan homestay lokal dan pengalaman perjalanan yang
              dikelola bersama masyarakat Papua Barat Daya.
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
                  placeholder="Cari homestay atau guide..."
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
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* SECTION TITLE */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-emerald-600">
              Stay with Local Community
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Homestay Pilihan Lokal
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Menginap lebih dekat dengan alam dan masyarakat lokal.
              Setiap perjalanan membantu mendukung ekonomi komunitas
              setempat.
            </p>
          </div>

          {/* GRID */}
          {filteredHomestays.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredHomestays.map((homestay) => (
                <Link
                  key={homestay.id}
                  href={`/homestay/${homestay.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-emerald-950">
                    <img
                      src={homestay.image}
                      alt={homestay.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* LOCAL BADGE */}
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 shadow backdrop-blur">
                      <Leaf size={12} />
                      Local Homestay
                    </div>
                  </div>

                  {/* INFO */}
                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-gray-900 transition group-hover:text-emerald-700">
                        {homestay.name}
                      </h3>

                      <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-700">
                        <Star
                          size={15}
                          fill="currentColor"
                          className="text-amber-400"
                        />
                        {homestay.rating}
                      </div>
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin size={14} />
                      {homestay.location}
                    </div>

                    {/* GUIDE */}
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
                      <UserRound size={14} className="text-emerald-600" />
                      Guide:{" "}
                      <span className="font-medium text-gray-700">
                        {homestay.guide}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                      {homestay.description}
                    </p>

                    {/* PRICE */}
                    <div className="mt-5 border-t border-gray-100 pt-4">
                      <p className="text-[11px] text-gray-400">
                        Mulai dari
                      </p>

                      <div className="mt-1 flex items-end justify-between gap-3">
                        <div>
                          <span className="text-lg font-bold text-emerald-700">
                            Rp{" "}
                            {homestay.pricePerPerson.toLocaleString(
                              "id-ID"
                            )}
                          </span>

                          <span className="ml-1 text-xs text-gray-400">
                            / orang / malam
                          </span>
                        </div>

                        <span className="flex shrink-0 items-center gap-1 text-xs font-bold text-emerald-700">
                          Lihat Detail
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* EMPTY STATE */
            <div className="rounded-3xl border border-dashed border-gray-200 bg-white px-6 py-20 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900">
                Homestay tidak ditemukan
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Coba gunakan nama homestay atau guide yang berbeda.
              </p>
            </div>
          )}

          {/* LOCAL COMMUNITY */}
          <div className="mt-14 overflow-hidden rounded-3xl bg-emerald-950 px-6 py-10 text-white sm:px-10">
            <div className="max-w-3xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <Leaf size={22} />
              </div>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                Menginap di Lokal.
                <span className="block text-emerald-300">
                  Mendukung Masyarakat Lokal.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-emerald-50/70 sm:text-base">
                EcoApp membantu memperkenalkan homestay, guide, dan
                pengalaman wisata yang dikelola masyarakat lokal agar
                wisatawan dapat menikmati Papua sekaligus memberikan
                manfaat bagi komunitas setempat.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <BedDouble
                    size={20}
                    className="text-emerald-300"
                  />
                  <p className="mt-3 text-sm font-bold">
                    Homestay Lokal
                  </p>
                  <p className="mt-1 text-xs leading-5 text-emerald-50/60">
                    Tinggal lebih dekat dengan kehidupan masyarakat.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <UserRound
                    size={20}
                    className="text-emerald-300"
                  />
                  <p className="mt-3 text-sm font-bold">
                    Guide Lokal
                  </p>
                  <p className="mt-1 text-xs leading-5 text-emerald-50/60">
                    Berwisata bersama orang yang mengenal wilayahnya.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <Leaf
                    size={20}
                    className="text-emerald-300"
                  />
                  <p className="mt-3 text-sm font-bold">
                    Ekonomi Lokal
                  </p>
                  <p className="mt-1 text-xs leading-5 text-emerald-50/60">
                    Membantu membuka peluang ekonomi masyarakat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}