"use client";

import { Photo } from "@/components/ui/Photo";
import "./bridal.css";
import "./bridal.desktop.css";
import "./bridal.mobile.css";

export const Bridal = (): React.JSX.Element => {
  return (
    <section className="bridal dark" data-bg="black">
      <Photo
        className="full"
        src="/images/bridal-wide.jpg"
        alt="Bridal look at Zuvia Usmani Beauty Lounge"
        sizes="100vw"
      />
      <h2>Bridal and makeup, in close focus.</h2>
      <div className="side">
        <p>
          From bridal looks to occasion makeup. Ask about a trial and your date.
        </p>
        <a className="btn solid" href="#book">
          Enquire about bridal
        </a>
      </div>
    </section>
  );
};
