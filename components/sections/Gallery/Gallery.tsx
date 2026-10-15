"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  type GalleryCategory,
} from "@/data/gallery";
import "./gallery.css";
import "./gallery.desktop.css";
import "./gallery.mobile.css";

type FilterValue = "all" | GalleryCategory;

export const Gallery = (): React.JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  return (
    <section className="gal" id="gallery" data-bg="ivory">
      <h2>The work</h2>
      <div className="filters" role="group" aria-label="Filter gallery">
        {GALLERY_FILTERS.map((filter) => (
          <button
            key={filter.id}
            type="button"
            aria-pressed={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="cols">
        {GALLERY_ITEMS.map((item) => {
          const isHidden =
            activeFilter !== "all" && item.category !== activeFilter;

          return (
            <div
              key={item.id}
              className={`ph ${isHidden ? "hide" : ""}`.trim()}
              style={{ aspectRatio: item.aspectRatio }}
              data-c={item.category}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 900px) 30vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
