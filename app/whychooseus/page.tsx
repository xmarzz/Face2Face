"use client";
import React from "react";
import Image4 from "@/public/image4.avif";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";


const Page = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: myRef1, inView: myElementIsVisible1 } = useInView();

  const { t, i18n } = useTranslation();

 const changeLanguage = (lng : any) => {
    i18n.changeLanguage(lng);
 };

  return (
    <div className="why-choose-us">
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
          Experienced Barbers: Our team of experienced barbers brings years of
          expertise to the styling chair, ensuring precision and attention to
          detail with every service.
        </p>
        <p className="why-choose-us_para2">
          Warm and Friendly Atmosphere: Step into a welcoming environment where
          you can relax and enjoy the grooming process. We believe in creating a
          friendly atmosphere for our customers.
        </p>
        <p className="why-choose-us_para3">
          Modern and Traditional Styles: Whether you prefer a contemporary
          haircut or a timeless, classic look, we offer a variety of styles to
          suit your taste.
        </p>
        <p className="why-choose-us_para4">
          Hygiene and Cleanliness: Your well-being is our priority. We maintain
          high standards of hygiene and cleanliness throughout our barbershop.
        </p>

        <div>
          <p>{t("greeting")}</p>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("ml")}>Malayalam</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
