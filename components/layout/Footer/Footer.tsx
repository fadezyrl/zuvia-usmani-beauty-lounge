"use client";

import { FOOTER_PAGE_LINKS } from "@/data/nav";
import { SERVICES } from "@/data/services";
import "./footer.css";
import "./footer.desktop.css";
import "./footer.mobile.css";

const INSTAGRAM_URL = "https://www.instagram.com/zuviausmanibeautylounge/";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="site-footer">
      <div className="fgrid">
        <div>
          <a className="logo" href="#top">
            <span className="mono" aria-hidden="true">
              Z
            </span>
            <b>Zuvia Usmani Beauty Lounge</b>
          </a>
          <p style={{ marginTop: 18, color: "#bdb3aa" }}>
            Salon and academy. Karachi and Muscat.
          </p>
        </div>
        <div>
          <h3>Pages</h3>
          <ul>
            {FOOTER_PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.id}>
                <a href="#menu">{service.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Find us</h3>
          <ul>
            <li>
              <a href="#contact">Karachi, DHA Phase 8</a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="fine">
        Zuvia Usmani Beauty Lounge. Prices shown only once confirmed by the
        business.
      </p>
    </footer>
  );
};
