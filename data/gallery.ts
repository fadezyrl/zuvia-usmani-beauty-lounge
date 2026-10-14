export type GalleryCategory =
  | "bridal"
  | "hair"
  | "nails"
  | "salon"
  | "academy";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  aspectRatio: string;
  src: string;
  alt: string;
};

export const GALLERY_FILTERS: Array<{ id: "all" | GalleryCategory; label: string }> = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal and makeup" },
  { id: "hair", label: "Hair" },
  { id: "nails", label: "Nails" },
  { id: "salon", label: "Salon" },
  { id: "academy", label: "Academy" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "bridal",
    aspectRatio: "4/5",
    src: "/images/gallery-bridal.jpg",
    alt: "Bridal makeup look",
  },
  {
    id: "g2",
    category: "hair",
    aspectRatio: "1/1",
    src: "/images/hair-styling.jpg",
    alt: "Hair styling detail",
  },
  {
    id: "g3",
    category: "nails",
    aspectRatio: "3/4",
    src: "/images/gallery-nails.jpg",
    alt: "Nail art manicure",
  },
  {
    id: "g4",
    category: "hair",
    aspectRatio: "4/5",
    src: "/images/hair-large.jpg",
    alt: "Hair transformation",
  },
  {
    id: "g5",
    category: "salon",
    aspectRatio: "16/10",
    src: "/images/gallery-salon.jpg",
    alt: "Salon interior",
  },
  {
    id: "g6",
    category: "bridal",
    aspectRatio: "3/4",
    src: "/images/gallery-makeup.jpg",
    alt: "Occasion makeup",
  },
  {
    id: "g7",
    category: "academy",
    aspectRatio: "1/1",
    src: "/images/academy-training.jpg",
    alt: "Academy training session",
  },
  {
    id: "g8",
    category: "hair",
    aspectRatio: "3/4",
    src: "/images/color-2.jpg",
    alt: "Hair color result",
  },
  {
    id: "g9",
    category: "nails",
    aspectRatio: "1/1",
    src: "/images/gallery-nails.jpg",
    alt: "Manicure detail",
  },
  {
    id: "g10",
    category: "bridal",
    aspectRatio: "4/5",
    src: "/images/hero-portrait.jpg",
    alt: "Bridal portrait",
  },
  {
    id: "g11",
    category: "salon",
    aspectRatio: "4/5",
    src: "/images/services-panel.jpg",
    alt: "Salon service moment",
  },
  {
    id: "g12",
    category: "academy",
    aspectRatio: "16/10",
    src: "/images/academy-training.jpg",
    alt: "Z Academy classroom",
  },
];
