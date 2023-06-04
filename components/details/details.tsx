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
    <div className="h-[750px] border-2 border-gray-500 flex flex-col p-8">
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
          className="text-white bg-black disabled:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-40 py-3 mr-2 mb-2">
          Расчитать
        </button>
      </div>
    </div>
  );
}
