import {
    Check,
    ArrowRight,
    Home,
    Map,
    Compass,
    ShoppingBag,
  } from "lucide-react";
  import Link from "next/link";
  
  const opportunities = [
    {
      icon: Map,
      text: "Daftarkan Kampung Wisata Anda",
    },
    {
      icon: Home,
      text: "Tawarkan Homestay Anda",
    },
    {
      icon: Compass,
      text: "Jadilah Local Guide",
    },
    {
      icon: ShoppingBag,
      text: "Jual Produk Lokal Anda",
    },
  ];
  
  export default function LocalCommunity() {
    return (
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
  
          <div className="overflow-hidden rounded-[2rem] bg-emerald-950">
  
            <div className="grid lg:grid-cols-2">
  
              {/* Image */}
              <div className="relative min-h-[400px] lg:min-h-[580px]">
  
                <img
                  src="/images/community-papua.jpg"
                  alt="Masyarakat lokal Papua"
                  className="absolute inset-0 h-full w-full object-cover"
                />
  
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
  
                {/* Image Badge */}
                <div className="absolute bottom-6 left-6">
  
                  <div className="rounded-2xl border border-white/20 bg-black/30 px-5 py-4 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                      Local Community
                    </p>
  
                    <p className="mt-1 text-sm font-semibold">
                      Dari masyarakat, untuk pariwisata berkelanjutan.
                    </p>
                  </div>
  
                </div>
              </div>
  
              {/* Content */}
              <div className="flex items-center p-8 sm:p-12 lg:p-16">
  
                <div className="max-w-xl">
  
                  {/* Label */}
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-px w-8 bg-emerald-400" />
  
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                      Local Community
                    </span>
                  </div>
  
                  {/* Heading */}
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Untuk Masyarakat Lokal
                  </h2>
  
                  <p className="mt-5 text-sm leading-7 text-emerald-100/75 sm:text-base">
                    Bergabunglah bersama kami dan kembangkan pariwisata
                    berkelanjutan di kampung Anda. Jadikan potensi alam,
                    budaya, dan kreativitas lokal sebagai peluang ekonomi
                    bagi masyarakat.
                  </p>
  
                  {/* Opportunities */}
                  <div className="mt-8 space-y-4">
  
                    {opportunities.map((item) => {
                      const Icon = item.icon;
  
                      return (
                        <div
                          key={item.text}
                          className="flex items-center gap-4"
                        >
  
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-emerald-300">
                            <Icon size={17} />
                          </div>
  
                          <span className="text-sm font-medium text-white/90">
                            {item.text}
                          </span>
  
                        </div>
                      );
                    })}
  
                  </div>
  
                  {/* CTA */}
                  <Link
                    href="/bergabung"
                    className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
                  >
                    Daftar Sekarang
  
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }