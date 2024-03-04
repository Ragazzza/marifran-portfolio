import React from 'react'
import Profile from '../assets/profile_wdog.png'
import { useInView } from 'react-intersection-observer';

export const Home = () => {
      {/* Slide Up Animation Trigger */}
      const { ref: refFirstDiv, inView: inViewFirstDiv } = useInView({
        triggerOnce: true,
        threshold: 0., 
      });

  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-[#FFF0F0] to-[#EBD4D4]'>
        
        {/* Container */}
        <div ref={refFirstDiv} className={`max-w-screen-1xl mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row ${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
            <div className='flex flex-col justify-center h-full'>
                <p className='text-2xl md:text-3xl'>Hello, I'm</p>
                <h1  className='text-4xl md:text-7xl font-bold text-[#463333]'>Marifran Malinao</h1>
                <p className='text-2xl md:text-3xl'>Computer Engineer</p>
            </div>
            <div>
                <img src={Profile} alt="Profile Image" className='hidden md:block mx-auto w-[650px]' /> 
            </div>
        </div>
        
    </div>
  )
}

export default Home