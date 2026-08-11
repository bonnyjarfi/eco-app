"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Check,
  Leaf,
  MapPin,
  Star,
  UserRound,
  Users,
  Waves,
} from "lucide-react";

import { homestays } from "@/data/homestays";

export default function HomestayDetailPage() {
    const params = useParams();
  
    const slug = params.slug as string;
  
    const homestay = homestays.find(
      (item) => item.slug === slug
    );
  if (!homestay) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7faf8] px-6">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <BedDouble size={28} />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Homestay tidak ditemukan
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Homestay yang Anda cari belum tersedia.
          </p>

          <Link
            href="/homestay"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            <ArrowLeft size={16} />
            Kembali ke Homestay
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf8]">
      {/* TOP SPACING */}
      <section className="px-4 pb-6 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* BACK */}
          <Link
            href="/homestay"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-emerald-700"
          >
            <ArrowLeft size={16} />
            Semua Homestay
          </Link>

          {/* BREADCRUMB */}
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-emerald-700">
              Beranda
            </Link>

            <span>→</span>

            <Link
              href="/homestay"
              className="hover:text-emerald-700"
            >
              Homestay
            </Link>

            <span>→</span>

            <span className="text-gray-600">
              {homestay.name}
            </span>
          </div>
        </div>
      </section>

      {/* HERO IMAGE + INFO */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr]">
            {/* GALLERY */}
            <div>
              <div className="relative overflow-hidden rounded-3xl bg-emerald-950">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="h-[380px] w-full object-cover sm:h-[500px]"
                />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-emerald-800 shadow backdrop-blur">
                  <Leaf size={14} />
                  Local Homestay
                </div>
              </div>

              {/* THUMBNAILS */}
              <div className="mt-3 grid grid-cols-4 gap-3">
                {homestay.gallery.slice(0, 4).map(
                  (image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="overflow-hidden rounded-xl bg-gray-100"
                    >
                      <img
                        src={image}
                        alt={`${homestay.name} ${index + 1}`}
                        className="h-20 w-full object-cover transition duration-300 hover:scale-105 sm:h-28"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* INFORMATION CARD */}
            <div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Local Stay
                  </p>

                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                    {homestay.name}
                  </h1>
                </div>

                <div className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-bold text-gray-800">
                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-amber-400"
                  />
                  {homestay.rating}
                </div>
              </div>

              {/* LOCATION */}
              <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                <MapPin
                  size={16}
                  className="text-emerald-600"
                />
                {homestay.location}
              </div>

              {/* GUIDE */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
                    <img
                    src={homestay.guideImage}
                    alt={homestay.guide}
                    className="h-full w-full object-cover"
                    />
                </div>

                <div>
                    <p className="text-[11px] text-gray-400">
                    Local Guide
                    </p>

                    <p className="text-sm font-bold text-gray-900">
                    {homestay.guide}
                    </p>
                </div>
                </div>

              {/* PRICE */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="text-xs text-gray-400">
                  Harga Homestay
                </p>

                <div className="mt-1">
                  <span className="text-3xl font-bold text-emerald-700">
                    Rp{" "}
                    {homestay.pricePerPerson.toLocaleString(
                      "id-ID"
                    )}
                  </span>

                  <span className="ml-1 text-sm text-gray-400">
                    / orang / malam
                  </span>
                </div>
              </div>

              {/* CONTACT */}
              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800"
              >
                Hubungi Guide
                <ArrowRight size={17} />
              </button>

              <p className="mt-3 text-center text-[11px] leading-5 text-gray-400">
                Hubungi guide untuk mengecek ketersediaan
                homestay dan paket perjalanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.5fr_0.7fr]">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <Leaf
                size={19}
                className="text-emerald-600"
              />

              <h2 className="text-xl font-bold text-gray-900">
                Tentang Homestay
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
              {homestay.description}
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Menginap di homestay lokal memberikan kesempatan
              untuk menikmati alam Papua sekaligus berinteraksi
              lebih dekat dengan masyarakat setempat.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <BedDouble
                  size={20}
                  className="text-emerald-600"
                />

                <p className="mt-3 text-sm font-bold text-gray-900">
                  Local Stay
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Tinggal bersama komunitas lokal.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <Waves
                  size={20}
                  className="text-emerald-600"
                />

                <p className="mt-3 text-sm font-bold text-gray-900">
                  Wisata Bahari
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Akses pengalaman wisata laut Papua.
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4">
                <Users
                  size={20}
                  className="text-emerald-600"
                />

                <p className="mt-3 text-sm font-bold text-gray-900">
                  Guide Lokal
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Dibantu guide yang mengenal wilayah.
                </p>
              </div>
            </div>
          </div>

          {/* QUICK INFO */}
          <div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">
              Informasi Singkat
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 text-emerald-600"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Lokasi
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {homestay.location}
                  </p>
                </div>
              </div>

      <div className="flex items-start gap-3">
                <Star
                  size={18}
                  fill="currentColor"
                  className="mt-0.5 text-amber-400"
                />

                <div>
                  <p className="text-xs text-gray-400">
                    Rating
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {homestay.rating} / 5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRIP PACKAGES */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <p className="text-sm font-semibold text-emerald-600">
              Explore Papua
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Paket Trip
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Lengkapi pengalaman menginap dengan perjalanan
              wisata yang dapat diatur bersama guide lokal.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homestay.packages.map((trip) => (
              <div
                key={trip.id}
                className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Waves size={21} />
                </div>

                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {trip.name}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-500">
                  {trip.description}
                </p>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-[11px] text-gray-400">
                    Harga paket
                  </p>

                  <p className="mt-1 text-lg font-bold text-emerald-700">
                    Rp {trip.price.toLocaleString("id-ID")}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                    <Users size={12} />
                    {trip.unit}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-emerald-700">
                  Tanyakan Paket
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL COMMUNITY */}
      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl bg-emerald-950 px-6 py-12 text-white sm:px-10 lg:px-14">
            <div className="max-w-3xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <Leaf size={24} />
              </div>

              <h2 className="mt-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
                Perjalanan Anda
                <span className="block text-emerald-300">
                  Mendukung Masyarakat Lokal.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-emerald-50/70 sm:text-base">
                Dengan memilih homestay dan paket perjalanan yang
                dikelola masyarakat lokal, wisatawan turut membantu
                membuka peluang ekonomi bagi komunitas setempat.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  "Menginap bersama masyarakat lokal",
                  "Menggunakan jasa guide lokal",
                  "Mendukung usaha wisata masyarakat",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Check
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-300"
                    />

                    <span className="text-xs leading-5 text-emerald-50/75">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-sm font-bold text-emerald-800">
                Tertarik menginap di Dugong Homestay?
              </p>

              <p className="mt-1 text-sm text-emerald-700/70">
                Hubungi guide untuk informasi ketersediaan dan
                paket perjalanan.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
            >
              Hubungi Guide
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}