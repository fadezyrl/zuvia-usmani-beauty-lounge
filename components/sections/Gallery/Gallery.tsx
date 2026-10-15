"use client";

import { Photo } from "@/components/ui/Photo";
import { GALLERY_ITEMS } from "@/data/gallery";
import "./gallery.css";
import "./gallery.mobile.css";

export const Gallery = (): React.JSX.Element => {
  return (
    <section className="gal" id="gallery">
      <h2 data-reveal="title">Selected work</h2>
      <div className="gg" data-reveal-stagger="">
        {GALLERY_ITEMS.map((item) => (
          <figure key={item.id} className={item.className}>
            <Photo
              className={item.tone}
              src={item.src}
              alt={item.title}
              sizes="(max-width: 820px) 74vw, 40vw"
            />
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
