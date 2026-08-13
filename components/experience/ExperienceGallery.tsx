"use client";

import { useState } from "react";

interface ExperienceGalleryProps {
  images: string[];
  name: string;
}

export default function ExperienceGallery({
  images,
  name,
}: ExperienceGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) {
    return null;
  }

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl bg-gray-100">
        <img
          src={images[activeImage]}
          alt={`${name} ${activeImage + 1}`}
          className="h-[520px] w-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveImage(index)}
              className={`overflow-hidden rounded-xl ${
                activeImage === index
                  ? "ring-2 ring-emerald-600 ring-offset-2"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <img
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                className="h-24 w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}