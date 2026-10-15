"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SectionBg = "greige" | "ivory" | "black" | "taupe" | "deep";

type NavigationContextValue = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  headerTone: SectionBg;
  isHeaderSolid: boolean;
  isToneReady: boolean;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

type NavigationProviderProps = {
  children: ReactNode;
};

export const NavigationProvider = ({
  children,
}: NavigationProviderProps): React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTone, setHeaderTone] = useState<SectionBg>("greige");
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const [isToneReady, setIsToneReady] = useState(false);

  useEffect(() => {
    const updateTone = (): void => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[data-bg]")
      );
      const y = 80;
      let current = sections[0];

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= y) {
          current = section;
        }
      });

      const bg = (current?.dataset.bg as SectionBg | undefined) ?? "greige";
      setHeaderTone(bg);
      setIsHeaderSolid(bg !== "black" && window.scrollY > 40);
      setIsToneReady(true);
    };

    updateTone();
    window.addEventListener("scroll", updateTone, { passive: true });
    return () => window.removeEventListener("scroll", updateTone);
  }, []);

  const value = useMemo((): NavigationContextValue => {
    return {
      isMenuOpen,
      openMenu: () => setIsMenuOpen(true),
      closeMenu: () => setIsMenuOpen(false),
      toggleMenu: () => setIsMenuOpen((open) => !open),
      headerTone,
      isHeaderSolid,
      isToneReady,
    };
  }, [isMenuOpen, headerTone, isHeaderSolid, isToneReady]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextValue => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
};
