import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  socialStatuses: SocialStatuses[];
  setSocialStatuses: React.Dispatch<React.SetStateAction<SocialStatuses[]>>;
};

export default function SocialStatus({
  setSocialStatuses,
  socialStatuses,
}: Props) {
  const [isPensioner, setIsPensioner] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const addSocialStatus = (status: SocialStatuses) => {
    setSocialStatuses((prevStatuses: SocialStatuses[]) => {
      const index = prevStatuses.indexOf(status);
      if (index !== -1) {
        const updatedStatuses = [...prevStatuses];
        updatedStatuses.splice(index, 1);
        return updatedStatuses;
      } else {
        return [...prevStatuses, status];
      }
    });
  };

  const addSocialStatusSelect = (
    status: SocialStatuses,
    type: "disabled" | "pensioner"
  ) => {
    if (type === "pensioner") {
      setSocialStatuses((prevStatuses: SocialStatuses[]) => {
        const elementsToRemove = ["p_by_age", "p_else"];
        const removePreviousElements = prevStatuses.filter(
          (selectedStatus) => !elementsToRemove.includes(selectedStatus)
        );
        return [...removePreviousElements, status];
      });
    } else if (type === "disabled") {
      setSocialStatuses((prevStatuses: SocialStatuses[]) => {
        const elementsToRemove = [
          "d_group_1_time",
          "d_group_1",
          "d_group_2_time",
          "d_group_2",
          "d_group_3",
        ];
        const removedPreviousStatuses = prevStatuses.filter(
          (selectedStatus) => !elementsToRemove.includes(selectedStatus)
        );
        return [...removedPreviousStatuses, status];
      });
    }
  };

  const handleInputChangePensioner = () => {
    if (isPensioner) {
      setSocialStatuses((prevStatuses: SocialStatuses[]) => {
        const elementsToRemove = ["p_by_age", "p_else"];
        return prevStatuses.filter(
          (selectedStatus) => !elementsToRemove.includes(selectedStatus)
        );
      });
      setIsPensioner(!isPensioner);
    } else {
      setIsPensioner(!isPensioner);
      setSocialStatuses((prevStatuses: SocialStatuses[]) => [
        ...prevStatuses,
        "p_by_age",
      ]);
    }
  };

  const handleInputChangeDisabled = () => {
    if (isDisabled) {
      setSocialStatuses((prevStatuses: SocialStatuses[]) => {
        const elementsToRemove = [
          "d_group_1_time",
          "d_group_1",
          "d_group_2_time",
          "d_group_2",
          "d_group_3",
        ];
        return prevStatuses.filter(
          (selectedStatus) => !elementsToRemove.includes(selectedStatus)
        );
      });
      setIsDisabled(!isDisabled);
    } else {
      setIsDisabled(!isDisabled);
      setSocialStatuses((prevStatuses: SocialStatuses[]) => [
        ...prevStatuses,
        "d_group_1_time",
      ]);
    }
  };

  return (
    <div className="flex flex-col w-full pb-2 mb-2 border-b-2 md:flex-row md:pb-4 md:mb-4">
      <p className="font-bold text-lg w-1/6">Социальный статус</p>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="flex flex-col mt-2 md:mt-0 md:flex-row md:items-center mr-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] mr-1"
              checked={isPensioner}
              onChange={handleInputChangePensioner}
            />
            <span className="text-base md:text-lg">Пенсионер</span>
          </div>
          <div className="w-full border-2 rounded border-gray-200 md:ml-4">
            <select
              disabled={!isPensioner}
              className={`w-full px-2 py-2 ${
                !isPensioner ? "bg-gray-200" : "none"
              }`}
              onChange={(e: any) =>
                addSocialStatusSelect(e.target.value, "pensioner")
              }
            >
              <option value="p_by_age">По возрасту</option>
              <option value="p_else">Прочие группы</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-2 md:mt-0 md:items-center mr-1">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="w-[18px] h-[18px] mr-1"
              checked={isDisabled}
              onChange={handleInputChangeDisabled}
            />
            <span className="text-base md:text-lg">Инвалид</span>
          </div>
          <div className="w-full border-2 rounded border-gray-200 md:ml-4">
            <select
              disabled={!isDisabled}
              className={`w-full px-2 py-2 ${
                !isDisabled ? "bg-gray-200" : "none"
              }`}
              onChange={(e: any) =>
                addSocialStatusSelect(e.target.value, "disabled")
              }
            >
              <option value="d_group_1_time">1 группа</option>
              <option value="d_group_1">1 группа бессрочно</option>
              <option value="d_group_2_time">2 группа</option>
              <option value="d_group_2">2 группа бессрочно</option>
              <option value="d_group_3">3 группа</option>
            </select>
          </div>
        </div>
        <div className="flex items-center mt-2 md:mt-0 mr-4">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            checked={socialStatuses?.includes("receiver_oppv")}
            onChange={(e) => addSocialStatus("receiver_oppv")}
          />
          <span className="text-base md:text-lg">Получатель ОППВ</span>
        </div>
        <div className="flex items-center mt-2 md:mt-0 mr-1">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            checked={socialStatuses?.includes("multiple_children_mother")}
            onChange={(e) => addSocialStatus("multiple_children_mother")}
          />
          <span className="text-base md:text-lg">Многодетная мать</span>
        </div>
        <div className="flex items-center mt-2 md:mt-0 mr-4">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            checked={socialStatuses?.includes("student")}
            onChange={(e) => addSocialStatus("student")}
          />
          <span className="text-base md:text-lg">Студент</span>
        </div>
        <div className="flex items-center mt-2 md:mt-0 mr-1">
          <input
            type="checkbox"
            className="w-[18px] h-[18px] mr-1"
            checked={socialStatuses?.includes("employee_of_resident")}
            onChange={(e) => addSocialStatus("employee_of_resident")}
          />
          <span className="text-base md:text-lg">
            Сотрудник участника Астана Хаб/МФЦА
          </span>
        </div>
      </div>
    </div>
  );
}
