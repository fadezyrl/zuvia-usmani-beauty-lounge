"use client";

import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/i18n/types";
import "./locale-switch.css";

const LOCALES: Locale[] = ["EN", "UR"];

export const LocaleSwitch = (): React.JSX.Element => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="locale-switch" role="group" aria-label="Language">
      {LOCALES.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={locale === item}
          onClick={() => setLocale(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
