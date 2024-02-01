import React, { useEffect, useState } from "react";
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

 useEffect(() => {
    if (i18n.language === 'en') 
      setSelectedLanguage("english");
    else if (i18n.language === 'ml')
      setSelectedLanguage("malayalam");
    else 
      setSelectedLanguage('english');
 }, []);

 return (
    <div className="flex flex-row justify-center mb-2 font-playfair">
      <div
        onClick={changeToEnglish}
        className={`mb-2 mx-6 p-2 cursor-pointer rounded-md inline-flex items-center shadow-lg rounded-full px-2 py-1 text-sm font-medium cursor-pointer select-none outline-none ring-0 transition-colors duration-280 ease-in-out transform translate-y-0 opacity-100 will-change-transform will-change-opacity z-0 ${selectedLanguage === 'english' ? "bg-slate-800 text-white" : "bg-white text-gray-700"}`}
      >
        English
      </div>

      <div
        onClick={changeToMalayalam}
        className={`mb-2 mx-6 p-2 cursor-pointer rounded-md inline-flex items-center shadow-lg rounded-full px-2 py-1 text-sm font-medium cursor-pointer select-none outline-none ring-0 transition-colors duration-280 ease-in-out transform translate-y-0 opacity-100 will-change-transform will-change-opacity z-0 ${selectedLanguage === 'malayalam' ?  "bg-slate-800 text-white" : "bg-white text-gray-700"}`}
      >
        Malayalam
      </div>
    </div>
 );
};

export default LanguageSelector;
