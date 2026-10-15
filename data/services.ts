import { ASSETS } from "./assets";

export type ServiceItem = {
  id: string;
  label: string;
  short: string;
  panel: string;
  href: string;
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bridal",
    label: "Bridal",
    short: "Trials, mehndi, walima",
    panel: "Bridal makeup and hair",
    href: "#bridal",
    image: ASSETS.bridalMain,
  },
  {
    id: "makeup",
    label: "Makeup",
    short: "Soft glam to full glam",
    panel: "Occasion makeup",
    href: "#gallery",
    image: ASSETS.partyGlam,
  },
  {
    id: "hair",
    label: "Hair",
    short: "Cuts, waves, updos",
    panel: "Haircuts and styling",
    href: "#colour",
    image: ASSETS.colourStyle,
  },
  {
    id: "colour",
    label: "Colour",
    short: "Balayage to vivid colour",
    panel: "Hair colour",
    href: "#colour",
    image: ASSETS.colourPink,
  },
  {
    id: "treatments",
    label: "Treatments",
    short: "Keratin and shine work",
    panel: "Hair treatments",
    href: "#colour",
    image: ASSETS.colourShine,
  },
  {
    id: "nails",
    label: "Nails",
    short: "Manicure and pedicure",
    panel: "Nails and pedicure lounge",
    href: "#lounge",
    image: ASSETS.lounge,
  },
  {
    id: "academy",
    label: "Academy",
    short: "Z Academy training",
    panel: "Z Academy",
    href: "#academy",
    image: ASSETS.academyTeach,
  },
];
