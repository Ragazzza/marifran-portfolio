import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook, FaInstagram} from 'react-icons/fa'
import LogoLight from '../assets/logo_light.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
        const handleClick = () =>   setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] z-10 flex justify-between items-center px-4 shadow-md bg-[#463333] text-[#FFF0F0]'>
        <div>
            <Link to="home" smooth={true} duration={500}>
                <img src={LogoLight} alt="Logo Image" style={{width: '80px'}}/>
            </Link>
        </div>
        {/* Menu */}
        <ul className='hidden md:flex'>
            <li className='text-2xl hover:text-[#835858]'>
                <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='text-2xl hover:text-[#835858]'>
                <Link to="experience" smooth={true} duration={500}>Experience</Link>
            </li>
            <li className='text-2xl hover:text-[#835858]'>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='text-2xl hover:text-[#835858]'>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='text-2xl hover:text-[#835858]'>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#463333] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="experience" smooth={true} duration={500}>Experience</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#463333]'>
                    <a className='flex justify-between items-center w-full text-[#FFF0F0]'
                    href='https://www.linkedin.com/in/marifran-malinao-a54b14262/'>
                        LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#463333]'>
                    <a className='flex justify-between items-center w-full text-[#FFF0F0]'
                    href='https://github.com/Ragazzza'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#463333]'>
                    <a className='flex justify-between items-center w-full text-[#FFF0F0]'
                    href='https://www.facebook.com/marifran.l.malinao/'>
                        Facebook <FaFacebook size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#463333]'>
                    <a className='flex justify-between items-center w-full text-[#FFF0F0]'
                    href='https://www.instagram.com/maan_malinao/'>
                        Instagram <FaInstagram size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}   

export default Navbar