"use client";
import { MONTH, YEARS } from "@/constants/constants";
import React, { useState } from "react";
import DetailsCalculation from "./details";
import Account from "./account";
import Income from "./income";
import Residency from "./residency";
import SocialStatus from "./social-status";

export default function Calculator() {
  const [isAccountingForEmployee, setIsAccountingForEmployee] = useState(true);
  return (
    <div className="h-[750px] border-2 border-gray-500 flex flex-col p-8">
      <DetailsCalculation />
      <Account
        isAccountingForEmployee={isAccountingForEmployee}
        setIsAccountingForEmployee={setIsAccountingForEmployee}
      />
      <Income />
      <Residency />
      <SocialStatus />
      <div className="self-center">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-40 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
        >
          Расчитать
        </button>
      </div>
    </div>
  );
}
