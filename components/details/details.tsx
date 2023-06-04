"use client";
import React, { useState } from "react";
import DetailsCalculation from "./details-calculation";
import Account from "./account";
import Income from "./income";
import Residency from "./residency";
import SocialStatus from "./social-status";
import { useFormContext } from "react-hook-form";


type Props={
  socialStatuses: SocialStatuses[],
  setSocialStatuses:  React.Dispatch<React.SetStateAction<SocialStatuses[]>>;
  setShowResults: (state: boolean) => void;
}

export default function Details({socialStatuses, setSocialStatuses, setShowResults}:Props) {
   const methods=useFormContext();

   const {formState: {isValid}}=methods;

  return (
    <div className="h-auto border-2 border-gray-500 flex flex-col p-8 md:h-[750px]">
      <DetailsCalculation />
      <Account/>
      <Income />
      <Residency />
      <SocialStatus 
      socialStatuses={socialStatuses} 
      setSocialStatuses={setSocialStatuses}
      />
      <div className="self-center">
        <button
          type="button"
          disabled={!isValid}
          onClick={() => setShowResults(true)}
          className="text-white px-20 py-1 bg-black disabled:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:px-40 md:py-3 mr-2 mb-2">
          Расчитать
        </button>
      </div>
    </div>
  );
}
