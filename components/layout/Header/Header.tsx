"use client";

import { NAV_LINKS } from "@/data/nav";
import { useNavigation } from "@/context/NavigationContext";
import "./header.css";
import "./header.desktop.css";
import "./header.mobile.css";

export const Header = (): React.JSX.Element => {
  const {
    isMenuOpen,
    toggleMenu,
    closeMenu,
    headerTone,
    isHeaderSolid,
  } = useNavigation();

  const classNames = [
    "site-header",
    headerTone === "black" ? "over" : "",
    isHeaderSolid ? "solid" : "",
    isHeaderSolid && headerTone === "greige" ? "tone-greige" : "",
    isHeaderSolid && headerTone === "taupe" ? "tone-taupe" : "",
    isHeaderSolid && headerTone === "deep" ? "tone-deep" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header id="top" className={classNames}>
      <div className="bar">
        <a
          className="logo"
          href="#top"
          aria-label="Zuvia Usmani Beauty Lounge, home"
        >
          <span className="mono" aria-hidden="true">
            Z
          </span>
          <b>Zuvia Usmani Beauty Lounge</b>
        </a>
        <nav aria-label="Main">
          <button
            className="menu"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="links"
            onClick={toggleMenu}
          >
            Menu
          </button>
          <ul id="links" className={isMenuOpen ? "open" : undefined}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={link.isCta ? "btn solid" : undefined}
                  href={link.href}
                  style={link.isCta ? { padding: "12px 20px" } : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
