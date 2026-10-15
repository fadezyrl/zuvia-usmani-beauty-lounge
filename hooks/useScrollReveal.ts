"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EASE = "power3.out";

export const useScrollReveal = (
  scopeRef: RefObject<HTMLElement | null>
): void => {
  useEffect(() => {
    const root = scopeRef.current;
    if (!root) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>('[data-reveal="title"]', root)
        .forEach((element) => {
          gsap.from(element, {
            y: 56,
            opacity: 0,
            duration: 1.25,
            ease: EASE,
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>('[data-reveal="copy"]', root)
        .forEach((element) => {
          gsap.from(element, {
            y: 32,
            opacity: 0,
            duration: 1.1,
            ease: EASE,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>('[data-reveal="media"]', root)
        .forEach((element) => {
          gsap.from(element, {
            scale: 1.08,
            opacity: 0,
            duration: 1.45,
            ease: "power2.out",
            transformOrigin: "center center",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>("[data-reveal-stagger]", root)
        .forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>(":scope > *");
          if (!items.length) {
            return;
          }

          gsap.from(items, {
            y: 40,
            opacity: 0,
            duration: 1.05,
            stagger: 0.1,
            ease: EASE,
            scrollTrigger: {
              trigger: group,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>('[data-reveal="fade"]', root)
        .forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>('[data-reveal="circle"]', root)
        .forEach((element) => {
          gsap.from(element, {
            scale: 0.82,
            opacity: 0,
            duration: 1.2,
            ease: EASE,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

      gsap.utils
        .toArray<HTMLElement>('[data-reveal="pause"]', root)
        .forEach((element) => {
          gsap.from(element, {
            y: 72,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          gsap.to(element, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: element.closest("section") ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
    }, root);

    return () => {
      context.revert();
    };
  }, [scopeRef]);
};
