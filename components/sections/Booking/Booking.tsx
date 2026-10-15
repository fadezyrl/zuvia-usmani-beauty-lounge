"use client";

import "./booking.css";

export const Booking = (): React.JSX.Element => {
  return (
    <section className="deepbg" id="book" data-bg="deep">
      <h2>Book an appointment</h2>
      <p>
        Tell us the service and the date you have in mind. We reply to confirm
        availability. Online booking is not available yet.
      </p>
      <a className="btn solid" href="#contact">
        Send an enquiry
      </a>
    </section>
  );
};
