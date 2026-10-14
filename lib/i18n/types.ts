export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    mono: string;
    tagline: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    academy: string;
    gallery: string;
    contact: string;
    book: string;
    menu: string;
    mainLabel: string;
  };
  hero: {
    title: string;
    copy: string;
    explore: string;
    book: string;
    imageLabel: string;
  };
  intro: {
    title: string;
    body: string;
    meta: string;
    link: string;
    imageLabel: string;
  };
  services: {
    title: string;
    menuCta: string;
    panelFallback: string;
    panelPhoto: string;
    items: {
      hair: { name: string; line: string };
      color: { name: string; line: string };
      treatments: { name: string; line: string };
      makeup: { name: string; line: string };
      nails: { name: string; line: string };
      skin: { name: string; line: string };
      academy: { name: string; line: string };
    };
  };
  hair: {
    title: string;
    body: string;
    link: string;
    imageA: string;
    imageB: string;
    imageC: string;
  };
  bridal: {
    title: string;
    body: string;
    cta: string;
    imageLabel: string;
  };
  hairColor: {
    title: string;
    body: string;
    stripLabel: string;
    results: string[];
  };
  academy: {
    title: string;
    body: string;
    cta: string;
    imageLabel: string;
    courses: string;
    coursesValue: string;
    duration: string;
    durationValue: string;
    fees: string;
    feesValue: string;
    enquiries: string;
    enquiriesValue: string;
  };
  gallery: {
    title: string;
    filterLabel: string;
    filters: {
      all: string;
      bridal: string;
      hair: string;
      nails: string;
      salon: string;
      academy: string;
    };
    photoSuffix: string;
  };
  social: {
    title: string;
    body: string;
    cta: string;
  };
  booking: {
    title: string;
    body: string;
    cta: string;
  };
  contact: {
    title: string;
    karachi: string;
    karachiAddress: string;
    karachiHours: string;
    muscat: string;
    muscatPlaceholder: string;
    mapLabel: string;
  };
  footer: {
    pages: string;
    services: string;
    findUs: string;
    karachiLink: string;
    instagram: string;
    fine: string;
  };
};
