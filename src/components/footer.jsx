import { useState } from "react";
import Logo from "../assets/FirePointLogo.png";
import Popout from "./contactPopout";
export default function Footer() {
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  return (
    <footer>
      <div
        className="footer"
        style={{
          borderTop: "2px solid #fff",
          marginTop: "50px",
          paddingTop: "25px",
        }}
      >
        <div className="footer__meta">
          <img
            style={{ filter: "invert(100%)"}}
            src={Logo}
            alt="FirePoint"
          />
          <button
            onClick={() => setIsPopoutOpen(true)}
            className="footer__contact-us"
          >
            НАПИСАТИ НАМ
          </button>
          <a href="mailto:vashapochta@gmail.com">info@firepoint.agency</a>
        </div>
        <div className="footer__policy">
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Policy</p>
        </div>
      </div>

      {isPopoutOpen && <Popout onClose={() => setIsPopoutOpen(false)} />}
    </footer>
  );
}
