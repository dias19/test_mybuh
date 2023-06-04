import React from "react";
import { useFormContext } from "react-hook-form";

export default function Account() {
  const methods=useFormContext();

  const {register}=methods;
  return (
    <div className="flex w-full pb-4 mb-4 border-b-2">
      <p className="font-bold text-lg w-1/6">Расчет</p>
      <div className="flex">
        <div className="flex items-center mr-4">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            {...register('is_staff_member')}
          />
          <span className="text-lg">За работника в штате</span>
        </div>
        <div className="flex items-center mr-1">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            {...register('is_staff_member_gph')}
          />
          <span className="text-lg">За работника на ГПХ</span>
        </div>
      </div>
    </div>
  );
}
