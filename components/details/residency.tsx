import React from "react";
import { set, useFormContext } from "react-hook-form";

export default function Residency() {
  const methods = useFormContext();

  const { register, watch, setValue } = methods;

  const isResident = watch().is_resident;

  const isForeigner = watch().is_foreigner;

  const onChange = () => {
    if (isResident) {
      setValue("is_resident", false);
      setValue("is_foreigner", true);
    } else if (isForeigner) {
      setValue("is_foreigner", false);
      setValue("is_resident", true);
    }
  };
  return (
    <div className="flex flex-col pb-2 mb-2 border-b-2 w-full md:flex-row md:pb-4 md:mb-4">
      <p className="font-bold text-lg w-1/6">Резиденство</p>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="flex items-center mr-4">
          <input
            type="checkbox"
            disabled={isForeigner}
            className="w-[18px] h-[18px] mr-1"
            {...register("is_resident")}
          />
          <span className="text-lg">Гражданин РК</span>
        </div>
        <div className="flex items-center mr-1">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            onChange={onChange}
          />
          <span className="text-lg">Иностранец</span>
        </div>
        <div className="flex items-center mr-4">
          <input
            type="checkbox"
            disabled={isResident}
            className="w-[18px] h-[18px] mr-1"
            {...register("is_citizen_cis")}
          />
          <span className="text-lg">Гражданин ЕАЭС</span>
        </div>
        <div className="flex items-center mr-1">
          <input
            type="checkbox"
            disabled={isResident}
            className="w-[18px] h-[18px] mr-1"
            {...register("has_citizen_permit")}
          />
          <span className="text-lg">Вид на жительство</span>
        </div>
      </div>
    </div>
  );
}
