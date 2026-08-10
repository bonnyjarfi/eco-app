import {
    ArrowRight,
    MapPin,
    Search,
    Sparkles,
  } from "lucide-react";
  
 export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Raja Ampat */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[center_55%] sm:bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/32157316/pexels-photo-32157316.jpeg?auto=compress&cs=tinysrgb&w=2400')",
          }}
        />

        {/* Warna natural */}
        <div className="absolute inset-0 bg-emerald-950/5" />

        {/* Overlay agar text jelas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/0 to-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <Sparkles size={16} className="text-emerald-300" />

            <span>
              Ecotourism • Sorong, Papua Barat Daya
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Explore Sorong
            <span className="block text-emerald-300">
              Naturally.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 lg:text-lg">
            Temukan keindahan alam, budaya, dan keramahan masyarakat
            lokal Papua Barat Daya melalui perjalanan yang lebih
            bertanggung jawab.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-2xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">

            <div className="flex flex-1 items-center gap-3 px-4">
              <Search
                size={20}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Cari destinasi, pengalaman, atau budaya..."
                className="w-full bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Cari
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Location */}
          <div className="mt-7 flex items-center gap-2 text-sm text-white/85">
            <MapPin
              size={16}
              className="text-emerald-300"
            />

            <span>
              Sorong • Papua Barat Daya • Indonesia
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}