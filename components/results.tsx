import CalculatorIcon from "@/public/calculator-icon";
import React from "react";
import { useFormContext } from "react-hook-form";
import { useCalculateTaxes } from "./utils/useCalculateTaxes";

type Props = {
  showResults: boolean;
  socialStatuses: SocialStatuses[];
};

export default function Results({ showResults, socialStatuses }: Props) {
  return showResults ? (
    <CalculationResults
      socialStatuses={socialStatuses}
      showResults={showResults}
    />
  ) : (
    <DefaultResults />
  );
}

function DefaultResults() {
  return (
    <div className="h-[750px] border-t-2 border-r-2 border-b-2 border-gray-500 flex flex-col items-center justify-center px-10">
      <CalculatorIcon />
      <p className="mt-6 font-bold text-xl text-center">
        Укажите параметры для получения результата
      </p>
    </div>
  );
}

function CalculationResults({ socialStatuses, showResults }: Props) {
  const methods = useFormContext();

  const { getValues } = methods;

  const values = getValues();

  const {
    isPersonPaysOPV,
    isPersonPaysCSHIC,
    isPersonPayingIIT,
    isCompanyPaysSSC,
    isCompanyPaysCSHI,
    EmployeeReceives,
    SSC_PAID,
    IIT_PAID,
    CSHIC_PAID,
    OPV_PAID,
    CSHI_PAID,
  } = useCalculateTaxes(values as Data, socialStatuses);

  return (
    <div className="h-[750px] border-t-2 border-r-2 border-b-2 border-gray-500 flex flex-col items-center px-10">
      <p className="mt-6 font-bold text-xl text-center mb-10">Итого</p>
      <div className="w-full flex flex-col">
        {(isPersonPayingIIT || isPersonPaysOPV || isPersonPaysCSHIC) &&
          <p className="text-lg text-gray-500">За счет работника</p>
        }
        {isPersonPaysOPV && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-2xl">ОПВ</p>
            <p className="text-2xl">{OPV_PAID} тг</p>
          </div>
        )}
        {isPersonPayingIIT && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-2xl">ИПН</p>
            <p className="text-2xl">{IIT_PAID} тг</p>
          </div>
        )}
        {isPersonPaysCSHIC && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-2xl">ВОСМС</p>
            <p className="text-2xl">{CSHIC_PAID} тг</p>
          </div>
        )}
        {(isCompanyPaysCSHI || isCompanyPaysSSC) && 
          <p className="text-lg text-gray-500 mt-4"> За счет компании: </p>
        }
        {isCompanyPaysSSC && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-2xl">СО</p>
            <p className="text-2xl">{SSC_PAID} тг</p>
          </div>
        )}
        {isCompanyPaysCSHI && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-2xl">ООСМС</p>
            <p className="text-2xl">{CSHI_PAID} тг</p>
          </div>
        )}
        <p className="text-lg text-gray-500 mt-10"> На руки: </p>
        <div className="flex justify-end border-b-2 border-gray-200 py-3">
          <p className="text-4xl">{EmployeeReceives} тг</p>
        </div>
      </div>
    </div>
  );
}
