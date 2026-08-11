import ExploreMap from "@/components/destination/ExploreMap";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-[#f7faf8]">
      <section className="bg-emerald-950 px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-900/50 px-4 py-2 text-xs font-medium text-emerald-200">
              🌿 Eco Tourism • Sorong, Papua Barat Daya
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Explore
              <span className="block text-emerald-300">
                Sorong Map.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-emerald-50/75 sm:text-base">
              Jelajahi lokasi destinasi alam, budaya, dan
              ekowisata terbaik di Sorong, Papua Barat Daya.
            </p>

          </div>
        </div>
      </section>

      <ExploreMap />
    </main>
  );
}