'use client'
import Image1 from "@/public/image1.jpg";
import Image2 from "@/public/image2.avif";
import Image3 from "@/public/image3.avif";
import Image from "next/image";
import { useInView } from 'react-intersection-observer'; 
import LanguageSelector from '../components/languageSelector'
import { useTranslation } from 'react-i18next';
import '../components/i18n'

export default function Images() {
   
  const { ref: myRef0, inView : myElementIsVisible0 } = useInView()
  const { ref: myRef, inView : myElementIsVisible } = useInView()
  const { ref: myRef2, inView : myElementIsVisible2} = useInView() 
  const { ref: myRef3, inView : myElementIsVisible3} = useInView() 
   
  const {t, i18n} = useTranslation()
  
  return (
    <div className="home">
      <div>
        <LanguageSelector/>
      </div>

      <div className="home-container">
        <div className={`home-container_image1 ${myElementIsVisible0 ? 'home1Image-visible' : 'home1Image-fade'}`} ref={myRef0}>
          <Image src={Image1} alt="Image 1" className="image image1" />
        </div>
        <div ref={myRef} className={`home-welcome mt-4 ${myElementIsVisible ? 'home-visible' : 'home-fade'}`}>
          <h2 className="home-welcome_head">WELCOME TO FACE 2 FACE</h2>
          <p className="home-welcome_content">
          <div>{t('homePara1')}</div>
          </p>
        </div>
        <div ref={myRef2} className={`home-container_image2 ${myElementIsVisible2 ? 'home2Image-visible' : 'home2Image-fade'}`}>
          <Image src={Image2} alt="Image 2" className="image image2" />
        </div>
        <div>
          <p className={`home-welcome2Head ${myElementIsVisible2 ? 'home2-visible' : 'home2-fade'}`}>Upgrade your style</p>
          <p className={`home-welcome2 ${myElementIsVisible2 ? 'home2-visible' : 'home2-fade'}`}>
          <div>{t('homePara2')}</div>
          </p>
        </div>
        <div ref={myRef3} className={`home-container_image3 ml-[12px] mr-[12px] ${myElementIsVisible3 ? 'home3Image-visible' : 'home3Image-fade'}`} >
          <Image src={Image3} alt="Image 3" className="image image3" />
        </div>
        <div className={`home-discover ${myElementIsVisible3 ? 'home3-visible' : 'home3-fade' }`}>
          <p className={`home-welcome3Head ${myElementIsVisible3 ? 'home2-visible' : 'home2-fade'}`}>More than just a haircut</p>
          <p className="home-welcome3">
          <div>{t('homePara3')}</div>
          </p>
        </div>
      </div>
    </div>
  );
}



