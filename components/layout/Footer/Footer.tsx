"use client";

import { INSTAGRAM_LOUNGE, INSTAGRAM_MAKEUP } from "@/data/assets";
import "./footer.css";
import "./footer.mobile.css";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="ft">
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
          <h3>Follow the work</h3>
          <ul>
            <li>
              <a href="#bridal">Bridal</a>
            </li>
            <li>
              <a href="#academy">Z Academy</a>
            </li>
            <li>
              <a
                href={INSTAGRAM_LOUNGE}
                rel="noopener noreferrer"
                target="_blank"
              >
                @zuviausmanibeautylounge
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_MAKEUP}
                rel="noopener noreferrer"
                target="_blank"
              >
                @zuvia.usmani.makeup
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
