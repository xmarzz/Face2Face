'use client'
import React,{useState, useEffect} from 'react'

const Page = () => {
  const[drop, setDrop] = useState(false)
  const[drop1, setDrop1] = useState(false)
  const[drop2, setDrop2] = useState(false)
  const[drop3, setDrop3] = useState(false)
  const[drop4, setDrop4] = useState(false)

  const handleClick=()=>{
    setDrop(!drop) 
  }

  return (
    <div className='m-12'>
       <div className='m-12' >
        <div onClick={handleClick} className='cursor-pointer'>
          <h2 className=''>Why Personal Grooming is Important</h2>
          <span className=''></span>
        </div>
          <p className={`${drop ? '' : 'hidden' }`}>If you ask young men about grooming, most will have to agree that it should be part of everyday life. So what’s grooming? It’s basically taking a bath, shaving your facial hair, applying deodorant, taking a haircut, and more! It’s a plethora of habits and actions that aims to give you a neat and tidy appearance.
One of our goals is to educate the gents on why grooming is important. Here are some reasons as to why it’s essential and integral for gents like you. </p>
       </div>

       <div className='m-12' >
        <div>
          <h2 className=''>MAKES YOU MORE ATTRACTIVE</h2>
          <span className=''></span>
        </div>
          <p className=''>First things first, grooming greatly improves your physical appearance. A GATSBY Gent who looks clean and smells good will always be identified as someone who is attractive. Simple measures like styling your hair with pomade and removing oil on your face every now and then can do wonders on how you look. </p>
       </div>

       <div className='m-12' >
        <div>
          <h2 className=''>BEING WELL GROOMED IS A HUGE CONFIDENCE BOOSTER</h2>
          <span className=''></span>
        </div>
          <p className=''>Clean-looking people have one thing in common - they radiate confidence and good vibes. Being well-groomed helps you navigate your way in social gatherings and lets you have an easier time making friends. Being confident is the foundation of a successful gent, so if you want to be confident, taking hygiene seriously is a good first step. 

</p>
       </div>

       <div className='m-12' >
        <div>
          <h2 className=''> YOUR FRIENDS AND PEERS WILL RESPECT YOU MORE</h2>
          <span className=''></span>
        </div>
          <p className=''>Did you know that cleanliness is usually associated with being smart? A well-groomed young man always gives off a good impression to his classmates, friends, and those who he’s meeting for the first time. A true GATSBY gent prides himself in his appearance, something that other people will surely notice.</p>
       </div>

       <div className='m-12' >
        <div>
          <h2 className=''>GROOMING IS ONE OF THE EASIEST WAYS TO IMPROVE YOURSELF WITHOUT DOING MUCH WORK</h2>
          <span className=''></span>
        </div>
          <p className=''>Personal grooming is the cheapest and most effective way to improve your overall style and appearance without having to spend so much time and money. Taking a shower, using a shaver, and using affordable, yet essential grooming and hairstyle products for men such as GATSBY are all you need to be on top of your grooming routine. </p>
       </div>

       <div className='m-12' >
        <div>
          <h2 className=''>TAKING CARE OF YOURSELF IS THE ULTIMATE FORM OF SELF-DISCIPLINE</h2>
          <span className=''></span>
        </div>
          <p className=''>Personal hygiene is not much work, but doing it on a daily basis is the real challenge to many. Taking care of yourself everyday will not only keep you smelling fresh and clean, but also improve your self-discipline and more importantly form good habits.
As we’ve said before, grooming doesn’t have to be expensive! That’s why GATSBY is your buddy to help you achieve your grooming goals without having to exhaust your wallet. Visit our website here to check all our products.</p>
       </div>
      
    </div>
  )
}

export default Page
