import React from 'react'
import USC from '../assets/USC.png'
import Alliance from '../assets/Alliance.png'
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  {/* Slide Up Animation Trigger */}
  const { ref: refFirstDiv, inView: inViewFirstDiv } = useInView({
    triggerOnce: true,
    threshold: 0., 
  });

  const { ref: refSecondDiv, inView: inViewSecondDiv } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  return (
    <div name='experience' className='w-full h-screen bg-[#EBD4D4] text-[#463333]'>

      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>

        {/* Title */}
        <div ref={refFirstDiv} className={`w-90 ${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
            <p className='text-4xl font-bold border-b-4 border-pink-500 text-center'>
              My Experiences
            </p>
        </div>

        {/* Grid Container */}
        <div ref={refSecondDiv} className={`max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pt-10 ${inViewSecondDiv ? 'slide-up' : 'hidden-initial'}`}>

          {/* Education Card */}
            <div className='pt-10 pr-7 pl-7 pb-10 b-8border-2 border-[#835858] rounded-2xl bg-[#463333]'> 1
                <p className='text-2xl text-center text-[#EBD4D4]'>Education</p>
                <div className='flex justify-center items-center'>
                    <img src={USC} alt="USC" className='w-[130px]'/> 
                </div>
                <p className='text-1xl text-center text-[#EBD4D4]'>August 2018-December 2023</p>
                <p className='text-[#EBD4D4] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            {/* Internship Card */}
            <div className='pt-10 pr-7 pl-7 pb-10 b-8 border-2 border-[#835858] rounded-2xl bg-[#463333]'>
                <p className='text-2xl text-center text-[#EBD4D4]'>Internship</p>
                <div className='flex justify-center items-center'>
                    <img src={Alliance} alt="Alliance" className='w-[130px]'/> 
                </div>  
                <p className='text-1xl text-center text-[#EBD4D4]'>March 2023-July 2023</p>
                <p className='text-[#EBD4D4] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        </div>

      </div>
      
    </div>
  )
}

export default Experience