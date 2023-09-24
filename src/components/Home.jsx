import React from 'react';
import HeroImage from "../assets/image/tanjona .png";




function Homme() {

  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-700'>
      <section 
      id="home" 
      className='min-h-screen flex py-10 md:flex-row flex-col items-center text-white'>

      <div className='flex-1 items-center justify-center h-full'>
      <img src={HeroImage} alt='' className='md:w-1112 h-full object-cover'/>
      </div>

      <div className='flex-1 '>
        <div>
           <h1 className='md:text-4xl text-2xl md:leading-normal leading-10 text-white font-bold '>
             <span className='text-emerald-400'>
             Bienvenue 
             </span>
                <br/>
                dans mon univers créatif et professionnel !
             
             Tanjonirina <span className='text-orange-400'>Ramananjanahary</span> 
           </h1>
           <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-blue-200 '>Développeur laravel</h4>
   
           <div>
              
           </div>

        </div>

      </div>


      </section>
      
    </div>
    
  )
}
 
export default Homme