import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#EBD4D4] text-[#463333] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/zbzklyza" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-2xl font-bold inline border-b-4 border-[#EDAAAA] sm:text-4xl'>Contact Me</p>
            </div>
            <input className='p-2 bg-[#ffffff]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ffffff]'type="text" placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#ffffff]' name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white bg-[#463333] hover:bg-[#835858] rounded-md px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact