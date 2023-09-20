import React from 'react'
import Sary from '../assets/image/grh.png';
import Laravel from '../assets/image/vocal.png';
import Ecol from '../assets/image/blog.png';

export default function Project() {
  const Project =[
    {
      id:1,
      name: "Gestion personnel ",
      src: Sary
    },
    {
      id:2,
      name: "text convertir en vocal",
      src: Laravel
    
    },
    {
      id:3,
      name: "blog",
      src: Ecol
    }

  ]
  return (
    <div name="Project" className='w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white'>
      <div id='Projecte' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full h-screen'>
      <div className='pb-8'>
      <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-2 '>Projet</p>
      <p className='py-6'>Découvrez mes réalisations variées et innovantes, témoignant de ma passion pour le développement web et la créativité numérique.</p>
      </div>
      <div  className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                  Project.map(({id, src ,name})=>{
                    return(
                    
                              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} className='rounded-md duration-200 hover:scale-105' ></img>
                                <h1 className='text-orange-300 shadow-red-600 font-bold mt-4 text-center'>{name}</h1>
                                <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Dem</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>

                                </div>
                            
                              </div>
              

                    )

                  })
                }
         </div>

      
      </div>
    </div>
  )
}