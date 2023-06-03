import Logo from "@/public/logo";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center h-25 px-12 py-6">
      <Logo />
      <div className="flex text-2xl ml-6 border-l-2 border-gray-300" >
        <p className="ml-4">Онлайн бухгалтерия №1 в Казахстане!</p>
      </div>
    </header>
  );
}
