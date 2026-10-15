"use client";

import { INSTAGRAM_LOUNGE } from "@/data/assets";
import "./cta.css";
import "./cta.mobile.css";

export const Cta = (): React.JSX.Element => {
  return (
    <section className="cta">
      <h2 data-reveal="title">Tell us the date. We will confirm the look.</h2>
      <a
        className="b"
        href={INSTAGRAM_LOUNGE}
        rel="noopener noreferrer"
        target="_blank"
        data-reveal="circle"
      >
        Message the lounge
      </a>
    </section>
  );
};
