"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Pause } from "@/components/sections/Pause";
import { Cta } from "@/components/sections/Cta";

export const HomePage = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <ScrollReveal>
        <main id="top">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Pause />
          <Cta />
        </main>
        <Footer />
      </ScrollReveal>
    </>
  );
};
