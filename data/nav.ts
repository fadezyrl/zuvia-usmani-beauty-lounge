export type NavLink = {
  href: string;
  label: string;
  isCta?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#academy", label: "Z Academy" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
  { href: "#book", label: "Book an appointment", isCta: true },
];

export const FOOTER_PAGE_LINKS: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#academy", label: "Z Academy" },
  { href: "#gallery", label: "Gallery" },
];
