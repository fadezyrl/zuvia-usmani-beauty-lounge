"use client";

import { Photo } from "@/components/ui/Photo";
import "./academy.css";
import "./academy.desktop.css";
import "./academy.mobile.css";

export const Academy = (): React.JSX.Element => {
  return (
    <section className="academy" id="academy" data-bg="taupe">
      <div>
        <h2>Z Academy</h2>
        <p style={{ marginTop: 24 }}>
          Professional training taught inside a working salon. Enquire for the
          courses currently open.
        </p>
        <a className="btn solid" href="#book">
          Explore Z Academy
        </a>
      </div>
      <div>
        <Photo
          className="d"
          src="/images/academy-training.jpg"
          alt="Z Academy training session"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <dl>
          <div>
            <dt>Courses</dt>
            <dd>Course names to be confirmed by the business.</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>To be confirmed.</dd>
          </div>
          <div>
            <dt>Fees</dt>
            <dd>To be confirmed.</dd>
          </div>
          <div>
            <dt>Enquiries</dt>
            <dd>
              Send a message and the team will reply with current details.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
