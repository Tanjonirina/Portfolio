import React from 'react'

export default function footeur() {
  return (
    <div className='w-ful h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
    <div id='contact' className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
    <div className='pb-8'>
    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
    Contact
    </p>
    <p className='py-6'>N'hésitez pas à me contacter pour discuter de projets passionnants. Je suis à votre disposition pour collaborer!</p>
    
    </div>
    <div className='flex justify-center items-center'>
    <form action='https://getform.io/f/9ab70b6b-5e0e-40a5-845f-d7ea3ca2e40d' method='POST' className='flex flex-col w-ful md:w-1/2'>
    <input type='text' name='email'
    placeholder='Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
    </input>
    <textarea name='message' rows="10" placeholder='votre message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mt-3'>

    </textarea>
    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-0 mx-auto flex items-center rounded-md hover:scale-110 duration-300 mt-4 '>
      Contacté
    </button>

    </form>

    </div>
    

    </div>

    </div>
  )
}
