"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
  Search,
  X,
  Leaf,
} from "lucide-react";

const navItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Destinasi",
    href: "/destinasi",
  },
  {
    label: "Explore Map",
    href: "/explore",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Budaya",
    href: "/budaya",
  },

  {
    label: "Homestay",
    href: "/homestay",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">

          <div className="flex h-14 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 shadow-lg">
                <Leaf
                  size={20}
                  className="text-white"
                />
              </div>

              <div>
                <div className="text-lg font-bold leading-none text-white">
                  Eco<span className="text-emerald-300">App</span>
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  Explore Naturally
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-white/90 transition hover:text-emerald-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">

              <button
                type="button"
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <Search size={18} />
              </button>

              <Link
                href="/explore"
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-emerald-800 shadow-lg transition hover:bg-emerald-50"
              >
                <Leaf size={15} />
                Explore
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              type="button"
              aria-label={
                isOpen
                  ? "Tutup menu"
                  : "Buka menu"
              }
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md lg:hidden"
            >
              {isOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="px-4 pb-4 lg:hidden">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/70 p-3 shadow-2xl backdrop-blur-xl">

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white transition hover:bg-white/10 hover:text-emerald-300"
                  >
                    {item.label}

                    <ArrowRight size={15} />
                  </Link>
                ))}
              </nav>

              <Link
                href="/destinasi"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3.5 text-sm font-bold text-white"
              >
                <Leaf size={16} />
                Explore Sorong
              </Link>

            </div>
          </div>
        )}
      </header>
    </>
  );
}