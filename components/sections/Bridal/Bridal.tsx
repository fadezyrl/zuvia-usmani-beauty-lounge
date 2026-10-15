"use client";

import { Photo } from "@/components/ui/Photo";
import { ASSETS, INSTAGRAM_LOUNGE } from "@/data/assets";
import "./bridal.css";
import "./bridal.mobile.css";

export const Bridal = (): React.JSX.Element => {
  return (
    <section className="bridal" id="bridal">
      <Photo
        className="stage"
        src={ASSETS.bridalMain}
        alt="Full bridal look by Zuvia Usmani Beauty Lounge"
        sizes="(max-width: 820px) 100vw, 55vw"
        data-reveal="media"
        objectPosition="center 15%"
      />
      <Photo
        className="cut"
        src={ASSETS.bridalSide}
        alt="Bridal glow and highlight detail"
        sizes="(max-width: 820px) 62vw, 30vw"
        data-reveal="media"
        objectPosition="center 25%"
      />
      <div className="copy">
        <h2 data-reveal="title">Bridal days, finished in the lounge.</h2>
        <p data-reveal="copy">
          Mehndi, baraat, walima — trials on request. The same hands that teach
          at Z Academy do the work on your day.
        </p>
        <a
          className="enq"
          href={INSTAGRAM_LOUNGE}
          rel="noopener noreferrer"
          target="_blank"
          data-reveal="copy"
        >
          Enquire for your date
        </a>
      </div>
    </section>
  );
};
