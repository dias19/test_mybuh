import React from "react";
import { useFormContext } from "react-hook-form";

export default function Income() {
  const methods=useFormContext();

  const {register, formState: {errors}}=methods;

  return (
    <div className="flex flex-col w-full pb-4 mb-4 border-b-2 p-2">
      <div className="flex items-center">
        <p className="font-bold text-lg w-1/6">Доход</p>
        <div className="flex">
          <div className="flex border-2 rounded border-gray-200">
            <select className="px-2 py-2">
              <option hidden>Вид зачислении...</option>
              <option value="wage">Зарплата</option>
              <option value="business_trip">
                Выплата при служебных командировках сверх норм
              </option>
              <option value="prize_onetime">Единовременная премия</option>
              <option value="prize_fulltime">Постоянная премия</option>
              <option value="vacation_comp">Компенсация отпуска</option>
              <option value="vacation_comp_fire">
                Компенсация отпуска при увольнении
              </option>
              <option value="medical">Оплата больничных листов</option>
              <option value="vacation_pay">Оплата отпуска</option>
              <option value="ecolog">
                Экологическая выплата (отпуск, надбавка)
              </option>
            </select>
            <input
              type="number"
              placeholder="Сумма..."
              className="border-l-2 px-2 py-2"
              {...register('salary')}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <p className="font-bold text-lg w-1/6">Вычеты</p>
        <div className="flex">
          <div className="flex items-center mr-4">
            <input type="checkbox" className="w-[18px] h-[18px] mr-1" {...register('is_deduction_14')}/>
            <span className="text-lg pl-4">Вычет 14 МРП</span>
          </div>
          <div className="flex items-center mr-1">
            <input type="checkbox" className="w-[18px] h-[18px] mr-1" {...register('is_deduction_882')}/>
            <span className="text-lg pl-4">Вычет 882 МРП</span>
          </div>
        </div>
      </div>
    </div>
  );
}
