"use client";

import { Photo } from "@/components/ui/Photo";
import { ASSETS } from "@/data/assets";
import "./colour.css";
import "./colour.mobile.css";

const FRAMES = [
  {
    className: "f1",
    src: ASSETS.colourPink,
    caption: "Vivid colour · Hair by Zuvia Usmani",
    alt: "Hot pink ombre hair colour by Zuvia Usmani",
  },
  {
    className: "f2",
    src: ASSETS.colourShine,
    caption: "Shine and balayage finish",
    alt: "Glossy chestnut hair after colour treatment",
  },
  {
    className: "f3",
    src: ASSETS.colourStyle,
    caption: "Cut, colour, and style on the floor",
    alt: "Stylist finishing voluminous waves in the lounge",
  },
] as const;

export const Colour = (): React.JSX.Element => {
  return (
    <section className="colour" id="colour">
      <div className="head">
        <h2 data-reveal="title">Colour that photographs. Hair that moves.</h2>
        <p data-reveal="copy">
          From quiet balayage to full vivid work — the same transformation energy
          you see on our Instagram, done in the lounge.
        </p>
      </div>
      <div className="rail" data-reveal-stagger="" tabIndex={0} aria-label="Hair colour work">
        {FRAMES.map((frame) => (
          <figure key={frame.src} className={frame.className}>
            <Photo
              src={frame.src}
              alt={frame.alt}
              sizes="(max-width: 820px) 80vw, 420px"
            />
            <figcaption>{frame.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
