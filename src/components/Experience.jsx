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
            <p className='text-2xl font-bold border-b-4 border-pink-500 text-center sm:text-4xl'>
              My Experiences
            </p>
        </div>

        {/* Grid Container */}
        <div ref={refSecondDiv} className={`max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pt-10 ${inViewSecondDiv ? 'slide-up' : 'hidden-initial'}`}>

          {/* Education Card */}
            <div className='pt-10 pr-7 pl-7 pb-10 b-8 border-2 border-[#835858] rounded-2xl bg-[#463333]'>
                <p className='text-xl text-center text-[#EBD4D4] font-bold sm:text-2xl'>University of San Carlos</p>
                <div className='flex justify-center items-center'>
                    <img src={USC} alt="USC" className='w-[70px] sm:w-[130px]'/> 
                </div>
                <p className='text-lg text-center text-[#EBD4D4] font-bold sm:text-xl'>Bachelor's Degree in Computer Engineering</p>
                <p className='text-base text-center text-[#EBD4D4] sm:text-lg'>August 2018-December 2023</p>
                <p className='text-[#EBD4D4] text-justify pt-2'>During my 2nd year of college, I was part of the Computer Engineering Council 2019 in the Socio-cultural Committee. 
                This is where I got my interest in Web Development where my thesis groupmates and I created an Online Grocery for the USC Coop Mart.</p>
            </div>
            {/* Internship Card */}
            <div className='pt-10 pr-7 pl-7 pb-10 b-8 border-2 border-[#835858] rounded-2xl bg-[#463333]'>
                <p className='text-xl text-center text-[#EBD4D4] font-bold sm:text-2xl'>Alliance Software Inc.</p>
                <div className='flex justify-center items-center'>
                    <img src={Alliance} alt="Alliance" className='w-[70px] sm:w-[130px]'/> 
                </div>  
                <p className='text-lg text-center text-[#EBD4D4] font-bold sm:text-xl'>Quality Assurance Intern</p>
                <p className='text-base text-center text-[#EBD4D4] sm:text-lg'>March 2023-July 2023</p>
                <p className='text-[#EBD4D4] text-justify pt-2'>During my internship, I created and updated Unit Test Cases and Integration Test Cases for the project, executed 
                Unit Test Cases with other Quality Assurance testers and reported bugs and issues to the developers.</p>
            </div>

        </div>

      </div>
      
    </div>
  )
}

export default Experience