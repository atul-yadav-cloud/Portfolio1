import { nav } from 'framer-motion/client'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Navbar = () => {

    const [showMenu, setShowMenu] =useState(false);

  return (
    <nav className='fixed w-full z-50 bg-dark-100/10 backdrop-blur-sm py-4 px-8 shadow-2xl'>
      <div className='container mx-auto flex  justify-between items-center'>
        <div>
            <a href='#' className='tex-3xl font-bold text-xl text-white'>Atulll
                <span className='text-purple text-xl'> Yadav</span>
                <div className='w-4 h-4 bg-purple rounded-full'></div>
            </a>
        </div>

        {/* Laptop Button */}

        <div className='hidden md:flex space-x-10'>
            <a href='#home' className='relative text-wihte/80 transition duration-300 hover:text-purple group'>
                <span>Home</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#about' className='relative text-wihte/80 transition duration-300 hover:text-purple group'>
                <span>About</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#skills' className='relative text-wihte/80 transition duration-300 hover:text-purple group'>
                <span>Skills</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#projects' className='relative text-wihte/80 transition duration-300 hover:text-purple group'>
                <span>Projects</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#experience' className='relative text-wihte/80 transition duration-300 hover:text-purple group'>
                <span>Exp</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a href='#contact-us' className='relative text-wihte/80 transition duration-300 hover:text-purple group'>
                <span>Contact Us</span>
                <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
            </a>
        </div>
        
        {/* Mobile Button */}

      <div className='md:hidden'>
        {
            showMenu ?
            <FaXmark onClick={()=>setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> :
            <FaBars onClick={()=>setShowMenu(!showMenu)}  className='text-2xl cursor-pointer' />
        }
        
        
      </div>
      </div>


      {/* Mobile Menus */}


      {
        showMenu &&(
            <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center'>
                <a onClick={()=>setShowMenu(!showMenu)} href='#home' className='relative text-wihte/80 transition duration-300 text-xl hover:text-purple group'>
                <span>Home</span>
            </a>

            <a  onClick={()=>setShowMenu(!showMenu)}href='#about' className='relative text-wihte/80 transition duration-300 text-xl hover:text-purple group'>
                <span>About</span>

            </a>
            <a onClick={()=>setShowMenu(!showMenu)} href='#skills' className='relative text-wihte/80 transition duration-300 text-xl hover:text-purple group'>
                <span>Skills</span>
            </a>

            <a onClick={()=>setShowMenu(!showMenu)} href='#projects' className='relative text-wihte/80 transition duration-300 text-xl hover:text-purple group'>
                <span>Projects</span>

            </a>
            <a onClick={()=>setShowMenu(!showMenu)} href='#experience' className='relative text-wihte/80 transition duration-300 text-xl hover:text-purple group'>
                <span>Experience</span>
            </a>
            
            <a onClick={()=>setShowMenu(!showMenu)} href='#contact-us' className='relative text-wihte/80 transition duration-300 text-xl hover:text-purple group'>
                <span>Contact Us</span>
            </a>
            </div>
        )
      }

    </nav>
  )
}

export default Navbar
