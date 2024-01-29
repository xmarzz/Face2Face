"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          homePara1:
            "your go-to destination for grooming and style in Palakkad, Kerala! Nestled on the scenic Pathiripala to Kongad road, our barbershop is not just a place for a haircut, it's an experience.",
          homePara2:
            "At Face 2 Face, we pride ourselves on delivering top-notch grooming services tailored to your unique style. Our skilled barbers are dedicated to ensuring you leave our shop looking and feeling your absolute best.",
          homePara3:
            "Discover a range of services designed to cater to your grooming needs. From classic haircuts to modern styles, beard trims to hot towel shaves, our expert barbers are here to elevate your grooming routine.",
        },
      },
      ml: {
        translation: {
          homePara1:
            "കേരളത്തിലെ പാലക്കാടാണ് നിങ്ങളുടെ ചമയത്തിനും സ്റ്റൈലിനുമുള്ള നിങ്ങളുടെ ലക്ഷ്യസ്ഥാനം! പ്രകൃതിരമണീയമായ പത്തിരിപ്പാല മുതൽ കോങ്ങാട് വരെയുള്ള റോഡിൽ സ്ഥിതി ചെയ്യുന്ന ഞങ്ങളുടെ ബാർബർഷോപ്പ് മുടിവെട്ടാനുള്ള സ്ഥലമല്ല, അതൊരു അനുഭവമാണ്.",
          homePara2:
            "ഫേസ് 2 ഫേസിൽ, നിങ്ങളുടെ തനതായ ശൈലിക്ക് അനുസൃതമായി മികച്ച ഗ്രൂമിംഗ് സേവനങ്ങൾ നൽകുന്നതിൽ ഞങ്ങൾ അഭിമാനിക്കുന്നു. ഞങ്ങളുടെ വിദഗ്ദ്ധരായ ബാർബർമാർ ഞങ്ങളുടെ ഷോപ്പ് ഉപേക്ഷിക്കുന്നത് ഉറപ്പാക്കാൻ പ്രതിജ്ഞാബദ്ധരാണ്.",
          homePara3:
            "നിങ്ങളുടെ പരിചരണ ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനായി രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്ന സേവനങ്ങളുടെ ഒരു ശ്രേണി കണ്ടെത്തുക. ക്ലാസിക് ഹെയർകട്ടുകൾ മുതൽ ആധുനിക ശൈലികൾ വരെ, താടി ട്രിം മുതൽ ചൂടുള്ള ടവൽ ഷേവ് വരെ, ഞങ്ങളുടെ വിദഗ്ധരായ ബാർബർമാർ നിങ്ങളുടെ ചമയം വർദ്ധിപ്പിക്കാൻ ഇവിടെയുണ്ട്.",
        },
      },
    },
  });

export default i18n;
