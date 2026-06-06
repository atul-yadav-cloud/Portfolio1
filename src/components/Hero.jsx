import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      id='home'
      className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#202020] to-[#1a1a1a]'>
      <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between' >

        {/* Left  side Content */}

        <div className='md:w-1/2 mb-10 md:mb-0'>
          <h1 className='text-3xl md:text-5xl font-bold mb-3'>Hi, I'm<span className='text-purple'> Atulll Yadav</span>
          </h1>
          <h2 className='text-lg md:text-3xl font-semibold text-gray-200 mb-6 typewriter'>AWS Engineer | Cloud Associate</h2>
          <p className='text-xl text-gray-300 mb-8'>Cloud Infrastructure Engineer and full-stack developer with hands-on experience in building scalable,
            high-performance web applications using React, Node.js, and modern databases.
            Skilled in designing, developing, and deploying end-to-end solutions on AWS,
            including cloud infrastructure, APIs, and CI/CD pipelines. <br></br>
          <span className='text-lg text-gray-400 mt-2'>
            I'm highly Focused on clean architecture and real-world problem solving, I create reliable,
            production-ready systems from concept to deployment.</span><br></br>
            <a href='#projects'><span className='text-purple-500'>Please Check my all the attached projects! 👇🏻</span></a></p>

          {/*Buttons */}

          <div className='flex space-x-4'>
            <a href='#projects' className='px-6 py-4 bg-purple-700 rounded-lg hover:bg-purple transition hover:scale-102 mt-2'>View Work</a>

            <a href='#contact-us' className='px-6 py-4 border border-purple rounded-lg font-medium hover:bg-purple/20 transition  decoration-purple-300 hover:scale-102 mt-2'>Contact Us</a>
          </div>
        </div>

        {/* Right side image */}

        <div className='md:w-1/2 flex justify-center'>
          <div className='relative w-64 h-64 md:w-80 md:h-80'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-purple-900 opacity-70'>
              <motion.img
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut"
                }}
                className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                src={assets.profileimg} alt="image" />
            </div>
          </div>
        </div>

      </div>

    </motion.div>
  )
}

export default Hero
