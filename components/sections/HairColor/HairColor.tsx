"use client";

import { Photo } from "@/components/ui/Photo";
import "./hair-color.css";
import "./hair-color.mobile.css";

const COLOR_RESULTS = [
  {
    src: "/images/color-1.jpg",
    alt: "Caramel balayage hair color result",
    width: "min(70vw,380px)",
  },
  {
    src: "/images/color-2.jpg",
    alt: "Ash brown hair color result",
    width: "min(80vw,520px)",
  },
  {
    src: "/images/color-3.jpg",
    alt: "Honey blonde highlights result",
    width: "min(60vw,320px)",
  },
  {
    src: "/images/color-4.jpg",
    alt: "Chocolate brown hair color result",
    width: "min(75vw,440px)",
  },
  {
    src: "/images/color-5.jpg",
    alt: "Glossy black hair color result",
    width: "min(60vw,320px)",
  },
] as const;

export const HairColor = (): React.JSX.Element => {
  return (
    <section className="color" id="hair-color" data-bg="ivory">
      <div className="head">
        <h2>Hair color</h2>
        <p style={{ maxWidth: "34ch" }}>
          Color work in sequence. Before and after pairs appear only where
          genuine matching photos exist.
        </p>
      </div>
      <div
        className="strip"
        tabIndex={0}
        aria-label="Hair color photographs, scroll sideways"
      >
        {COLOR_RESULTS.map((item) => (
          <Photo
            key={item.src}
            src={item.src}
            alt={item.alt}
            className="strip-item"
            sizes="(max-width: 900px) 70vw, 380px"
            style={{ width: item.width }}
          />
        ))}
      </div>
    </section>
  );
};
