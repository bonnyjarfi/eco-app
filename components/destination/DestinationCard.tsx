import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { Destination } from "@/types/destination";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({
  destination,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destinasi/${destination.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
            {destination.category}
          </span>
        </div>

        {/* Arrow */}
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 opacity-0 shadow-lg transition group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold tracking-tight text-gray-900 transition group-hover:text-emerald-700">
              {destination.name}
            </h3>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin size={13} className="text-emerald-600" />
              {destination.location}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-gray-800">
            <Star size={15} fill="currentColor" className="text-amber-400" />
            {destination.rating}
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {destination.description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <span className="text-xs text-gray-400">
            {destination.reviewCount} ulasan
          </span>

          <span className="text-xs font-semibold text-emerald-700">
            Eco Score {destination.ecoScore}
          </span>
        </div>
      </div>
    </Link>
  );
}