export type GalleryItem = {
  id: string;
  className: string;
  caption: string;
  title: string;
  src: string;
  tone?: "d" | "l" | "";
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    className: "g1",
    caption: "Bridal",
    title: "Bridal",
    src: "/images/gallery-bridal.jpg",
    tone: "",
  },
  {
    id: "g2",
    className: "g2",
    caption: "Makeup",
    title: "Makeup",
    src: "/images/gallery-makeup.jpg",
    tone: "d",
  },
  {
    id: "g3",
    className: "g3",
    caption: "Nails",
    title: "Nails",
    src: "/images/gallery-nails.jpg",
    tone: "l",
  },
  {
    id: "g4",
    className: "g4",
    caption: "Hair colour",
    title: "Colour",
    src: "/images/color-2.jpg",
    tone: "d",
  },
  {
    id: "g5",
    className: "g5",
    caption: "The salon, DHA",
    title: "Salon and academy",
    src: "/images/gallery-salon.jpg",
    tone: "",
  },
  {
    id: "g6",
    className: "g6",
    caption: "Haircuts",
    title: "Cut",
    src: "/images/hair-styling.jpg",
    tone: "l",
  },
];
