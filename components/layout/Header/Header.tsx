"use client";

import { INSTAGRAM_URL, NAV_LINKS } from "@/data/nav";
import { useNavigation } from "@/context/NavigationContext";
import "./header.css";
import "./header.desktop.css";
import "./header.mobile.css";

export const Header = (): React.JSX.Element => {
  const { isMenuOpen, isNavSolid, toggleMenu, closeMenu } = useNavigation();

  return (
    <header className={`nav ${isNavSolid ? "s" : ""}`.trim()} id="nav">
      <a
        className="logo-wrap"
        href="#top"
        aria-label="Zuvia Usmani Beauty Lounge, home"
      >
        <svg className="logo" viewBox="0 0 100 100" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <text
            x="50"
            y="68"
            textAnchor="middle"
            fontFamily="var(--serif)"
            fontSize="58"
            fill="currentColor"
          >
            Z
          </text>
        </svg>
      </a>
      <ul id="menu" className={isMenuOpen ? "o" : undefined}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        className="enq"
        href={INSTAGRAM_URL}
        rel="noopener noreferrer"
        target="_blank"
      >
        Enquire
      </a>
      <button
        className="mb"
        id="mb"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="menu"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>
    </header>
  );
};
