"use client";

import { useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";

export const DocumentDir = (): null => {
  const { dir, locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "UR" ? "ur" : "en";
    document.documentElement.dir = dir;
  }, [dir, locale]);

  return null;
};
