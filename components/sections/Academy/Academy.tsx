"use client";

import { Photo } from "@/components/ui/Photo";
import { ASSETS, INSTAGRAM_LOUNGE } from "@/data/assets";
import "./academy.css";
import "./academy.mobile.css";

export const Academy = (): React.JSX.Element => {
  return (
    <section className="academy" id="academy">
      <div className="lead">
        <h2 data-reveal="title">Z Academy. Taught inside a working lounge.</h2>
        <p data-reveal="copy">
          Professional training with Pivot Point material and live
          demonstrations — the same team that finishes bridal and colour clients
          teaches the floor.
        </p>
        <a
          className="enq"
          href={INSTAGRAM_LOUNGE}
          rel="noopener noreferrer"
          target="_blank"
          data-reveal="copy"
        >
          Ask about current courses
        </a>
        <p className="note" data-reveal="fade">
          Course names, fees, and dates are confirmed directly — message us for
          what is open now.
        </p>
      </div>
      <div className="pair">
        <Photo
          className="wide"
          src={ASSETS.academyTeach}
          alt="Zuvia teaching with Pivot Point materials at Z Academy"
          sizes="(max-width: 820px) 60vw, 35vw"
          data-reveal="media"
          objectPosition="center 20%"
        />
        <Photo
          className="tall"
          src={ASSETS.academyCourse}
          alt="Makeup course demonstration in the lounge"
          sizes="(max-width: 820px) 40vw, 25vw"
          data-reveal="media"
        />
      </div>
    </section>
  );
};
