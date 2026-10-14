"use client";

import { useLocale } from "@/context/LocaleContext";
import "./social.css";
import "./social.desktop.css";
import "./social.mobile.css";

const INSTAGRAM_URL = "https://www.instagram.com/zuviausmanibeautylounge/";

export const Social = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="social" data-bg="greige">
      <h2>{dictionary.social.title}</h2>
      <div>
        <p>{dictionary.social.body}</p>
        <a
          className="btn solid"
          href={INSTAGRAM_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          {dictionary.social.cta}
        </a>
      </div>
    </section>
  );
};
