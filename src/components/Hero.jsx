import React from 'react'
import profile from '../images/profile.jpg'
import { CircleArrowOutUpRight, GitBranchIcon } from 'lucide-react'

const Hero = () => {
  return (
    <div className='w-full lg:w-7xl mx-auto h-screen px-4 pt-20 lg:pt-24' id='home'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>

            <div className='flex flex-col items-center lg:items-start space-x-4'>
                <div className='flex items-center space-x-4 mb-4'>
                  <img src={profile} alt="" className='rounded-full ' height={40} width={40} />
                  <p className='flex items-center'><span className='text-green-500 text-4xl'>• </span> Available for projects</p>
                </div>
                <h1 className='text-2xl lg:text-4xl text-center lg:text-left italic tracking-wide mb-4 lg:mb-6'>Hi! I am Vibekananda Champati</h1>
                <h1 className='text-4xl lg:text-7xl font-bold text-center lg:text-left'>I build Modern <br /> <span className='bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Scalable </span> 
                
                  Websites </h1>
                <div className='flex items-center space-x-5 mt-5 mb-5'>
                    <a href="https://github.com/champati-v" target='_blank' rel='noreferrer'>
                    <button className='px-3 py-2 bg-transparent border hover:bg-amber-50 cursor-pointer hover:text-zinc-900 rounded-md flex items-center gap-2 transition-colors duration-300'> <GitBranchIcon/> Github</button></a>

                    <a href="https://wa.me/9439978039?text=Hey Vibek!%20your%20portfolio%20looks%20impressive.%20lets%20discuss%20more%20about%20your%20projects!" target='_blank' rel='noreferrer'>
                    <button className='px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer text-amber-50 rounded-md flex items-center gap-2 transition-colors duration-300'> <CircleArrowOutUpRight /> Hire Me</button></a>
                </div>
            </div>

            <div className='mt-8 lg:mt-0'>
              <img src={profile} alt="" className='w-[350px] lg:w-[500px] lg:h-[500px] rounded-full shadow-2xl shadow-blue-500/80' />
            </div>
        </div>
    </div>
  )
}

export default Hero