"use client";

import { Photo } from "@/components/ui/Photo";
import "./hero.css";
import "./hero.desktop.css";
import "./hero.mobile.css";

export const Hero = (): React.JSX.Element => {
  return (
    <section
      className="hero"
      data-bg="greige"
      aria-label="Zuvia Usmani Beauty Lounge"
    >
      <h1>Beauty, made by hand since 2019</h1>
      <Photo
        className="big"
        src="/images/hero-portrait.jpg"
        alt="Bridal makeup portrait at Zuvia Usmani Beauty Lounge"
        sizes="(max-width: 900px) 78vw, 40vw"
        priority
      />
      <div className="copy">
        <p>
          Hair, makeup, bridal, nails and training at Zuvia Usmani Beauty Lounge
          in Karachi and Muscat.
        </p>
        <div className="cta">
          <a className="btn solid" href="#services">
            Explore services
          </a>
          <a className="btn line" href="#book">
            Book an appointment
          </a>
        </div>
      </div>
    </section>
  );
};
