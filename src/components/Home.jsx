import React, { useState, useEffect } from 'react';
import Profile from '../assets/profile_wdog.png';
import ProfileSmall from '../assets/profile_small.png';
import WIP from '../assets/WIP.png';
import { useInView } from 'react-intersection-observer';

export const Home = () => {
  {/* Slide Up Animation Trigger */}
  const { ref: refFirstDiv, inView: inViewFirstDiv } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  {/* Typing Texts Animation */}
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);
  const titles = ['Computer Engineer', 'Software Engineer', 'Certified Foodie', 'Dog Lover'];

  useEffect(() => {
    const type = () => {
      const currentTitle = titles[textIndex];
      const isTyping = !isDeleting;
      const updatedText = isTyping ? currentTitle.substring(0, text.length + 1) : currentTitle.substring(0, text.length - 1);

      setText(updatedText);

      if (isTyping && updatedText === currentTitle) {
        setIsDeleting(true);
        setTypingSpeed(150); // Speed up for deletion
      } 
      else if (!isTyping && updatedText === '') {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTypingSpeed(50); // Slow down for typing
      }
    };

    const timerId = setTimeout(type, typingSpeed);
    return () => clearTimeout(timerId); // Cleanup timeout
  }, [text, isDeleting, textIndex, typingSpeed]);

  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-[#FFF0F0] to-[#EBD4D4]'>

      {/* Container */}
      <div className= 'max-w-screen-1xl mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row'>
        <div ref={refFirstDiv} className={`flex flex-col justify-center h-full ${inViewFirstDiv ? 'slide-up' : 'hidden-initial'}`}>
          <img src={WIP} alt="WIP Image" className='pt-4 pb-4 hidden md:block mx-auto w-[200px]' />
          <img src={ProfileSmall} alt="Profile Image" className='block mx-auto w-[180px] pb-4 md:hidden' />
          <p className='text-2xl md:text-3xl'>Hello, my name's</p>
          <h1 className='text-4xl md:text-7xl font-bold text-[#463333]'>Marifran Malinao</h1>
          <p className='text-2xl md:text-3xl'>I'm a {text}</p>
          <img src={WIP} alt="WIP Image" className='pt-4 pb-4 block mx-auto w-[130px] md:hidden' />
        </div>
        <div>
          <img src={Profile} alt="Profile Image" className='hidden md:block mx-auto w-[650px]' />
        </div>
      </div>
    </div>
  );
};

export default Home;
