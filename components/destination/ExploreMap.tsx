"use client";

import dynamic from "next/dynamic";

const ExploreMapClient = dynamic(
  () => import("./ExploreMapClient"),
  {
    ssr: false,
    loading: () => (
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7">
            <div className="h-3 w-28 animate-pulse rounded-full bg-gray-200" />

            <div className="mt-3 h-10 w-56 animate-pulse rounded-lg bg-gray-200" />

            <div className="mt-2 h-5 w-80 max-w-full animate-pulse rounded bg-gray-100" />
          </div>

          <div className="h-[500px] animate-pulse rounded-3xl bg-gray-100" />
        </div>
      </section>
    ),
  }
);

export default function ExploreMap() {
  return <ExploreMapClient />;
}