import React from 'react'
import EGrocery from '../assets/Project_USCCMPC.png'
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
    <div name='projects' className='w-full h-screen bg-[#EBD4D4] text-[#463333]'> 

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            {/* Title */}
            <div ref={refFirstDiv} className={`pb-8 ${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
                <p className='py-6'>Check out some of my recent works</p>
            </div>

            {/* Grid Container */}
            <div ref={refSecondDiv} className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4 ${inViewSecondDiv ? 'slide-up' : 'hidden-initial'}`}>

                {/* Project Cards */}
                <div style={{backgroundImage:`url(${EGrocery})`}} className='shadow-lg shadow-[#835858] group container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects - Card 1*/}
                    <div className='py-12 pr-4 pl-4 text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            USCCMPC E-Grocery Web Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg shadow-[#835858] group container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects - Card 2*/}
                    <div className='py-12 pr-4 pl-4 text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                        COMING SOON!
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='shadow-lg shadow-[#835858] group container rounded-md justify-center items-center mx-auto content-div'>
                    {/* Hover Effects - Card 3*/}
                    <div className='py-12 pr-4 pl-4 text-center opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            COMING SOON!
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Projects