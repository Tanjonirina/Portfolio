import React from 'react'
import { BsChatFill } from 'react-icons/bs'

export default function Chat() {
  const menuLinks =[
    {name:"Contact", link : "#contact"},
  ]

  
  return (
    <div id='contacte' className='fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-orange-400 w-16 h-16 flex items-center justify-center rounded-full animate-bounce'>
    {
      menuLinks?.map(({name,link})=>(
        <a href={link}><BsChatFill/></a> 
      ))
    

    }
       
    </div>
  )
}
