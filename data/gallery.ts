import { ASSETS } from "./assets";

export type GalleryItem = {
  id: string;
  className: string;
  caption: string;
  title: string;
  src: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    className: "g1",
    caption: "Bridal glam",
    title: "Bridal",
    src: ASSETS.classicBridal,
  },
  {
    id: "g2",
    className: "g2",
    caption: "Soft glam",
    title: "Makeup",
    src: ASSETS.softGlam,
  },
  {
    id: "g3",
    className: "g3",
    caption: "Party look",
    title: "Occasion",
    src: ASSETS.partyGlam,
  },
  {
    id: "g4",
    className: "g4",
    caption: "Hair colour",
    title: "Colour",
    src: ASSETS.colourPink,
  },
  {
    id: "g5",
    className: "g5",
    caption: "The lounge, DHA",
    title: "Salon",
    src: ASSETS.lounge,
  },
  {
    id: "g6",
    className: "g6",
    caption: "Styled finish",
    title: "Hair",
    src: ASSETS.clientMoment,
  },
];
