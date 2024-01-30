import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const changeToEnglish = () => {
    i18n.changeLanguage("en");

    setSelectedLanguage("english");
  };

  const changeToMalayalam = () => {
    i18n.changeLanguage("ml");

    setSelectedLanguage("malayalam");
  };

  return (
    <div className="flex flex-row m-2 justify-center">
      <div
        onClick={changeToEnglish}
        className="m-2 p-2 cursor-pointer bg-slate-800"
      >
        english
      </div>
      <div
        id="line"
        className={`transition-all duration-500 ease-in-out ${selectedLanguage === "english" ? "move-to-left" : "move-to-right"}`}
      ></div>
      <div
        onClick={changeToMalayalam}
        className="m-2 p-2 cursor-pointer bg-slate-800"
      >
        malayalam
      </div>
    </div>
  );
};

export default LanguageSelector;
