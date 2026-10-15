export type NavLink = {
  href: string;
  label: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#bridal", label: "Bridal" },
  { href: "#services", label: "Services" },
  { href: "#academy", label: "Academy" },
  { href: "#visit", label: "Visit" },
];

export { INSTAGRAM_LOUNGE as INSTAGRAM_URL } from "./assets";
