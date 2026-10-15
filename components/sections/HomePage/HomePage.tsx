"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Bridal } from "@/components/sections/Bridal";
import { Services } from "@/components/sections/Services";
import { Colour } from "@/components/sections/Colour";
import { Academy } from "@/components/sections/Academy";
import { Gallery } from "@/components/sections/Gallery";
import { Lounge } from "@/components/sections/Lounge";
import { Map } from "@/components/sections/Map";
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
          <Bridal />
          <Services />
          <Colour />
          <Academy />
          <Gallery />
          <Lounge />
          <Map />
          <Pause />
          <Cta />
        </main>
        <Footer />
      </ScrollReveal>
    </>
  );
};
