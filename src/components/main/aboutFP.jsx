import Logo from "../../assets/FirePointLogo.png";
import Denys from "../../assets/DenysShtilerman.png";
import Egor from "../../assets/EgorSkalyga.png";
import Iryna from "../../assets/IrynaTereh.png";
import Video from "../../assets/IMG_9858.MP4";
import Preview from "../../assets/preview.png";

export default function About() {
  return (
    <section className="main__about">
      <div id="aboutTitle">
        <h2>ПРО FirePoint</h2>
        <img src={Logo} alt="Fire Point" />
      </div>
      <div className="main__about__desc">
        <span id="fp-desc">
          Fire Point — українська компанія, яка займається оборонними
          <br />
          технологіями. Ми спеціалізуємося на розробці високоточної зброї
          <br />
          великої дальності та безпілотних систем
        </span>
      </div>
      <div className="main__about__quotes">
        <div id="DenysShtilerman" className="quote">
          <img src={Denys} alt="Денис Шітлерман" />
          <p className="quote__text-box">
            “Ми віддали свою безпеку за часи Будапештського меморандуму. Ми
            поклались на гарантії цих країн. Зараз ми бачимо, чого варті ці
            гарантії. Ми бачимо єдиний висновок, який можна зробити з цього, що
            ніколи не треба віддавати свою безпеку за слова. Нам треба якомога
            швидше наростити нашу міць, щоб ми могли покінчити з російською
            імперією” –{" "}
            <strong>
              Денис Штілерман, співвласник і головний конструктор Fire Point
            </strong>
          </p>
        </div>
        <div id="EgorSkalyga" className="quote">
          <img src={Egor} alt="Єгор Скалига" />
          <p className="quote__text-box">
            «Ми будували ракети і безпілотники з нуля, з людьми, які не були
            фахівцями з авіації чи ракетобудування, але пріоритетом зробили
            масове виробництво, щоб забезпечити фронт потрібною кількістю
            систем» –
            <strong>Єгор Скалига, співвласник та директор Fire Point</strong>
          </p>
        </div>
        <div id="IrynaTereh" className="quote">
          <img src={Iryna} alt="Ірина Терех" />
          <p className="quote__text-box">
            “Ми шукаємо рішення відкрито і використовуємо доступні джерела, а не
            оперуємо лише закритими і дорогими системами» –
            <strong>
              Ірина Терех, Технічна директорка компанії Fire Point
            </strong>
          </p>
        </div>
      </div>
      <video
        className="droneFlying-video"
        controls
        width="100%"
        preload="metadata"
        poster={Preview}
      >
        <source src={Video} type="video/mp4" />
        Ваш браузер не підтримує відтворення відео.
      </video>
    </section>
  );
}
