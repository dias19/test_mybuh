import CalculatorIcon from "@/public/calculator-icon";
import React from "react";

export default function Results() {
  return (
    <div className="h-[750px] border-t-2 border-r-2 border-b-2 border-gray-500 flex flex-col items-center justify-center px-10">
      <CalculatorIcon />
      <p className="mt-6 font-bold text-xl text-center">
      Укажите параметры для получения результата
      </p>
    </div>
  );
}
