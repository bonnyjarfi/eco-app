"use client";

import { Anchor, Bird, Leaf, Users } from "lucide-react";

interface ExperienceCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  {
    name: "Marine",
    label: "Marine",
    description: "Laut & bawah laut",
    icon: Anchor,
  },
  {
    name: "Wildlife",
    label: "Wildlife",
    description: "Satwa & burung",
    icon: Bird,
  },
  {
    name: "Nature",
    label: "Nature",
    description: "Alam & trekking",
    icon: Leaf,
  },
  {
    name: "Local Life",
    label: "Local Life",
    description: "Masyarakat lokal",
    icon: Users,
  },
];

export default function ExperienceCategories({
  activeCategory,
  onCategoryChange,
}: ExperienceCategoriesProps) {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            Explore by Experience
          </span>

          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Temukan pengalaman yang kamu cari
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {/* All */}
          <button
            type="button"
            onClick={() => onCategoryChange("All")}
            className={`rounded-2xl border p-4 text-left transition ${
              activeCategory === "All"
                ? "border-emerald-600 bg-emerald-50 shadow-sm"
                : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50"
            }`}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              ✦
            </div>

            <p className="font-bold text-gray-900">Semua</p>

            <p className="mt-1 text-xs text-gray-500">
              Semua pengalaman
            </p>
          </button>

          {categories.map((category) => {
            const Icon = category.icon;
            const active = activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => onCategoryChange(category.name)}
                className={`rounded-2xl border p-4 text-left transition ${
                  active
                    ? "border-emerald-600 bg-emerald-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/50"
                }`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Icon size={20} />
                </div>

                <p className="font-bold text-gray-900">
                  {category.label}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}