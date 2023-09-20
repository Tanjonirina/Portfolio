import React from 'react'
import { FaGithub} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import { FaFacebook } from 'react-icons/fa';
import {BsFillPersonLinesFill} from "react-icons/bs";

const social= () =>{
    const links =[
        {
            id:1,
            child: (
              <>
                Github  <FaGithub size={30}/>  
              </>
            ),
            href:'https://github.com/Tanjonirina/',
            style: 'rounded-tr-md'
        },
        {
          id:2,
          child: (
            <>
              Facebook  <FaFacebook size={30}/>  
            </>
          ),
          href:'https://web.facebook.com/people/Tanjonirina-Ramananjanahary/pfbid0qduGKsHnkv6Lm2ajTsuENHc4DxwXM5BeX9aLaJHwEGmDyoUvDbJiCTxkWcXsb6HWl/',
          style: 'rounded-tr-md'
      },
      {
        id:3,
        child: (
          <>
            Email  <HiOutlineMail size={30}/>  
          </>
        ),
        href:'https://mail.google.com/mail/u/0/#inbox/FMfcgzGtxKRbBJFHhlmwhkbcgNsLQBKh',
        style: 'rounded-tr-md'
    },
    {
      id:4,
      child: (
        <>
          Contact  <BsFillPersonLinesFill size={30}/>  
        </>
      ),
      href:'0345298814',
      style: 'rounded-tr-md'
  },
    ]
  return (
    <div className='hidden lg:flex flex flex-col top-[35%] left-0 fixed'>
      <ul>
          {links?.map((link,i)=>{
            return(
              <li  key={i} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300 bg-gray-500" + ""+link.style  }>
              <a href={link.href} className='flex justify-between items-center w-full text-white
              '>
                     
                  {link.child}


                    </a>

           </li>

            )

            

          })}
           

         

  

        
      </ul>
    </div>
  )
}

export default social