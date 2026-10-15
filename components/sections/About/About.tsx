"use client";

import { Photo } from "@/components/ui/Photo";
import { ASSETS } from "@/data/assets";
import "./about.css";
import "./about.mobile.css";

export const About = (): React.JSX.Element => {
  return (
    <section className="about" id="about">
      <h2 data-reveal="title">
        A beauty lounge built for real bridal days, real colour work, and a
        working academy — <em>not a showroom.</em>
      </h2>
      <Photo
        className="l"
        src={ASSETS.about}
        alt="Client styled under the Zuvia Usmani Beauty Lounge gold emblem"
        sizes="(max-width: 820px) 72vw, 25vw"
        data-reveal="media"
        objectPosition="center 20%"
      />
      <div className="sm" data-reveal="copy">
        <p>
          Since 2019 we have worked from DHA Phase 8, Karachi — hair, colour,
          bridal and occasion makeup, nails, treatments, and Z Academy under one
          roof.
        </p>
        <p>
          Open seven days, 11:00 AM to 8:00 PM. Also present in Muscat. Every
          look on this site is from our lounge floor.
        </p>
      </div>
    </section>
  );
};
