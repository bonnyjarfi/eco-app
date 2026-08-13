import Link from "next/link";
import { ArrowLeft, MapPin, Star, Users } from "lucide-react";
import { experiences } from "@/data/experiences";
import ExperienceGallery from "@/components/experience/ExperienceGallery";

interface ExperienceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { slug } = await params;

  const experience = experiences.find(
    (item) => item.slug === slug
  );

  if (!experience) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7faf8] px-6">
        <div className="text-center">
          <div className="mb-4 text-4xl">🌿</div>

          <h1 className="text-2xl font-bold text-gray-900">
            Experience tidak ditemukan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Experience yang Anda cari belum tersedia.
          </p>

          <Link
            href="/experience"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            <ArrowLeft size={16} />
            Kembali ke Experience
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-10 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-emerald-700">
            Beranda
          </Link>

          <span>→</span>

          <Link href="/experience" className="hover:text-emerald-700">
            Experience
          </Link>

          <span>→</span>

          <span className="font-medium text-gray-800">
            {experience.name}
          </span>
        </div>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Image */}
          <ExperienceGallery
  images={
    experience.gallery?.length
      ? experience.gallery
      : [experience.image]
  }
  name={experience.name}
/>

          {/* Info */}
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                {experience.category}
              </span>

              <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-bold text-gray-800">
                <Star
                  size={14}
                  fill="currentColor"
                  className="text-yellow-500"
                />
                {experience.rating}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900">
              {experience.name}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={16} className="text-emerald-600" />
              {experience.location}
            </div>

            <div className="mt-7 border-t border-gray-100 pt-6">
              <p className="text-xs text-gray-400">
                Harga Experience
              </p>

              <div className="mt-1">
                <span className="text-3xl font-bold text-emerald-700">
                  Rp {experience.price.toLocaleString("id-ID")}
                </span>

                <span className="ml-2 text-sm text-gray-500">
                  {experience.unit}
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Users size={19} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Kapasitas
                </p>

                <p className="text-sm font-bold text-gray-900">
                  {experience.capacity
                    ? `${experience.capacity} orang`
                    : "Hubungi guide"}
                </p>
              </div>
            </div>

            <Link
              href="#contact"
              className="mt-7 flex w-full items-center justify-center rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              Hubungi Guide
            </Link>

            <p className="mt-3 text-center text-xs leading-5 text-gray-400">
              Hubungi guide untuk mengecek ketersediaan dan informasi
              perjalanan.
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Tentang Experience
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              {experience.description}
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Informasi Singkat
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <p className="text-xs text-gray-400">
                  Kategori
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {experience.category}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Lokasi
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {experience.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Rating
                </p>

                <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-gray-900">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-yellow-500"
                  />
                  {experience.rating} / 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}