import type { ReactNode } from "react";

interface BtnProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({ type = "button", children, onClick }: BtnProps) {
  return (
    <button
      onClick={onClick}
      className="max-w-max px-8 py-1 bg-[#1D1D1B] border border-solid border-[#2A2A27] text-xs hover:bg-[#2a2a27]"
      type={type}
    >
      {children}
    </button>
  );
}