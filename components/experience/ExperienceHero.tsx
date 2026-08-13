import Link from "next/link";
import { ArrowDown, Leaf } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative min-h-[520px] overflow-hidden">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85"
        alt="Papua Nature Experience"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-end px-6 pb-16 sm:px-8 lg:px-10">
        <div className="max-w-3xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md">
            <Leaf size={16} />
            Experience Papua Barat Daya
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Experience Papua.
            <br />
            <span className="text-emerald-300">
              Beyond the Destination.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            Rasakan pengalaman laut, alam, petualangan, dan kehidupan
            masyarakat lokal Papua bersama mereka yang mengenal wilayah ini
            lebih dekat.
          </p>

          <Link
            href="#featured-experiences"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-500"
          >
            Explore Experiences
            <ArrowDown size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}