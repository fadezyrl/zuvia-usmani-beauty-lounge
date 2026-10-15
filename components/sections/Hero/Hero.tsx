"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Photo } from "@/components/ui/Photo";
import "./hero.css";
import "./hero.mobile.css";

export const Hero = (): React.JSX.Element => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      const photo = root.querySelector(".ring .ph");
      const spans = root.querySelectorAll("h1 span");
      const foot = root.querySelector(".hero-foot");

      gsap.set(photo, { clipPath: "circle(0% at 50% 50%)" });
      gsap.set(spans, { yPercent: 40, opacity: 0 });
      gsap.set(foot, { opacity: 0 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(photo, {
          clipPath: "circle(70% at 50% 50%)",
          duration: 1.4,
          onComplete: () => {
            gsap.set(photo, { clearProps: "clipPath" });
          },
        })
        .to(
          spans,
          { yPercent: 0, opacity: 1, duration: 1, stagger: 0.15 },
          "-=0.9"
        )
        .to(foot, { opacity: 1, duration: 0.8 }, "-=0.4");
    }, root);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="ring">
        <Photo
          src="/images/hero-portrait.jpg"
          alt="Bridal makeup portrait"
          sizes="(max-width: 820px) 80vw, 46vw"
          objectPosition="center 20%"
          priority
        />
      </div>
      <h1>
        <span>Zuvia</span>
        <span>Usmani</span>
      </h1>
      <div className="hero-foot">
        <p>
          Hair, colour, makeup, bridal, nails and treatments, with Z Academy.
          DHA, Karachi, and Muscat. Since 2019.
        </p>
        <a className="enq" href="#services">
          View services
        </a>
      </div>
    </section>
  );
};
