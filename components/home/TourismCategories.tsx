import {
    Bird,
    Church,
    Footprints,
    House,
    Leaf,
    Palmtree,
    Waves,
    Trees,
  } from "lucide-react";
  
  const categories = [
    {
      name: "Hutan & Alam",
      icon: Trees,
      description: "Jelajahi alam",
    },
    {
      name: "Bird Watching",
      icon: Bird,
      description: "Temukan satwa",
    },
    {
      name: "Pulau & Pantai",
      icon: Palmtree,
      description: "Nikmati pesisir",
    },
    {
      name: "Wisata Bahari",
      icon: Waves,
      description: "Eksplorasi laut",
    },
    {
      name: "Mangrove",
      icon: Leaf,
      description: "Jaga ekosistem",
    },
    {
      name: "Kampung Wisata",
      icon: House,
      description: "Kenali masyarakat",
    },
    {
      name: "Budaya",
      icon: Church,
      description: "Kenali budaya",
    },
    {
      name: "Trekking",
      icon: Footprints,
      description: "Jelajahi alam",
    },
  ];
  
  export default function TourismCategories() {
    return (
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl">
          <div className="scrollbar-hide flex gap-0 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-8">
              {categories.map((category) => {
                const Icon = category.icon;
  
                return (
                  <button
                    key={category.name}
                    type="button"
                    className="group flex min-h-[120px] min-w-[120px] shrink-0 flex-col items-center justify-center border-b border-r border-gray-100 px-3 py-5 text-center transition hover:bg-emerald-50"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
  
                    <span className="text-xs font-semibold text-gray-800 sm:text-sm">
                      {category.name}
                    </span>
  
                    <span className="mt-1 hidden text-[11px] text-gray-400 sm:block">
                      {category.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }