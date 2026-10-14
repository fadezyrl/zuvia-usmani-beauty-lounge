"use client";

import { useLocale } from "@/context/LocaleContext";
import "./contact.css";
import "./contact.desktop.css";
import "./contact.mobile.css";

export const Contact = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="contact" id="contact" data-bg="ivory">
      <div>
        <h2 style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
          {dictionary.contact.title}
        </h2>
        <div className="blk">
          <h3>{dictionary.contact.karachi}</h3>
          <p>{dictionary.contact.karachiAddress}</p>
          <p>{dictionary.contact.karachiHours}</p>
        </div>
        <div className="blk">
          <h3>{dictionary.contact.muscat}</h3>
          <p>{dictionary.contact.muscatPlaceholder}</p>
        </div>
      </div>
      <div className="ph map l">
        <span>{dictionary.contact.mapLabel}</span>
      </div>
    </section>
  );
};
