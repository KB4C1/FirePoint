import fp1 from "../../assets/fp-1.png";
import fp5 from "../../assets/fp-5.png";
import fp7 from "../../assets/fp-7.png";

export default function Developments() {
  return (
    <section className="developments">
      <h2
        style={{
          fontSize: "1.5rem",
          textAlign: "center",
          margin: "2rem 0",
        }}
      >
        РОЗРОБКИ
      </h2>

      <div className="weapon drone fp12">
        <img src={fp1} alt="FP-1" />
        <div className="weaponInfo droneInfo">
          <h2>FP-1/2</h2>
          <span className="weaponDesc droneDesc">
            FP-1 — безпілотний літальний апарат ударного призначення, що
            належить до класу Deep-strike (глибокого ураження). Платформа
            розроблена для виконання завдань на значній відстані від лінії
            безпосереднього зіткнення з можливістю ураження стратегічно важливих
            або оперативно значущих цілей.
          </span>
          <span className="droneDesc">
            FP‑2 — безпілотний літальний апарат ударного призначення, що
            належить до класу Front‑Strike. Апарат спроектовано для виконання
            тактичних бойових завдань на передовій та у зоні активного бойового
            контакту з високою точністю ураження оперативних цілей на відстані
            до 200 км.
          </span>
        </div>
      </div>

      <div className="weapon rocket fp5">
        <div className="weaponInfo rocketInfo">
          <h2>FP-5 «Flamingo»</h2>
          <span className="weaponDesc rocketDesc">
            FP‑5 «Flamingo» — крилата ракета великої дальності наземного
            базування з оперативною дальністю до 3000 км. Апарат поєднує
            стабільний субзвуковий політ, сучасну систему наведення та високу
            точність ураження навіть у складних умовах.
          </span>
        </div>
        <img src={fp5} alt="FP-5" />
      </div>

      <div className="weapon rocket fp7">
        <img src={fp7} alt="FP-7" />
        <div className="weaponInfo rocketInfo">
          <h2>FP-7 / FP-9</h2>
          <span className="weaponDesc rocketDesc">
            FP‑7 — тактична балістична ракета наземного базування з максимальною
            дальністю ураження до 200 км, максимальною швидкістю 1500 м/с та
            часом польоту до 250 секунд, тоді як FP‑9 — балістична ракета з
            розширеною дальністю дії до 855 км, здатна уражати цілі глибоко у
            тилу з максимальною швидкістю польоту близько 2200 м/с. Незабаром.
          </span>
        </div>
      </div>
    </section>
  );
}
