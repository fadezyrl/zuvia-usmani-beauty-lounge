"use client";

import { INSTAGRAM_URL } from "@/data/nav";
import "./footer.css";
import "./footer.mobile.css";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="ft" id="visit">
      <div className="ft-top" data-reveal-stagger="">
        <div>
          <p className="nm">
            Zuvia Usmani
            <br />
            Beauty Lounge
          </p>
        </div>
        <div>
          <h3>Karachi</h3>
          <p>
            142 C, Murtaza Commercial Lane 2,
            <br />
            Phase 8, DHA
            <br />
            11:00 AM to 8:00 PM, seven days
          </p>
          <p style={{ marginTop: "1rem" }}>Also in Muscat, Oman.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="ft-big" aria-hidden="true" data-reveal="fade">
        Z
      </div>
      <small data-reveal="copy">&copy; 2026 Zuvia Usmani Beauty Lounge</small>
    </footer>
  );
};
