import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#EBD4D4] text-[#463333] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='py-4'>Contact me by sending me an email!</p>
            </div>
            <input className='p-2 bg-[#fff0fc]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#fff0fc]'type="text" placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#fff0fc]' name='message' rows='10' placeholder='Message'></textarea>
        </form>
    </div>
  )
}

export default Contact