"use client";

import { useLocale } from "@/context/LocaleContext";
import "./hair-color.css";

const RESULT_WIDTHS = [
  "min(70vw,380px)",
  "min(80vw,520px)",
  "min(60vw,320px)",
  "min(75vw,440px)",
  "min(60vw,320px)",
] as const;

const RESULT_TONES = ["l", "d", "", "l", "d"] as const;

export const HairColor = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="color" id="hair-color" data-bg="ivory">
      <div className="head">
        <h2>{dictionary.hairColor.title}</h2>
        <p style={{ maxWidth: "34ch" }}>{dictionary.hairColor.body}</p>
      </div>
      <div
        className="strip"
        tabIndex={0}
        aria-label={dictionary.hairColor.stripLabel}
      >
        {dictionary.hairColor.results.map((label, index) => (
          <div
            key={label}
            className={`ph ${RESULT_TONES[index]}`.trim()}
            style={{ width: RESULT_WIDTHS[index] }}
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
