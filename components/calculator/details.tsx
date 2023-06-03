import { MONTH, YEARS } from "@/constants/constants";
import React from "react";

export default function DetailsCalculation() {
  return (
    <div className="flex w-full justify-between pb-4 mb-4 border-b-2 p-2">
      <div className="border-2 rounded border-gray-200 px-2 py-2 w-1/4 mr-3">
        Прямой расчет
      </div>
      <div className="border-2 rounded border-gray-200 px-2 py-2 bg-gray-200 w-1/6 mr-3">
        <span>ТОО</span>
      </div>
      <div className="border-2 rounded border-gray-200 px-2 py-2 bg-gray-200 w-1/6 mr-3">
        <span>УСН</span>
      </div>
      <div className="border-2 rounded border-gray-200 px-2 py-2 w-1/4 mr-3">
        <select className="w-full">
          {YEARS.map((year) => (
            <option key={`year-${year}`}>{year}</option>
          ))}
        </select>
      </div>
      <div className="border-2 rounded border-gray-200 px-2 py-2 w-1/4">
        <select className="w-full">
          {MONTH.map((month) => (
            <option key={`year-${month}`}>{month}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
