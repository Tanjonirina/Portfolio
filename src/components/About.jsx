import React from 'react'

export default function  About() {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-700 to-black text-white'>
      <div id='about' className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-4 text-center'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
            A<span className='text-orange-400'>propos</span>
          </h3>
        </div>

        <br />

        <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
          Je suis un étudiant en informatique en troisième année (L3) avec une passion profonde pour le développement web. Mon expertise se concentre principalement sur les technologies Laravel et React, que je maîtrise avec enthousiasme. Mon désir d'apprentissage constant m'incite également à explorer d'autres langages et concepts informatiques pour élargir mes compétences. Mon objectif est de devenir un développeur web polyvalent et innovant, prêt à relever tous les défis que le domaine de l'informatique peut offrir.
        </p>
      </div>
    </div>
  )
}
