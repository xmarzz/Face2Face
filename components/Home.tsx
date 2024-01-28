'use client'
import Image1 from "@/public/image1.jpg";
import Image2 from "@/public/image2.avif";
import Image3 from "@/public/image3.avif";
import Image from "next/image";
import { useInView } from 'react-intersection-observer'; 
import '../components/i18n.js'
import LanguageSelector from '../components/languageSelector.js'
import { useTranslation } from 'next-i18next'

export default function Images() {
   
  const { ref: myRef0, inView : myElementIsVisible0 } = useInView()
  const { ref: myRef, inView : myElementIsVisible } = useInView()
  const { ref: myRef2, inView : myElementIsVisible2} = useInView() 
  const { ref: myRef3, inView : myElementIsVisible3} = useInView() 
   
  const {t} = useTranslation()

  return (
    <div className="home">
       <div className="cursor-pointer"><LanguageSelector/>
       <div><h1>{t("greeting")}</h1></div>
       </div>
      <div className="home-container">
        <div className={`home-container_image1 ${myElementIsVisible0 ? 'home1Image-visible' : 'home1Image-fade'}`} ref={myRef0}>
          <Image src={Image1} alt="Image 1" className="image image1" />
        </div>
        <div ref={myRef} className={`home-welcome mt-4 ${myElementIsVisible ? 'home-visible' : 'home-fade'}`}>
          <h2 className="home-welcome_head">WELCOME TO FACE 2 FACE</h2>
          <p className="home-welcome_content">
            your go-to destination for grooming and
            style in Palakkad, Kerala! Nestled on the scenic Pathiripala to
            Kongad road, our barbershop is not just a place for a haircut, it's
            an experience.
          </p>
        </div>
        <div ref={myRef2} className={`home-container_image2 ${myElementIsVisible2 ? 'home2Image-visible' : 'home2Image-fade'}`}>
          <Image src={Image2} alt="Image 2" className="image image2" />
        </div>
        <div>
          <p className={`home-welcome2Head ${myElementIsVisible2 ? 'home2-visible' : 'home2-fade'}`}>Upgrade your style</p>
          <p className={`home-welcome2 ${myElementIsVisible2 ? 'home2-visible' : 'home2-fade'}`}>
             At Face 2 Face, we pride ourselves on delivering top-notch grooming
            services tailored to your unique style. Our skilled barbers are
            dedicated to ensuring you leave our shop looking and feeling your
            absolute best.
          </p>
        </div>
        <div ref={myRef3} className={`home-container_image3 ml-[12px] mr-[12px] ${myElementIsVisible3 ? 'home3Image-visible' : 'home3Image-fade'}`} >
          <Image src={Image3} alt="Image 3" className="image image3" />
        </div>
        <div className={`home-discover ${myElementIsVisible3 ? 'home3-visible' : 'home3-fade' }`}>
          <p className={`home-welcome3Head ${myElementIsVisible3 ? 'home2-visible' : 'home2-fade'}`}>More than just a haircut</p>
          <p className="home-welcome3">
            Discover a range of services designed to cater to your grooming
            needs. From classic haircuts to modern styles, beard trims to hot
            towel shaves, our expert barbers are here to elevate your grooming
            routine.
          </p>
        </div>
      </div>
    </div>
  );
}

