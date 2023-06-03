import React from "react";

export default function SocialStatus() {
  return (
    <div className="flex w-full pb-4 mb-4 border-b-2 p-2">
      <p className="font-bold text-lg w-1/6">Социальный статус</p>
      <div className="grid grid-cols-2">
        <div className="flex items-center mr-4">
          <input type="checkbox" className="w-[18px] h-[18px] mr-1" />
          <span className="text-lg">Пенсионер</span>
          <div className="border-2 rounded border-gray-200 ml-4">
            <select disabled className="px-2 py-2">
              <option value="p_by_age">По возрасту</option>
              <option value="p_else">Прочие группы</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mr-1">
          <input type="checkbox" className="w-[18px] h-[18px] mr-1" />
          <span className="text-lg">Инвалид</span>
          <div className="border-2 rounded border-gray-200 ml-4">
            <select disabled className="px-2 py-2">
              <option value="d_group_1_time">1 группа</option>
              <option value="d_group_1">1 группа бессрочно</option>
              <option value="d_group_2_time">2 группа</option>
              <option value="d_group_2">2 группа бессрочно</option>
              <option value="d_group_3">3 группа</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mr-4">
          <input type="checkbox" className="w-[18px] h-[18px] mr-1" />
          <span className="text-lg">Получатель ОППВ</span>
        </div>
        <div className="flex items-center mr-1">
          <input type="checkbox" className="w-[18px] h-[18px] mr-1" />
          <span className="text-lg">Многодетная мать</span>
        </div>
        <div className="flex items-center mr-4">
          <input type="checkbox" className="w-[18px] h-[18px] mr-1" />
          <span className="text-lg">Студент</span>
        </div>
        <div className="flex items-center mr-1">
          <input type="checkbox" className="w-[18px] h-[18px] mr-1" />
          <span className="text-lg">Сотрудник участника Астана Хаб/МФЦА</span>
        </div>
      </div>
    </div>
  );
}
