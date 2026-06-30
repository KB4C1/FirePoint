import { useState } from "react";
import Logo from "../assets/FirePointLogo.svg";
import Button from "./Button";
import ContactUs from "./contactUsFrom";

export default function Footer() {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <>
      <span className="block bg-[#272724] w-screen h-0.5"></span>
      <section className="flex flex-row place-content-between p-4 md: place-content-evenly">
        <div className="flex flex-col gap-3">
          <img className="w-32" src={Logo} alt="FirePoint Logo" />
          <a href="mailto:info@firepoint.agency">info@firepoint.agency</a>
          <Button onClick={() => setContactOpen(true)}>
            <strong>Написати нам</strong>
          </Button>
        </div>
        <div className="flex flex-col">
          <a>cookie policy</a>
          <a>privacy policy</a>
          <a>policy</a>
        </div>
      </section>
      <ContactUs isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
