"use client";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import { MapPin, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { destinations } from "@/data/destinations";
import { useEffect, useState } from "react";

const destinationCoordinates: Record<
  string,
  [number, number]
> = {
  // Kota Sorong & sekitarnya
  "pulau-doom": [-0.88694, 131.23611],

  "klasow-valley": [-0.8760, 131.4000],

  "mangrove-klawalu": [-0.9051, 131.3078],

  "pulau-soop": [-0.89062, 131.19860],

  "hutan-sorong": [-0.8500, 131.2900],

  "pantai-tanjung-kasuar": [-0.80468, 131.29349],

  // Kabupaten Sorong
  "jalur-trekking-malagufuk": [-0.8091, 131.6341],

  // Raja Ampat
  "kampung-yenbeser": [-0.46460, 130.68180],
};

function MapController({
  slug,
}: {
  slug: string | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!slug) return;

    const coordinates = destinationCoordinates[slug];

    if (!coordinates) return;

    map.flyTo(coordinates, 14, {
      duration: 1.5,
    });
  }, [slug, map]);

  return null;
}

const createMarkerIcon = (active = false) =>
  L.divIcon({
    className: "custom-map-marker",
    html: `
      <div style="
        width: ${active ? "44px" : "38px"};
        height: ${active ? "44px" : "38px"};
        border-radius: 9999px;
        background: #059669;
        border: 4px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,.25);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <svg
          width="${active ? "22" : "19"}"
          height="${active ? "22" : "19"}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 4.2 20 5 20 5s.8 4.5-1.1 10.2A7 7 0 0 1 11 20Z"/>
          <path d="M8 21c2.5-4.5 6-7.5 11-9"/>
        </svg>
      </div>
    `,
    iconSize: [active ? 44 : 38, active ? 44 : 38],
    iconAnchor: [
      active ? 22 : 19,
      active ? 22 : 19,
    ],
    popupAnchor: [
      0,
      active ? -22 : -19,
    ],
  });

  
export default function ExploreMap() {
  const [selectedDestination, setSelectedDestination] =
    useState<string | null>(null);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-7">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-px w-8 bg-emerald-600" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
              Explore
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Map
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Temukan destinasi menarik di peta interaktif.
          </p>
        </div>

        {/* Main Map Layout */}
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm lg:grid-cols-[280px_1fr]">

          {/* Destination List */}
          <div className="border-b border-gray-200 bg-white lg:border-b-0 lg:border-r">
            <div className="p-5">

              <div className="mb-4">
                <p className="text-sm font-bold text-gray-900">
                  Destinasi
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Pilih destinasi untuk melihat lokasinya.
                </p>
              </div>

              <div className="space-y-2">
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => setSelectedDestination(destination.slug)}
                  className="group flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition hover:bg-emerald-50"
                >
                    {/* Thumbnail */}
                    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Information */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-gray-900 group-hover:text-emerald-700">
                        {destination.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1">
                        <Star
                          size={12}
                          fill="currentColor"
                          className="text-amber-400"
                        />

                        <span className="text-xs text-gray-500">
                          {destination.rating}
                        </span>

                        <span className="text-gray-300">
                          •
                        </span>

                        <span className="truncate text-xs text-gray-400">
                          {destination.category}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      size={15}
                      className="shrink-0 text-gray-300 transition group-hover:translate-x-1 group-hover:text-emerald-600"
                    />
                  </button>
                ))}
              </div>

              {/* Button */}
              <Link
                href="/destinasi"
                className="mt-5 flex w-full items-center justify-center rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Lihat Semua Destinasi
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[430px] lg:min-h-[500px] lg:self-stretch">

            <MapContainer
              center={[-0.88, 131.30]}
              zoom={11}
              scrollWheelZoom={true}
              className="z-0 h-full w-full"
            >
              <MapController slug={selectedDestination} />

              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {destinations.map((destination) => {
                const coordinates =
                  destinationCoordinates[destination.slug];

                if (!coordinates) return null;

                return (
                  <Marker
                    key={destination.id}
                    position={coordinates}
                    icon={createMarkerIcon()}
                  >
                    <Popup>
                      <div className="w-[210px] overflow-hidden rounded-lg">

                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="h-28 w-full object-cover"
                        />

                        <div className="p-2">
                          <h3 className="font-bold text-gray-900">
                            {destination.name}
                          </h3>

                          <div className="mt-1 flex items-center gap-1 text-xs">
                            <Star
                              size={12}
                              fill="currentColor"
                              className="text-amber-400"
                            />

                            <span>
                              {destination.rating}
                            </span>

                            <span className="text-gray-400">
                              ({destination.reviewCount} ulasan)
                            </span>
                          </div>

                          <Link
                            href={`/destinasi/${destination.slug}`}
                            className="mt-3 block rounded-lg bg-emerald-700 px-3 py-2 text-center text-xs font-semibold text-white"
                          >
                            Lihat Destinasi
                          </Link>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>

            {/* Map Label */}
            <div className="pointer-events-none absolute left-4 top-4 z-[400]">
              <div className="rounded-xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={17}
                    className="text-emerald-600"
                  />

                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Sorong & Sekitarnya
                    </p>

                    <p className="text-[10px] text-gray-500">
                      Papua Barat Daya
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}