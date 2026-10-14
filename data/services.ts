export type ServiceItem = {
  id: string;
  name: string;
  line: string;
  href: string;
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    id: "hair",
    name: "Haircuts and styling",
    line: "Cuts, blow-dries, styling",
    href: "#menu",
    image: "/images/hair-large.jpg",
  },
  {
    id: "color",
    name: "Hair color",
    line: "Color and highlights",
    href: "#menu",
    image: "/images/color-1.jpg",
  },
  {
    id: "treatments",
    name: "Keratin and treatments",
    line: "Hair care treatments",
    href: "#menu",
    image: "/images/hair-detail.jpg",
  },
  {
    id: "makeup",
    name: "Makeup and bridal",
    line: "Occasion and bridal looks",
    href: "#menu",
    image: "/images/gallery-bridal.jpg",
  },
  {
    id: "nails",
    name: "Nails",
    line: "Manicure and nail work",
    href: "#menu",
    image: "/images/gallery-nails.jpg",
  },
  {
    id: "skin",
    name: "Skin and beauty",
    line: "As listed on the price list",
    href: "#menu",
    image: "/images/gallery-makeup.jpg",
  },
  {
    id: "academy",
    name: "Z Academy",
    line: "Professional training",
    href: "#academy",
    image: "/images/academy-training.jpg",
  },
];
