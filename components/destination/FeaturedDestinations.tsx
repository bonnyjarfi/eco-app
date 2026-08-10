import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/data/destinations";

export default function FeaturedDestinations() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Discover Sorong
              </span>
            </div>

            <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Destinasi Unggulan
              <Leaf
                size={25}
                className="text-emerald-600"
                strokeWidth={1.8}
              />
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Jelajahi destinasi ekowisata pilihan dan temukan pengalaman
              terbaik di Sorong, Papua Barat Daya.
            </p>
          </div>

          <Link
            href="/destinasi"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            Lihat Semua
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
}