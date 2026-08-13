import Link from "next/link";
import { ArrowRight, MapPin, Star } from "lucide-react";
import type { Experience } from "@/types/experience";

interface FeaturedExperiencesProps {
  experiences: Experience[];
}

export default function FeaturedExperiences({
  experiences,
}: FeaturedExperiencesProps) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-8 bg-emerald-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                Explore Experiences
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience Papua
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Temukan pengalaman alam, laut, kehidupan lokal, dan petualangan
              yang dapat dinikmati bersama masyarakat setempat.
            </p>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
          >
            Lihat Semua
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm">
                  {experience.category}
                </div>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
                  <Star size={13} fill="currentColor" className="text-yellow-500" />
                  {experience.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 transition group-hover:text-emerald-700">
                  {experience.name}
                </h3>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin size={14} className="text-emerald-600" />
                  {experience.location}
                </div>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                  {experience.description}
                </p>

                {/* Price */}
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400">Mulai dari</p>

                  <div className="mt-1 flex items-end justify-between gap-3">
                    <div>
                      {experience.price ? (
                        <>
                          <p className="text-xl font-bold text-emerald-700">
                            Rp {experience.price.toLocaleString("id-ID")}
                          </p>

                          <p className="mt-0.5 text-xs text-gray-400">
                            {experience.unit}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-semibold text-gray-600">
                          Hubungi guide
                        </p>
                      )}
                    </div>

                    <Link
                      href={`/experience/${experience.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 transition hover:text-emerald-900"
                    >
                      Lihat
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}