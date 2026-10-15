"use client";

import { LOCATION } from "@/data/location";
import "./map.css";
import "./map.mobile.css";

export const Map = (): React.JSX.Element => {
  return (
    <section className="map" aria-label="Lounge location map">
      <div className="map-shell" data-reveal="fade">
        <iframe
          className="map-frame"
          title={`${LOCATION.name} on Google Maps`}
          src={LOCATION.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="map-veil" aria-hidden="true" />
        <div className="map-pin" aria-hidden="true">
          Z
        </div>
        <div className="map-bar">
          <p data-reveal="title">
            DHA Phase 8, Karachi
            <span>{LOCATION.address}</span>
          </p>
          <a
            className="dir"
            href={LOCATION.mapsShareUrl}
            rel="noopener noreferrer"
            target="_blank"
            data-reveal="copy"
          >
            Open directions
          </a>
        </div>
      </div>
    </section>
  );
};
