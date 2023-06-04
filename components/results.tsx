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
    <div className="h-[500px] border-t-0 border-l-2 border-r-2 border-b-2 border-gray-500 flex flex-col items-center justify-center px-10 md:h-[750px] md:border-t-2 md:border-l-0">
      <CalculatorIcon />
      <p className="text-base text-left mt-6 font-bold md:text-xl md:text-center">
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
    isCompanyPaysCOPC,
    EmployeeReceives,
    SSC_PAID,
    IIT_PAID,
    COPC_PAID,
    CSHIC_PAID,
    OPV_PAID,
    CSHI_PAID,
  } = useCalculateTaxes(values as Data, socialStatuses);

  return (
    <div className="h-[500px]  border-t-0 border-l-2  border-r-2 border-b-2 border-gray-500 flex flex-col items-center px-10 md:h-[750px] md:border-t-2 md:border-l-0">
      <p className="mt-3 text-base mb-5 font-bold text-left md:mt-6 md:text-xl md:text-center md:mb-10">Итого</p>
      <div className="w-full flex flex-col">
        {(isPersonPayingIIT || isPersonPaysOPV || isPersonPaysCSHIC) &&
          <p className="text-base md:text-lg text-gray-500">За счет работника</p>
        }
        {isPersonPaysOPV && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-base md:text-3xl">ОПВ</p>
            <p className="text-base md:text-3xl">{OPV_PAID.toFixed(2)} тг</p>
          </div>
        )}
        {isPersonPayingIIT && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-base md:text-3xl">ИПН</p>
            <p className="text-base md:text-3xl">{IIT_PAID.toFixed(2)} тг</p>
          </div>
        )}
        {isPersonPaysCSHIC && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-base md:text-3xl">ВОСМС</p>
            <p className="text-base md:text-3xl">{CSHIC_PAID.toFixed(2)} тг</p>
          </div>
        )}
        {(isCompanyPaysCSHI || isCompanyPaysSSC) && 
          <p className="text-base md:text-lg text-gray-500 mt-4"> За счет компании: </p>
        }
        {isCompanyPaysSSC && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-base md:text-3xl">СО</p>
            <p className="text-base md:text-3xl">{SSC_PAID.toFixed(2)} тг</p>
          </div>
        )}
         {isCompanyPaysCOPC && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-base md:text-3xl">ОППВ</p>
            <p className="text-base md:text-3xl">{COPC_PAID.toFixed(2)} тг</p>
          </div>
        )}
        {isCompanyPaysCSHI && (
          <div className="flex items-center justify-between border-b-2 border-gray-200 py-3">
            <p className="text-base md:text-3xl">ООСМС</p>
            <p className="text-base md:text-3xl">{CSHI_PAID.toFixed(2)} тг</p>
          </div>
        )}
        <p className="text-lg text-gray-500 mt-10"> На руки: </p>
        <div className="flex justify-end border-b-2 border-gray-200 py-3">
          <p className="text-base md:text-4xl">{EmployeeReceives.toFixed(2)} тг</p>
        </div>
      </div>
    </div>
  );
}
