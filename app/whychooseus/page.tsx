"use client";
import React from "react";
import Image4 from "@/public/image4.avif";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import '../../components/i18n'
import LanguageSelector from "@/components/languageSelector";

const Page = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView();

 
  const {t, i18n } = useTranslation()

  return (
    <div className="why-choose-us">
      <div className="font-playfair text-sm">
        <LanguageSelector/>
      </div>
      <div
        ref={myRef}
        className={`why-choose-us-img ${myElementIsVisible ? "why-img-visible" : "why-img-fade"}`}
      >
        <Image src={Image4} alt="barber" className="image image4" />
      </div>
      <div
        ref={myRef1}
        className={`${myElementIsVisible1 ? "why-choose-us_visible" : "why-choose-us_fade"}`}
      >
        <h2 className="why-choose-us_head">Why Choose Face 2 Face?</h2>
        <p className="why-choose-us_para1">
          {t('whyChooseUsPara1')}
        </p>
        <p className="why-choose-us_para2">
          {t('whyChooseUsPara2')}
        </p>
        <p className="why-choose-us_para3">
          {t('whyChooseUsPara3')}
        </p>
        <p className="why-choose-us_para4">
          {t('whyChooseUsPara4')}
        </p>

      </div>
    </div>
  );
};

export default Page;
