"use client";

import { useLocale } from "@/context/LocaleContext";
import "./academy.css";
import "./academy.desktop.css";
import "./academy.mobile.css";

export const Academy = (): React.JSX.Element => {
  const { dictionary } = useLocale();

  return (
    <section className="academy" id="academy" data-bg="taupe">
      <div>
        <h2>{dictionary.academy.title}</h2>
        <p style={{ marginTop: 24 }}>{dictionary.academy.body}</p>
        <a className="btn solid" href="#book">
          {dictionary.academy.cta}
        </a>
      </div>
      <div>
        <div className="ph d">
          <span>{dictionary.academy.imageLabel}</span>
        </div>
        <dl>
          <div>
            <dt>{dictionary.academy.courses}</dt>
            <dd>{dictionary.academy.coursesValue}</dd>
          </div>
          <div>
            <dt>{dictionary.academy.duration}</dt>
            <dd>{dictionary.academy.durationValue}</dd>
          </div>
          <div>
            <dt>{dictionary.academy.fees}</dt>
            <dd>{dictionary.academy.feesValue}</dd>
          </div>
          <div>
            <dt>{dictionary.academy.enquiries}</dt>
            <dd>{dictionary.academy.enquiriesValue}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
