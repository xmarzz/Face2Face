import React from 'react'
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
   

    const {i18n} = useTranslation()

 

 const changeToEnglish=()=>{
      i18n.changeLanguage('en')
 }
 
 const changeToMalayalam=()=>{
   i18n.changeLanguage('ml')
 }

  return (
    <div className='flex flex-row m-2'>
    
      <div onClick={changeToEnglish} className="m-2 p-2">english</div>
      <div onClick={changeToMalayalam} className='m-2 p-2'>malayalam</div>
    </div>
  )
}

export default LanguageSelector
