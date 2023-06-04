import { MONTH, YEARS } from "@/constants/constants";
import React from "react";
import { useFormContext } from "react-hook-form";

export default function DetailsCalculation() {
  const methods = useFormContext();

  const {register}=methods;
  return (
    <div className="flex flex-col p-1 pb-2 mb-2  border-b-2 md:w-full md:justify-between md:flex-row md:pb-4 md:mb-4 mb:p-2">
      <div className="border-2 rounded px-1 py-1 mb-1 md:mb-0 border-gray-200 md:px-2 md:py-2 md:w-1/4 md:mr-3">
        Прямой расчет
      </div>
      <div className="border-2 rounded px-1 py-1 mb-1 md:mb-0 border-gray-200 md:px-2 md:py-2 md:w-1/6 md:mr-3">
        <span>ТОО</span>
      </div>
      <div className="border-2 rounded px-1 py-1 mb-1 md:mb-0 border-gray-200 md:px-2 md:py-2 md:w-1/6 md:mr-3">
        <span>УСН</span>
      </div>
      <div className="border-2 rounded px-1 py-1 mb-1 md:mb-0 border-gray-200 md:px-2 md:py-2 md:w-1/4 md:mr-3 items-center">
        <select className="w-full" {...register('year')}>
          {YEARS.map((year) => (
            <option key={`year-${year}`} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="border-2 rounded px-1 py-1 mb-1 md:mb-0 border-gray-200 md:px-2 md:py-2 md:w-1/4 md:mr-3 items-center">
        <select className="w-full">
          {MONTH.map((month) => (
            <option key={`year-${month}`}>{month}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
