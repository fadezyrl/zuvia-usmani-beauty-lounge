"use client";

import { Photo } from "@/components/ui/Photo";
import "./hair.css";
import "./hair.desktop.css";
import "./hair.mobile.css";

export const Hair = (): React.JSX.Element => {
  return (
    <section className="hair" data-bg="greige">
      <Photo
        className="a l"
        src="/images/hair-large.jpg"
        alt="Haircut and styling transformation"
        sizes="(max-width: 900px) 100vw, 55vw"
      />
      <Photo
        className="b d"
        src="/images/hair-detail.jpg"
        alt="Close crop of styled hair"
        sizes="(max-width: 900px) 62vw, 30vw"
      />
      <div className="t">
        <h2>Hair</h2>
        <p style={{ marginTop: 22 }}>
          Cuts, styling and treatments, shown on real clients and real hair.
          Dark or vibrant, the photographs lead.
        </p>
        <a className="link" href="#hair-page">
          Hair services and prices
        </a>
      </div>
      <Photo
        className="c"
        src="/images/hair-styling.jpg"
        alt="Hair styling in progress"
        sizes="(max-width: 900px) 50vw, 25vw"
      />
    </section>
  );
};
