import React from 'react'
import logo from '../images/logo.png'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleView = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className='fixed w-full h-20 flex items-center z-50 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>

        {/* desktop navbar  */}
        <div className="hidden max-w-screen-2xl w-7xl mx-auto px-4 lg:flex items-center justify-between">
                <img src={logo} height={50} width={50} alt="logo" />

                <div className='bg-zinc-700 rounded-md px-3 py-1 flex items-center justify-between space-x-6 shadow-2xl shadow-blue-500/80'>
                    <a href="#home" className='hover:bg-amber-50 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>Home</a>
                    <a href="#about" className='hover:bg-amber-50 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>About</a>
                    <a href="#projects" className='hover:bg-amber-50 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>Work</a>
                </div>

                <a href="https://wa.me/9439978039?text=Hey Vibek!%20your%20portfolio%20looks%20impressive.%20lets%20discuss%20more%20about%20your%20projects!" target='_blank' rel='noreferrer'>
                <button className='bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer text-amber-50 px-4 py-2 rounded-full transition-colors duration-300'>Contact Me</button></a>
        </div>

        {/* Mobile navbar */}
        <div className='lg:hidden max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between'>
            <img src={logo} height={50} width={50} alt="logo" />

            <div className='relative'>
                {isOpen? <XIcon onClick={handleView} className='cursor-pointer'/> : <MenuIcon onClick={handleView}   className='cursor-pointer' />}
            </div>

            {isOpen && 
                <div className='absolute top-20 right-10 bg-zinc-600 rounded-md px-4 py-4 flex flex-col items-center'>
                     <a href="#home" className='hover:bg-zinc-300 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>Home</a>
                    <a href="#about" className='hover:bg-zinc-300 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>About</a>
                    <a href="#projects" className='hover:bg-zinc-300 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>Work</a>
                    <a href="https://wa.me/9439978039?text=Hey Vibek!%20your%20portfolio%20looks%20impressive.%20lets%20discuss%20more%20about%20your%20projects!" target='_blank' rel='noreferrer' className='hover:bg-zinc-300 hover:text-zinc-900 rounded-md transition-colors duration-300 px-4 py-2'>Contact</a>
                </div>
                }

        </div>

    </header>
  )
}

export default Header