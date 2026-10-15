"use client";

import "./social.css";
import "./social.desktop.css";
import "./social.mobile.css";

const INSTAGRAM_URL = "https://www.instagram.com/zuviausmanibeautylounge/";

export const Social = (): React.JSX.Element => {
  return (
    <section className="social" data-bg="greige">
      <h2>More work, posted as it happens.</h2>
      <div>
        <p>
          New looks, transformations and academy days go up on Instagram first.
        </p>
        <a
          className="btn solid"
          href={INSTAGRAM_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};
