import WeaponCard from "./weaponCards";
import fp1 from "../assets/fp-1.svg";
import fp5 from "../assets/fp-5.svg";
import fp7 from "../assets/fp-7.png";
import type { RefObject } from "react";

interface DevelopmentsProps {
  sectionRef: RefObject<HTMLDivElement | null>;
}

export default function Developments({ sectionRef }: DevelopmentsProps) {
  return (
    <>
      <span className="block bg-[#585858] w-screen h-0.5"></span>
      <section className="flex flex-col p-3 gap-10" ref={sectionRef}>
        <h2 className="text-xl text-center">Розробки</h2>
        <div className="flex flex-col gap-15 lg:flex-row justify-evenly">
          <WeaponCard
            name="FP-1/2"
            desc={`FP-1 — безпілотний літальний апарат ударного призначення, що належить до класу Deep-strike (глибокого ураження). Платформа розроблена для виконання завдань на значній відстані від лінії безпосереднього зіткнення з можливістю ураження стратегічно важливих або оперативно значущих цілей. \n\n FP‑2 — безпілотний літальний апарат ударного призначення, що належить до класу Front‑Strike. Апарат спроектовано для виконання тактичних бойових завдань на передовій та у зоні активного бойового контакту з високою точністю ураження оперативних цілей на відстані до 200 км.`}
            imgPath={fp1}
          />
          <WeaponCard
            name="FP-5 «Flamingo»"
            desc="FP‑5 «Flamingo» — крилата ракета великої дальності наземного базування з оперативною дальністю до 3000 км. Апарат поєднує стабільний субзвуковий політ, сучасну систему наведення та високу точність ураження навіть у складних умовах."
            imgPath={fp5}
          />
          <WeaponCard
            name="FP-7 / FP-9"
            desc="FP‑7 — тактична балістична ракета наземного базування з максимальною дальністю ураження до 200 км, максимальною швидкістю 1500 м/с та часом польоту до 250 секунд, тоді як FP‑9 — балістична ракета з розширеною дальністю дії до 855 км, здатна уражати цілі глибоко у тилу з максимальною швидкістю польоту близько 2200 м/с. Незабаром."
            imgPath={fp7}
          />
        </div>
      </section>
    </>
  );
}
