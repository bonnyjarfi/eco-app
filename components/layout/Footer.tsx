import Link from "next/link";
import {
    ArrowUpRight,
    Camera,
    Globe2,
    Mail,
    MapPin,
    Phone,
    Video,
  } from "lucide-react";

const quickLinks = [
  { label: "Beranda", href: "/" },
  { label: "Destinasi", href: "/destinasi" },
  { label: "Explore Map", href: "/explore" },
  { label: "Experience", href: "/experience" },
  { label: "Budaya", href: "/budaya" },
];

const informationLinks = [
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kebijakan Privasi", href: "/privasi" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { label: "FAQ", href: "/faq" },
  { label: "Hubungi Kami", href: "/kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600">
                <span className="text-xl">🌿</span>
              </div>

              <div>
                <span className="block text-2xl font-bold tracking-tight">
                  Eco<span className="text-emerald-400">App</span>
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-emerald-300/70">
                  Explore Naturally
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-emerald-100/65">
              Platform digital ecotourism yang menghubungkan wisatawan
              dengan keindahan alam, budaya, dan masyarakat lokal
              Papua Barat Daya.
            </p>

            {/* Location */}
            <div className="mt-6 flex items-start gap-3 text-sm text-emerald-100/70">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-emerald-400"
              />

              <span>
                Sorong, Papua Barat Daya
                <br />
                Indonesia
              </span>
            </div>

            {/* Contact */}
            <div className="mt-3 flex items-center gap-3 text-sm text-emerald-100/70">
              <Mail
                size={17}
                className="shrink-0 text-emerald-400"
              />

              <span>hello@ecoapp.id</span>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Tautan Cepat
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-emerald-100/65 transition hover:text-emerald-300"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Informasi
            </h3>

            <ul className="mt-5 space-y-3">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-emerald-100/65 transition hover:text-emerald-300"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>

            <h3 className="text-sm font-bold text-white">
              Mari Terhubung
            </h3>

            <p className="mt-5 text-sm leading-6 text-emerald-100/65">
              Punya pertanyaan atau ingin menjadi bagian dari
              ekosistem Eco App?
            </p>

            <Link
              href="/kontak"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50"
            >
              Hubungi Kami
              <ArrowUpRight size={16} />
            </Link>

            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3 text-sm text-emerald-100/65">
                <Phone
                  size={16}
                  className="text-emerald-400"
                />
                <span>+62 812-3456-7890</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-emerald-100/65">
                <Mail
                  size={16}
                  className="text-emerald-400"
                />
                <span>hello@ecoapp.id</span>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs text-emerald-100/50">
              © 2026 Eco App. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-emerald-100/35">
              Explore Nature. Empower Local.
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">

<a
  href="#"
  aria-label="Website"
  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-emerald-100/60 transition hover:border-emerald-400 hover:bg-emerald-800 hover:text-white"
>
  <Globe2 size={16} />
</a>

<a
  href="#"
  aria-label="Gallery"
  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-emerald-100/60 transition hover:border-emerald-400 hover:bg-emerald-800 hover:text-white"
>
  <Camera size={16} />
</a>

<a
  href="#"
  aria-label="Video"
  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-emerald-100/60 transition hover:border-emerald-400 hover:bg-emerald-800 hover:text-white"
>
  <Video size={16} />
</a>

</div>

        </div>

      </div>
    </footer>
  );
}