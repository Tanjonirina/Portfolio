import React from 'react';
import HeroImage from "../assets/image/tanjona .png";




function Homme() {

  return (
    <div className='bg-gradient-to-b from-black to-gray-700 text-white'>
    <section id="home" className='min-h-screen flex flex-col sm:flex-row items-center'>

      <div className='w-full sm:w-1/2 flex items-center justify-center h-full'>
        <img src={HeroImage} alt='' className='w-full h-auto object-cover' />
      </div>

      <div className='w-full sm:w-1/2 text-center sm:text-left px-4'>
        <h1 className='text-xl sm:text-4xl leading-tight font-bold text-emerald-400 mt-4'>
          Bienvenue<br/> <span className='text-white'>dans mon univers créatif et professionnel !</span>
          <br />
          <span className='text-gray-200'>Tanjonirina</span> <span className='text-gray-300'>Ramananjanahary</span>
        </h1>
        <h4 className='text-2xl sm:text-2xl leading-5 mt-4 font-bold text-orange-300'>Développeur Laravel</h4>
      </div>

    </section>
  </div>
  )
}
 
export default Homme