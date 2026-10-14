"use client";

import { Photo } from "@/components/ui/Photo";
import "./intro.css";
import "./intro.desktop.css";
import "./intro.mobile.css";

export const Intro = (): React.JSX.Element => {
  return (
    <section className="intro" id="about" data-bg="ivory">
      <h2>A salon and academy built around the work itself.</h2>
      <Photo
        className="d"
        src="/images/intro-detail.jpg"
        alt="Makeup brushes and hands at work"
        sizes="(max-width: 900px) 60vw, 30vw"
      />
      <div className="text">
        <p>
          Zuvia Usmani Beauty Lounge opened in 2019 and works across hair,
          makeup, bridal artistry, nails and skin. It also runs Z Academy, where
          the same team teaches.
        </p>
        <p className="meta">
          Founded 2019. Karachi, Pakistan and Muscat, Oman.
        </p>
        <a className="link" href="#services">
          See what we offer
        </a>
      </div>
    </section>
  );
};
