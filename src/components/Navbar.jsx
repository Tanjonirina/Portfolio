import React, { useEffect, useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'; 
import {Link} from 'react-scroll'

const Navbar = () => {
  const [sticky,setSticky] =useState(false);
  const [open,setOpen] =useState(false);
  const menuLinks = [
    {name:"HOME", link : "#home"},
    {name:"Apropos", link : "#about"},
    {name:"Project", link : "#Projecte"},
    {name:"compétences", link : "#competence"},
    {name:"Contact", link : "#contact"},
  ];
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const nav =document.querySelector('nav')
      window.scrollY >0 ? setSticky(true):setSticky(false);
    })
  })
  return (
      <nav  className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900":"text-white" }`}>
        <div className='flex items-center justify-between'>
           <div className='mx-7'>
           
             <h4 className='text-2xl text-white uppercase font-bold'>
              TANJ<span className='text-orange-500'>O</span>NIRINA
             </h4>
           </div>
          <div className='text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full'>
              <ul className='flex items-center gap-1 py-2 text-lg'>
                {
                  menuLinks?.map((menu,i)=>(
                    <li key={i} className='px-6 hover:text-orange-600 '>
                      <a href={menu?.link}>{menu.name}</a>
                    </li>

                  ))
                  
                }
              </ul>
          </div>
          <div
          onClick={()=>setOpen(!open)}
          
           className={`z-[999] ${
            open ? "text-gray-900": "text-gray-100"} text-3xl md:hidden m-5`}>
            <FaBars className=''/>
        </div>

        <div className={`text-gray-900 md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0 duration-300 ${
          open ? "right-0":"right-[-100%]"}`}>
                <ul className='flex flex-col justify-center h-ful gap-9 py-2 text-lg text-gray-700'>
                  {
                    menuLinks?.map((menu, i)=>(
                      <li key={i} className='px-10 hover:text-cyan-600'>
                      <a  href={menu?.link} smooth duration={500}>{menu?.name}</a>
                      <Link to={menu?.link} smooth duration={500}></Link>

                      </li>
                    ))
                  }
                </ul>
        </div>

        </div>
        

      </nav>
  )
}

export default Navbar