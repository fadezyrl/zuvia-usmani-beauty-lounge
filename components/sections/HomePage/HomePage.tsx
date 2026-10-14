"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Hair } from "@/components/sections/Hair";
import { Bridal } from "@/components/sections/Bridal";
import { HairColor } from "@/components/sections/HairColor";
import { Academy } from "@/components/sections/Academy";
import { Gallery } from "@/components/sections/Gallery";
import { Social } from "@/components/sections/Social";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";

export const HomePage = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Hair />
        <Bridal />
        <HairColor />
        <Academy />
        <Gallery />
        <Social />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
