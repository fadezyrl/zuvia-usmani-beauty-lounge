"use client";

import { useState } from "react";
import {
  GALLERY_FILTERS,
  GALLERY_ITEMS,
  type GalleryCategory,
} from "@/data/gallery";
import { useLocale } from "@/context/LocaleContext";
import "./gallery.css";
import "./gallery.desktop.css";
import "./gallery.mobile.css";

type FilterValue = "all" | GalleryCategory;

export const Gallery = (): React.JSX.Element => {
  const { dictionary } = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  return (
    <section className="gal" id="gallery" data-bg="ivory">
      <h2>{dictionary.gallery.title}</h2>
      <div
        className="filters"
        role="group"
        aria-label={dictionary.gallery.filterLabel}
      >
        {GALLERY_FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {dictionary.gallery.filters[filter]}
          </button>
        ))}
      </div>
      <div className="cols">
        {GALLERY_ITEMS.map((item) => {
          const label = `${dictionary.gallery.filters[item.category]} ${dictionary.gallery.photoSuffix}`;
          const isHidden =
            activeFilter !== "all" && item.category !== activeFilter;

          return (
            <div
              key={item.id}
              className={`ph ${item.tone} ${isHidden ? "hide" : ""}`.trim()}
              style={{ aspectRatio: item.aspectRatio }}
              data-c={item.category}
            >
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};
