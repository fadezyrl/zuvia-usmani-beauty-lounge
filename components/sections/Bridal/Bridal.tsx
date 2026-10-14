"use client";

import { useLocale } from "@/context/LocaleContext";
import "./bridal.css";
import "./bridal.desktop.css";
import "./bridal.mobile.css";

export const Bridal = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="bridal dark" data-bg="black">
      <div className="ph full">
        <span>{dictionary.bridal.imageLabel}</span>
      </div>
      <h2>{dictionary.bridal.title}</h2>
      <div className="side">
        <p>{dictionary.bridal.body}</p>
        <a className="btn solid" href="#book">
          {dictionary.bridal.cta}
        </a>
      </div>
    </section>
  );
};
