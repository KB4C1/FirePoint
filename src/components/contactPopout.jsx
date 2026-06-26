import { useEffect } from "react";

export default function Popout({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Форма відправлена!"); 
    onClose();
  };

  return (
    <div className="contact-us" onClick={handleBackdropClick}>
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h2>Напишіть нам</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <label htmlFor="form__gmail">Email</label>
        <input type="email" id="form__gmail" placeholder="Введіть вашу пошту" required />

        <label htmlFor="form__message">Повідомлення</label>
        <textarea
          name="message"
          id="form__message"
          placeholder="Введіть ваше повідомлення"
          required
        ></textarea>
        <button type="submit" className="form_submit-btn">Надіслати</button>
      </form>
    </div>
  );
}