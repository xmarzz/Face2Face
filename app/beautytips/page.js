'use client'
import React,{useState, useEffect} from 'react'
import { IoMdArrowDropdown } from "react-icons/io";


const Page = () => {
  const[drop, setDrop] = useState(false)
  const[drop1, setDrop1] = useState(false)
  const[drop2, setDrop2] = useState(false)
  const[drop3, setDrop3] = useState(false)
  const[drop4, setDrop4] = useState(false)
  const[drop5, setDrop5] = useState(false)

  const handleClick=()=>{
    setDrop(!drop) 
  }
  const handleClick1=()=>{
    setDrop1(!drop1) 
  } 
  const handleClick2=()=>{

    setDrop2(!drop2) 
  }
  const handleClick3=()=>{
    setDrop3(!drop3) 
  }
  const handleClick4=()=>{
    setDrop4(!drop4) 
  }
  const handleClick5=()=>{
    setDrop5(!drop5) 
  }
  

  return (
    <div className='m-2 mt-12'>
       <div className='m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl' >
        <div onClick={handleClick} className='cursor-pointer flex flex-row justify-between'>
          <h2 className='m-1'>Why Personal Grooming is Important</h2>
          <IoMdArrowDropdown  className='' size="45px" 
          style={{ 
            transform: drop ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.5s ease-in-out' 
          }}/>
        </div>
          <p className={`mt-4 ${drop ? '' : 'hidden' }`}>If you ask young men about grooming, most will have to agree that it should be part of everyday life. So what’s grooming? It’s basically taking a bath, shaving your facial hair, applying deodorant, taking a haircut, and more! It’s a plethora of habits and actions that aims to give you a neat and tidy appearance.
One of our goals is to educate the gents on why grooming is important. Here are some reasons as to why it’s essential and integral for gents like you. </p>
       </div>

       <div className='m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl' >
        <div onClick={handleClick1} className='cursor-pointer flex flex-row justify-between'>
          <h2>MAKES YOU MORE ATTRACTIVE</h2>
          <IoMdArrowDropdown  className='' size="45px" 
          style={{ 
            transform: drop1 ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.5s ease-in-out' 
          }}/>
        </div>
          <p className={`mt-4 ${drop1 ? '' :'hidden'}`}>First things first, grooming greatly improves your physical appearance. A GATSBY Gent who looks clean and smells good will always be identified as someone who is attractive. Simple measures like styling your hair with pomade and removing oil on your face every now and then can do wonders on how you look. </p>
       </div>

       <div className='m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl' >
        <div className='cursor-pointer flex flex-row justify-between' onClick={handleClick2}>
          <h2 className=''>BEING WELL GROOMED IS A HUGE CONFIDENCE BOOSTER</h2>
          <IoMdArrowDropdown  className='' size="45px" 
          style={{ 
            transform: drop2 ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.5s ease-in-out' 
          }}/>
        </div>
          <p className={`mt-4 ${drop2 ? '' : 'hidden' }`}>Clean-looking people have one thing in common - they radiate confidence and good vibes. Being well-groomed helps you navigate your way in social gatherings and lets you have an easier time making friends. Being confident is the foundation of a successful gent, so if you want to be confident, taking hygiene seriously is a good first step. 

</p>
       </div>

       <div className='m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl' >
        <div onClick={handleClick3} className='cursor-pointer flex flex-row justify-between'>
          <h2 className=''> YOUR FRIENDS AND PEERS WILL RESPECT YOU MORE</h2>
          <IoMdArrowDropdown  className='' size="45px" 
          style={{ 
            transform: drop3 ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.5s ease-in-out' 
          }}/>
        </div>
          <p className={`mt-4 ${drop3 ? '' : 'hidden'}`}>Did you know that cleanliness is usually associated with being smart? A well-groomed young man always gives off a good impression to his classmates, friends, and those who he’s meeting for the first time. A true GATSBY gent prides himself in his appearance, something that other people will surely notice.</p>
       </div>

       <div className='m-2 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl' >
        <div onClick={handleClick4} className='cursor-pointer flex flex-row justify-between'>
          <h2 className=''>GROOMING IS ONE OF THE EASIEST WAYS TO IMPROVE YOURSELF WITHOUT DOING MUCH WORK</h2>
          <IoMdArrowDropdown  className='' size="45px" 
          style={{ 
            transform: drop4 ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.5s ease-in-out' 
          }}/>
        </div>
          <p className={`mt-4 ${drop4 ? '' : 'hidden'}`}>Personal grooming is the cheapest and most effective way to improve your overall style and appearance without having to spend so much time and money. Taking a shower, using a shaver, and using affordable, yet essential grooming and hairstyle products for men such as GATSBY are all you need to be on top of your grooming routine. </p>
       </div>

       <div className='m-2 mb-12 bg-slate-200 pt-6 pl-12 pr-8 pb-6 rounded-2xl' >
        <div onClick={handleClick5} className='cursor-pointer flex flex-row justify-between'>
          <h2 className=''>TAKING CARE OF YOURSELF IS THE ULTIMATE FORM OF SELF-DISCIPLINE</h2>
          <IoMdArrowDropdown  className='' size="45px" 
          style={{ 
            transform: drop5 ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.5s ease-in-out' 
          }}/>
        </div>
          <p className={`mt-4 ${drop5 ? '' : 'hidden'}`}>Personal hygiene is not much work, but doing it on a daily basis is the real challenge to many. Taking care of yourself everyday will not only keep you smelling fresh and clean, but also improve your self-discipline and more importantly form good habits.
As we’ve said before, grooming doesn’t have to be expensive! That’s why GATSBY is your buddy to help you achieve your grooming goals without having to exhaust your wallet. Visit our website here to check all our products.</p>
       </div>
      
    </div>
  )
}




export default Page




