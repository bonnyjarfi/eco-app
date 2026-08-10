import {
    Leaf,
    Users,
    Landmark,
    Recycle,
  } from "lucide-react";
  
  const principles = [
    {
      icon: Leaf,
      title: "Melestarikan Alam",
      description:
        "Menjaga keindahan alam dan keanekaragaman hayati untuk generasi mendatang.",
    },
    {
      icon: Users,
      title: "Memberdayakan Masyarakat",
      description:
        "Membuka peluang ekonomi dan meningkatkan kesejahteraan masyarakat lokal.",
    },
    {
      icon: Landmark,
      title: "Menghargai Budaya",
      description:
        "Menghormati budaya, tradisi, dan kearifan lokal masyarakat Papua.",
    },
    {
      icon: Recycle,
      title: "Berkelanjutan",
      description:
        "Mendorong pariwisata yang memberikan manfaat jangka panjang.",
    },
  ];
  
  export default function WhyEcotourism() {
    return (
      <section className="bg-[#f5f8f3] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
  
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
  
            <div className="mb-3 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-emerald-600" />
  
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Our Philosophy
              </span>
  
              <span className="h-px w-8 bg-emerald-600" />
            </div>
  
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mengapa Ecotourism?
            </h2>
  
            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Perjalanan bukan hanya tentang tempat yang kita kunjungi,
              tetapi juga tentang bagaimana kita menjaga tempat tersebut
              untuk generasi berikutnya.
            </p>
          </div>
  
          {/* Principles */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
  
            {principles.map((item) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-emerald-100 bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
  
                  {/* Icon */}
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 transition duration-300 group-hover:bg-emerald-700">
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      className="text-emerald-700 transition group-hover:text-white"
                    />
                  </div>
  
                  {/* Title */}
                  <h3 className="mt-5 text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
  
                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
  
          </div>
  
          {/* Quote */}
          <div className="mx-auto mt-14 max-w-3xl text-center">
  
            <div className="mx-auto mb-5 h-px w-16 bg-emerald-300" />
  
            <blockquote className="text-xl font-medium italic leading-8 text-gray-700 sm:text-2xl">
              “Jelajahi dengan hati, tinggalkan hanya jejak,
              ambil hanya kenangan.”
            </blockquote>
  
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Explore Responsibly
            </p>
          </div>
  
        </div>
      </section>
    );
  }