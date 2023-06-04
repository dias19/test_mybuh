"use client";
import { CalculationSchema, DEFAULT_VALUE, MONTH, YEARS } from "@/constants/constants";
import React, { useState } from "react";
import DetailsCalculation from "./details";
import Account from "./account";
import Income from "./income";
import Residency from "./residency";
import SocialStatus from "./social-status";
import { yupResolver } from '@hookform/resolvers/yup';
import {FormProvider, useForm} from 'react-hook-form'

export default function Calculator() {
    const methods=useForm<Data>({
    resolver: yupResolver(CalculationSchema),
    defaultValues: DEFAULT_VALUE,
  });

  const {watch, formState: {isValid}, handleSubmit}=methods;

  const [socialStatuses, setSocialStatuses]=useState<SocialStatuses[]>([])

  console.log(watch());
  return (
    <div className="h-[750px] border-2 border-gray-500 flex flex-col p-8">
      <FormProvider {...methods}>
      <DetailsCalculation />
      <Account/>
      <Income />
      <Residency />
      <SocialStatus socialStatuses={socialStatuses} setSocialStatuses={setSocialStatuses}/>
      <div className="self-center">
        <button
          type="button"
          disabled={!isValid}
          className="text-white bg-black disabled:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-40 py-3 mr-2 mb-2">
          Расчитать
        </button>
      </div>
          </FormProvider>
    </div>
  );
}
