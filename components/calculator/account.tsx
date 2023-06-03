import React from "react";

type Props = {
  isAccountingForEmployee: boolean;
  setIsAccountingForEmployee: (state: boolean) => void;
};

export default function Account({
  isAccountingForEmployee,
  setIsAccountingForEmployee,
}: Props) {
  const onChange = () => {
    setIsAccountingForEmployee(!isAccountingForEmployee);
  };

  return (
    <div className="flex w-full pb-4 mb-4 border-b-2">
      <p className="font-bold text-lg w-1/6">Расчет</p>
      <div className="flex">
        <div className="flex items-center mr-4">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            onChange={onChange}
            checked={isAccountingForEmployee}
          />
          <span className="text-lg">За работника в штате</span>
        </div>
        <div className="flex items-center mr-1">
          <input
            type="checkbox"
            onChange={onChange}
            className="w-[18px] h-[18px] mr-1"
            checked={!isAccountingForEmployee}
          />
          <span className="text-lg">За работника на ГПХ</span>
        </div>
      </div>
    </div>
  );
}
