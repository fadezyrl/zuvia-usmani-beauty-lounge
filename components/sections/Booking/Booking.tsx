"use client";

import { useLocale } from "@/context/LocaleContext";
import "./booking.css";

export const Booking = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="deepbg" id="book" data-bg="deep">
      <h2>{dictionary.booking.title}</h2>
      <p>{dictionary.booking.body}</p>
      <a className="btn solid" href="#contact">
        {dictionary.booking.cta}
      </a>
    </section>
  );
};
