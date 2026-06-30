import Quote from "./quote";
import Denys from "../assets/DenysShtilerman.svg";
import Egor from "../assets/EgorSkalyga.svg";
import Iryna from "../assets/IrynaTereh.svg";
import type { RefObject } from "react";

interface AboutProps {
  sectionRef: RefObject<HTMLDivElement | null>;
}

export default function About({ sectionRef }: AboutProps) {
  return (
    <>
      <span className="block bg-[#272724] w-screen h-0.5"></span>
      <section className="flex flex-col p-3" ref={sectionRef}>
        <h2 className="text-xl text-center">Про нас</h2>
        <div className="flex flex-col gap-15">
          <p className="text-l font-light sm:text-center lg:text-xl max-w-180 place-self-center">
            Fire Point — українська компанія, яка займається
            обороннимитехнологіями. Ми спеціалізуємося на розробці високоточної
            зброї великої дальності та безпілотних систем
          </p>
          <div className="lg:flex flex-row justify-evenly">
            <Quote
              imgPath={Denys}
              q="Ми віддали безпеку за гарантії Будапештського меморандуму. Це довело: безпеку не можна обмінювати на слова. Україна має якнайшвидше наростити свою міць."
              name="Денис Штілерман"
              role="Співвласник і головний конструктор Fire Point"
            />
            <Quote
              imgPath={Egor}
              q="Ми створили ракети й безпілотники з нуля, зробивши пріоритетом масове виробництво для забезпечення фронту."
              name="Єгор Скалига"
              role="співвласник та директор Fire Point"
            />
            <Quote
              imgPath={Iryna}
              q="Ми шукаємо рішення відкрито і використовуємо доступні джерела, а не оперуємо лише закритими і дорогими системами"
              name="Ірина Терех"
              role="Технічна директорка компанії Fire Point"
            />
          </div>
        </div>
      </section>
    </>
  );
}
