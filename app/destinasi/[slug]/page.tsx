import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  MapPin,
  Leaf,
  Camera,
  Footprints,
  Bird,
  TreePine,
  Waves,
  Tent,
  CheckCircle2,
} from "lucide-react";

import { destinations } from "@/data/destinations";

interface DestinationDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { slug } = await params;

  const destination = destinations.find(
    (item) => item.slug === slug
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7faf8]">
      {/* Breadcrumb */}
      <section className="mx-auto max-w-7xl px-4 pb-4 pt-28 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link
            href="/"
            className="transition hover:text-emerald-600"
          >
            Beranda
          </Link>

          <ArrowRight size={14} />

          <Link
            href="/destinasi"
            className="transition hover:text-emerald-600"
          >
            Destinasi
          </Link>

          <ArrowRight size={14} />

          <span className="font-medium text-gray-700">
            {destination.name}
          </span>
        </div>
      </section>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <MapPin
                  size={16}
                  className="text-emerald-600"
                />
                {destination.location}
              </div>

              <span className="text-gray-300">•</span>

              <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
                <Star
                  size={16}
                  className="fill-amber-400 text-amber-400"
                />
                {destination.rating}
              </div>

              <span className="text-sm text-gray-400">
                ({destination.reviewCount} ulasan)
              </span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {destination.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {destination.name}
            </h1>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-5 py-3 shadow-sm">
            <Leaf
              size={26}
              className="text-emerald-600"
            />

            <div>
              <p className="text-xs font-medium text-gray-500">
                Eco Score
              </p>

              <div className="flex items-end gap-1">
                <span className="text-2xl font-bold text-emerald-700">
                  {destination.ecoScore}
                </span>

                <span className="mb-1 text-xs text-gray-400">
                  / 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Left */}
          <div>
            {/* Hero Image */}
            {/* Gallery */}
<div>
  {/* Main Image */}
  <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-sm">
    <img
      src={destination.image}
      alt={destination.name}
      className="h-[420px] w-full object-cover sm:h-[500px]"
    />
  </div>

{/* Thumbnail Gallery */}
<div className="mt-3 grid grid-cols-4 gap-3">
{destination.gallery?.slice(0, 4).map((image, index) => (
  <div
    key={`${destination.id}-gallery-${index}`}
    className="h-24 overflow-hidden rounded-xl bg-gray-100"
  >
    <img
      src={image}
      alt={`${destination.name} ${index + 1}`}
      className="h-full w-full object-cover"
    />
  </div>
))}
  </div>
  </div>

            {/* Description */}
            <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <Leaf
                  size={20}
                  className="text-emerald-600"
                />

                <h2 className="text-xl font-bold text-gray-900">
                  Tentang Destinasi
                </h2>
              </div>

              <p className="leading-7 text-gray-600">
                {destination.description}
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Nikmati keindahan alam Papua Barat Daya dengan
                tetap menghormati lingkungan, budaya lokal, dan
                masyarakat yang menjadi bagian penting dari
                perjalanan ekowisata.
              </p>
            </div>

            {/* Activities */}
            <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="mb-5 text-xl font-bold text-gray-900">
                Aktivitas yang Dapat Dilakukan
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Activity
                  icon={<Bird size={22} />}
                  label="Bird Watching"
                />

                <Activity
                  icon={<Footprints size={22} />}
                  label="Trekking"
                />

                <Activity
                  icon={<Camera size={22} />}
                  label="Photography"
                />

                <Activity
                  icon={<TreePine size={22} />}
                  label="Nature Walk"
                />
              </div>
            </div>

            {/* Eco Information */}
            <div className="mt-6 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-2">
                <Leaf
                  size={22}
                  className="text-emerald-700"
                />

                <h2 className="text-xl font-bold text-emerald-900">
                  Eco Information
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <EcoRule text="Jangan meninggalkan sampah" />
                <EcoRule text="Jangan mengambil flora dan fauna" />
                <EcoRule text="Jangan mengganggu habitat satwa" />
                <EcoRule text="Gunakan jasa masyarakat lokal" />
                <EcoRule text="Hormati adat dan budaya setempat" />
                <EcoRule text="Bawa botol minum sendiri" />
              </div>
            </div>

            </div>

            {/* Right Sidebar */}
          <aside className="space-y-5">
            {/* Eco Score */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-bold text-gray-900">
                  Eco Score
                </h2>

                <div className="flex items-center gap-1">
                  <Leaf
                    size={18}
                    className="text-emerald-600"
                  />

                  <span className="text-xl font-bold text-emerald-700">
                    {destination.ecoScore}
                  </span>

                  <span className="text-xs text-gray-400">
                    /100
                  </span>
                </div>
              </div>

              <ScoreRow
                label="Conservation"
                score={4}
              />

              <ScoreRow
                label="Community Impact"
                score={4}
              />

              <ScoreRow
                label="Waste Management"
                score={4}
              />

              <ScoreRow
                label="Biodiversity"
                score={5}
              />
            </div>

            {/* Local Guide */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-5 font-bold text-gray-900">
                Local Guide
              </h2>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-bold text-emerald-700">
                  Y
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Yohan
                  </p>

                  <p className="text-xs text-gray-500">
                    Local Guide
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-xs">
                    <Star
                      size={13}
                      className="fill-amber-400 text-amber-400"
                    />

                    <span className="font-semibold">
                      4.9
                    </span>

                    <span className="text-gray-400">
                      (86 ulasan)
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                Hubungi via WhatsApp
              </button>
            </div>

            {/* Travel Information */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="mb-5 font-bold text-gray-900">
                Informasi Perjalanan
              </h2>

              <div className="space-y-4 text-sm">
                <InfoRow
                  icon={<MapPin size={17} />}
                  label="Jarak dari Kota Sorong"
                  value="± 45 km"
                />

                <InfoRow
                  icon={<Waves size={17} />}
                  label="Waktu Tempuh"
                  value="± 1,5 Jam"
                />

                <InfoRow
                  icon={<TreePine size={17} />}
                  label="Transportasi"
                  value="Mobil / Motor / Perahu"
                />

                <InfoRow
                  icon={<Leaf size={17} />}
                  label="Waktu Terbaik"
                  value="Mei - September"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Activity({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-4 text-center transition hover:border-emerald-300 hover:bg-emerald-50">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
        {icon}
      </div>

      <span className="text-xs font-semibold text-gray-700">
        {label}
      </span>
    </div>
  );
}

function EcoRule({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-sm text-emerald-900">
      <CheckCircle2
        size={17}
        className="mt-0.5 shrink-0 text-emerald-600"
      />

      <span>{text}</span>
    </div>
  );
}

function ScoreRow({
  label,
  score,
}: {
  label: string;
  score: number;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-gray-600">{label}</span>

        <span className="font-semibold text-gray-700">
          {score}/5
        </span>
      </div>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className={
              item <= score
                ? "text-emerald-600"
                : "text-gray-200"
            }
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 text-emerald-600">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-400">
          {label}
        </p>

        <p className="mt-0.5 font-medium text-gray-700">
          {value}
        </p>
      </div>
    </div>
  );
}