"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import LanguageSelector from "@/components/languageSelector";
import '../../components/i18n'
import { useTranslation } from "react-i18next";

const Page = () => {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const [drop3, setDrop3] = useState(false);
  const [drop4, setDrop4] = useState(false);
  const [drop5, setDrop5] = useState(false);

  const handleClick = () => {
    setDrop(!drop);
  };
  const handleClick1 = () => {
    setDrop1(!drop1);
  };
  const handleClick2 = () => {
    setDrop2(!drop2);
  };
  const handleClick3 = () => {
    setDrop3(!drop3);
  };
  const handleClick4 = () => {
    setDrop4(!drop4);
  };
  const handleClick5 = () => {
    setDrop5(!drop5);
  };

  const {t, i18n } = useTranslation()

  return (
    <div className="m-2 mt-12">
      <div className="">
        <LanguageSelector/>
      </div>
      <div className="m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl">
        <div
          onClick={handleClick}
          className="cursor-pointer flex flex-row justify-between"
        >
          <h2 className="font-brandon text-md mt-2 ml-2 max-w-md text-gray-500 font-semibold">
            {t("tipsHeader1")}
          </h2>
          <div className="min-w-max">
            {" "}
            <IoMdArrowDropdown
              className=""
              size="45px"
              style={{
                transform: drop ? "rotate(180deg)" : "none",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <p
          className={`mt-4 font-brandon text-sm text-center ${drop ? "" : "hidden "}`}
        >
         {t('tipsPara1')}
        </p>
      </div>

      <div className="m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl">
        <div
          onClick={handleClick1}
          className="cursor-pointer flex flex-row justify-between"
        >
          <h2 className="font-brandon text-md mt-2 ml-2 max-w-md text-gray-500 font-semibold">
            
          {t("tipsHeader2")}
          </h2>
          <div className="min-w-max">
            {" "}
            <IoMdArrowDropdown
              className=""
              size="45px"
              style={{
                transform: drop1 ? "rotate(180deg)" : "none",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <p className={`mt-4 text-center ${drop1 ? "" : "hidden"}`}>
          {t('tipsPara2')}
        </p>
      </div>

      <div className="m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl">
        <div
          className="cursor-pointer flex flex-row justify-between"
          onClick={handleClick2}
        >
          <h2 className="font-brandon text-md mt-2 ml-2 max-w-md text-gray-500 font-semibold">
          {t("tipsHeader3")}
          </h2>
          <div className="min-w-max">
            {" "}
            <IoMdArrowDropdown
              className=""
              size="45px"
              style={{
                transform: drop2 ? "rotate(180deg)" : "none",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <p className={`mt-4 text-center ${drop2 ? "" : "hidden"}`}>
          {t("tipsPara3")}
        </p>
      </div>

      <div className="m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl">
        <div
          onClick={handleClick3}
          className="cursor-pointer flex flex-row justify-between"
        >
          <h2 className="font-brandon text-md mt-2 ml-2 max-w-md text-gray-500 font-semibold">
            
          <div>{t("tipsHeader4")}</div>
          </h2>
          <div className="min-w-max">
            <IoMdArrowDropdown
              className=""
              size="45px"
              style={{
                transform: drop3 ? "rotate(180deg)" : "none",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <p className={`mt-4 text-center ${drop3 ? "" : "hidden"}`}>
          {t("tipsPara4")}
        </p>
      </div>

      <div className="m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl">
        <div
          onClick={handleClick4}
          className="cursor-pointer flex flex-row justify-between"
        >
          <h2 className="font-brandon text-md mt-2 ml-2 max-w-md text-gray-500 font-semibold">
            
          <div>{t("tipsHeader5")}</div>
          </h2>
          <div className="min-w-max">
            {" "}
            <IoMdArrowDropdown
              className=""
              size="45px"
              style={{
                transform: drop4 ? "rotate(180deg)" : "none",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <p className={`mt-4 text-center ${drop4 ? "" : "hidden"}`}>
          {t("tipsPara5")}
        </p>
      </div>

      <div className="m-2 mb-12 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl">
        <div
          onClick={handleClick5}
          className="cursor-pointer flex flex-row justify-between"
        >
          <h2 className="font-brandon text-md mt-2 ml-2 max-w-md text-gray-500 font-semibold">
            
          {t("tipsHeader6")}
          </h2>
          <div className="min-w-max">
            {" "}
            <IoMdArrowDropdown
              className=""
              size="45px"
              style={{
                transform: drop5 ? "rotate(180deg)" : "none",
                transition: "transform 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <p className={`mt-4 text-center ${drop5 ? "" : "hidden"}`}>
          {t("tipsPara6")}
        </p>
      </div>
    </div>
  );
};

export default Page;
