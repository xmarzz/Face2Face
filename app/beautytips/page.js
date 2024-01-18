// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       hello
//     </div>
//   )
// }

// export default page

'use client'
import React, { useState, useRef, useEffect } from 'react';
// import { render } from 'react-dom';

export default function App(){
  const [name, setName] = useState([])
  // const [renderCount, setRenderCount] = useState(0)
  const renderCount = useRef(0)


  useEffect(() =>{
    // setRenderCount(renderCount+1)
    renderCount.current = renderCount.current +1 
  })

  return(
    <>
      <input value={name} onChange={((e)=> setName(e.target.value))}/>
      <div>my name is{name}</div>
      <div>i rendered {renderCount.current}</div>
      {/* <div> i rendered {renderCount}</div> */}
    </>
  )

}

