"use client";

import { INSTAGRAM_URL } from "@/data/nav";
import "./cta.css";
import "./cta.mobile.css";

export const Cta = (): React.JSX.Element => {
  return (
    <section className="cta">
      <h2 data-reveal="title">Tell us what you have in mind.</h2>
      <a
        className="b"
        href={INSTAGRAM_URL}
        rel="noopener noreferrer"
        target="_blank"
        data-reveal="circle"
      >
        Enquire about an appointment
      </a>
    </section>
  );
};
