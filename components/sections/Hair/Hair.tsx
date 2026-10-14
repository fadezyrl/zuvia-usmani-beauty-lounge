"use client";

import { useLocale } from "@/context/LocaleContext";
import "./hair.css";
import "./hair.desktop.css";
import "./hair.mobile.css";

export const Hair = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="hair" data-bg="greige">
      <div className="ph a l">
        <span>{dictionary.hair.imageA}</span>
      </div>
      <div className="ph b d">
        <span>{dictionary.hair.imageB}</span>
      </div>
      <div className="t">
        <h2>{dictionary.hair.title}</h2>
        <p style={{ marginTop: 22 }}>{dictionary.hair.body}</p>
        <a className="link" href="#hair-page">
          {dictionary.hair.link}
        </a>
      </div>
      <div className="ph c">
        <span>{dictionary.hair.imageC}</span>
      </div>
    </section>
  );
};
