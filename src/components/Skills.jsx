import React from 'react'
import CSharp from '../assets/CSharp.png'
import CSS from '../assets/CSS.png'
import DotNet from '../assets/DotNet.png'
import HTML from '../assets/HTML.png'
import JavaScript from '../assets/JavaScript.png'
import REACT from '../assets/REACT.png'
import VisualStudio from '../assets/VisualStudio.png'
import VSCode from '../assets/VSCode.png'
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
    <div name='skills' className='w-full h-screen bg-[#EBD4D4] text-[#463333]'>
      
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        {/* Title */}
        <div ref={refFirstDiv} className={`${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>My Skills</p>
          <p className='py-4'>These are all the skills that I think I can do...</p>
        </div>

        {/* Grid Container */}
        <div ref={refSecondDiv} className={`w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ${inViewSecondDiv ? 'slide-up' : 'hidden-initial'}`}>
          {/* Skill Cards */}
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={CSharp} alt="CSharp Logo" className='mx-auto'/>
            <p className='my-4'>C#</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={REACT} alt="REACT Logo" className='mx-auto'/>
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={JavaScript} alt="JavaScript Logo" className='mx-auto'/>
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={HTML} alt="HTML Logo" className='mx-auto'/>
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={CSS} alt="CSS Logo" className='mx-auto'/>
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={DotNet} alt="DotNet Logo" className='mx-auto'/>
            <p className='my-4'>ASP.NET</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={VisualStudio} alt="VisualStudio Logo" className='mx-auto'/>
            <p className='my-4'>Visual Studio</p>
          </div>
          <div className='shadow-md shadow-[#835858] hover:scale-110 duration-500'>
            <img src={VSCode} alt="VSCode Logo" className='mx-auto'/>
            <p className='my-4'>Visual Studio Code</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills