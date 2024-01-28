import { useTranslation } from "next-i18next";
import React from "react";

const languages = [
  { code: "en", lang: "English" },
  { code: "mal", lang: "malayalam" },
];


const LanguageSelector = () => {

    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
     i18n.changeLanguage(lng)
    };

  return (
    <div className="flex flex-row">
      {languages.map((lng) => {
        return (
          <div
            key={lng.code}
            className={lng.code === i18n.language}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
