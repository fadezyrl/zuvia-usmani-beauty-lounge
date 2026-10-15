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
    id: "hair",
    label: "Hair",
    short: "Cuts and styling",
    panel: "Haircuts and styling",
    href: "#",
    image: "/images/hair-large.jpg",
  },
  {
    id: "colour",
    label: "Colour",
    short: "Colour and highlights",
    panel: "Hair colour and highlights",
    href: "#",
    image: "/images/color-1.jpg",
  },
  {
    id: "keratin",
    label: "Keratin",
    short: "Treatments",
    panel: "Keratin and hair treatments",
    href: "#",
    image: "/images/hair-detail.jpg",
  },
  {
    id: "makeup",
    label: "Makeup",
    short: "Professional and bridal",
    panel: "Professional and bridal makeup",
    href: "#",
    image: "/images/gallery-bridal.jpg",
  },
  {
    id: "nails",
    label: "Nails",
    short: "Manicure and more",
    panel: "Nails",
    href: "#",
    image: "/images/gallery-nails.jpg",
  },
  {
    id: "skin",
    label: "Skin",
    short: "Skin and beauty",
    panel: "Skin and beauty",
    href: "#",
    image: "/images/gallery-makeup.jpg",
  },
  {
    id: "academy",
    label: "Academy",
    short: "Z Academy",
    panel: "Z Academy",
    href: "#",
    image: "/images/academy-training.jpg",
  },
];
