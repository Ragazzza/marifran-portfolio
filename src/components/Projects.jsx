import React from 'react'
import EGrocery from '../assets/Project_USCCMPC.png'
import CSharp from '../assets/CSharp.png'
import CSS from '../assets/CSS.png'
import DotNet from '../assets/DotNet_light.png'
import HTML from '../assets/HTML.png'
import JavaScript from '../assets/JavaScript.png'
import { useInView } from 'react-intersection-observer';

const Projects = () => {
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
    <div name='projects' className='w-full h-full bg-[#EBD4D4] text-[#463333] pt-16 pb-16 sm:h-screen'> 

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            {/* Title */}
            <div ref={refFirstDiv} className={`pb-8 ${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
                <p className='text-2xl font-bold inline border-b-4 border-[#EDAAAA] sm:text-4xl'>Projects</p>
            </div>

            {/* Grid Container */}
            <div ref={refSecondDiv} className={`grid sm:grid-cols-1 md:grid-cols-2 gap-4 ${inViewSecondDiv ? 'slide-up' : 'hidden-initial'}`}>

                {/* Project Cards */}
                <div style={{backgroundImage:`url(${EGrocery})`}} className='shadow-lg shadow-[#835858] group container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects - Card 1*/}
                    <div className='pt-8 pr-4 pl-4 text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            USCCMPC E-Grocery Web Application
                        </span>
                        <p className='text-white pt-4'>This project is our final requirement in our CPE Design Course. Our goal was to create a web application with an online ordering web module for 
                        cooperative members and an inventory management module for the staff and admin members.</p>
                        <p className='text-white font-bold pt-4'>NOTE: Domain is currently unavailable since it is being turned over to the client's IT team.</p>
                        <div className='pt-2 flex justify-center'>
                            <img src={DotNet} alt=".NET Logo" className='w-[50px]'/>
                            <img src={CSharp} alt="CSharp Logo" className='w-[50px]'/>
                            <img src={JavaScript} alt="JavaScript Logo" className='w-[50px]'/>
                            <img src={HTML} alt="HTML Logo" className='w-[50px]'/>
                            <img src={CSS} alt="CSS Logo" className='w-[50px]'/>
                        </div>
                        <div className='pt-4 text-center'>
                            <a href='https://usccoopmart-demo.com/lander'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg pointer-events-none opacity-75'>Code</button>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg shadow-[#835858] group container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects - Card 2*/}
                    <div className='py-8 pr-4 pl-4 text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        COMING SOON!
                        </span>
                        <p className='text-white'>Currently working on a new project!</p>
                        <div className='pt-8 text-center'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg pointer-events-none opacity-75'>Demo</button>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-200 text-gray-700 font-bold text-lg pointer-events-none opacity-75'>Code</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Projects