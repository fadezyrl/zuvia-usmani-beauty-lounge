"use client";

import { Photo } from "@/components/ui/Photo";
import { ASSETS, INSTAGRAM_LOUNGE, INSTAGRAM_MAKEUP } from "@/data/assets";
import "./lounge.css";
import "./lounge.mobile.css";

export const Lounge = (): React.JSX.Element => {
  return (
    <section className="lounge" id="visit">
      <div className="scene" data-reveal="media">
        <Photo
          src={ASSETS.lounge}
          alt="Pedicure lounge and arched product niches at Zuvia Usmani Beauty Lounge"
          sizes="(max-width: 820px) 100vw, 55vw"
          objectPosition="center"
        />
      </div>
      <div className="info">
        <h2 data-reveal="title">Visit the lounge.</h2>
        <div className="blk" data-reveal="copy">
          <h3>Karachi</h3>
          <p>
            142 C, Murtaza Commercial Lane 2, Phase 8, DHA, Karachi, Pakistan
          </p>
        </div>
        <div className="blk" data-reveal="copy">
          <h3>Hours</h3>
          <p>Open seven days a week, 11:00 AM to 8:00 PM.</p>
        </div>
        <div className="blk" data-reveal="copy">
          <h3>Muscat</h3>
          <p>
            Second address in Muscat, Oman. Details confirmed when you enquire.
          </p>
        </div>
        <div className="links" data-reveal="copy">
          <a
            className="enq"
            href={INSTAGRAM_LOUNGE}
            rel="noopener noreferrer"
            target="_blank"
          >
            @zuviausmanibeautylounge
          </a>
          <a
            className="enq"
            href={INSTAGRAM_MAKEUP}
            rel="noopener noreferrer"
            target="_blank"
          >
            @zuvia.usmani.makeup
          </a>
        </div>
      </div>
    </section>
  );
};
