"use client";

import { Photo } from "@/components/ui/Photo";
import "./contact.css";
import "./contact.desktop.css";
import "./contact.mobile.css";

export const Contact = (): React.JSX.Element => {
  return (
    <section className="contact" id="contact" data-bg="ivory">
      <div>
        <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>Visit</h2>
        <div className="blk">
          <h3>Karachi</h3>
          <p>
            142 C, Murtaza Commercial Lane 2, Phase 8, DHA, Karachi, Pakistan
          </p>
          <p>Open 11:00 AM to 8:00 PM, seven days a week.</p>
        </div>
        <div className="blk">
          <h3>Muscat</h3>
          <p>Our Muscat location details will be added here.</p>
        </div>
      </div>
      <Photo
        className="map l"
        src="/images/contact-exterior.jpg"
        alt="Zuvia Usmani Beauty Lounge exterior"
        sizes="(max-width: 900px) 100vw, 50vw"
      />
    </section>
  );
};
