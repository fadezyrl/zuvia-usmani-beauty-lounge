"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import "./services.css";
import "./services.desktop.css";
import "./services.mobile.css";

export const Services = (): React.JSX.Element => {
  const [active, setActive] = useState(SERVICES[0]);

  return (
    <section className="svc dark" id="services" data-bg="black">
      <div>
        <h2>Services</h2>
        <div className="rows">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.href}
              onMouseEnter={() => setActive(service)}
              onFocus={() => setActive(service)}
            >
              <strong>{service.name}</strong>
              <small>{service.line}</small>
            </a>
          ))}
        </div>
        <p style={{ marginTop: 36 }}>
          <a className="btn solid" href="#menu">
            Open the full service menu
          </a>
        </p>
      </div>
      <div className="ph panel">
        <Image
          src={active.image}
          alt={`${active.name} at Zuvia Usmani Beauty Lounge`}
          fill
          sizes="(max-width: 900px) 0px, 35vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};
