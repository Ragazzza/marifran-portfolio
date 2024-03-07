import React from 'react';
import Golden_1 from '../assets/Golden_1.png'
import { useInView } from 'react-intersection-observer';

export const About = () => {
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
    <div name='about' className='w-full h-screen bg-[#EBD4D4] text-[#463333]'>

      {/* Container */}
      <div className='flex flex-col justify-center items-center w-full h-full'>
        
        {/* Side Designs */}
        {/* <div className='w-full flex justify-between slide-in-corner'>
          <img src={Golden_1} alt="Golden 1" className='absolute w-[300px] z-0' />
        </div> */}
      
        {/* Title */}
        <div ref={refFirstDiv} className={`max-w-[1000px] w-full flex justify-center ${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
          <div className='pb-12'>
            <p className='text-2xl font-bold inline border-b-4 border-[#EDAAAA] sm:text-4xl'>
              Get to Know About Me
            </p>
          </div>
        </div>
        
        {/* Description */}
        <div ref={refSecondDiv} className={`max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ${inViewSecondDiv ? 'slide-up' : 'hidden-initial'}`}>
          <div className='text-2xl font-bold text-center sm:text-4xl'>
            <p>You can just call me Maan!</p>
          </div>
          <div>
            <p> I am an aspiring Software Engineer. consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div></div>
          <div>
            <p> //Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About;
