import React from "react";
import css from "./HomePage.module.css";
import { RecomendTracks } from "../../components/RecomendTracks/RecomendTracks";

export const HomePage = () => {
  return (
    <div className={css.home}>
      <section className={css.hero}>
        <div>
          {/*  */}
          <div style={{ display: "flex", gap: 20 }}>
            <img src="" alt="" width={686} height={373} />
            <ul style={{ display: "flex", gap: 38, flexDirection: "column" }}>
              <li>
                <img src="" alt="" width={320} height={96} />
              </li>
              <li>
                <img src="" alt="" width={320} height={96} />
              </li>
              <li>
                <img src="" alt="" width={320} height={96} />
              </li>
            </ul>
          </div>
          {/*  */}
          <RecomendTracks />
        </div>
      </section>
    </div>
  );
};
