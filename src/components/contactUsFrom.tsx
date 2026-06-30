import Button from "./Button";

interface ContactUsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUs({ isOpen, onClose }: ContactUsProps) {
  return (
    <div
      className={`z-50 fixed inset-0 w-screen h-screen bg-[#00000075] items-center justify-center ${isOpen ? "flex" : "hidden"}`}
    >
      <div className="text-sm w-[90%] max-w-md bg-[#0c0c0b] border border-solid border-white p-6 rounded-lg">
        <form action="contact-us" className="flex flex-col gap-4">
          <h2 className="text-xl text-center text-white">Зв'яжіться з нами</h2>

          <div className="flex flex-col gap-1">
            <label htmlFor="emailInput" className="text-white text-sm">
              Пошта
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="введіть вашу пошту для зв'язку"
              className="p-2 rounded bg-neutral-800 text-white border border-neutral-700"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="messageTextArea" className="text-white text-sm">
              Повідомлення
            </label>
            <textarea
              name="message"
              id="messageTextArea"
              placeholder="Залишет ваше повідомлення"
              className="p-2 rounded bg-neutral-800 text-white border border-neutral-700 min-h-[100px]"
            ></textarea>
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <Button onClick={onClose}>
              <strong>Скасувати</strong>
            </Button>
            <Button onClick={() => {}}>
              <strong>Надіслати</strong>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
