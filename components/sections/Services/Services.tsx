"use client";

import { useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/data/services";
import "./services.css";
import "./services.mobile.css";

export const Services = (): React.JSX.Element => {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const active =
    SERVICES.find((service) => service.id === activeId) ?? SERVICES[0];

  return (
    <section className="svc" id="services">
      <div className="svc-intro" data-reveal="title">
        <h2>What we do in the lounge</h2>
        <a href="#lounge">Hours and visit</a>
      </div>
      <ol id="sl" data-reveal-stagger="">
        {SERVICES.map((service) => (
          <li
            key={service.id}
            className={activeId === service.id ? "on" : undefined}
          >
            <a
              href={service.href}
              data-l={service.panel}
              onMouseEnter={() => setActiveId(service.id)}
              onFocus={() => setActiveId(service.id)}
            >
              {service.label}
              <small>{service.short}</small>
            </a>
          </li>
        ))}
      </ol>
      <div className="pv" aria-hidden="true" data-reveal="media">
        <div className="ph d">
          <Image
            src={active.image}
            alt=""
            fill
            sizes="35vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
