import { useState } from "react";
import Logo from "../assets/FirePointLogo.png";
import Banner1 from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import arrow from "../assets/arrowBottom.png";

export default function Header() {
  const [textVis, setVis] = useState(false);

  return (
    <section className="header">
      <div className="header__logo">
        <img src={Logo} alt="FirePoint Logo" />
      </div>
      <div className="header__banner">
        <img
          src={Banner2}
          alt="Banner Mobile"
          className="header__banner-img--mobile"
        />
        <img
          src={Banner1}
          alt="Banner Desktop"
          className="header__banner-img"
        />
        <h1>
          Ціни на бензин в рф бачили?
          <br />
          <strong
            style={{
              cursor: "pointer",
              filter: textVis ? "none" : "blur(4px)",
            }}
            onClick={() => setVis(!textVis)}
          >
            Ми підняли.
          </strong>
        </h1>
        <img src={arrow} className="header__banner-arrow" />
      </div>
    </section>
  );
}