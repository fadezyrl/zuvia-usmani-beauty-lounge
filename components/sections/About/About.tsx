"use client";

import { Photo } from "@/components/ui/Photo";
import "./about.css";
import "./about.mobile.css";

export const About = (): React.JSX.Element => {
  return (
    <section className="about" id="about">
      <h2 data-reveal="title">
        A salon and academy in DHA, Karachi, open since 2019,{" "}
        <em>with a second address in Muscat.</em>
      </h2>
      <Photo
        className="l"
        src="/images/intro-detail.jpg"
        alt="Salon detail portrait"
        sizes="(max-width: 820px) 72vw, 25vw"
        data-reveal="media"
      />
      <div className="sm" data-reveal="copy">
        <p>
          Hair, colour, makeup and bridal work, nails and treatments are done
          under one roof. Z Academy teaches the same skills.
        </p>
        <p>Every service and its price is listed in full on the menu pages.</p>
      </div>
    </section>
  );
};
