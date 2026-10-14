"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Dictionary, Locale } from "@/lib/i18n/types";

type LocaleContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LocaleProvider = ({
  children,
  initialLocale = "EN",
}: LocaleProviderProps): React.JSX.Element => {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const value = useMemo((): LocaleContextValue => {
    return {
      locale,
      dictionary: getDictionary(locale),
      setLocale,
      dir: locale === "UR" ? "rtl" : "ltr",
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};
